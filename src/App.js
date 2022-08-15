import {Logo,Nav} from "../src/styles/styles"
import Category from "./components/Category";
import Pages from "./pages/Pages"
import { BrowserRouter } from 'react-router-dom'
import Search from "./components/Search";
import { GiKnifeFork } from "react-icons/gi"

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav>
          <GiKnifeFork  />
          <Logo to={'/'}>World Kitchen</Logo>
        </Nav>
        <Search />
        <Category />
        <Pages />
      </BrowserRouter>
    </>
  );
}


export default App;
