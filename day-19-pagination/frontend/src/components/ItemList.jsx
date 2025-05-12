import { useState, useEffect } from 'react';
import axiosClient from '../axiosClient';

const ItemList = () => {
    const [items, setItems] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    const fetchItems = async (page) => {
        try {
            const res = await axiosClient.get(`/items?page=${page}&limit=5`);
            console.log(res)
            setItems(res.data.items);
            setTotalPages(res.data.totalPages);
        } catch (err) {
            console.error(err);
        }
    };

    useEffect(() => {
        fetchItems(page);
    }, [page]);

    return (
        <div>
            <h2>Items</h2>
            <ul>
                {items.map((item) => (
                    <li key={item._id}>{item.name}</li>

                ))}
            </ul>
            <div>
                <button onClick={() => setPage((p) => Math.max(p - 1, 1))} disabled={page === 1}>
                    Previous
                </button>
                <span> Page {page} of {totalPages} </span>
                <button onClick={() => setPage((p) => Math.min(p + 1, totalPages))} disabled={page === totalPages}>
                    Next
                </button>
            </div>
        </div>
    );
};

export default ItemList;