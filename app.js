const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 9100;
const mongouri = process.env.MONGO_URI;

app.use(express.json());

app.use(require('./routes/home'));
app.use((req, res) => res.sendStatus(404));

mongoose.connect(mongouri).then(() => {
    app.listen(port, () => {
        console.log('Listening at port', port);
    });
});
