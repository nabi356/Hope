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

// Mock data for users, events, and challenges
const MOCK_USERS = [
    { _id: '1', name: 'Sarah Johnson', talents: ['Guitar'], avatar: '👩‍🎤', rating: 4.8 },
    { _id: '2', name: 'Mike Chen', talents: ['Photography'], avatar: '👨‍🎨', rating: 4.9 },
    { _id: '3', name: 'Emma Davis', talents: ['Dancing'], avatar: '💃', rating: 4.7 }
];

const MOCK_EVENTS = [
    { _id: '1', name: 'Open Mic Night', date: '2026-01-25', location: { address: 'Downtown Cafe' }, image: '🎤' },
    { _id: '2', name: 'Art Exhibition', date: '2026-01-27', location: { address: 'City Gallery' }, image: '🎨' },
    { _id: '3', name: 'Battle of Bands', date: '2026-02-01', location: { address: 'Music Hall' }, image: '🎸' }
];

const MOCK_CHALLENGES = [
    { _id: '1', name: 'Guitar Solo Challenge', prize: '$500', deadline: '2026-02-05' },
    { _id: '2', name: 'Portrait Photography', prize: '$300', deadline: '2026-02-10' }
];

let selectedTalents = [];
let currentUser = null;

// Initialize storage
function initializeStorage() {
    if (!localStorage.getItem('users')) {
        localStorage.setItem('users', JSON.stringify([]));
    }
    if (!localStorage.getItem('mockUsers')) {
        localStorage.setItem('mockUsers', JSON.stringify(MOCK_USERS));
    }
    if (!localStorage.getItem('mockEvents')) {
        localStorage.setItem('mockEvents', JSON.stringify(MOCK_EVENTS));
    }
    if (!localStorage.getItem('mockChallenges')) {
        localStorage.setItem('mockChallenges', JSON.stringify(MOCK_CHALLENGES));
    }
}

// Get all registered users
function getAllUsers() {
    return JSON.parse(localStorage.getItem('users') || '[]');
}

// Save user to localStorage
function saveUser(user) {
    const users = getAllUsers();
    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));
}

