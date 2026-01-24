const TALENTS = [
    { id: 'guitar', name: 'Guitar', icon: '🎸' },
    { id: 'piano', name: 'Piano', icon: '🎹' },
    { id: 'violin', name: 'Violin', icon: '🎻' },
    { id: 'photography', name: 'Photography', icon: '📷' },
    { id: 'painting', name: 'Painting', icon: '🎨' },
    { id: 'dancing', name: 'Dancing', icon: '💃' },
    { id: 'singing', name: 'Singing', icon: '🎤' },
    { id: 'acting', name: 'Acting', icon: '🎭' }
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
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.getElementById(pageId).classList.add('active');
    
    if (pageId === 'talents-page') renderTalents();
    if (pageId === 'bio-page') setupBioCounter();
}

async function handleRegister() {
    const name = document.getElementById('register-name').value;
    const email = document.getElementById('register-email').value;
    const password = document.getElementById('register-password').value;
    const errorBox = document.getElementById('register-error');

    if (!name || !email || !password) {
        errorBox.textContent = 'Please fill in all fields';
        errorBox.classList.remove('hidden');
        return;
    }

    // Check if email already exists
    if (findUserByEmail(email)) {
        errorBox.textContent = 'Email already registered';
        errorBox.classList.remove('hidden');
        return;
    }

    // Create new user
    const newUser = {
        _id: String(Date.now()),
        email,
        name,
        password,
        talents: [],
        bio: '',
        age: null
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

    showPage('welcome-page');
}

async function handleLogin() {
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
    const errorBox = document.getElementById('login-error');

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

    showPage('welcome-page');
}

function renderTalents() {
    const container = document.getElementById('talents-container');
    container.innerHTML = '<div class="talent-grid">' + 
        TALENTS.map(t => `
            <button class="talent-btn" onclick="toggleTalent('${t.id}', this)">
                <div class="talent-icon">${t.icon}</div>
                <div>${t.name}</div>
            </button>
        `).join('') + '</div>';
}

function toggleTalent(id, btn) {
    if (selectedTalents.includes(id)) {
        selectedTalents = selectedTalents.filter(t => t !== id);
        btn.classList.remove('selected');
    } else {
        selectedTalents.push(id);
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
    showPage('dashboard-page');
    loadDashboard();
}

async function loadDashboard() {
    const currentUserId = localStorage.getItem('currentUserId');
    
    if (!currentUserId) return;

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
            <button class="btn-primary" style="margin-top: 1rem;">Connect</button>
        </div>
    `).join('');

    // Get mock events
    const mockEvents = JSON.parse(localStorage.getItem('mockEvents') || '[]');
    document.getElementById('events-list').innerHTML = mockEvents.map(e => `
        <div class="event-card">
            <div class="event-image">${e.image}</div>
            <h3>${e.name}</h3>
            <p>${e.location.address}</p>
            <button class="btn-primary" style="margin-top: 1rem; background: white; color: #7c3aed;">Join Event</button>
        </div>
    `).join('');

    // Get mock challenges
    const mockChallenges = JSON.parse(localStorage.getItem('mockChallenges') || '[]');
    document.getElementById('challenges-list').innerHTML = mockChallenges.map(c => `
        <div class="challenge-card">
            <h3>${c.name}</h3>
            <p style="color: #34d399; font-size: 1.5rem; font-weight: bold;">${c.prize}</p>
            <button class="btn-primary" style="margin-top: 1rem;">Enter Challenge</button>
        </div>
    `).join('');
}

function logout() {
    localStorage.clear();
    currentUser = null;
    selectedTalents = [];
    showPage('login-page');
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
