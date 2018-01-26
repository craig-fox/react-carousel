const express = require('express');
const app = express();
const Datastore = require('nedb'),
    db = new Datastore({
        filename: 'db.json',
        autoload: true
    });
const port = process.env.PORT || 5000;

app.get(['/chars'], (req, res) => {
    db.find({},(err, chars) => {
        res.setHeader('Content-Type', 'application/json');
        res.send({chars: chars});
    });
});

app.listen(port, () => console.log(`Listening on port ${port}`));
