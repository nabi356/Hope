// Script loaded verification
console.log('HOPE App Script Loaded');

const TALENT_CATEGORIES = [
    {
        id: 'music',
        name: 'Music',
        icon: '🎵',
        subcategories: [
            { id: 'singing', name: 'Singing', icon: '🎤' },
            { id: 'guitar', name: 'Guitar', icon: '🎸' },
            { id: 'piano', name: 'Piano', icon: '🎹' },
            { id: 'drums', name: 'Drums', icon: '🥁' },
            { id: 'violin', name: 'Violin', icon: '🎻' },
            { id: 'djmixing', name: 'DJ/Mixing', icon: '🎧' },
            { id: 'saxophone', name: 'Saxophone', icon: '🎷' },
            { id: 'bass', name: 'Bass Guitar', icon: '🎸' },
            { id: 'trumpet', name: 'Trumpet', icon: '📯' },
            { id: 'harmonica', name: 'Harmonica', icon: '🎶' }
        ]
    },
    {
        id: 'visual-arts',
        name: 'Visual Arts',
        icon: '🎨',
        subcategories: [
            { id: 'painting', name: 'Painting', icon: '🎨' },
            { id: 'drawing', name: 'Drawing', icon: '✏️' },
            { id: 'photography', name: 'Photography', icon: '📷' },
            { id: 'sculpture', name: 'Sculpture', icon: '🗿' },
            { id: 'digital-art', name: 'Digital Art', icon: '💻' },
            { id: 'graphic-design', name: 'Graphic Design', icon: '🎭' },
            { id: 'illustration', name: 'Illustration', icon: '🖼️' },
            { id: 'animation', name: 'Animation', icon: '🎬' },
            { id: 'video-editing', name: 'Video Editing', icon: '🎞️' },
            { id: 'calligraphy', name: 'Calligraphy', icon: '✒️' }
        ]
    },
    {
        id: 'performance',
        name: 'Performance',
        icon: '🎭',
        subcategories: [
            { id: 'dancing', name: 'Dancing', icon: '💃' },
            { id: 'acting', name: 'Acting', icon: '🎭' },
            { id: 'standup', name: 'Stand-up Comedy', icon: '😂' },
            { id: 'magic', name: 'Magic', icon: '✨' },
            { id: 'poetry', name: 'Poetry', icon: '📝' },
            { id: 'public-speaking', name: 'Public Speaking', icon: '🎤' },
            { id: 'improv', name: 'Improv', icon: '🎪' },
            { id: 'theatre', name: 'Theatre', icon: '🎬' },
            { id: 'mime', name: 'Mime', icon: '🤐' },
            { id: 'storytelling', name: 'Storytelling', icon: '📖' }
        ]
    },
    {
        id: 'technical',
        name: 'Technical',
        icon: '💻',
        subcategories: [
            { id: 'coding', name: 'Coding', icon: '👨‍💻' },
            { id: 'web-design', name: 'Web Design', icon: '🌐' },
            { id: 'app-dev', name: 'App Development', icon: '📱' },
            { id: 'data-science', name: 'Data Science', icon: '📊' },
            { id: 'machine-learning', name: 'Machine Learning', icon: '🤖' },
            { id: 'cybersecurity', name: 'Cybersecurity', icon: '🔒' },
            { id: 'database', name: 'Database Design', icon: '🗄️' },
            { id: 'ui-ux', name: 'UI/UX Design', icon: '🎨' },
            { id: 'cloud', name: 'Cloud Computing', icon: '☁️' },
            { id: 'devops', name: 'DevOps', icon: '⚙️' }
        ]
    },
    {
        id: 'sports',
        name: 'Sports',
        icon: '⚽',
        subcategories: [
            { id: 'football', name: 'Football', icon: '⚽' },
            { id: 'basketball', name: 'Basketball', icon: '🏀' },
            { id: 'tennis', name: 'Tennis', icon: '🎾' },
            { id: 'swimming', name: 'Swimming', icon: '🏊' },
            { id: 'yoga', name: 'Yoga', icon: '🧘' },
            { id: 'gym', name: 'Fitness', icon: '💪' },
            { id: 'martial-arts', name: 'Martial Arts', icon: '🥋' },
            { id: 'cycling', name: 'Cycling', icon: '🚴' },
            { id: 'rock-climbing', name: 'Rock Climbing', icon: '🧗' },
            { id: 'skateboarding', name: 'Skateboarding', icon: '🛹' }
        ]
    },
    {
        id: 'design',
        name: 'Design & Fashion',
        icon: '👗',
        subcategories: [
            { id: 'fashion-design', name: 'Fashion Design', icon: '👗' },
            { id: 'interior-design', name: 'Interior Design', icon: '🏠' },
            { id: 'ux-design', name: 'UX/UI Design', icon: '🎨' },
            { id: 'product-design', name: 'Product Design', icon: '🛠️' },
            { id: 'industrial-design', name: 'Industrial Design', icon: '⚙️' },
            { id: 'fashion-styling', name: 'Fashion Styling', icon: '👔' },
            { id: '3d-design', name: '3D Design', icon: '🎯' },
            { id: 'web-design', name: 'Web Design', icon: '🌐' },
            { id: 'packaging', name: 'Packaging Design', icon: '📦' }
        ]
    },
    {
        id: 'writing',
        name: 'Writing',
        icon: '✍️',
        subcategories: [
            { id: 'creative-writing', name: 'Creative Writing', icon: '📝' },
            { id: 'journalism', name: 'Journalism', icon: '📰' },
            { id: 'copywriting', name: 'Copywriting', icon: '✍️' },
            { id: 'screenwriting', name: 'Screenwriting', icon: '🎬' },
            { id: 'content-creation', name: 'Content Creation', icon: '📱' },
            { id: 'blogging', name: 'Blogging', icon: '📖' },
            { id: 'poetry', name: 'Poetry', icon: '📜' },
            { id: 'technical-writing', name: 'Technical Writing', icon: '📚' }
        ]
    },
    {
        id: 'business',
        name: 'Business & Marketing',
        icon: '💼',
        subcategories: [
            { id: 'digital-marketing', name: 'Digital Marketing', icon: '📈' },
            { id: 'seo', name: 'SEO', icon: '🔍' },
            { id: 'social-media', name: 'Social Media Marketing', icon: '📱' },
            { id: 'brand-strategy', name: 'Brand Strategy', icon: '🎯' },
            { id: 'entrepreneurship', name: 'Entrepreneurship', icon: '🚀' },
            { id: 'project-management', name: 'Project Management', icon: '📊' },
            { id: 'sales', name: 'Sales', icon: '💰' },
            { id: 'business-dev', name: 'Business Development', icon: '💼' },
            { id: 'marketing-analytics', name: 'Marketing Analytics', icon: '📊' }
        ]
    },
    {
        id: 'language',
        name: 'Languages',
        icon: '🌍',
        subcategories: [
            { id: 'spanish', name: 'Spanish', icon: '🇪🇸' },
            { id: 'french', name: 'French', icon: '🇫🇷' },
            { id: 'german', name: 'German', icon: '🇩🇪' },
            { id: 'mandarin', name: 'Mandarin', icon: '🇨🇳' },
            { id: 'japanese', name: 'Japanese', icon: '🇯🇵' },
            { id: 'arabic', name: 'Arabic', icon: '🇸🇦' },
            { id: 'english', name: 'English', icon: '🇬🇧' },
            { id: 'hindi', name: 'Hindi', icon: '🇮🇳' }
        ]
    }
];

// Base URL for API calls
const API_BASE_URL = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1'
    ? 'http://localhost:3000/api'
    : 'https://hope-backend-445i.onrender.com/api';

let selectedTalents = [];
let currentUser = null;
let currentRadiusKm = 20;
let map = null;
let markers = [];

// Wrapper for API calls
async function apiCall(endpoint, method = 'GET', body = null) {
    const headers = { 'Content-Type': 'application/json' };
    const config = { method, headers };
    if (body) config.body = JSON.stringify(body);

    try {
        const response = await fetch(`${API_BASE_URL}${endpoint}`, config);
        const data = await response.json();
        if (!response.ok) throw new Error(data.error || 'API Error');
        return data;
    } catch (error) {
        console.error('API Call Failed:', error);
        throw error;
    }
}