// Find user by email
function findUserByEmail(email) {
    const users = getAllUsers();
    return users.find(u => u.email === email);
}

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

    // Reset error box
    errorBox.classList.add('hidden');
    errorBox.textContent = '';

    if (!name || !email || !password) {
        errorBox.textContent = 'Please fill in all fields';
        errorBox.classList.remove('hidden');
        return;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        errorBox.textContent = 'Please enter a valid email';
        errorBox.classList.remove('hidden');
        return;
    }

    // Check if email already exists
    if (findUserByEmail(email)) {
        errorBox.textContent = 'Email already registered';
        errorBox.classList.remove('hidden');
        return;
    }

    try {
        // Create new user
        const newUser = {
            _id: String(Date.now()),
            email,
            name,
            password,
            talents: [],
            bio: '',
            age: null,
            collaborators: [],
            projects: [],
            rating: 0
        };

        // Save to localStorage
        saveUser(newUser);

        // Store token
        const token = btoa(JSON.stringify({ userId: newUser._id, email: newUser.email }));
        localStorage.setItem('token', token);
        localStorage.setItem('currentUserId', newUser._id);

        currentUser = { id: newUser._id, email, name };
        
        // Clear form
        document.getElementById('register-name').value = '';
        document.getElementById('register-email').value = '';
        document.getElementById('register-password').value = '';
        errorBox.classList.add('hidden');

        // Navigate to welcome page
        showPage('welcome-page');
    } catch (error) {
        errorBox.textContent = 'An error occurred during registration. Please try again.';
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

        // Reset error box
        errorBox.classList.add('hidden');
        errorBox.textContent = '';

        if (!email || !password) {
            errorBox.textContent = 'Please fill in all fields';
            errorBox.classList.remove('hidden');
            return;
        }

        // Find user in localStorage
        const user = findUserByEmail(email);
        
        if (!user || user.password !== password) {
            errorBox.textContent = 'Invalid email or password';
            errorBox.classList.remove('hidden');
            return;
        }

        // Store token and user ID
        const token = btoa(JSON.stringify({ userId: user._id, email: user.email }));
        localStorage.setItem('token', token);
        localStorage.setItem('currentUserId', user._id);

        currentUser = { id: user._id, email: user.email, name: user.name };
        
        // Clear form and error
        document.getElementById('login-email').value = '';
        document.getElementById('login-password').value = '';
        errorBox.classList.add('hidden');

        console.log('Login successful, navigating to page');

        // Check if user has completed profile (has talents and bio)
        if (user.talents && user.talents.length > 0 && user.bio) {
            // User completed setup, go to dashboard
            console.log('User has completed profile, going to dashboard');
            showPage('dashboard-page');
            loadDashboard();
        } else {
            // User needs to complete setup
            console.log('User needs to complete setup, going to welcome');
            showPage('welcome-page');
        }
    } catch (error) {
        console.error('Login error:', error);
        const errorBox = document.getElementById('login-error');
        errorBox.textContent = 'An error occurred. Please try again.';
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

async function goToDashboard() {
    try {
        const currentUserId = localStorage.getItem('currentUserId');
        
        if (!currentUserId) {
            console.error('No user ID found');
            showPage('login-page');
            return;
        }

        // Get user data
        const users = getAllUsers();
        const user = users.find(u => u._id === currentUserId);
        
        if (user) {
            // Update user with bio and age from form
            const ageInput = document.getElementById('user-age');
            const bioInput = document.getElementById('user-bio');
            
            const age = ageInput ? ageInput.value : null;
            const bio = bioInput ? bioInput.value : '';
            const talentIndex = users.findIndex(u => u._id === currentUserId);
            
            users[talentIndex].age = age ? parseInt(age) : null;
            users[talentIndex].bio = bio;
            users[talentIndex].talents = selectedTalents;
            users[talentIndex].collaborators = users[talentIndex].collaborators || [];
            users[talentIndex].projects = users[talentIndex].projects || [];
            users[talentIndex].rating = users[talentIndex].rating || 0;
            
            localStorage.setItem('users', JSON.stringify(users));
        }
        
        showPage('dashboard-page');
        loadDashboard();
    } catch (error) {
        console.error('Error going to dashboard:', error);
        showPage('login-page');
    }
}

async function loadDashboard() {
    const currentUserId = localStorage.getItem('currentUserId');
    
    if (!currentUserId) return;

    // Update profile display
    updateProfileDisplay();

    // Get mock users
    const mockUsers = JSON.parse(localStorage.getItem('mockUsers') || '[]');
    document.getElementById('users-list').innerHTML = mockUsers.map(u => `
        <div class="user-card">
            <div class="user-header">
                <div class="user-avatar">${u.avatar}</div>
                <div>⭐ ${u.rating}</div>
            </div>
            <h3>${u.name}</h3>
            <p style="color: #a855f7;">${u.talents.join(', ') || 'Multiple talents'}</p>
            <button class="btn-primary" style="margin-top: 1rem;" onclick="openChatWithUser('${u.name}', '${u.avatar}')">Connect</button>
        </div>
    `).join('');

    // Get mock events
    const mockEvents = JSON.parse(localStorage.getItem('mockEvents') || '[]');
    document.getElementById('events-list').innerHTML = mockEvents.map((e, index) => `
        <div class="event-card">
            <div class="event-image">${e.image}</div>
            <h3>${e.name}</h3>
            <p>${e.location.address}</p>
            <button class="btn-primary" style="margin-top: 1rem; background: white; color: #7c3aed;" onclick="openEventRegistration('${e.name}', ${index})">Join Event</button>
        </div>
    `).join('');

    // Get mock challenges
    const mockChallenges = JSON.parse(localStorage.getItem('mockChallenges') || '[]');
    document.getElementById('challenges-list').innerHTML = mockChallenges.map((c, index) => `
        <div class="challenge-card">
            <h3>${c.name}</h3>
            <p style="color: #34d399; font-size: 1.5rem; font-weight: bold;">${c.prize}</p>
            <button class="btn-primary" style="margin-top: 1rem;" onclick="openChallengeRegistration('${c.name}', ${index})">Enter Challenge</button>
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
function updateProfileDisplay() {
    if (!currentUser) return;
    
    const users = getAllUsers();
    const user = users.find(u => u._id === currentUser.id);
    
    if (user) {
        document.getElementById('profile-name').textContent = user.name;
        document.getElementById('profile-email').textContent = user.email;
        
        // Update stats
        document.getElementById('stats-talents').textContent = user.talents ? user.talents.length : 0;
        document.getElementById('stats-collaborators').textContent = user.collaborators ? user.collaborators.length : 0;
        document.getElementById('stats-projects').textContent = user.projects ? user.projects.length : 0;
        document.getElementById('stats-rating').textContent = user.rating ? user.rating.toFixed(1) : '0.0';
        
        // Update profile completion
        const completion = calculateProfileCompletion(user);
        document.getElementById('completion-percentage').textContent = `${completion}% Complete`;
        document.getElementById('completion-bar').style.width = `${completion}%`;
        
        // Display talents
        const talentsDisplay = document.getElementById('user-talents-display');
        if (user.talents && user.talents.length > 0) {
            talentsDisplay.innerHTML = user.talents.map(t => `<div class="talent-tag">${getTalentIcon(t.id)} ${t.name}</div>`).join('');
        } else {
            talentsDisplay.innerHTML = '<p style="color: #6b7280;">No talents added yet</p>';
        }
    }
}

function calculateProfileCompletion(user) {
    let completion = 0;
    if (user.name) completion += 20;
    if (user.email) completion += 20;
    if (user.bio && user.bio.length > 10) completion += 20;
    if (user.talents && user.talents.length > 0) completion += 20;
    if (user.age) completion += 20;
    return Math.min(completion, 100);
}

function getTalentIcon(talentId) {
    for (let category of TALENT_CATEGORIES) {
        const talent = category.subcategories.find(t => t.id === talentId);
        if (talent) return talent.icon;
    }
    return '🎯';
}

function showEditModal() {
    if (!currentUser) return;
    
    const users = getAllUsers();
    const user = users.find(u => u._id === currentUser.id);
    
    if (user) {
        document.getElementById('edit-name').value = user.name || '';
        document.getElementById('edit-age').value = user.age || '';
        document.getElementById('edit-bio').value = user.bio || '';
        
        const charCount = document.getElementById('edit-char-count');
        charCount.textContent = `${(user.bio || '').length}/300 characters`;
        
        document.getElementById('edit-bio').oninput = () => {
            charCount.textContent = `${document.getElementById('edit-bio').value.length}/300 characters`;
        };
    }
    
    document.getElementById('edit-modal').classList.remove('hidden');
}

function closeEditModal() {
    document.getElementById('edit-modal').classList.add('hidden');
}

function showTalentsModal() {
    renderModalTalents();
    document.getElementById('talents-modal').classList.remove('hidden');
}

function closeTalentsModal() {
    document.getElementById('talents-modal').classList.add('hidden');
}

function renderModalTalents() {
    const users = getAllUsers();
    const user = users.find(u => u._id === currentUser.id);
    const currentTalents = user ? user.talents || [] : [];
    
    // Reset selectedTalents for modal
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

function saveModalTalents() {
    const users = getAllUsers();
    const userIndex = users.findIndex(u => u._id === currentUser.id);
    
    if (userIndex !== -1) {
        users[userIndex].talents = selectedTalents;
        localStorage.setItem('users', JSON.stringify(users));
        currentUser.talents = selectedTalents;
        
        closeTalentsModal();
        updateProfileDisplay();
    }
}

function saveProfileChanges() {
    const name = document.getElementById('edit-name').value;
    const age = document.getElementById('edit-age').value;
    const bio = document.getElementById('edit-bio').value;
    
    if (!name) {
        alert('Please enter your name');
        return;
    }
    
    const users = getAllUsers();
    const userIndex = users.findIndex(u => u._id === currentUser.id);
    
    if (userIndex !== -1) {
        users[userIndex].name = name;
        users[userIndex].age = age ? parseInt(age) : null;
        users[userIndex].bio = bio;
        
        localStorage.setItem('users', JSON.stringify(users));
        currentUser.name = name;
        
        closeEditModal();
        updateProfileDisplay();
    }
}

// Check auth on load
window.onload = () => {
    // Initialize storage on page load
    initializeStorage();
    
    const token = localStorage.getItem('token');
    const currentUserId = localStorage.getItem('currentUserId');
    
    if (token && currentUserId) {
        // Load user data from localStorage
        const users = getAllUsers();
        const user = users.find(u => u._id === currentUserId);
        
        if (user) {
            currentUser = { id: user._id, email: user.email, name: user.name };
            showPage('dashboard-page');
            loadDashboard();
        } else {
            logout();
        }
    }
};

/* Profile Modal Functions */
function showProfileModal() {
    if (!currentUser) return;
    
    const users = getAllUsers();
    const user = users.find(u => u._id === currentUser.id);
    
    if (user) {
        // Update modal header
        document.getElementById('modal-profile-name').textContent = user.name;
        document.getElementById('modal-profile-email').textContent = user.email;
        
        // Update stats
        document.getElementById('modal-talents-count').textContent = user.talents ? user.talents.length : 0;
        document.getElementById('modal-collaborators-count').textContent = user.collaborators ? user.collaborators.length : 0;
        document.getElementById('modal-projects-count').textContent = user.projects ? user.projects.length : 0;
        document.getElementById('modal-rating-count').textContent = user.rating ? user.rating.toFixed(1) : '0.0';
        
        // Update completion
        const completion = calculateProfileCompletion(user);
        document.getElementById('modal-completion-text').textContent = `${completion}%`;
        document.getElementById('modal-completion-bar').style.width = `${completion}%`;
        
        // Update talents
        const talentsList = document.getElementById('modal-talents-list');
        if (user.talents && user.talents.length > 0) {
            talentsList.innerHTML = user.talents.map(t => `<div class="talent-badge">${getTalentIcon(t.id)} ${t.name}</div>`).join('');
        } else {
            talentsList.innerHTML = '<span style="color: #6b7280; font-size: 0.875rem;">No talents added yet</span>';
        }
        
        // Show modal
        document.getElementById('profile-modal-overlay').classList.remove('hidden');
    }
}

function closeProfileModal() {
    document.getElementById('profile-modal-overlay').classList.add('hidden');
}

// Close modal when clicking outside
document.addEventListener('click', function(event) {
    const overlay = document.getElementById('profile-modal-overlay');
    if (overlay && event.target === overlay) {
        closeProfileModal();
    }
});

// Close modal with Escape key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeProfileModal();
    }
});
/* ============= CHAT FUNCTIONALITY ============= */

let currentChatUser = null;

function openChatWithUser(userName, userAvatar) {
    currentChatUser = {
        name: userName,
        avatar: userAvatar
    };
    
    // Open the chat history page
    openChatHistory();
    
    // Delay slightly to ensure page is loaded before opening chat
    setTimeout(() => {
        document.getElementById('chat-details-title').textContent = `Chat with ${userName}`;
        loadChatMessages();
        document.getElementById('chat-details-empty').classList.add('hidden');
        document.getElementById('chat-details-active').classList.remove('hidden');
        document.getElementById('chat-details-input').focus();
    }, 100);
}

function backToDashboard() {
    showPage('dashboard-page');
    currentChatUser = null;
}

function loadChatMessages() {
    if (!currentChatUser) return;
    
    const chatKey = `chat_${currentChatUser.name}`;
    const messages = JSON.parse(localStorage.getItem(chatKey) || '[]');
    
    const messagesContainer = document.getElementById('chat-details-messages');
    messagesContainer.innerHTML = messages.map(msg => `
        <div class="chat-message ${msg.type}">
            ${msg.text}
        </div>
    `).join('');
    
    // Scroll to bottom
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

function sendDetailsChatMessage() {
    if (!currentChatUser) return;
    
    const input = document.getElementById('chat-details-input');
    const message = input.value.trim();
    
    if (!message) return;
    
    // Save message
    const chatKey = `chat_${currentChatUser.name}`;
    const messages = JSON.parse(localStorage.getItem(chatKey) || '[]');
    messages.push({
        type: 'sent',
        text: message,
        timestamp: new Date().toISOString()
    });
    localStorage.setItem(chatKey, JSON.stringify(messages));
    
    // Clear input
    input.value = '';
    
    // Reload messages
    loadChatMessages();
    
    // Simulate response after 1 second
    setTimeout(() => {
        const messagesUpdated = JSON.parse(localStorage.getItem(chatKey) || '[]');
        messagesUpdated.push({
            type: 'received',
            text: `Thanks for reaching out! I'm interested in collaborating with you.`,
            timestamp: new Date().toISOString()
        });
        localStorage.setItem(chatKey, JSON.stringify(messagesUpdated));
        loadChatMessages();
    }, 1000);
}

