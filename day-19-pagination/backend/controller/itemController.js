const Item = require('../model/itemModel');

const getPaginatedItems = async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 5;
  const skip = (page - 1) * limit;

  try {
    const items = await Item.find().skip(skip).limit(limit);
    const total = await Item.countDocuments();
    res.status(200).json({
      page,
      limit,
      totalPages: Math.ceil(total / limit),
      tota_data: total,
      items,
    });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching items', error });
  }
};

const createItems = async (req, res) => {
  try {
    const item = await Item.create(req.body)
    res.status(201).json({
      message: 'Item Created!',
      item
    })
  } catch (error) {
    console.log(error)
    res.status(404).json({ error: error.message })
  }
}

module.exports = { getPaginatedItems, createItems };