// User location fallback if not provided (DEPRECATED - Replaced by required Nominatim Check)
// const FALLBACK_LOCATION = { lat: 34.0522, lng: -118.2437 }; // Default LA

function showPage(pageId) {
    try {
        console.log('Attempting to show page:', pageId);
        document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
        const pageElement = document.getElementById(pageId);
        if (!pageElement) {
            console.error('Page element not found:', pageId);
            return;
        }
        pageElement.classList.add('active');
        console.log('Successfully showed page:', pageId);

        if (pageId === 'talents-page') renderTalents();
        if (pageId === 'bio-page') setupBioCounter();
    } catch (error) {
        console.error('Error in showPage:', error);
    }
}

async function handleRegister() {
    console.log('handleRegister called');
    const name = document.getElementById('register-name').value.trim();
    const email = document.getElementById('register-email').value.trim();
    const password = document.getElementById('register-password').value.trim();
    const errorBox = document.getElementById('register-error');

    errorBox.classList.add('hidden');
    errorBox.textContent = '';

    if (!name || !email || !password) {
        errorBox.textContent = 'Please fill in all fields';
        errorBox.classList.remove('hidden');
        return;
    }

    try {
        const data = await apiCall('/register', 'POST', { name, email, password });

        localStorage.setItem('token', data.token);
        localStorage.setItem('currentUserId', data.user._id);
        currentUser = data.user;

        document.getElementById('register-name').value = '';
        document.getElementById('register-email').value = '';
        document.getElementById('register-password').value = '';
        errorBox.classList.add('hidden');

        showPage('welcome-page');
    } catch (error) {
        errorBox.textContent = error.message || 'An error occurred during registration. Please try again.';
        errorBox.classList.remove('hidden');
        console.error('Registration error:', error);
    }
}

async function handleLogin() {
    console.log('handleLogin called');
    try {
        const email = document.getElementById('login-email').value.trim();
        const password = document.getElementById('login-password').value.trim();
        const errorBox = document.getElementById('login-error');

        errorBox.classList.add('hidden');
        errorBox.textContent = '';

        if (!email || !password) {
            errorBox.textContent = 'Please fill in all fields';
            errorBox.classList.remove('hidden');
            return;
        }

        const data = await apiCall('/login', 'POST', { email, password });

        localStorage.setItem('token', data.token);
        localStorage.setItem('currentUserId', data.user._id);
        currentUser = data.user;

        document.getElementById('login-email').value = '';
        document.getElementById('login-password').value = '';
        errorBox.classList.add('hidden');

        // Determine next page setup
        if (!currentUser.talents || currentUser.talents.length === 0) {
            showPage('welcome-page');
        } else if (!currentUser.bio) {
            showPage('bio-page');
        } else if (!currentUser.location || !currentUser.location.address) {
            showPage('location-page');
        } else {
            showPage('dashboard-page');
            loadDashboard();
        }
    } catch (error) {
        console.error('Login error:', error);
        const errorBox = document.getElementById('login-error');
        errorBox.textContent = error.message || 'Invalid email or password.';
        errorBox.classList.remove('hidden');
    }
}

function demoLogin() {
    // Create a demo user
    const demoUser = {
        _id: 'demo-user-' + Date.now(),
        email: 'demo@hope.com',
        name: 'Demo User',
        password: 'demo123',
        talents: [
            { id: 'guitar', name: 'Guitar' },
            { id: 'singing', name: 'Singing' }
        ],
        bio: 'I love music and want to collaborate with talented musicians!',
        age: 25,
        collaborators: [],
        projects: [],
        rating: 4.5
    };

    // Save demo user
    const users = getAllUsers();
    const existingDemo = users.find(u => u.email === 'demo@hope.com');
    if (!existingDemo) {
        saveUser(demoUser);
    }

    // Login with demo account
    const token = btoa(JSON.stringify({ userId: demoUser._id, email: demoUser.email }));
    localStorage.setItem('token', token);
    localStorage.setItem('currentUserId', demoUser._id);

    currentUser = { id: demoUser._id, email: demoUser.email, name: demoUser.name };

    // Go to dashboard
    showPage('dashboard-page');
    loadDashboard();
}

