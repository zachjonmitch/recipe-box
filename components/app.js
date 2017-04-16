import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import AddRecipeModal from './add-recipe.js';
import Recipes from './recipes.js';

export default class App extends Component {
  constructor(props) {
        super(props);
        this.state = {
            recipeList: [
              {title: 'Steak Tacos', ingredients: ['one', 'dfks', 'three', 'four']},
              {title: 'Blueberry Pancakes', ingredients: ['one', 'two', 'd;fkaj', 'four']},
              {title: 'Teriyaki Chicken', ingredients: ['askl;dfj', 'two', 'three', 'four']}
          ],
            newRecipeTitle: '',
            newRecipeIngredients: ''
        };
        this._handleSubmit = this._handleSubmit.bind(this);
        this._handleRecipeChange = this._handleRecipeChange.bind(this);
        this._handleIngredientsChange = this._handleIngredientsChange.bind(this);
        this._deleteItem = this._deleteItem.bind(this);
        this._editItem = this._editItem.bind(this);
    }
    
  _handleRecipeChange(e) {
    this.setState({newRecipeTitle: e.target.value});
  }
  
  _handleIngredientsChange(e) {
    this.setState({newRecipeIngredients: e.target.value.split(',')});
  }

  _handleSubmit()  {
    var newRecipe = [{title: this.state.newRecipeTitle, ingredients: this.state.newRecipeIngredients}];
    this.setState({recipeList: this.state.recipeList.concat(newRecipe)});
  }
  
  _editItem(recipe) {
    var array = this.state.recipeList;
    var index = array.indexOf(recipe);
    var recipeList = array.slice();
    recipeList[index] = {title: this.state.newRecipeTitle, ingredients: this.state.newRecipeIngredients};
    this.setState({recipeList: recipeList});
  }
  
  _deleteItem(recipe) {
    var array = this.state.recipeList;
    var index = array.indexOf(recipe);
    array.splice(index, 1);
    this.setState({recipeList: array});
  }
    
  render() {
    return (
      <div>
        <Recipes recipeList={this.state.recipeList} deleteItem={this._deleteItem} editItem={this._editItem} handleRecipeChange={this._handleRecipeChange} handleIngredientsChange={this._handleIngredientsChange} />
        <AddRecipeModal recipeList={this.state.recipeList} handleSubmit={this._handleSubmit} handleRecipeChange={this._handleRecipeChange} handleIngredientsChange={this._handleIngredientsChange}/>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('render-target'));