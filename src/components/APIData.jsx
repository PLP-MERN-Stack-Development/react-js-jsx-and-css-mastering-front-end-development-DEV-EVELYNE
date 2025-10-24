import React, { useState, useEffect } from 'react';
import axios from 'axios';
axios.get(`${import.meta.env.VITE_API_URL}/api/tasks`)
  .then(res => setData(res.data))
  .catch(err => setError(err));


const APIData = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get(import.meta.env.VITE_API_URL)
      .then(res => {
        // Make sure data is an array
        if (Array.isArray(res.data)) {
          setData(res.data);
        } else if (Array.isArray(res.data.items)) {
          setData(res.data.items);
        } else {
          setData([]);
          console.warn('API returned unexpected data format:', res.data);
        }
      })
      .catch(err => {
        console.error('Error fetching API data:', err);
        setError(err);
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error fetching data</p>;
  if (!data.length) return <p>No data found</p>;

  return (
    <ul className="list-disc pl-6">
      {data.slice(0, 10).map(item => (
        <li key={item.id || item.title || Math.random()}>
          {item.title || JSON.stringify(item)}
        </li>
      ))}
    </ul>
  );
};

export default APIData;