function renderTalents() {
    const container = document.getElementById('talents-container');
    container.innerHTML = TALENT_CATEGORIES.map(category => `
        <div class="category-section">
            <div class="category-header">
                <div class="category-icon">${category.icon}</div>
                <div class="category-name">${category.name}</div>
            </div>
            <div class="subcategory-grid">
                ${category.subcategories.map(talent => `
                    <div class="talent-wrapper" style="display:flex; flex-direction:column; gap:0.5rem;">
                        <button class="talent-btn" id="btn-${talent.id}" onclick="toggleTalent('${talent.id}', '${talent.name}', this)">
                            <div class="talent-icon">${talent.icon}</div>
                            <div class="talent-name">${talent.name}</div>
                        </button>
                        <div class="talent-intents hidden" id="intent-${talent.id}" style="display:flex; justify-content:center; gap:0.5rem; font-size: 0.8rem;">
                            <label style="cursor:pointer; display:flex; align-items:center; gap:0.2rem;"><input type="radio" name="intent-${talent.id}" value="train" onchange="setTalentIntent('${talent.id}', '${talent.name}', 'train')"> 🚀 Train</label>
                            <label style="cursor:pointer; display:flex; align-items:center; gap:0.2rem;"><input type="radio" name="intent-${talent.id}" value="learn" onchange="setTalentIntent('${talent.id}', '${talent.name}', 'learn')"> 📚 Learn</label>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    `).join('');
}

function toggleTalent(id, name, btn) {
    const intentDiv = document.getElementById(`intent-${id}`);
    const isSelected = btn.classList.contains('selected');

    if (isSelected) {
        // Deselect
        selectedTalents = selectedTalents.filter(t => t.id !== id);
        btn.classList.remove('selected');
        intentDiv.classList.add('hidden');

        // Uncheck radios
        const radios = document.getElementsByName(`intent-${id}`);
        radios.forEach(r => r.checked = false);
    } else {
        // Expand to ask intent
        btn.classList.add('selected');
        intentDiv.classList.remove('hidden');
    }
    updateTalentCounter();
}

function setTalentIntent(id, name, intent) {
    const existing = selectedTalents.find(t => t.id === id);
    if (existing) {
        existing.intent = intent;
    } else {
        selectedTalents.push({ id, name, intent });
    }
    updateTalentCounter();
}

function updateTalentCounter() {
    const validCount = selectedTalents.filter(t => t.intent).length;
    document.getElementById('talent-count').textContent = `${validCount} skills fully configured`;
    document.getElementById('continue-btn').disabled = validCount === 0;
}

function setupBioCounter() {
    const bioInput = document.getElementById('user-bio');
    const charCount = document.getElementById('char-count');
    bioInput.oninput = () => {
        charCount.textContent = `${bioInput.value.length}/300 characters`;
    };
}

async function finishProfileSetup(location) {
    const ageInput = document.getElementById('user-age');
    const bioInput = document.getElementById('user-bio');

    const age = ageInput ? parseInt(ageInput.value) : null;
    const bio = bioInput ? bioInput.value : '';

    const updateData = { age, bio, talents: selectedTalents, location: location };

    const data = await apiCall(`/user/${currentUser._id || currentUser.id}`, 'PUT', updateData);
    currentUser = data.user;

    showPage('dashboard-page');
    loadDashboard();
}

let mapDataLoading = false;
let globalUsers = [];
let globalEvents = [];

async function loadDashboard() {
    if (!currentUser) return;

    // Refresh user data
    try {
        const data = await apiCall(`/user/${currentUser._id || currentUser.id}`);
        currentUser = data.user;
    } catch (e) {
        console.error(e);
    }

    updateProfileDisplay();

    // Load Maps
    initMap(currentUser.location);
    await fetchNearbyData(currentUser.location.lat, currentUser.location.lng, currentRadiusKm);

    // Polling for notification red dots
    checkNotifications();
}

function initMap(centerLoc) {
    if (!map) {
        map = L.map('nearby-map').setView([centerLoc.lat, centerLoc.lng], 12);
        L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
            subdomains: 'abcd',
            maxZoom: 20
        }).addTo(map);

        // Add self marker
        L.marker([centerLoc.lat, centerLoc.lng], {
            icon: L.divIcon({
                className: 'custom-div-icon',
                html: "<div style='background-color:#ec4899; color:white; border-radius:50%; width:30px; height:30px; display:flex; align-items:center; justify-content:center; border:2px solid white;'>You</div>",
                iconSize: [30, 30],
                iconAnchor: [15, 15]
            })
        }).addTo(map).bindPopup('You are here');
    } else {
        map.setView([centerLoc.lat, centerLoc.lng], 12);
    }
}

async function updateRadius(val) {
    currentRadiusKm = parseInt(val);
    document.getElementById('radius-val').textContent = currentRadiusKm;

    if (currentUser?.location && !mapDataLoading) {
        mapDataLoading = true;
        await fetchNearbyData(currentUser.location.lat, currentUser.location.lng, currentRadiusKm);
        mapDataLoading = false;
    }
}

async function fetchNearbyData(lat, lng, radiusKm) {
    try {
        const currentUserId = currentUser._id || currentUser.id;
        const data = await apiCall(`/nearby?lat=${lat}&lng=${lng}&radiusKm=${radiusKm}&currentUserId=${currentUserId}`);

        // Clear old markers (except 'You')
        markers.forEach(m => map.removeLayer(m));
        markers = [];

        globalUsers = data.users || [];
        globalEvents = data.events || [];

        renderUsers(globalUsers);
        renderEvents(globalEvents);
        renderChallenges(data.challenges);

    } catch (error) {
        console.error('Error fetching nearby data', error);
    }
}

function renderTalentBadges(talents) {
    if (!talents || talents.length === 0) return '<span style="color: #6b7280; font-size: 0.875rem;">Discovering talents</span>';
    return talents.map(t => {
        if (t.intent === 'train') {
            return `<span style="display:inline-block; font-size:0.75rem; padding:0.15rem 0.5rem; background:rgba(236,72,153,0.1); color:#ec4899; border:1px solid rgba(236,72,153,0.3); border-radius:12px;">🚀 ${t.name}</span>`;
        } else if (t.intent === 'learn') {
            return `<span style="display:inline-block; font-size:0.75rem; padding:0.15rem 0.5rem; background:rgba(168,85,247,0.1); color:#a855f7; border:1px solid rgba(168,85,247,0.3); border-radius:12px;">📚 ${t.name}</span>`;
        } else {
            return `<span style="display:inline-block; font-size:0.75rem; padding:0.15rem 0.5rem; background:rgba(168,85,247,0.1); color:#a855f7; border:1px solid rgba(168,85,247,0.3); border-radius:12px;">${t.name}</span>`;
        }
    }).join('');
}

function renderUsers(users) {
    const displayUsers = users.slice(0, 6);
    document.getElementById('users-list').innerHTML = displayUsers.map(u => `
        <div class="user-card">
            <div class="user-header">
                <div class="user-avatar">${u.avatar || '👤'}</div>
                <div>⭐ ${u.rating ? u.rating.toFixed(1) : '0.0'}</div>
            </div>
            <h3>${u.name}</h3>
            <div style="display:flex; flex-wrap:wrap; gap:0.25rem; margin-top:0.25rem; justify-content:center;">${renderTalentBadges(u.talents)}</div>
            <p style="color: #6b7280; font-size: 0.875rem; margin-top: 0.5rem;">${u.distance ? u.distance.toFixed(1) + ' km away' : 'Near you'}</p>
            <button class="btn-primary" style="margin-top: 1rem; width: 100%; border-radius: 8px;" onclick="openChatWithUser('${u._id}', '${u.name}', '${u.avatar || '👤'}')">💬 Connect</button>
            <div style="display: flex; gap: 0.5rem; margin-top: 0.5rem;">
                <button class="btn-primary" style="flex: 1; padding: 0.5rem; border-radius: 8px; background: linear-gradient(135deg, #ec4899 0%, #a855f7 100%); border: none;" onclick="requestMatch('${u._id}')">💖 Match</button>
                <button class="btn-secondary" style="flex: 1; padding: 0.5rem; border-radius: 8px; border: 1px solid #8b5cf6; color: #8b5cf6;" onclick="requestCollab('${u._id}')">🤝 Collab</button>
            </div>
        </div>
    `).join('');

    // Add map markers
    users.forEach(u => {
        if (u.location) {
            const marker = L.marker([u.location.lat, u.location.lng], {
                icon: L.divIcon({
                    className: 'custom-div-icon',
                    html: `<div style='background-color:#8b5cf6; border-radius:50%; width:30px; height:30px; display:flex; align-items:center; justify-content:center; border:2px solid white;'>${u.avatar || '👤'}</div>`,
                    iconSize: [30, 30]
                })
            }).addTo(map).bindPopup(`<b>${u.name}</b><div style="display:flex; flex-wrap:wrap; gap:0.25rem; margin-top:0.25rem;">${renderTalentBadges(u.talents)}</div>`);
            markers.push(marker);
        }
    });
}

function renderEvents(events) {
    const now = new Date();
    const displayEvents = events.slice(0, 6);

    document.getElementById('events-list').innerHTML = displayEvents.map((e, index) => {
        // Expiration Logic
        let isExpired = false;
        if (e.registrationEndDate && new Date(e.registrationEndDate) < now) isExpired = true;
        if (e.date && new Date(e.date) < now) isExpired = true;

        const feeDisplay = e.entranceFee ? `<p style="color: #34d399; font-weight: bold; margin-top: 0.25rem;">Fee: ${e.entranceFee}</p>` : '';
        const achievementsDisplay = e.achievements ? `<p style="color: #a855f7; font-size: 0.875rem; margin-top: 0.25rem;">🏆 ${e.achievements}</p>` : '';
        const regEndDisplay = e.registrationEndDate ? `<p style="color: #fca5a5; font-size: 0.75rem;">Register By: ${new Date(e.registrationEndDate).toLocaleDateString()}</p>` : '';

        let intentBadge = '';
        if (e.intent) {
            if (e.intent === 'training') intentBadge = '<span style="display:inline-block; font-size:0.75rem; padding:0.15rem 0.5rem; background:rgba(236,72,153,0.1); color:#ec4899; border:1px solid rgba(236,72,153,0.3); border-radius:12px; margin-top:0.25rem;">🚀 Training</span>';
            else if (e.intent === 'learning') intentBadge = '<span style="display:inline-block; font-size:0.75rem; padding:0.15rem 0.5rem; background:rgba(168,85,247,0.1); color:#a855f7; border:1px solid rgba(168,85,247,0.3); border-radius:12px; margin-top:0.25rem;">📚 Learning</span>';
            else intentBadge = '<span style="display:inline-block; font-size:0.75rem; padding:0.15rem 0.5rem; background:rgba(52,211,153,0.1); color:#34d399; border:1px solid rgba(52,211,153,0.3); border-radius:12px; margin-top:0.25rem;">🤝 Collab</span>';
        }

        let actionButton = isExpired
            ? `<button class="btn-primary" style="margin-top: 1rem; background: #4b5563; color: #9ca3af; cursor: not-allowed;" disabled>Expired</button>`
            : `<button class="btn-primary" style="margin-top: 1rem; background: white; color: #7c3aed;" onclick="openEventRegistration('${e._id}', '${e.name}')">Join Event</button>`;

        if (currentUser && e.creatorId === (currentUser._id || currentUser.id)) {
            actionButton += `<button class="btn-secondary" style="margin-top: 0.5rem; width: 100%; border: 1px solid #ef4444; color: #ef4444; padding: 0.5rem;" onclick="deleteEvent('${e._id}')">🗑️ Delete Event</button>`;
        }

        return `
        <div class="event-card" style="${isExpired ? 'opacity: 0.6;' : ''}">
            <div class="event-image">${e.image || '🎟️'}</div>
            <div style="display: flex; justify-content: space-between; align-items: start;">
                <h3>${e.name}</h3>
                ${intentBadge}
            </div>
            ${feeDisplay}
            <p style="margin-top: 0.25rem;">📅 ${e.date ? new Date(e.date).toLocaleDateString() : 'TBA'} | 📍 ${e.location?.address || 'Local'}</p>
            ${regEndDisplay}
            ${achievementsDisplay}
            <p style="color: rgba(255,255,255,0.7); font-size: 0.875rem; margin-top: 0.5rem;">${e.distance ? e.distance.toFixed(1) + ' km away' : ''}</p>
            ${actionButton}
        </div>
        `;
    }).join('');

    // Add event markers
    events.forEach(e => {
        if (e.location) {
            const marker = L.marker([e.location.lat, e.location.lng], {
                icon: L.divIcon({
                    className: 'custom-div-icon',
                    html: `<div style='background-color:#10b981; border-radius:50%; width:24px; height:24px; border:2px solid white;'></div>`,
                    iconSize: [24, 24]
                })
            }).addTo(map).bindPopup(`<b>Event: ${e.name}</b>`);
            markers.push(marker);
        }
    });
}

function renderChallenges(challenges) {
    document.getElementById('challenges-list').innerHTML = challenges.map((c, index) => {
        let actionButton = `<button class="btn-primary" style="margin-top: 1rem;" onclick="openChallengeRegistration('${c._id}', '${c.name}')">Enter Challenge</button>`;

        if (currentUser && c.creatorId === (currentUser._id || currentUser.id)) {
            actionButton += `<button class="btn-secondary" style="margin-top: 0.5rem; width: 100%; border: 1px solid #ef4444; color: #ef4444; padding: 0.5rem;" onclick="deleteChallenge('${c._id}')">🗑️ Delete Challenge</button>`;
        }

        return `
        <div class="challenge-card">
            <h3>${c.name}</h3>
            <p style="color: #34d399; font-size: 1.5rem; font-weight: bold;">${c.prize}</p>
            ${actionButton}
        </div>
        `;
    }).join('');
}

async function deleteChallenge(challengeId) {
    if (!currentUser) return;

    if (confirm("Are you sure you want to delete this challenge? This cannot be undone.")) {
        try {
            const currentUserId = currentUser._id || currentUser.id;
            await apiCall(`/challenges/${challengeId}?currentUserId=${currentUserId}`, 'DELETE');

            alert("Challenge deleted successfully!");
            loadDashboard(); // Render the UI actively without the deleted file
        } catch (e) {
            console.error("Failed to delete challenge:", e);
            alert(e.message || "Failed to delete challenge.");
        }
    }
}

function logout() {
    localStorage.clear();
    currentUser = null;
    selectedTalents = [];
    showPage('login-page');
}

// Profile & Modal Functions
function calculateProfileCompletion(user) {
    if (!user) return 0;
    let score = 0;
    if (user.name) score += 10;
    if (user.email) score += 10;
    if (user.bio && typeof user.bio === 'string' && user.bio.trim() !== '') score += 20;
    if (user.talents && user.talents.length > 0) score += 20;
    if (user.age) score += 10;
    if (user.location && user.location.lat) score += 20;
    if (user.avatar && user.avatar !== '👤') score += 10;
    return Math.min(100, score);
}

async function updateProfileDisplay() {
    if (!currentUser) return;

    try {
        const data = await apiCall(`/user/${currentUser._id || currentUser.id}`);
        const user = data.user;

        if (user) {
            document.getElementById('profile-name').textContent = user.name;
            document.getElementById('profile-email').textContent = user.email;

            // Handle Avatar Display
            const avatarContainer = document.getElementById('main-profile-avatar');
            const placeholder = document.getElementById('avatar-placeholder');
            if (avatarContainer) {
                if (user.avatar && user.avatar.startsWith('data:image')) {
                    avatarContainer.style.backgroundImage = `url(${user.avatar})`;
                    if (placeholder) placeholder.style.display = 'none';
                } else {
                    avatarContainer.style.backgroundImage = 'none';
                    if (placeholder) {
                        placeholder.style.display = 'block';
                        placeholder.textContent = user.avatar || '👤';
                    }
                }
            }

            document.getElementById('stats-talents').textContent = user.talents ? user.talents.length : 0;
            document.getElementById('stats-collaborators').textContent = user.collaborators ? user.collaborators.length : 0;
            document.getElementById('stats-projects').textContent = user.projects ? user.projects.length : 0;
            document.getElementById('stats-rating').textContent = user.rating ? user.rating.toFixed(1) : '0.0';

            const completion = calculateProfileCompletion(user);
            document.getElementById('completion-percentage').textContent = `${completion}% Complete`;
            document.getElementById('completion-bar').style.width = `${completion}%`;

            const talentsDisplay = document.getElementById('user-talents-display');
            if (user.talents && user.talents.length > 0) {
                talentsDisplay.innerHTML = renderTalentBadges(user.talents);
            } else {
                talentsDisplay.innerHTML = '<p style="color: #6b7280;">No talents added yet</p>';
            }
        }
    } catch (e) {
        console.error("Profile update failed", e);
    }
}

// Avatar Upload & Zoom
function uploadAvatarImage(event) {
    const file = event.target.files[0];
    if (!file) return;

    if (file.size > 2 * 1024 * 1024) { // 2MB limit
        alert('File is too large. Please select an image under 2MB.');
        return;
    }

    const reader = new FileReader();
    reader.onload = async function (e) {
        const base64Image = e.target.result;
        try {
            const updateData = { avatar: base64Image };
            const data = await apiCall(`/user/${currentUser._id || currentUser.id}`, 'PUT', updateData);
            currentUser = data.user;
            updateProfileDisplay();
            alert('Profile picture updated successfully!');
        } catch (error) {
            console.error('Failed to upload image', error);
            alert('Failed to update profile picture.');
        }
    };
    reader.readAsDataURL(file);
}

function zoomAvatar() {
    if (!currentUser || !currentUser.avatar) return;

    // Check if avatar is an image vs an emoji
    const isImage = currentUser.avatar.startsWith('data:image');
    if (!isImage) return;

    const overlay = document.getElementById('avatar-zoom-overlay');
    const img = document.getElementById('zoomed-avatar-img');
    img.src = currentUser.avatar;
    overlay.classList.remove('hidden');
}

function closeEditModal() {
    document.getElementById('edit-modal').classList.add('hidden');
}

async function showTalentsModal() {
    await renderModalTalents();
    document.getElementById('talents-modal').classList.remove('hidden');
}

function closeTalentsModal() {
    document.getElementById('talents-modal').classList.add('hidden');
}

async function renderModalTalents() {
    try {
        const data = await apiCall(`/user/${currentUser._id || currentUser.id}`);
        const user = data.user;
        const currentTalents = user ? user.talents || [] : [];

        selectedTalents = [...currentTalents];

        const container = document.getElementById('modal-talents-container');
        container.innerHTML = TALENT_CATEGORIES.map(category => `
            <div class="category-section">
                <div class="category-header">
                    <div class="category-icon">${category.icon}</div>
                    <div class="category-name">${category.name}</div>
                </div>
                <div class="subcategory-grid">
                    ${category.subcategories.map(talent => `
                        <button class="talent-btn ${currentTalents.find(t => t.id === talent.id) ? 'selected' : ''}" 
                                onclick="toggleModalTalent('${talent.id}', '${talent.name}', this)">
                            <div class="talent-icon">${talent.icon}</div>
                            <div class="talent-name">${talent.name}</div>
                        </button>
                    `).join('')}
                </div>
            </div>
        `).join('');

        document.getElementById('modal-talent-count').textContent = `${selectedTalents.length} skills selected`;
    } catch (e) {
        console.error("Failed to render modal talents", e);
    }
}

function toggleModalTalent(id, name, btn) {
    const talent = selectedTalents.find(t => t.id === id);
    if (talent) {
        selectedTalents = selectedTalents.filter(t => t.id !== id);
        btn.classList.remove('selected');
    } else {
        selectedTalents.push({ id, name });
        btn.classList.add('selected');
    }
    document.getElementById('modal-talent-count').textContent = `${selectedTalents.length} skills selected`;
}

async function saveModalTalents() {
    try {
        const updateData = { talents: selectedTalents };
        const data = await apiCall(`/user/${currentUser._id || currentUser.id}`, 'PUT', updateData);
        currentUser = data.user;

        closeTalentsModal();
        updateProfileDisplay();
    } catch (e) {
        console.error("Failed to save talents", e);
    }
}

function showEditModal() {
    if (!currentUser) return;
    document.getElementById('edit-name').value = currentUser.name || '';
    document.getElementById('edit-age').value = currentUser.age || '';
    document.getElementById('edit-bio').value = currentUser.bio || '';

    // Update char count
    const bioLength = currentUser.bio ? currentUser.bio.length : 0;
    document.getElementById('edit-char-count').textContent = `${bioLength}/300 characters`;

    document.getElementById('edit-modal').classList.remove('hidden');
}

function closeEditModal() {
    document.getElementById('edit-modal').classList.add('hidden');
}

async function saveProfileChanges() {
    const name = document.getElementById('edit-name').value;
    const age = document.getElementById('edit-age').value;
    const bio = document.getElementById('edit-bio').value;

    if (!name) {
        alert('Please enter your name');
        return;
    }

    try {
        const updateData = {
            name: name,
            age: age ? parseInt(age) : null,
            bio: bio
        };
        const data = await apiCall(`/user/${currentUser._id || currentUser.id}`, 'PUT', updateData);
        currentUser = data.user;

        closeEditModal();
        updateProfileDisplay();
    } catch (e) {
        console.error("Failed to save profile changes", e);
    }
}

// Check auth on load
window.onload = async () => {
    // Initialize standard storage or preferences here if needed.

    const token = localStorage.getItem('token');
    const currentUserId = localStorage.getItem('currentUserId');

    if (token && currentUserId) {
        // Load user data from Server
        try {
            const data = await apiCall(`/user/${currentUserId}`);
            const user = data.user;
            if (user) {
                currentUser = user;
                if (!currentUser.talents || currentUser.talents.length === 0) {
                    showPage('welcome-page');
                } else if (!currentUser.bio) {
                    showPage('bio-page');
                } else if (!currentUser.location || !currentUser.location.address) {
                    showPage('location-page');
                } else {
                    showPage('dashboard-page');
                    loadDashboard();
                }
            } else {
                logout();
            }
        } catch (e) {
            console.error("Session invalid or server down", e);
            logout();
        }
    } else {
        showPage('login-page');
    }
};

/* Profile Modal Functions */
async function showProfileModal() {
    if (!currentUser) return;

    try {
        const data = await apiCall(`/user/${currentUser._id || currentUser.id}`);
        const user = data.user;

        if (user) {
            document.getElementById('modal-profile-name').textContent = user.name;
            document.getElementById('modal-profile-email').textContent = user.email;

            document.getElementById('modal-talents-count').textContent = user.talents ? user.talents.length : 0;
            document.getElementById('modal-collaborators-count').textContent = user.collaborators ? user.collaborators.length : 0;
            document.getElementById('modal-projects-count').textContent = user.projects ? user.projects.length : 0;
            document.getElementById('modal-rating-count').textContent = user.rating ? user.rating.toFixed(1) : '0.0';

            const completion = calculateProfileCompletion(user);
            document.getElementById('modal-completion-text').textContent = `${completion}%`;
            document.getElementById('modal-completion-bar').style.width = `${completion}%`;

            const talentsList = document.getElementById('modal-talents-list');
            if (user.talents && user.talents.length > 0) {
                talentsList.innerHTML = renderTalentBadges(user.talents);
            } else {
                talentsList.innerHTML = '<span style="color: #6b7280; font-size: 0.875rem;">No talents added yet</span>';
            }

            document.getElementById('profile-modal-overlay').classList.remove('hidden');
        }
    } catch (e) {
        console.error("Failed to load profile modal", e);
    }
}

function closeProfileModal() {
    document.getElementById('profile-modal-overlay').classList.add('hidden');
}

// Close modal when clicking outside
document.addEventListener('click', function (event) {
    const overlay = document.getElementById('profile-modal-overlay');
    if (overlay && event.target === overlay) {
        closeProfileModal();
    }
});

// Close modal with Escape key
document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
        closeProfileModal();
    }
});

// Create Event Logic
function openCreateEventModal() {
    if (!currentUser) return alert('Please login to create an event');
    document.getElementById('create-event-overlay').classList.remove('hidden');
}

function closeCreateEventModal() {
    document.getElementById('create-event-overlay').classList.add('hidden');
    // Clear form
    document.getElementById('create-event-name').value = '';
    document.getElementById('create-event-date').value = '';
    document.getElementById('create-event-end-date').value = '';
    document.getElementById('create-event-fee').value = '';
    document.getElementById('create-event-location').value = '';
    document.getElementById('create-event-achievements').value = '';
    document.getElementById('create-event-desc').value = '';
}

async function submitCreateEvent() {
    const name = document.getElementById('create-event-name').value;
    const date = document.getElementById('create-event-date').value;
    const regEndDate = document.getElementById('create-event-end-date').value;
    const fee = document.getElementById('create-event-fee').value;
    const locationStr = document.getElementById('create-event-location').value;
    const intent = document.getElementById('create-event-intent').value;
    const achievements = document.getElementById('create-event-achievements').value;
    const desc = document.getElementById('create-event-desc').value;

    if (!name || !date || !regEndDate || !fee || !locationStr || !desc) {
        return alert("Please fill out all required fields marked with *");
    }

    try {
        // Basic OpenStreetMap Geocoding
        let lat = currentUser.location ? currentUser.location.lat : 0;
        let lng = currentUser.location ? currentUser.location.lng : 0;

        try {
            const geoRes = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(locationStr)}`);
            const geoData = await geoRes.json();
            if (geoData && geoData.length > 0) {
                lat = parseFloat(geoData[0].lat);
                lng = parseFloat(geoData[0].lon);
            }
        } catch (e) {
            console.warn("Geocoding failed, using user's location fallback");
        }

        const payload = {
            name: name,
            date: date,
            registrationEndDate: regEndDate,
            entranceFee: fee,
            intent: intent,
            location: {
                address: locationStr,
                lat: lat,
                lng: lng
            },
            achievements: achievements,
            description: desc,
            creatorId: currentUser._id || currentUser.id
        };

        const result = await apiCall('/events', 'POST', payload);
        if (result.success) {
            alert("Event created successfully!");
            closeCreateEventModal();
            loadDashboard(); // Refresh UI
        }
    } catch (error) {
        console.error("Created event failed", error);
        alert("Failed to create event. Please try again later.");
    }
}

