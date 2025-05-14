import { useState, useEffect } from 'react';
import axiosClient from '../axiosClient';

const ItemList = () => {
  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    try {
      const res = await axiosClient.get('/items');
      setItems(res.data.items);
    } catch (error) {
      console.error('Error fetching items:', error);
    }
  };

  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <div>
      <h2>Items</h2>
      <ul>
        {items.map((item) => (
          <li key={item._id}>{item.name} - {item.description}</li>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
