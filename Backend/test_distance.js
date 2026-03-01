const mongoose = require('mongoose');
const MONGO_URI = 'mongodb+srv://dancernabi_db_user:Nabi2005@cluster0.blsmvvs.mongodb.net/hope_db?appName=Cluster0';

async function checkLocations() {
    await mongoose.connect(MONGO_URI);
    const db = mongoose.connection;
    const users = db.collection('users');

    const myUser = await users.findOne({ email: 'dancernabi@gmail.com' });
    const madhuUser = await users.findOne({ name: 'Madhu' });

    console.log('--- My User ---');
    console.log(myUser.name);
    console.log(myUser.location);

    console.log('\n--- Madhu User ---');
    console.log(madhuUser ? madhuUser.name : 'Not Found');
    console.log(madhuUser ? madhuUser.location : 'N/A');

    await mongoose.disconnect();
}
checkLocations();