document.addEventListener('DOMContentLoaded', function () {
    if (document.getElementById('welcome-page')) {
        showPage('welcome-page');
    }
});
/* ============= CHAT FUNCTIONALITY ============= */

let currentChatUser = null;

async function openChatWithUser(userId, userName, userAvatar) {
    currentChatUser = {
        id: userId,
        name: userName,
        avatar: userAvatar
    };

    // Open the chat history page
    openChatHistory();

    document.getElementById('chat-details-title').textContent = `Chat with ${userName}`;
    document.getElementById('chat-details-empty').classList.add('hidden');
    document.getElementById('chat-details-active').classList.remove('hidden');

    await loadChatMessages();

    // Auto-focus input after slight delay for transition
    setTimeout(() => {
        document.getElementById('chat-details-input').focus();
    }, 100);
}

function backToDashboard() {
    showPage('dashboard-page');
    currentChatUser = null;
}

async function loadChatMessages() {
    if (!currentChatUser) return;

    try {
        const currentUserId = currentUser._id || currentUser.id;
        const data = await apiCall(`/messages/${currentChatUser.id}?currentUserId=${currentUserId}`);

        const messagesContainer = document.getElementById('chat-details-messages');

        if (!data.messages || data.messages.length === 0) {
            messagesContainer.innerHTML = `<div class="text-center" style="color: #9ca3af; margin-top: 2rem;">Start the conversation with ${currentChatUser.name}!</div>`;
            return;
        }

        messagesContainer.innerHTML = data.messages.map(msg => {
            const isMe = msg.senderId === currentUserId;
            return `
                <div class="chat-message ${isMe ? 'sent' : 'received'}">
                    ${msg.text}
                </div>
            `;
        }).join('');

        // Scroll to bottom
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    } catch (e) {
        console.error('Failed to load messages', e);
        document.getElementById('chat-details-messages').innerHTML = `<div class="text-center" style="color: #ef4444; margin-top: 2rem;">Error loading chat history.</div>`;
    }
}

