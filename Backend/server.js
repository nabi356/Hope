const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// User's MongoDB Atlas URI
const MONGO_URI = 'mongodb+srv://dancernabi_db_user:Nabi2005@cluster0.blsmvvs.mongodb.net/hope_db?appName=Cluster0';

// Haversine formula to calculate distance between two lat/lng pairs in Kilometers
function calculateDistance(lat1, lon1, lat2, lon2) {
    if (!lat1 || !lon1 || !lat2 || !lon2) return 9999;

    function toRad(x) {
        return x * Math.PI / 180;
    }

    var R = 6371; // km
    var x1 = lat2 - lat1;
    var dLat = toRad(x1);
    var x2 = lon2 - lon1;
    var dLon = toRad(x2)
    var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c; // Distance in km
}

// ----------------- MONGOOSE SCHEMAS & MODELS ----------------- //
mongoose.connect(MONGO_URI)
    .then(() => console.log('Connected to MongoDB Atlas via Mongoose.'))
    .catch(err => console.error('MongoDB connection error:', err));

const userSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    password: { type: String, required: true },
    talents: [{ id: String, name: String, intent: { type: String, enum: ['train', 'learn', 'hire'], default: 'learn' }, hourlyRate: { type: Number, default: 0 } }],
    bio: { type: String, default: '' },
    age: { type: Number, default: null },
    location: { lat: Number, lng: Number, address: String },
    collaborators: [String],
    projects: [String],
    rating: { type: Number, default: 0 },
    ratingCount: { type: Number, default: 0 },
    avatar: { type: String, default: '👤' }
});

const eventSchema = new mongoose.Schema({
    name: String,
    date: String,
    location: { lat: Number, lng: Number, address: String },
    image: String,
    description: String,
    intent: { type: String, enum: ['training', 'learning', 'collaboration'], default: 'collaboration' },
    creatorId: String,
    entranceFee: { type: String, default: "Free" },
    achievements: String,
    registrationEndDate: String,
    attendees: [String]
});

const challengeSchema = new mongoose.Schema({
    name: String,
    prize: String,
    deadline: String,
    location: { lat: Number, lng: Number }
});

const messageSchema = new mongoose.Schema({
    senderId: { type: String, required: true },
    receiverId: { type: String, required: true },
    text: { type: String, required: true },
    timestamp: { type: Date, default: Date.now }
});

const matchSchema = new mongoose.Schema({
    userA: { type: String, required: true },
    userB: { type: String, required: true },
    status: { type: String, enum: ['pending', 'matched'], default: 'pending' },
    initiatorId: { type: String, required: true },
    timestamp: { type: Date, default: Date.now }
});

const collabSchema = new mongoose.Schema({
    senderId: { type: String, required: true },
    receiverId: { type: String, required: true },
    status: { type: String, enum: ['pending', 'accepted', 'declined'], default: 'pending' },
    timestamp: { type: Date, default: Date.now }
});

const User = mongoose.model('User', userSchema);
const Event = mongoose.model('Event', eventSchema);
const Challenge = mongoose.model('Challenge', challengeSchema);
const Message = mongoose.model('Message', messageSchema);
const Match = mongoose.model('Match', matchSchema);
const Collab = mongoose.model('Collab', collabSchema);

// ----------------- ROUTES ----------------- //

