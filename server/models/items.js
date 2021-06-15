import mongoose from 'mongoose';

const itemSchema = new mongoose.Schema({
    content: String,
    detail: String,
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Item = mongoose.model('Item', itemSchema);

export default Item;