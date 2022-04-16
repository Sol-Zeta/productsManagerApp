import React, {useState, useEffect} from 'react';
import {SafeAreaView, View, Text, ScrollView} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {
  getAllProducts,
  getProductById,
  getProductsByPage,
} from '../../redux/ducks/products';
import {StackScreenProps} from '@react-navigation/stack';
import {
  CardList,
  MainBackground,
  Loader,
  FormSwitchInput,
  Pagination,
} from '../../components';
import {MainNavigationParams} from '../../interfaces';
import {calculatePages} from '../../utils';
import {styles} from './styles';

export const Home = ({navigation}: StackScreenProps<MainNavigationParams>) => {
  const [isLoading, setIsLoading] = useState(true);
  const [activeProducts, setActiveProducts] = useState(true);
  const [page, setPage] = useState(0);
  const [pageLimit, setPageLimit] = useState(0);

  const {products} = useSelector((state: any) => state.products);
  const dispatch = useDispatch();

  const productsPerPage = 3;

  const handlePage = (page: number) => {
    console.log(page);
    if (page < pageLimit + 1) {
      setPage(page);
    }
  };

  useEffect(() => {
    setIsLoading(true);
    dispatch(getProductsByPage(page, productsPerPage, activeProducts));
  }, [page, activeProducts]);

  useEffect(() => {
    if (products) {
      const limit = calculatePages(products.data.totalCount, productsPerPage);
      console.log(limit, page, pageLimit);
      setPageLimit(limit);
      setIsLoading(false);
    }
  }, [products]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <MainBackground>
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>TUS PRODUCTOS</Text>
        <FormSwitchInput
          value={activeProducts}
          firstValue={'ocultos'}
          secondValue={'activos'}
          onChange={value => setActiveProducts(value)}
        />
        {/* <CardList
          navigation={navigation}
          direction="horizontal"
          title="Todos los productos"
          list={products ? products.data.list : []}
        /> */}
        <View style={styles.pagination_container}>
          <Pagination limit={pageLimit} value={page} getPage={handlePage} />
        </View>
      </SafeAreaView>
    </MainBackground>
  );
};
