import styled from "styled-components"
import {motion} from 'framer-motion'
import { NavLink,Link } from 'react-router-dom'

export const Wrapper = styled.div`
margin: 4rem 0rem;
h3{
  color:crimson;
}
`
export const Card = styled.div`
min-height: 25rem;
border-radius:2rem;
overflow:hidden;
position:relative;
img{
  border-radius:2rem;
  position:relative;
  left:50;
  width:100%;
  height:100%;
  object-fit:cover;
}
p{
  position:absolute;
  bottom:0%;
  transform:translate(-50% , 0%)
  width:100%;
  text-align:center;
  font-weight:600;
  font-size:1rem;
  height:50%;
  display:flex;
  justify-content:center;
  align-items:center;
}
`
export const List=styled.div`
display:flex;
margin:2rem 0rem;
justify-content:center;
`
export const SLink=styled(NavLink)`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
border-radius:50%;
margin-right:2rem;
text-decoration:none;
background:linear-gradient(35deg, #494949, #313131);
width:6rem;
height:6rem;
cursor:pointer;
transform:scale(0.8);
h4{
    color:white;
    font-size:0.8rem;   
}
svg{
    color:white;
    font-size:1.5rem; 
}
&.active{
   background:linear-gradient(to right , #f27121, #e94057);
   svg{
    color:white;
   }
   h4{
    color:white; 
   }
}
`
export const FormStyle = styled.form`
margin: 0rem 20rem;
div{
   width:100%;
   position:relative;

}
input{
    width:100%;
    border:none;
    background:linear-gradient(35deg, #494949, #313131);
    font-size:1.5rem;
    color:white;
    padding:1rem 3rem;
    border-radius:1rem;
    outline:none;
}
svg{
    position:absolute;
    top:50%;
    left:0%;
    color:white;
    transform:translate(100%, -50%)
}
`
export const Grid=styled(motion.div)`
display:grid;
grid-template-columns: repeat(auto-fit,minmax(20rem, 1fr));
grid-grap:3rem;
`
export const CardRecipe=styled.div`
  img{
    width:100%;
    border-radius:2rem;
    padding:1rem;
    }
   a{
      text-decoration:none;
    }
    h4{
      text-align:center;
      padding:1rem;
    }
`
export const DetailWrapper = styled.div`
margin-top:10rem;
margin-bottom:5rem;
display:flex;
.active{
  background:linear-gradient(35deg , #494949, #313131);
  color:white;
}
h2{
  margin-bottom:5rem;  
}
li{
  font-size:1rem;
  line-height:2rem; 
}
ul {
  margin-top:2rem; 
}
h4 {
  margin-top:2rem; 
}
`
export const Button = styled.button`
padding:1rem 2rem;
color:#313131;
background:white;
border:1px solid ;
border-radius:2rem;
margin-right:2rem;
font-weight:600;
cursor:pointer;  
`
export const Info = styled.div`
margin-left:5rem;
`

export const Logo = styled(Link)`
text-decoration:none;
font-size:2.2rem;
font-weight:500;
font-family:'Lobster Two', cursive;

`
export const Nav = styled.div`
padding:4rem 0rem;
display:flex;
justify-content:flex-start;
align-items:center;
svg{
  font-size:2rem; 
}
`