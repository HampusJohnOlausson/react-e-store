import '../../style/Main.css'
import Startpage from './Startpage';
import ProductPage from './ProductPage';
import { Route, Switch } from 'react-router';
import ProductItem from './ProductItem';
import Checkout from '../Checkout/Checkout';
import OrderView from '../Orderview/OrderView';
import AdminPage from './Admin/AdminPage';
import AddNewProduct from './Admin/AddNewProduct';
import About from './About';

const MainContent = () => {

    return (
      <main>
        <Switch>
          <Route exact path="/" component={Startpage}/>
          <Route path="/products" component={ProductPage}/>
          <Route path={"/productItem/:id"} component={ProductItem}/>
          <Route path="/checkout" component={Checkout}/>
          <Route path="/orderview" component={OrderView}/>
          <Route path="/about" component={About}/>
          <Route path="/admin" component={AdminPage}/>
          <Route path="/addNewProduct" component={AddNewProduct}/>
          <Route path={"/editProduct/:id"} component={AddNewProduct}/>
        </Switch>
      </main>
    );
}

export default MainContent
