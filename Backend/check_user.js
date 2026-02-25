const mongoose = require('mongoose');

const MONGO_URI = 'mongodb+srv://dancernabi_db_user:Nabi2005@cluster0.blsmvvs.mongodb.net/hope_db?appName=Cluster0';

const userSchema = new mongoose.Schema({
    email: String,
    name: String,
    talents: mongoose.Schema.Types.Mixed,
    bio: String,
    age: Number,
    location: mongoose.Schema.Types.Mixed
}, { strict: false });

async function checkUser() {
    try {
        await mongoose.connect(MONGO_URI);
        const User = mongoose.model('User', userSchema);

        const user = await User.findOne({ email: 'dancernabi@gmail.com' });
        console.log("User Data in DB:");
        console.log(JSON.stringify(user, null, 2));
    } catch (e) {
        console.error(e);
    } finally {
        await mongoose.disconnect();
    }
}

checkUser();
