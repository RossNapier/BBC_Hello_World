const express = require('express');
const app = express();

const cors = require('cors');
app.use(cors());

const createRouter = require('./helpers/create_router');
const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://127.0.0.1:27017', {useUnifiedTopology:true})
    .then((client) => {
        const db = client.db('planets');
        const planetsCollection = db.collection('planets');
        const planetsRouter = createRouter(planetsCollection);
        app.use('/api/planets', planetsRouter);
    })
    .catch(console.error);

MongoClient.connect('mongodb://127.0.0.1:27017', {useUnifiedTopology:true})
    .then((client) => {
        const db = client.db('planets');
<<<<<<< HEAD
        const solarSystemCollection = db.collection('solarsystem');
        const solarSystemRouter = createRouter(solarSystemCollection);
        app.use('/api/solarsystem', solarSystemRouter);
=======
        const questionsCollection = db.collection('questions');
        const questionsRouter = createRouter(questionsCollection);
        app.use('/api/questions', questionsRouter);
>>>>>>> c79bd1171c0265ea16bd06dfc211da785086240d
    })
    .catch(console.error);

app.listen(5000);