function openChatHistory() {
    // Collect all chats
    const allChats = [];
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key.startsWith('chat_')) {
            const userName = key.replace('chat_', '');
            const messages = JSON.parse(localStorage.getItem(key) || '[]');
            if (messages.length > 0) {
                const lastMessage = messages[messages.length - 1];
                allChats.push({
                    name: userName,
                    preview: lastMessage.text.substring(0, 50) + (lastMessage.text.length > 50 ? '...' : ''),
                    key: key,
                    timestamp: lastMessage.timestamp
                });
            }
        }
    }
    
    const chatHistoryList = document.getElementById('chat-history-list');
    if (allChats.length === 0) {
        chatHistoryList.innerHTML = '<p style="color: #6b7280; text-align: center; padding: 2rem;">No chats yet. Start connecting with people!</p>';
    } else {
        chatHistoryList.innerHTML = allChats.map(chat => `
            <div class="chat-history-item" onclick="openChatFromHistory('${chat.name}')">
                <div class="chat-history-item-name">${chat.name}</div>
                <div class="chat-history-item-preview">${chat.preview}</div>
                <div class="chat-history-item-time">${new Date(chat.timestamp).toLocaleDateString()}</div>
            </div>
        `).join('');
    }
    
    showPage('chat-history-page');
}