// Register
app.post('/api/register', async (req, res) => {
    try {
        const { email, name, password } = req.body;
        const existingInfo = await User.findOne({ email });
        if (existingInfo) return res.status(400).json({ error: 'Email already registered' });

        const newUser = new User({ email, name, password });
        await newUser.save();

        res.json({ user: newUser, token: Buffer.from(newUser._id.toString()).toString('base64') });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Login
app.post('/api/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email, password });
        if (!user) return res.status(401).json({ error: 'Invalid credentials' });
        res.json({ user, token: Buffer.from(user._id.toString()).toString('base64') });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Get Current User Profile
app.get('/api/user/:id', async (req, res) => {
    try {
        if (!mongoose.isValidObjectId(req.params.id)) return res.status(404).json({ error: 'Invalid ID format' });
        const user = await User.findById(req.params.id);
        if (!user) return res.status(404).json({ error: 'User not found' });
        res.json({ user });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Update Profile & Location
app.put('/api/user/:id', async (req, res) => {
    try {
        if (!mongoose.isValidObjectId(req.params.id)) return res.status(404).json({ error: 'Invalid ID format' });
        const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedUser) return res.status(404).json({ error: 'User not found' });
        res.json({ user: updatedUser });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Rate User API
app.post('/api/rate', async (req, res) => {
    try {
        const { raterId, targetId, score } = req.body;
        if (!targetId || !score || score < 1 || score > 5) return res.status(400).json({ error: "Invalid rating" });

        const targetUser = await User.findById(targetId);
        if (!targetUser) return res.status(404).json({ error: "User not found" });

        // Calculate new moving average
        const newCount = targetUser.ratingCount + 1;
        const newTotalScore = (targetUser.rating * targetUser.ratingCount) + parseInt(score);
        const newAverage = newTotalScore / newCount;

        targetUser.rating = newAverage;
        targetUser.ratingCount = newCount;
        await targetUser.save();

        res.json({ success: true, newRating: targetUser.rating, message: "Rating submitted successfully!" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Get Nearby (Users, Events, Challenges)
app.get('/api/nearby', async (req, res) => {
    try {
        const { lat, lng, radiusKm, currentUserId } = req.query;
        if (!lat || !lng) return res.status(400).json({ error: 'lat and lng required' });

        const rKm = parseFloat(radiusKm) || 20;

        // Fetch all objects. To perform complex geo-scaling, a robust location array with 2dsphere index could be used.
        // For accurate distance display with the Haversine radius slider, we calculate server-side filtering dynamically.
        // Fetch current user to determine their talents for strict filtering
        let currentUserTalents = [];
        if (currentUserId && mongoose.isValidObjectId(currentUserId)) {
            const me = await User.findById(currentUserId);
            if (me && me.talents) {
                currentUserTalents = me.talents.map(t => t.id);
            }
        }

        const queryFilter = currentUserId && mongoose.isValidObjectId(currentUserId)
            ? { _id: { $ne: currentUserId } } : {};
        const allUsers = await User.find(queryFilter);
        const allEvents = await Event.find({});
        const allChallenges = await Challenge.find({});

        const nearbyUsers = allUsers.filter(u => {
            if (!u.location || !u.location.lat) return false;
            const dist = calculateDistance(parseFloat(lat), parseFloat(lng), u.location.lat, u.location.lng);
            u._doc.distance = dist;

            // Radius check (RESTORED: User explicitly requested strict radius limits)
            if (dist > rKm) return false;

            // Calculate Talent Match Score
            let matchScore = 0;
            if (currentUserTalents.length > 0 && u.talents) {
                const uTalents = u.talents.map(t => t.id);
                matchScore = currentUserTalents.filter(t => uTalents.includes(t)).length;
            }
            u._doc.matchScore = matchScore;

            return true;
        }).map(u => {
            const safe = { ...u._doc };
            delete safe.password;
            return safe;
        });

        const nearbyEvents = allEvents.filter(e => {
            if (!e.location || !e.location.lat) return false;
            const dist = calculateDistance(parseFloat(lat), parseFloat(lng), e.location.lat, e.location.lng);
            e._doc.distance = dist;
            return dist <= rKm;
            // Note: Seeded events currently lack a talents array. Returning them based on radius for now.
        }).map(e => e._doc);

        const nearbyChallenges = allChallenges.filter(c => {
            if (!c.location || !c.location.lat) return true; // Global challenges
            const dist = calculateDistance(parseFloat(lat), parseFloat(lng), c.location.lat, c.location.lng);
            c._doc.distance = dist;
            return dist <= rKm;
        }).map(c => c._doc);

        res.json({
            users: nearbyUsers.sort((a, b) => {
                if (b.matchScore !== a.matchScore) return b.matchScore - a.matchScore;
                return a.distance - b.distance;
            }),
            events: nearbyEvents.sort((a, b) => a.distance - b.distance),
            challenges: nearbyChallenges.sort((a, b) => a.distance - b.distance)
        });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Send Chat Message
app.post('/api/messages', async (req, res) => {
    try {
        const { senderId, receiverId, text } = req.body;
        if (!senderId || !receiverId || !text) return res.status(400).json({ error: 'Missing chat fields' });

        const newMessage = new Message({ senderId, receiverId, text });
        await newMessage.save();

        res.json({ message: newMessage });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Submit Event/Challenge Registration
app.post('/api/events/register', async (req, res) => {
    try {
        const { eventId, eventName, registrantId, registrationData } = req.body;

        if (eventId && mongoose.isValidObjectId(eventId)) {
            const ev = await Event.findById(eventId);
            if (ev) {
                if (!ev.attendees.includes(registrantId)) {
                    ev.attendees.push(registrantId);
                    await ev.save();
                }
            }
        }

        // Find an admin/creator to receive the message (fallback to first user)
        const admin = await User.findOne();
        if (!admin) return res.status(404).json({ error: 'No admin found to receive registration' });

        const messageText = `🚨 New Registration for ${eventName}:\n\n` +
            `Name: ${registrationData.name}\n` +
            `Email: ${registrationData.email}\n` +
            `Phone: ${registrationData.phone || 'N/A'}\n` +
            `Experience: ${registrationData.experience}\n` +
            `Availability: ${registrationData.availability}`;

        const newMessage = new Message({
            senderId: registrantId,
            receiverId: admin._id.toString(),
            text: messageText
        });

        await newMessage.save();

        res.json({ success: true, message: 'Registration submitted to organizer.' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Create Custom Event
app.post('/api/events', async (req, res) => {
    try {
        const {
            name, date, location, image, description, intent,
            creatorId, entranceFee, achievements, registrationEndDate
        } = req.body;

        if (!name || !date || !location || !creatorId) {
            return res.status(400).json({ error: 'Missing required event fields' });
        }

        const newEvent = new Event({
            name,
            date,
            location,
            image: image || '🎟️',
            description,
            intent: intent || 'collaboration',
            creatorId,
            entranceFee: entranceFee || 'Free',
            achievements,
            registrationEndDate
        });

        await newEvent.save();
        res.json({ success: true, event: newEvent });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Delete Custom Event
app.delete('/api/events/:id', async (req, res) => {
    try {
        const eventId = req.params.id;
        const currentUserId = req.query.currentUserId; // passed as query param for DELETE

        if (!currentUserId || !eventId || !mongoose.isValidObjectId(eventId)) {
            return res.status(400).json({ error: 'Invalid request parameters' });
        }

        const eventTarget = await Event.findById(eventId);
        if (!eventTarget) return res.status(404).json({ error: 'Event not found' });

        if (eventTarget.creatorId !== currentUserId) {
            return res.status(403).json({ error: 'Unauthorized to delete this event' });
        }

        await Event.findByIdAndDelete(eventId);
        res.json({ success: true, message: "Event deleted successfully." });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Delete Custom Challenge
app.delete('/api/challenges/:id', async (req, res) => {
    try {
        const challengeId = req.params.id;
        const currentUserId = req.query.currentUserId;

        if (!currentUserId || !challengeId || !mongoose.isValidObjectId(challengeId)) {
            return res.status(400).json({ error: 'Invalid request parameters' });
        }

        const challengeTarget = await Challenge.findById(challengeId);
        if (!challengeTarget) return res.status(404).json({ error: 'Challenge not found' });

        if (challengeTarget.creatorId !== currentUserId) {
            return res.status(403).json({ error: 'Unauthorized to delete this challenge' });
        }

        await Challenge.findByIdAndDelete(challengeId);
        res.json({ success: true, message: "Challenge deleted successfully." });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Get Chat History with specific user
app.get('/api/messages/:partnerId', async (req, res) => {
    try {
        const currentUserId = req.query.currentUserId;
        const partnerId = req.params.partnerId;

        if (!currentUserId || !partnerId) return res.status(400).json({ error: 'Missing user IDs' });

        const messages = await Message.find({
            $or: [
                { senderId: currentUserId, receiverId: partnerId },
                { senderId: partnerId, receiverId: currentUserId }
            ]
        }).sort({ timestamp: 1 }); // Oldest first

        res.json({ messages });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Get All Active Chats for a User
app.get('/api/messages/history/:userId', async (req, res) => {
    try {
        const userId = req.params.userId;

        // Find all messages involving this user
        const messages = await Message.find({
            $or: [{ senderId: userId }, { receiverId: userId }]
        }).sort({ timestamp: -1 });

        // Group by partner and keep the most recent message
        const chatMap = new Map();

        for (const msg of messages) {
            const partnerId = msg.senderId === userId ? msg.receiverId : msg.senderId;

            if (!chatMap.has(partnerId)) {
                // Fetch partner details
                const partner = await User.findById(partnerId, 'name avatar');
                if (partner) {
                    chatMap.set(partnerId, {
                        partnerId: partner._id,
                        name: partner.name,
                        avatar: partner.avatar,
                        lastMessage: msg.text,
                        timestamp: msg.timestamp
                    });
                }
            }
        }

        const history = Array.from(chatMap.values());
        res.json({ history });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// --- GAMIFIED MATCHES ---
app.post('/api/matches', async (req, res) => {
    try {
        const { currentUserId, targetUserId } = req.body;
        if (!currentUserId || !targetUserId) return res.status(400).json({ error: "Missing Target IDs" });

        // Ensure userA is always the lexicographically smaller ID to prevent duplicates (A->B and B->A)
        const [userA, userB] = [currentUserId, targetUserId].sort();

        // Check if an existing match/pending request exists between these two
        let existingMatch = await Match.findOne({ userA, userB });

        if (existingMatch) {
            // If it exists and the OPPOSITE person is initiating this time, upgraded to 'matched'
            if (existingMatch.status === 'pending' && existingMatch.initiatorId !== currentUserId) {
                existingMatch.status = 'matched';
                await existingMatch.save();
                return res.json({ success: true, message: "Mutual Match! You can now chat.", status: 'matched' });
            } else {
                return res.json({ success: true, message: "Match request already sent.", status: existingMatch.status });
            }
        }

        // Otherwise, create a new pending match request
        const newMatch = new Match({
            userA,
            userB,
            status: 'pending',
            initiatorId: currentUserId
        });
        await newMatch.save();

        res.json({ success: true, message: "Match request sent!", status: 'pending' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.get('/api/matches/:userId', async (req, res) => {
    try {
        const { userId } = req.params;
        // Fetch all Matches involving this user
        const matches = await Match.find({
            $or: [{ userA: userId }, { userB: userId }]
        }).sort({ timestamp: -1 });

        // We need to return info about the OTHER user.
        let matchDetails = [];
        for (let m of matches) {
            const partnerId = m.userA === userId ? m.userB : m.userA;
            const partnerDoc = await User.findById(partnerId, 'name avatar talents');
            if (partnerDoc) {
                matchDetails.push({
                    _id: m._id,
                    status: m.status,
                    initiatorId: m.initiatorId,
                    partner: partnerDoc
                });
            }
        }
        res.json({ matches: matchDetails });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// --- COLLABORATION REQUESTS ---
app.post('/api/collabs', async (req, res) => {
    try {
        const { senderId, receiverId, action, collabId } = req.body;

        // Action = 'request', 'accept', 'decline'
        if (action === 'request') {
            const existing = await Collab.findOne({ senderId, receiverId, status: 'pending' });
            if (existing) return res.json({ success: true, message: "Collab already pending" });

            const newCollab = new Collab({ senderId, receiverId, status: 'pending' });
            await newCollab.save();
            return res.json({ success: true, message: "Collaboration request sent!" });
        } else if (action === 'accept' || action === 'decline') {
            if (!collabId) return res.status(400).json({ error: "Missing Collab ID" });
            const statusStr = action === 'accept' ? 'accepted' : 'declined';
            await Collab.findByIdAndUpdate(collabId, { status: statusStr });
            return res.json({ success: true, message: `Collab ${statusStr}` });
        }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.get('/api/collabs/:userId', async (req, res) => {
    try {
        const { userId } = req.params;
        const incoming = await Collab.find({ receiverId: userId, status: 'pending' });
        const outgoing = await Collab.find({ senderId: userId, status: 'pending' });
        const accepted = await Collab.find({
            $or: [{ receiverId: userId }, { senderId: userId }],
            status: 'accepted'
        });

        // Helper to grab populated user info
        const populateUser = async (id) => User.findById(id, 'name avatar');

        // Build payload
        const payloadIncoming = await Promise.all(incoming.map(async c => ({ _id: c._id, user: await populateUser(c.senderId) })));
        const payloadOutgoing = await Promise.all(outgoing.map(async c => ({ _id: c._id, user: await populateUser(c.receiverId) })));

        const payloadAccepted = await Promise.all(accepted.map(async c => {
            const partnerId = c.senderId === userId ? c.receiverId : c.senderId;
            return { _id: c._id, user: await populateUser(partnerId) };
        }));

        res.json({ incoming: payloadIncoming, outgoing: payloadOutgoing, accepted: payloadAccepted });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.listen(PORT, () => {
    console.log(`HOPE Backend running on http://localhost:${PORT}`);
});
