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
const API_BASE_URL = 'https://hope-backend-445i.onrender.com/api';

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

// User location fallback if not provided
const FALLBACK_LOCATION = { lat: 34.0522, lng: -118.2437 }; // Default LA

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
        if (currentUser.talents && currentUser.talents.length > 0 && currentUser.bio) {
            showPage('dashboard-page');
            loadDashboard();
        } else {
            showPage('welcome-page');
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
                    <button class="talent-btn" onclick="toggleTalent('${talent.id}', '${talent.name}', this)">
                        <div class="talent-icon">${talent.icon}</div>
                        <div class="talent-name">${talent.name}</div>
                    </button>
                `).join('')}
            </div>
        </div>
    `).join('');
}

function toggleTalent(id, name, btn) {
    const talent = selectedTalents.find(t => t.id === id);
    if (talent) {
        selectedTalents = selectedTalents.filter(t => t.id !== id);
        btn.classList.remove('selected');
    } else {
        selectedTalents.push({ id, name });
        btn.classList.add('selected');
    }
    document.getElementById('talent-count').textContent = `${selectedTalents.length} skills selected`;
    document.getElementById('continue-btn').disabled = selectedTalents.length === 0;
}

function setupBioCounter() {
    const bioInput = document.getElementById('user-bio');
    const charCount = document.getElementById('char-count');
    bioInput.oninput = () => {
        charCount.textContent = `${bioInput.value.length}/300 characters`;
    };
}

async function getFallbackLocation() {
    try {
        const response = await fetch('https://ipapi.co/json/');
        const data = await response.json();
        if (data.latitude && data.longitude) {
            return { lat: data.latitude, lng: data.longitude };
        }
    } catch (e) {
        console.warn("IP Geolocation failed", e);
    }
    return FALLBACK_LOCATION; // Default to LA if everything fails
}

async function goToDashboard() {
    try {
        if (!currentUser) {
            showPage('login-page');
            return;
        }

        const handleLocationDecision = async (loc) => {
            await finishProfileSetup(loc);
        };

        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(
                (pos) => handleLocationDecision({ lat: pos.coords.latitude, lng: pos.coords.longitude }),
                async () => handleLocationDecision(await getFallbackLocation()),
                { timeout: 5000, enableHighAccuracy: false } // Fast fallback if it hangs
            );
        } else {
            handleLocationDecision(await getFallbackLocation());
        }

    } catch (error) {
        console.error('Error going to dashboard:', error);
        showPage('login-page');
    }
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
    if (!currentUser.location) currentUser.location = FALLBACK_LOCATION;

    // Load Maps
    initMap(currentUser.location);
    await fetchNearbyData(currentUser.location.lat, currentUser.location.lng, currentRadiusKm);
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

        renderUsers(data.users);
        renderEvents(data.events);
        renderChallenges(data.challenges);

    } catch (error) {
        console.error('Error fetching nearby data', error);
    }
}

function renderUsers(users) {
    document.getElementById('users-list').innerHTML = users.map(u => `
        <div class="user-card">
            <div class="user-header">
                <div class="user-avatar">${u.avatar || '👤'}</div>
                <div>⭐ ${u.rating ? u.rating.toFixed(1) : '0.0'}</div>
            </div>
            <h3>${u.name}</h3>
            <p style="color: #a855f7;">${u.talents.map(t => t.name).join(', ') || 'Discovering talents'}</p>
            <p style="color: #6b7280; font-size: 0.875rem; margin-top: 0.5rem;">${u.distance ? u.distance.toFixed(1) + ' km away' : 'Near you'}</p>
            <button class="btn-primary" style="margin-top: 1rem;" onclick="openChatWithUser('${u._id}', '${u.name}', '${u.avatar || '👤'}')">Connect</button>
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
            }).addTo(map).bindPopup(`<b>${u.name}</b><br>${u.talents.map(t => t.name).join(', ')}`);
            markers.push(marker);
        }
    });
}

function renderEvents(events) {
    document.getElementById('events-list').innerHTML = events.map((e, index) => `
        <div class="event-card">
            <div class="event-image">${e.image || '🎟️'}</div>
            <h3>${e.name}</h3>
            <p>${e.location?.address || 'Local'}</p>
            <p style="color: rgba(255,255,255,0.7); font-size: 0.875rem; margin-top: 0.25rem;">${e.distance ? e.distance.toFixed(1) + ' km away' : ''}</p>
            <button class="btn-primary" style="margin-top: 1rem; background: white; color: #7c3aed;" onclick="openEventRegistration('${e._id}', '${e.name}')">Join Event</button>
        </div>
    `).join('');

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
    document.getElementById('challenges-list').innerHTML = challenges.map((c, index) => `
        <div class="challenge-card">
            <h3>${c.name}</h3>
            <p style="color: #34d399; font-size: 1.5rem; font-weight: bold;">${c.prize}</p>
            <button class="btn-primary" style="margin-top: 1rem;" onclick="openChallengeRegistration('${c._id}', '${c.name}')">Enter Challenge</button>
        </div>
    `).join('');
}

function logout() {
    localStorage.clear();
    currentUser = null;
    selectedTalents = [];
    showPage('login-page');
}

// Profile & Modal Functions
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
                talentsDisplay.innerHTML = user.talents.map(t => `<div class="talent-tag">${getTalentIcon(t.id)} ${t.name}</div>`).join('');
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
                showPage('dashboard-page');
                loadDashboard();
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
                talentsList.innerHTML = user.talents.map(t => `<div class="talent-badge">${getTalentIcon(t.id)} ${t.name}</div>`).join('');
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



// Initialize registration char counter when page loads
document.addEventListener('DOMContentLoaded', function () {
    setupRegistrationCharCounter();
});