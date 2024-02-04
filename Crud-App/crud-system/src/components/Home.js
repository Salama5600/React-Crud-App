import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Header";
import Main from "./Main";
import AddProducts from "./AddProduct";

function Home() {
  return (
    <BrowserRouter>
      <div className="home">
        <Header />
        <Routes>
            <Route path="/" element={<Main />}/>
            <Route path="AddProducts" element={<AddProducts />}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default Home;
