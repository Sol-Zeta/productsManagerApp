import {useState, useEffect} from 'react';
import { IProduct } from '../interfaces';

export const Store = () => {
const [products, setProducts] = useState<IProduct[] | []>([])
const [isLoading, setIsLoading] = useState<boolean>(true)

const getItemData = async (itemId: string) => {
    setIsLoading(true)
    try {
      const response = await fetch(`http://localhost:9000/products/${itemId}`);
      const data = await response.json();
      console.log('data', data);
      return data;
    } catch (error) {
      console.error('cannot fetch data');
    } finally {
        setIsLoading(false)
    }
  };
  useEffect(() => {
    // getItemData()
    //   .then(data => setProducts(data))
    //   .then(() => setIsLoading(false))
    //   .catch(error => console.error(error));
  }, []);


  return {
    products,
    getItemData,
    isLoading
  }
}
