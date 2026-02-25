fetch('https://hope-backend-445i.onrender.com/api/user/699f276b899f4db0446f8566')
    .then(res => res.json())
    .then(data => console.log(JSON.stringify(data, null, 2)))
    .catch(err => console.error(err));
