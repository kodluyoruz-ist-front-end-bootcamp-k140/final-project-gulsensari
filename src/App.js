import styled from "styled-components";
import Category from "./components/Category";
import Pages from "./pages/Pages"
import { BrowserRouter, Link } from 'react-router-dom'
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

const Logo = styled(Link)`
text-decoration:none;
font-size:2.2rem;
font-weight:500;
font-family:'Lobster Two', cursive;

`
const Nav = styled.div`
padding:4rem 0rem;
display:flex;
justify-content:flex-start;
align-items:center;
svg{
  font-size:2rem; 
}
`

export default App;
