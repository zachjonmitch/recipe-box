import React from 'react';

const Recipes = ({ recipeList }) => {
    let count = 0
    
    const Items = recipeList.map((recipe) => {
        count++
        
        const itemIngredients = recipe.ingredients.map((ingredient) => {
            return <div className="panel panel-default">{ingredient}</div>
        });
        
        return (
                    <div className="panel panel-success">
                        <div className="panel-heading">
                            <h4 className="panel-title">
                                <a data-toggle="collapse" href={`#collapse${count}`}>{recipe.title}</a>
                            </h4>
                        </div>
                        <div id={`collapse${count}`} className="panel-collapse collapse">
                            <div className="panel-body">
                                <h3 className="text-center">Ingredients</h3>
                                <hr className="breakLine"></hr>
                                <div>{itemIngredients}</div>
                                <button className="btn btn-danger">Delete</button>
                                <button className="btn btn-default">Edit</button>
                            </div>
                        </div>
                    </div>
            );
    });
  
    return (
        <div className="container">
            <div className="well recipeTable">
                <div className="panel-group">
                    <div>{Items}</div>
                </div>
            </div>
        </div>    
    );
}

export default Recipes;