async function sendDetailsChatMessage() {
    if (!currentChatUser) return;

    const input = document.getElementById('chat-details-input');
    const message = input.value.trim();

    if (!message) return;

    // Temporarily add to UI for instant feedback
    const messagesContainer = document.getElementById('chat-details-messages');

    // Clear the "Start conversation" text if present
    if (messagesContainer.innerHTML.includes('Start the conversation')) {
        messagesContainer.innerHTML = '';
    }

    messagesContainer.innerHTML += `
        <div class="chat-message sent" style="opacity: 0.7;">
            ${message}
        </div>
    `;
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
    input.value = '';

    // ... existing sendDetailsChatMessage ...
    try {
        const currentUserId = currentUser._id || currentUser.id;
        await apiCall('/messages', 'POST', {
            senderId: currentUserId,
            receiverId: currentChatUser.id,
            text: message
        });

        // Reload to sync styling and ensure receipt
        await loadChatMessages();
    } catch (e) {
        console.error('Failed to send message', e);
        alert('Failed to send message. Please try again.');
    }
}

async function openChatHistory() {
    if (!currentUser) return;

    const chatHistoryList = document.getElementById('chat-history-list');
    chatHistoryList.innerHTML = '<div style="color: #9ca3af; text-align: center; margin-top: 2rem;">Loading conversations...</div>';

    showPage('chat-history-page');

    try {
        const currentUserId = currentUser._id || currentUser.id;
        const data = await apiCall(`/messages/history/${currentUserId}`);

        if (!data.history || data.history.length === 0) {
            chatHistoryList.innerHTML = '<div style="color: #9ca3af; text-align: center; margin-top: 2rem;">No recent messages. Find someone on the map to start a conversation!</div>';
            return;
        }

        chatHistoryList.innerHTML = data.history.map(chat => `
            <div class="chat-history-item" onclick="openChatFromHistory('${chat.partnerId}', '${chat.name}', '${chat.avatar}')">
                <div class="chat-history-item-avatar">${chat.avatar || '👤'}</div>
                <div class="chat-history-item-content">
                    <div class="chat-history-item-name">${chat.name}</div>
                    <div class="chat-history-item-preview">${chat.lastMessage}</div>
                </div>
                <div class="chat-history-item-time">${new Date(chat.timestamp).toLocaleDateString()}</div>
            </div>
        `).join('');
    } catch (error) {
        console.error('Failed to load chat history:', error);
        chatHistoryList.innerHTML = '<div style="color: #ef4444; text-align: center; margin-top: 2rem;">Failed to load chat history.</div>';
    }
}

