import React, { useEffect, useState } from "react";
import "./App.css";
import Recipe from "./Recipe.js";

const App = () => {
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState(['']);
  const [query,setQuery] = useState('');
  const [calo,setCalo] = useState(50000);

  
 const handleChange = e => {
   setCalo([e.target.value]);
 }


  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(
      "https://api.edamam.com/search?q="+query+"&app_id=79d109dc&app_key=8b9d3652d35b50f1a15bcb7ab2712113&from=0&to=30"
      
    );
    const data = await response.json();
    setRecipes(data.hits);
    
  };

const updateSearch = e => {
  setSearch(e.target.value);
}
const getSearch = e => {
  e.preventDefault();
  setQuery(search);
}

  return (

   
    <div className="App">
      <form onSubmit={getSearch} className="form">
        
        <input className="search" type="text" value={search} onChange={updateSearch} placeholder="Search your Favorites dishes"/>
        <input  className="calories" type="text" onChange={handleChange} placeholder="Maximum Calories" name="calo"/>
        <button className="button" type="submit" >
          Go
        </button>
      </form>
      <div className="styles">
      {recipes.map((recipe) =>  ( 
        <Recipe 
          key={recipe.recipe.label}   
          label={recipe.recipe.label}
          calo={recipe.recipe.calories}
          img={recipe.recipe.image}
          steps={recipe.recipe.ingredients}
          caloriescount={calo}
          healthLabels={recipe.recipe.healthLabels}
          source={recipe.recipe.source}
          url={recipe.recipe.url}
        />
      )
       )
       }
      </div>
      <center className="footerNote">Made for Education purpose only <br></br> Developed by <a href="http://jaypatel.online/">Jay Patel</a> <br></br>
      Github:-  <a href="https://github.com/jayPatel222/RecipeApp">Recipe App</a> </center>
    </div>
  );

      }
export default App;
