import { useState, useEffect } from 'react'
import { useParams,Link } from 'react-router-dom'
import { Grid, CardRecipe} from '../styles/styles';

function Searched() {

    const [searchedRecipes, setSearchedRecipes] = useState([])
    let params = useParams()

    const getSearched = async (name) => {

        const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${name}`)
        const recipes = await data.json()
        setSearchedRecipes(recipes.results)
    }
    
    useEffect(() => {
        getSearched(params.search)
    }, [params.search])
    

    return (
        <Grid>
        {searchedRecipes.map((item)=>{
          return(
            <CardRecipe key={item.id}>
                <Link to={'/recipe/' + item.id}>
              <img src={item.image} alt=""/>
              <h4>{item.title}</h4>
              </Link>
            </CardRecipe> 
          )
        })}
      </Grid>
    )
}

export default Searched