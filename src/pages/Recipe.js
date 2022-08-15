import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import {DetailWrapper,Info,Button} from '../styles/styles'

function Recipe() {

  let params = useParams()
  const [details, setDetails] = useState({})
  const [activeTab, setActiveTab] = useState("instructions")

  const fetchDetails = async () => {

    const data = await fetch(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`)
    const detailData = await data.json()
    setDetails(detailData)
  }

  useEffect(() => {
    fetchDetails()
  }, [params.name])


  return (
    <DetailWrapper>
      <div>
        <h2>{details.title}</h2>
        <img src={details.image} /> 
      </div>
      <Info>
        <Button className={activeTab === "instructions" ? "active" : ""}
          onClick={() => setActiveTab("instructions")}>
          Instructions
        </Button>
        <Button className={activeTab === "ingredients" ? "active" : ""}
          onClick={() => setActiveTab("ingredients")}>
          Ingredients
        </Button>
        {activeTab==="instructions" && (
          <div>
          {/* api den gelen html kodlarını düzenledik. */}
          <h4 dangerouslySetInnerHTML={{__html: details.summary}}></h4>
          <h4 dangerouslySetInnerHTML={{__html: details.instructions}}></h4>
        </div>
        )} 
         {activeTab==="ingredients" && (
         <ul>
         {details.extendedIngredients &&
              details.extendedIngredients.map((ingredient) => (
                <li key={ingredient.id}> {ingredient.original}</li>
              ))}
        </ul>
        )} 
      </Info>
    </DetailWrapper>
  )
}

export default Recipe