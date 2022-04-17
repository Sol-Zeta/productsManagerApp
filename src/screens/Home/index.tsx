import React, {useState, useEffect} from 'react';
import {SafeAreaView, View, Text, ScrollView} from 'react-native';
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
  const [page, setPage] = useState(0);
  const [pageLimit, setPageLimit] = useState(0);

  const {products, totalProducts, getProductsSuccess} = useSelector(
    (state: any) => state.products,
  );
  const dispatch = useDispatch();

  const productsPerPage = 3;

  const handlePage = (page: number) => {
    if (page <= pageLimit) {
      setPage(page);
    }
  };

  useEffect(() => {
    console.log('accion que se repite?')
    setIsLoading(true);
    dispatch(getProductsByPage(page, productsPerPage, activeProducts));
  }, [page]);

  useEffect(() => {
    console.log('active', activeProducts);
    // dispatch(getProductsByPage(page, productsPerPage, activeProducts));
  }, [activeProducts]);

  useEffect(() => {
    setIsLoading(false);
    if (getProductsSuccess && products) {
      const limit = calculatePages(totalProducts, productsPerPage);
      setPageLimit(limit);
      setAllProducts(products);
    } else {
      setAllProducts([]);
    }
  }, [products]);

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
          <Pagination limit={pageLimit} value={page} getPage={handlePage} />
        </View>
      </SafeAreaView>
    </MainBackground>
  );
};
