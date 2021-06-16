import express from "express";
import mongoose from "mongoose";
import cors from 'cors';

import itemRoutes from './routes/items.js'

const app = express();
const PORT = 5000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());

app.use('/items', itemRoutes);

mongoose.connect('mongodb://localhost:27017/trelloDB', {useNewUrlParser: true, useUnifiedTopology: true});

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
});
