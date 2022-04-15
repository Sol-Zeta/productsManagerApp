import {useState, useEffect} from 'react';
import {requestOptions} from '../utils';
import {IProduct} from '../interfaces';
const baseUrl = process.env.BASE_API_URL || 'http://localhost:9000/products/';

export const Store = () => {
  const [products, setProducts] = useState<IProduct[] | []>([]);
  const [productById, setProductById] = useState<IProduct[] | []>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const getProductsByPage = async (itemId: string) => {
    setIsLoading(true);
    try {
      const response = await fetch(baseUrl);
      const data = await response.json();
      console.log('data', data);
      return data;
    } catch (error) {
      console.error('cannot fetch data');
    } finally {
      setIsLoading(false);
    }
  };

  const getProductById = async (itemId: string) => {
    setIsLoading(true);
    try {
      const response = await fetch(`${baseUrl}${itemId}`);
      const data = await response.json();
      console.log('data', data);
      return data;
    } catch (error) {
      console.error('cannot fetch data');
    } finally {
      setIsLoading(false);
    }
  };

  const updateProductById = async (itemId: string, body: IProduct) => {
    setIsLoading(true);
    try {
      const response = await fetch(`${baseUrl}${itemId}`);
      const data = await response.json();
      console.log('data', data);
      return data;
    } catch (error) {
      console.error('cannot fetch data');
    } finally {
      setIsLoading(false);
    }
  };

  const deleteProduct = async (itemId: string) => {
    try {
      const response = await fetch(
        `${baseUrl}${itemId}`,
        requestOptions('delete'),
      );
      const data = await response.json();
      console.log('data', data);
      return data;
    } catch (error) {
      console.error('cannot fetch data');
    } finally {
      setIsLoading(false);
    }
  };

  const createProduct = async (body: IProduct) => {
    try {
      const response = await fetch(baseUrl,
        requestOptions('put', body),
      );
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('cannot fetch data');
    } finally {
      setIsLoading(false);
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
    productById,
    getProductsByPage,
    getProductById,
    isLoading,
    deleteProduct,
    createProduct
  };
};
