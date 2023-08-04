import { useState, useEffect } from 'react';
import axios from 'axios';
import { CardItem } from '../components';

axios.defaults.baseURL = 'http://localhost:3001/cars';

export default function CardList() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    async function getAllCars() {
      try {
        const response = await axios.get('/');
        const data = response.data;
        setItems(data);
      } catch (error) {
        console.log('error: ', error);
      }
    }
    getAllCars();
  }, []);

  if (!items) {
    return <h3>Loading ...</h3>;
  }

  return (
    <ul className="list">
      {items.map((item) => (
        <CardItem key={item.id} car={item} />
      ))}
    </ul>
  );
}
