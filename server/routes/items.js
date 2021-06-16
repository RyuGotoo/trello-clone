import express from "express";

import { getItems, createItem, editItem, deleteItem } from "../controllers/items.js"

const router = express.Router();

router.get('/', getItems);
router.post('/', createItem);
router.patch('/:id', editItem);
router.delete('/:id', deleteItem);

export default router;