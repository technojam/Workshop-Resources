import React, { Component } from 'react';
import Navbar from './Navbar';
import RecipeInput from './RecipeInput';
import RecipeList from './RecipeList';
import './RecipeApp.css';

class RecipeApp extends Component {
  constructor(props){
    super(props);
    this.state = {
      //default recipes
      recipes: [{
            id: 0,
            title: 'Pasta', 
            ingredients: ['water', 'flour'], 
            instructions: 'Mix ingredients',
            img: 'https://images-gmi-pmc.edge-generalmills.com/8890dc0a-ec93-4adf-b496-d6b264b56818.jpg'
          }, {
            id: 1,
            title: "Avocado Toast", 
            ingredients: ['2 slices of bread', '1 avocado', '1 tablespoon olive oil', '1 pinch of salt', 'pepper'], 
            instructions: 'Toast bread. Slice avocado and spread on bread. Add salt, and pepper to taste',
            img: "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2015/12/11/0/FNK_All-the-Avocado-Toast_s4x3.jpg.rend.hgtvcom.616.462.suffix/1450059496131.jpeg"
          }, {
            id: 2,
            title: 'Milkshake',
            ingredients: ['2 Scoops Ice cream', '8 ounces milk'],
            img: 'https://www.aheadofthyme.com/wp-content/uploads/2017/08/5-minute-blackberry-milkshake-14.jpg',
            instructions: 'Combine ice cream and milk. Blend until creamy.'
          }],
      nextRecipeId: 3,
      showForm: false
    }
    this.handleSave = this.handleSave.bind(this);
    this.onDelete = this.onDelete.bind(this);
  }
  
  //saving new recipe that comes from the RecipeInput
  handleSave(recipe) {
    this.setState((prevState, props) => {
      const newRecipe = {...recipe, id: this.state.nextRecipeId};
      return {
        nextRecipeId: prevState.nextRecipeId + 1,
        recipes: [...this.state.recipes, newRecipe],
        showForm: false
      }
    })
  }
  
  //deleting the recipe by id
  onDelete(id) {
    const recipes = this.state.recipes.filter(r => r.id !== id);
    this.setState({recipes});
  }
  
  render() {
    const {showForm} = this.state;
    return (
      <div className="App">
        <Navbar onNewRecipe={() => this.setState({showForm: true})}/>
        { showForm ? 
          <RecipeInput 
            onSave={this.handleSave} 
            onClose={() => this.setState({showForm: false})}
          /> : 
        null }
        <RecipeList recipes={this.state.recipes} onDelete={this.onDelete}/>
      </div>
    );
  }
}

export default RecipeApp;
