import { CssBaseline, Grid, makeStyles } from '@material-ui/core';
import { Fragment, useState } from 'react';
import { Header, Footer } from '../components/layouts'
import Main from '../components/Main';
import { products, categories } from '../store'

function App() {

  const useStyles = makeStyles({
    appMain: {
      marginLeft: '320px',
      width: '100%'
    }
  })

  const classes = useStyles();
  const [storeProducts, setStoreProducts] = useState(products);

  console.log(storeProducts);

  const getProductByCategory = () => {
    return storeProducts.reduce((products, product) => {
      const { category } = product;
      
      products[category] =products[category] ? [...products[category], product] : [product]
      return products;
    }, {})

  }

  console.log(getProductByCategory);
  return (
    <Fragment>
      <Header />
      <Main />
      <Footer products={products} categories={categories} />
    </Fragment>




  );
}

export default App;
