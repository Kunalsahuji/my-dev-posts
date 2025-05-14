const Item = require('../models/taskModel');

// Create Item
const createItem = async (req, res) => {
  try {
    const newItem = await Item.create(req.body);
    res.status(201).json({ message: 'Item Created!', item: newItem });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get All Items
const getItems = async (req, res) => {
  try {
    const items = await Item.find();
    res.status(200).json({ items });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update Item
const updateItem = async (req, res) => {
  try {
    const updatedItem = await Item.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json({ message: 'Item Updated!', item: updatedItem });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete Item
const deleteItem = async (req, res) => {
  try {
    await Item.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Item Deleted!' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { createItem, getItems, updateItem, deleteItem };