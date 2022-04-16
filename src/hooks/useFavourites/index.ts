import {useEffect, useState} from 'react';
import {useAsyncStorage} from '@react-native-async-storage/async-storage';

export const useFavourites = () => {
  const [newFav, setNewFav] = useState<string>('');
  const [allFavs, setAllFavs] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const {setItem, removeItem, getItem} = useAsyncStorage('favourites');

  const setFavouriteItem = async (item: string) => {
      console.log("agregar a favoritos", item)
      setIsLoading(true)
    try {
      const itemsToStore = JSON.stringify([...allFavs, item]);
      await setItem(itemsToStore);
      setAllFavs([...allFavs, item]);
    } catch (error) {
      console.error('Error writting local storage', error);
    } finally {
        setIsLoading(false)
    }
  };

  const getAllFavourites = async () => {
    setIsLoading(true)
    try {
      const response = await getItem();
      console.log('get fav', response);
      if (response) {
        const data = await JSON.parse(response);
        setAllFavs(data);
      } else {
        setAllFavs([]);
      }
    } catch (error) {
      console.error('Error reading local storage', error);
      setAllFavs([]);
    } finally {
        setIsLoading(false)
    }
  };

  const removeFavourite = async (item: string) => {
    setIsLoading(true)
    try {
      if (allFavs.length) {
        const newFavourites = allFavs.filter((e: string) => e !== item);
        await setItem(JSON.stringify(newFavourites));
        setAllFavs(newFavourites);
        console.log('nuevos favs despues de borrar', newFavourites)
      }
    } catch (error) {
      console.error('Error deleting local storage');
    } finally {
        setIsLoading(false)
    }
  };

  useEffect(() => {
    getAllFavourites();
  }, []);

  useEffect(() => {
      console.log('hola effect is loading', isLoading)
    if (!isLoading && newFav !== '') {
        console.log('setting favouriteitem')
      setFavouriteItem(newFav);
    }
  }, [newFav]);

  useEffect(() => {
    console.log("loading", isLoading)
  }, [isLoading])
  
  

  const removeFavID = (id: string) => removeFavourite(id);
  const addFavID = (id: string) => {
    if (!allFavs.includes(id)) {
        setNewFav(id);
        console.log("agregando id", id)
    }
  };

  const isFavID = (id: string) => {
      return allFavs.includes(id)
    };

  return {removeFavID, addFavID, allFavs, isFavID};
};
