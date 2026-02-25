const mongoose = require('mongoose');
const MONGO_URI = 'mongodb+srv://dancernabi_db_user:Nabi2005@cluster0.blsmvvs.mongodb.net/hope_db?appName=Cluster0';

async function getId() {
    await mongoose.connect(MONGO_URI);
    const db = mongoose.connection;
    const user = await db.collection('users').findOne({ email: 'dancernabi@gmail.com' });
    console.log(user._id);
    await mongoose.disconnect();
}
getId();