async function openChatFromHistory(userId, userName, userAvatar) {
    if (!userAvatar) userAvatar = '👤';
    await openChatWithUser(userId, userName, userAvatar);
}

/* ============= EVENT & CHALLENGE REGISTRATION FUNCTIONALITY ============= */

let currentEventData = null;

function openEventRegistration(eventId, eventName) {
    try {
        currentEventData = {
            id: eventId,
            name: eventName,
            type: 'event'
        };

        document.getElementById('event-name-display').textContent = `📍 ${eventName}`;

        if (currentUser) {
            document.getElementById('registration-name').value = currentUser.name || '';
            document.getElementById('registration-email').value = currentUser.email || '';
        }

        document.getElementById('registration-overlay').classList.remove('hidden');
    } catch (error) {
        console.error('Error in openEventRegistration:', error);
    }
}

function openChallengeRegistration(challengeId, challengeName) {
    try {
        currentEventData = {
            id: challengeId,
            name: challengeName,
            type: 'challenge'
        };

        document.getElementById('event-name-display').textContent = `🏆 ${challengeName}`;

        if (currentUser) {
            document.getElementById('registration-name').value = currentUser.name || '';
            document.getElementById('registration-email').value = currentUser.email || '';
        }

        document.getElementById('registration-overlay').classList.remove('hidden');
    } catch (error) {
        console.error('Error in openChallengeRegistration:', error);
    }
}

function closeEventRegistrationModal(event) {
    // Handle both direct close and click outside
    if (event && event.target && event.target.id !== 'registration-overlay') {
        return;
    }
    document.getElementById('registration-overlay').classList.add('hidden');
    currentEventData = null;

    // Reset form
    document.getElementById('registration-name').value = '';
    document.getElementById('registration-email').value = '';
    document.getElementById('registration-phone').value = '';
    document.getElementById('registration-experience').value = '';
    document.getElementById('registration-availability').value = '';
    document.getElementById('registration-char-count').textContent = '0/300 characters';
}

function setupRegistrationCharCounter() {
    const textarea = document.getElementById('registration-experience');
    const counter = document.getElementById('registration-char-count');

    textarea.addEventListener('input', function () {
        counter.textContent = `${this.value.length}/300 characters`;
    });
}

async function submitEventRegistration() {
    if (!currentUser) {
        alert("You must be logged in to register.");
        return;
    }

    const name = document.getElementById('registration-name').value.trim();
    const email = document.getElementById('registration-email').value.trim();
    const phone = document.getElementById('registration-phone').value.trim();
    const experience = document.getElementById('registration-experience').value.trim();
    const availability = document.getElementById('registration-availability').value;

    if (!name || !email || !availability) {
        alert('Please fill in all required fields');
        return;
    }

    try {
        await apiCall('/events/register', 'POST', {
            eventId: currentEventData.id,
            eventName: currentEventData.name,
            registrantId: currentUser._id || currentUser.id,
            registrationData: { name, email, phone, experience, availability }
        });

        alert(`Successfully registered for ${currentEventData.name}! The organizer has been notified.`);
        closeEventRegistrationModal();
    } catch (e) {
        console.error('Registration failed:', e);
        alert('Failed to submit registration. Please try again.');
    }
}



// Dashboard Show All Modals
function openShowAllUsers() {
    if (!globalUsers || globalUsers.length === 0) return;
    document.getElementById('show-all-title').textContent = 'All Talents Near You';
    document.getElementById('show-all-grid').innerHTML = globalUsers.map(u => `
        <div class="user-card">
            <div class="user-header">
                <div class="user-avatar">${u.avatar || '👤'}</div>
                <div>⭐ ${u.rating ? u.rating.toFixed(1) : '0.0'}</div>
            </div>
            <h3>${u.name}</h3>
            <div style="display:flex; flex-wrap:wrap; gap:0.25rem; margin-top:0.25rem; justify-content:center;">${renderTalentBadges(u.talents)}</div>
            <p style="color: #6b7280; font-size: 0.875rem; margin-top: 0.5rem;">${u.distance ? u.distance.toFixed(1) + ' km away' : 'Near you'}</p>
            <button class="btn-primary" style="margin-top: 1rem; width: 100%; border-radius: 8px;" onclick="openChatWithUser('${u._id}', '${u.name}', '${u.avatar || '👤'}')">💬 Connect</button>
            <div style="display: flex; gap: 0.5rem; margin-top: 0.5rem;">
                <button class="btn-primary" style="flex: 1; padding: 0.5rem; border-radius: 8px; background: linear-gradient(135deg, #ec4899 0%, #a855f7 100%); border: none;" onclick="requestMatch('${u._id}')">💖 Match</button>
                <button class="btn-secondary" style="flex: 1; padding: 0.5rem; border-radius: 8px; border: 1px solid #8b5cf6; color: #8b5cf6;" onclick="requestCollab('${u._id}')">🤝 Collab</button>
            </div>
        </div>
    `).join('');
    document.getElementById('show-all-overlay').classList.remove('hidden');
}

