import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage"
import InformationPage from "./pages/InformationPage"
import Products from "./pages/Products"
import DefaultLayout from "./layout/DefaultLayout"
import SingleProduct from "./pages/SingleProduct"




function App(){
  return(
  <>
  
  <BrowserRouter>
  <Routes>

<Route Component={DefaultLayout}>

<Route path="/" Component={HomePage}></Route>
<Route path="/contacts" Component={InformationPage}></Route>
<Route path="/products" Component={Products}></Route>
<Route path="/products/:id" Component={SingleProduct}></Route>

</Route>



  </Routes>
  
  
  </BrowserRouter>
  </>
  )
}

export default App