function openChatFromHistory(userName) {
    // Get user avatar from mock users
    const mockUsers = JSON.parse(localStorage.getItem('mockUsers') || '[]');
    const user = mockUsers.find(u => u.name === userName);
    const userAvatar = user ? user.avatar : '👤';
    
    openChatWithUser(userName, userAvatar);
}

/* ============= EVENT & CHALLENGE REGISTRATION FUNCTIONALITY ============= */

let currentEventData = null;

function openEventRegistration(eventName, eventIndex) {
    console.log('openEventRegistration called with:', eventName, eventIndex);
    try {
        const mockEvents = JSON.parse(localStorage.getItem('mockEvents') || '[]');
        const event = mockEvents[eventIndex];
        
        console.log('Event found:', event);
        
        currentEventData = {
            name: eventName,
            index: eventIndex,
            event: event,
            type: 'event'
        };
        
        document.getElementById('event-name-display').textContent = `📍 ${eventName}`;
        
        // Pre-fill name and email if user is logged in
        const currentUserIdFromStorage = localStorage.getItem('currentUserId');
        const users = getAllUsers();
        const currentUserData = users.find(u => u._id === currentUserIdFromStorage);
        if (currentUserData) {
            document.getElementById('registration-name').value = currentUserData.name;
            document.getElementById('registration-email').value = currentUserData.email;
        }
        
        const overlay = document.getElementById('registration-overlay');
        console.log('Overlay element:', overlay);
        overlay.classList.remove('hidden');
        console.log('Overlay displayed');
    } catch (error) {
        console.error('Error in openEventRegistration:', error);
    }
}