function openShowAllEvents() {
    if (!globalEvents || globalEvents.length === 0) return;
    const now = new Date();
    document.getElementById('show-all-title').textContent = 'All Upcoming Events';
    document.getElementById('show-all-grid').innerHTML = globalEvents.map((e, index) => {
        let isExpired = false;
        if (e.registrationEndDate && new Date(e.registrationEndDate) < now) isExpired = true;
        if (e.date && new Date(e.date) < now) isExpired = true;

        const feeDisplay = e.entranceFee ? `<p style="color: #34d399; font-weight: bold; margin-top: 0.25rem;">Fee: ${e.entranceFee}</p>` : '';
        const achievementsDisplay = e.achievements ? `<p style="color: #a855f7; font-size: 0.875rem; margin-top: 0.25rem;">🏆 ${e.achievements}</p>` : '';
        const regEndDisplay = e.registrationEndDate ? `<p style="color: #fca5a5; font-size: 0.75rem;">Register By: ${new Date(e.registrationEndDate).toLocaleDateString()}</p>` : '';

        let intentBadge = '';
        if (e.intent) {
            if (e.intent === 'training') intentBadge = '<span style="display:inline-block; font-size:0.75rem; padding:0.15rem 0.5rem; background:rgba(236,72,153,0.1); color:#ec4899; border:1px solid rgba(236,72,153,0.3); border-radius:12px; margin-top:0.25rem;">🚀 Training</span>';
            else if (e.intent === 'learning') intentBadge = '<span style="display:inline-block; font-size:0.75rem; padding:0.15rem 0.5rem; background:rgba(168,85,247,0.1); color:#a855f7; border:1px solid rgba(168,85,247,0.3); border-radius:12px; margin-top:0.25rem;">📚 Learning</span>';
            else intentBadge = '<span style="display:inline-block; font-size:0.75rem; padding:0.15rem 0.5rem; background:rgba(52,211,153,0.1); color:#34d399; border:1px solid rgba(52,211,153,0.3); border-radius:12px; margin-top:0.25rem;">🤝 Collab</span>';
        }

        let actionButton = isExpired
            ? `<button class="btn-primary" style="margin-top: 1rem; background: #4b5563; color: #9ca3af; cursor: not-allowed;" disabled>Expired</button>`
            : `<button class="btn-primary" style="margin-top: 1rem; background: white; color: #7c3aed;" onclick="openEventRegistration('${e._id}', '${e.name}')">Join Event</button>`;

        if (currentUser && e.creatorId === (currentUser._id || currentUser.id)) {
            actionButton += `<button class="btn-secondary" style="margin-top: 0.5rem; width: 100%; border: 1px solid #ef4444; color: #ef4444; padding: 0.5rem;" onclick="deleteEvent('${e._id}')">🗑️ Delete Event</button>`;
        }

        return `
        <div class="event-card" style="${isExpired ? 'opacity: 0.6;' : ''}">
            <div class="event-image">${e.image || '🎟️'}</div>
            <div style="display: flex; justify-content: space-between; align-items: start;">
                <h3>${e.name}</h3>
                ${intentBadge}
            </div>
            <div class="event-image">${e.image || '🎟️'}</div>
            <h3>${e.name}</h3>
            ${feeDisplay}
            <p style="margin-top: 0.25rem;">📅 ${e.date ? new Date(e.date).toLocaleDateString() : 'TBA'} | 📍 ${e.location?.address || 'Local'}</p>
            ${regEndDisplay}
            ${achievementsDisplay}
            <p style="color: rgba(255,255,255,0.7); font-size: 0.875rem; margin-top: 0.5rem;">${e.distance ? e.distance.toFixed(1) + ' km away' : ''}</p>
            ${actionButton}
        </div>
        `;
    }).join('');
    document.getElementById('show-all-overlay').classList.remove('hidden');
}

function closeShowAllModal() {
    document.getElementById('show-all-overlay').classList.add('hidden');
}

// Initialize registration char counter when page loads
document.addEventListener('DOMContentLoaded', function () {
    setupRegistrationCharCounter();
});

// ==============================================
// GAMIFIED MATCHES & COLLABS HUB
// ==============================================

async function deleteEvent(eventId) {
    if (!currentUser) return;

    if (confirm("Are you sure you want to delete this event? This cannot be undone.")) {
        try {
            const currentUserId = currentUser._id || currentUser.id;
            await apiCall(`/events/${eventId}?currentUserId=${currentUserId}`, 'DELETE');

            // Close the expanded modal if it is open
            document.getElementById('show-all-overlay').classList.add('hidden');

            alert("Event deleted successfully!");
            loadDashboard(); // Render the UI actively without the deleted file
        } catch (e) {
            console.error("Failed to delete event:", e);
            alert(e.message || "Failed to delete event.");
        }
    }
}

async function requestMatch(targetUserId) {
    if (!currentUser) return;
    try {
        const res = await apiCall('/matches', 'POST', {
            currentUserId: currentUser._id || currentUser.id,
            targetUserId: targetUserId
        });
        alert(res.message);
        checkNotifications();
    } catch (e) {
        console.error("Match error", e);
    }
}

async function requestCollab(targetUserId) {
    if (!currentUser) return;
    try {
        const res = await apiCall('/collabs', 'POST', {
            senderId: currentUser._id || currentUser.id,
            receiverId: targetUserId,
            action: 'request'
        });
        alert(res.message);
        checkNotifications();
    } catch (e) {
        console.error("Collab error", e);
    }
}

async function checkNotifications() {
    if (!currentUser) return;
    try {
        const currentUserId = currentUser._id || currentUser.id;

        // Check Matches
        const matchesRes = await apiCall(`/matches/${currentUserId}`);
        const activeMatches = matchesRes.matches.filter(m => m.status === 'matched');
        const matchDot = document.getElementById('match-notification');
        if (activeMatches.length > 0) {
            matchDot.classList.remove('hidden');
        } else {
            matchDot.classList.add('hidden');
        }

        // Check Collabs
        const collabsRes = await apiCall(`/collabs/${currentUserId}`);
        const collabDot = document.getElementById('collab-notification');
        if (collabsRes.incoming.length > 0) {
            collabDot.classList.remove('hidden');
        } else {
            collabDot.classList.add('hidden');
        }
    } catch (e) {
        console.error("Notification check failed", e);
    }
}

// ---------------- Matches Modal ----------------
async function openMatchesModal() {
    if (!currentUser) return;
    try {
        const currentUserId = currentUser._id || currentUser.id;
        const res = await apiCall(`/matches/${currentUserId}`);

        const container = document.getElementById('matches-list');
        const matchedUsers = res.matches.filter(m => m.status === 'matched');

        if (matchedUsers.length === 0) {
            container.innerHTML = "<p style='color: #6b7280; font-size: 0.875rem;'>No mutual matches yet. Keep matching!</p>";
        } else {
            container.innerHTML = matchedUsers.map(m => `
                <div style="display: flex; align-items: center; justify-content: space-between; padding: 1rem; background: rgba(255,255,255,0.05); border-radius: 12px;">
                    <div style="display: flex; align-items: center; gap: 1rem;">
                        <div style="font-size: 2rem;">${m.partner.avatar || '👤'}</div>
                        <div>
                            <h4 style="margin: 0; font-size: 1.125rem;">${m.partner.name}</h4>
                            <p style="color: #a855f7; font-size: 0.875rem; margin: 0;">${m.partner.talents ? m.partner.talents.map(t => t.name).join(', ') : ''}</p>
                        </div>
                    </div>
                    <button class="btn-primary" onclick="openChatWithUser('${m.partner._id}', '${m.partner.name}', '${m.partner.avatar || '👤'}'); closeMatchesModal();">Chat</button>
                </div>
            `).join('');

            document.getElementById('match-notification').classList.add('hidden');
        }

        document.getElementById('matches-overlay').classList.remove('hidden');
    } catch (e) {
        console.error("Failed to load matches", e);
    }
}

function closeMatchesModal() {
    document.getElementById('matches-overlay').classList.add('hidden');
}

