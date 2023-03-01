import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useSelector } from "react-redux";

function App() {
  const isShow = useSelector((state) => state.showCart.isShow);

  return (
    <Layout>
      {isShow && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
