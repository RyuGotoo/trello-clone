import express from "express";
import mongoose from "mongoose";

import itemRoutes from './routes/items.js'

const app = express();
const PORT = 3000;

app.use('/items', itemRoutes);

app.use(express.json());
app.use(express.urlencoded({extended: true}));

mongoose.connect('mongodb://localhost:27017/trelloDB', {useNewUrlParser: true, useUnifiedTopology: true});

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
});
