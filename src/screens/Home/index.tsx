import React, {useState, useEffect} from 'react';
import {SafeAreaView, View, Text} from 'react-native';
import {useFocusEffect} from '@react-navigation/native';
import {useSelector, useDispatch} from 'react-redux';
import {getProductsByPage} from '../../redux/ducks/products';
import {StackScreenProps} from '@react-navigation/stack';
import {
  CardList,
  MainBackground,
  Loader,
  FormSwitchInput,
  Pagination,
  Modal,
} from '../../components';
import {MainNavigationParams} from '../../interfaces';
import {calculatePages} from '../../utils';
import {styles} from './styles';

export const Home = ({navigation}: StackScreenProps<MainNavigationParams>) => {
  const [isLoading, setIsLoading] = useState(true);
  const [allProducts, setAllProducts] = useState([]);
  const [activeProducts, setActiveProducts] = useState(true);
  const [activePage, setActivePage] = useState(0);
  const [pageLimit, setPageLimit] = useState(0);
  const [isOnBlur, setIsOnBlur] = useState(true);

  const {products, totalProducts, getProductsSuccess} =
    useSelector((state: any) => state.products);
  const dispatch = useDispatch();

  const productsPerPage = 3;

  const handlePage = (page: number) => {
    if (page <= pageLimit) {
      setActivePage(page);
    }
  };

  useEffect(() => {
    setIsLoading(true);
    dispatch(getProductsByPage(activePage, productsPerPage, activeProducts));
  }, [activePage]);

  useEffect(() => {
    dispatch(getProductsByPage(activePage, productsPerPage, activeProducts));
  }, [activeProducts]);

  useEffect(() => {
    setIsLoading(false);
    if (getProductsSuccess && products) {
      setAllProducts(products);
    } else {
      setAllProducts([]);
    }
  }, [products]);

  useEffect(() => {
    if (totalProducts > 0) {
      const limit = calculatePages(totalProducts, productsPerPage);
      setPageLimit(limit);
    } else {
      setPageLimit(0);
    }
  }, [totalProducts]);

  useEffect(() => {
    if (!isOnBlur) {
      setIsLoading(true);
      dispatch(getProductsByPage(activePage, productsPerPage, activeProducts));
    }
  }, [isOnBlur]);

  useFocusEffect(() => {
    setIsOnBlur(false);
    return () => {
      setIsOnBlur(true);
    };
  });

  if (isLoading) {
    return <Loader />;
  }
  if (!getProductsSuccess) {
    return (
      <Modal
        title="Lo sentimos"
        text="Estamos experimentando problemas con el servidor y no podemos mostrarte la información en estos momentos"
        openModal={true}
      />
    );
  }

  return (
    <MainBackground>
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>TUS PRODUCTOS</Text>
        <View style={styles.switch_container}>
          <FormSwitchInput
            value={activeProducts}
            firstValue={'ocultos'}
            secondValue={'activos'}
            onChange={value => setActiveProducts(value)}
          />
        </View>
        <CardList
          navigation={navigation}
          direction="horizontal"
          title="Todos los productos"
          list={allProducts}
        />
        <View style={styles.pagination_container}>
          <Pagination
            limit={pageLimit}
            value={activePage}
            getPage={handlePage}
          />
        </View>
      </SafeAreaView>
    </MainBackground>
  );
};
