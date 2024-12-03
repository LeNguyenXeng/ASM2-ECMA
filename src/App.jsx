import { Toaster } from "react-hot-toast";
import { useRoutes } from "react-router-dom";
import Home from "./page/home";
import ProductPage from "./page/ProductPage";
import PageCart from "./page/PageCart";
import CheckOut from "./page/Checkout";
import Shipping from "./components/Shipping";
import Banner from "./components/Banner";

function App() {
  const routes = [
    {
      path: "/",
      element: <Home/>
    },
    {
      path: "productpage",
      element: <ProductPage/>
    },
    {
      path: "pagecart",
      element: <PageCart/>
    },
    {
      path: "checkout",
      element: <CheckOut/>
    },
    {
      path: "shipping",
      element: <Shipping/>
    },
    {
      path: "banner",
      element: <Banner/>
    },


];
  const element = useRoutes(routes)
  return (
    <main>
      <div className="container my-2">{element}</div>
      <Toaster />
    </main>
  );
}

export default App;