// ---------------- Collabs Modal ----------------
async function openCollabsModal() {
    if (!currentUser) return;
    try {
        const currentUserId = currentUser._id || currentUser.id;
        const res = await apiCall(`/collabs/${currentUserId}`);

        const incomingContainer = document.getElementById('collabs-incoming');
        const outgoingContainer = document.getElementById('collabs-outgoing');
        const acceptedContainer = document.getElementById('collabs-accepted');

        // Render Incoming
        if (res.incoming.length === 0) {
            incomingContainer.innerHTML = "<p style='color: #6b7280; font-size: 0.875rem;'>No incoming requests.</p>";
        } else {
            incomingContainer.innerHTML = res.incoming.map(c => `
                <div style="display: flex; align-items: center; justify-content: space-between; padding: 0.75rem; background: rgba(255,255,255,0.05); border-radius: 8px;">
                    <div style="display: flex; align-items: center; gap: 0.5rem;">
                        <span style="font-size: 1.5rem;">${c.user.avatar || '👤'}</span>
                        <span style="font-weight: 500;">${c.user.name}</span>
                    </div>
                    <div style="display: flex; gap: 0.5rem;">
                        <button class="btn-primary" style="padding: 0.25rem 0.75rem; font-size: 0.75rem; background: #10b981;" onclick="handleCollabAction('${c._id}', 'accept')">Accept</button>
                        <button class="btn-secondary" style="padding: 0.25rem 0.75rem; font-size: 0.75rem;" onclick="handleCollabAction('${c._id}', 'decline')">Decline</button>
                    </div>
                </div>
            `).join('');
            document.getElementById('collab-notification').classList.add('hidden');
        }

        // Render Outgoing
        if (res.outgoing.length === 0) {
            outgoingContainer.innerHTML = "<p style='color: #6b7280; font-size: 0.875rem;'>No pending requests sent.</p>";
        } else {
            outgoingContainer.innerHTML = res.outgoing.map(c => `
                <div style="display: flex; align-items: center; gap: 0.5rem; padding: 0.75rem; background: rgba(255,255,255,0.02); border-radius: 8px;">
                    <span style="font-size: 1.25rem; opacity: 0.6;">${c.user.avatar || '👤'}</span>
                    <span style="color: #9ca3af; font-size: 0.875rem;">Waiting on ${c.user.name}...</span>
                </div>
            `).join('');
        }

        // Render Accepted Collaborators
        if (res.accepted.length === 0) {
            acceptedContainer.innerHTML = "<p style='color: #6b7280; font-size: 0.875rem;'>No active collaborators yet.</p>";
        } else {
            acceptedContainer.innerHTML = res.accepted.map(c => `
                <div style="display: flex; align-items: center; justify-content: space-between; padding: 0.75rem; background: rgba(52, 211, 153, 0.1); border: 1px solid rgba(52, 211, 153, 0.2); border-radius: 8px;">
                    <div style="display: flex; align-items: center; gap: 0.5rem;">
                        <span style="font-size: 1.5rem;">${c.user.avatar || '👤'}</span>
                        <span style="font-weight: 500;">${c.user.name}</span>
                    <div style="display: flex; gap: 0.5rem;">
                        <button class="btn-secondary" style="padding: 0.25rem 0.75rem; font-size: 0.75rem; border: 1px solid #fef08a; color: #fef08a; background: rgba(254, 240, 138, 0.1);" onclick="rateUser('${c.user._id}', '${c.user.name}')">⭐ Rate</button>
                        <button class="btn-primary" style="padding: 0.25rem 0.75rem; font-size: 0.75rem;" onclick="openChatWithUser('${c.user._id}', '${c.user.name}', '${c.user.avatar || '👤'}'); closeCollabsModal();">Chat</button>
                    </div>
                </div>
            `).join('');
        }

        document.getElementById('collabs-overlay').classList.remove('hidden');
    } catch (e) {
        console.error("Failed to load collabs", e);
    }
}

async function handleCollabAction(collabId, action) {
    try {
        const res = await apiCall('/collabs', 'POST', { action, collabId });
        alert(res.message);
        openCollabsModal(); // Refresh modal
        loadDashboard(); // Core Fix: Realtime refresh dashboard Gamification metrics
    } catch (e) {
        console.error("Collab action error", e);
    }
}

async function rateUser(targetId, targetName) {
    const score = prompt(`Rate ${targetName} from 1 to 5 stars:`);
    if (!score) return;
    const num = parseInt(score);
    if (isNaN(num) || num < 1 || num > 5) {
        alert("Please enter a valid number between 1 and 5.");
        return;
    }
    try {
        const currentUserId = currentUser._id || currentUser.id;
        const res = await apiCall('/rate', 'POST', {
            raterId: currentUserId,
            targetId: targetId,
            score: num
        });
        alert(`Successfully rated ${targetName} ${num} stars! New average: ${res.newRating.toFixed(1)}`);
        loadDashboard(); // Refresh current UI rating stats
    } catch (e) {
        console.error("Rating failed:", e);
        alert("Failed to save rating. Try again.");
    }
}

function closeCollabsModal() {
    document.getElementById('collabs-overlay').classList.add('hidden');
}

// ==============================================
// PHASE 8 & 9: NOMINATIM GEOLOCATION SETUP & UX
// ==============================================

function togglePasswordVisibility(inputId, iconElement) {
    const input = document.getElementById(inputId);
    if (input.type === 'password') {
        input.type = 'text';
        iconElement.textContent = '❌';
    } else {
        input.type = 'password';
        iconElement.textContent = '👁️';
    }
}

let locationSearchTimeout;
let selectedSignupLocation = null;

async function detectGPSLocation() {
    if ("geolocation" in navigator) {
        document.getElementById('city-search-input').placeholder = "Locating via GPS...";
        navigator.geolocation.getCurrentPosition(async (position) => {
            const lat = position.coords.latitude;
            const lng = position.coords.longitude;

            try {
                // Reverse geocode to get city name
                const res = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}`);
                const data = await res.json();

                const cityName = data.address.city || data.address.town || data.address.village || "Current Location";

                // Emulate selection
                selectCityResult(lat, lng, cityName);
                document.getElementById('city-search-input').placeholder = "e.g. Rajkot, Gujarat"; // Reset
            } catch (e) {
                console.error("Reverse geocoding failed", e);
                alert("GPS detected, but failed to extract city name automatically.");
            }
        }, (err) => {
            alert("Location access denied or timed out. Please type your city manually.");
            document.getElementById('city-search-input').placeholder = "e.g. Rajkot, Gujarat"; // Reset
        });
    } else {
        alert("Geolocation is not supported by your browser.");
    }
}

async function debounceCitySearch(query) {
    clearTimeout(locationSearchTimeout);
    const resultsContainer = document.getElementById('city-search-results');

    if (query.length < 3) {
        resultsContainer.style.display = 'none';
        return;
    }

    locationSearchTimeout = setTimeout(async () => {
        try {
            const res = await fetch(`https://nominatim.openstreetmap.org/search?format=json&limit=5&q=${encodeURIComponent(query)}`);
            const data = await res.json();

            if (data && data.length > 0) {
                resultsContainer.innerHTML = data.map(place => `
                    <div class="location-result-item" style="padding: 10px; cursor: pointer; border-bottom: 1px solid var(--glass-border);" 
                         onclick="selectCityResult(${place.lat}, ${place.lon}, '${place.display_name.replace(/'/g, "\\'")}')">
                        ${place.display_name}
                    </div>
                `).join('');
                resultsContainer.style.display = 'block';
            } else {
                resultsContainer.innerHTML = '<div style="padding: 10px; color: #9ca3af;">No cities found</div>';
                resultsContainer.style.display = 'block';
            }
        } catch (e) {
            console.error("City search failed:", e);
        }
    }, 500);
}

function selectCityResult(lat, lng, displayName) {
    selectedSignupLocation = { lat: parseFloat(lat), lng: parseFloat(lng), address: displayName };
    document.getElementById('city-search-results').style.display = 'none';
    document.getElementById('city-search-input').value = '';

    document.getElementById('selected-city-text').textContent = displayName;
    document.getElementById('selected-city-display').style.display = 'flex';
    document.getElementById('finalize-profile-btn').disabled = false;
}

async function finalizeLocationAndDashboard() {
    if (!selectedSignupLocation) return;
    try {
        await finishProfileSetup(selectedSignupLocation);
    } catch (e) {
        console.error(e);
    }
}