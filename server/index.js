import express from 'express';
import cors from 'cors';

import { MongoClient } from 'mongodb';

import { createRequire } from 'module';

import groups from './routers/groups.js';

//this code use to import require to module
const require = createRequire(import.meta.url);
const data = require('./data.json');

const app = express();

const PORT = data.PORT || 8000;

app.use(express.json());
app.use(cors());

app.use('/groups', groups);

export const client = new MongoClient(data.DB_CONNECT_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

client.connect((err, client) => {
    if(err) console.log('did not connect:', err);
    console.log('connect successfully');
});

app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));