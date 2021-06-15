import Item from '../models/items.js';

export const getItems = async (req, res) => {
    console.log('controllers/getItems');
    try {
        const items = await Item.find();
        res.status(200).json(items);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

export const createItem = async (req, res) => {
    const content = req.body.content;
    const detail = req.body.detail;
    const item = new Item({content, detail});
    try {
        await item.save().then(() => {
            res.status(201).json(item);
        })
    } catch (error) {
        res.status(401).json({ message: error.message });
    };
}