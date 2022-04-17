import axios from 'axios';
import {config} from '../../config';
const {baseUrl} = config;

export const requestGetAllProducts = async (active: boolean) => {
  try {
    const {data} = await axios.get(
      `${baseUrl}?page=0&itemsPerPage=100&active=${active}`,
    );
    console.log('1. AXIOS RESPONSE:', data);
    return {success: true, data};
  } catch (error) {
    console.error('1. AXIOS ERROR', error);
    return {success: false};
  }
};
export const requestGetProductsByPage = async (
  page: number,
  quantity: number,
  active: boolean,
) => {
  try {
    const {data} = await axios.get(
      `${baseUrl}?page=${page}&itemsPerPage=${quantity}&active=${active}`,
    );
    console.log('1. AXIOS RESPONSE GET BY PAGE:', data);
    return {success: true, data};
  } catch (error) {
    console.error('1. AXIOS ERROR', error);
    return {success: false};
  }
};
export const requestGetProductById = async ({id}: {id: string}) => {
  try {
    const {data} = await axios.get(`${baseUrl}/${id}`);
    console.log('1. AXIOS RESPONSE GET BY ID:', data);
    return {success: true, data};
  } catch (error) {
    console.error('1. AXIOS ERROR', error);
    return {success: false};
  }
};
export const requestPutProductById = async (id: string, body: any) => {
  try {
    const {data} = await axios.put(`${baseUrl}/${id}`, body);
    return {success: true, data};
  } catch (error) {
    console.error('1. AXIOS ERROR', error);
    return {success: false};
  }
};
export const requestDeleteProductById = async ({
  id,
  page,
  quantity,
  active,
}: {
  id: string;
  page: number;
  quantity: number;
  active: boolean;
}) => {
  try {
    const {data} = await axios.delete(`${baseUrl}/${id}`);
    console.log('1. AXIOS RESPONSE DELETE:', data);
    if (data._id && data._id === id) {
      const {data} = await requestGetProductsByPage(page, quantity, active);
      if (data) {
        return {success: true, data};
      }
    }
  } catch (error) {
    console.error('1. AXIOS ERROR', error);
    return {success: false};
  }
};
export const requestPostProduct = async ({body}: any) => {
  try {
    const {data} = await axios.post(baseUrl, body);
    console.log('1. AXIOS RESPONSE POST:', data);
    return {success: true, data};
  } catch (error) {
    console.error('1. AXIOS ERROR', error);
    return {success: false};
  }
};