function openChallengeRegistration(challengeName, challengeIndex) {
    console.log('openChallengeRegistration called with:', challengeName, challengeIndex);
    try {
        const mockChallenges = JSON.parse(localStorage.getItem('mockChallenges') || '[]');
        const challenge = mockChallenges[challengeIndex];
        
        console.log('Challenge found:', challenge);
        
        currentEventData = {
            name: challengeName,
            index: challengeIndex,
            event: challenge,
            type: 'challenge'
        };
        
        document.getElementById('event-name-display').textContent = `🏆 ${challengeName}`;
        
        // Pre-fill name and email if user is logged in
        const currentUserIdFromStorage = localStorage.getItem('currentUserId');
        const users = getAllUsers();
        const currentUserData = users.find(u => u._id === currentUserIdFromStorage);
        if (currentUserData) {
            document.getElementById('registration-name').value = currentUserData.name;
            document.getElementById('registration-email').value = currentUserData.email;
        }
        
        const overlay = document.getElementById('registration-overlay');
        console.log('Overlay element:', overlay);
        overlay.classList.remove('hidden');
        console.log('Overlay displayed');
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
    
    textarea.addEventListener('input', function() {
        counter.textContent = `${this.value.length}/300 characters`;
    });
}

function submitEventRegistration() {
    const name = document.getElementById('registration-name').value.trim();
    const email = document.getElementById('registration-email').value.trim();
    const phone = document.getElementById('registration-phone').value.trim();
    const experience = document.getElementById('registration-experience').value.trim();
    const availability = document.getElementById('registration-availability').value;
    
    if (!name || !email || !availability) {
        alert('Please fill in all required fields');
        return;
    }
    
    // Save registration
    const registrationKey = `registration_${currentEventData.event._id || currentEventData.index}`;
    const registrations = JSON.parse(localStorage.getItem(registrationKey) || '[]');
    
    registrations.push({
        name,
        email,
        phone,
        experience,
        availability,
        timestamp: new Date().toISOString()
    });
    
    localStorage.setItem(registrationKey, JSON.stringify(registrations));
    
    // Show success message
    alert(`Successfully registered for ${currentEventData.name}! Event organizers will contact you soon.`);
    
    // Close modal
    closeEventRegistrationModal();
    
    // Reset form
    document.getElementById('registration-name').value = '';
    document.getElementById('registration-email').value = '';
    document.getElementById('registration-phone').value = '';
    document.getElementById('registration-experience').value = '';
    document.getElementById('registration-availability').value = '';
}

// Initialize registration char counter when page loads
document.addEventListener('DOMContentLoaded', function() {
    setupRegistrationCharCounter();
});