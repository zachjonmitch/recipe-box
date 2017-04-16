import React from 'react';

const Recipes = ({ recipeList, deleteItem, editItem, handleIngredientsChange, handleRecipeChange}) => {
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
                                <button className="btn btn-danger" onClick={()=>deleteItem(recipe)}>Delete</button>
                                <button className="btn btn-default" type="button" data-toggle="modal" data-target={`#myModal${count}`}>Edit</button>
                                <div className="modal fade" id={`myModal${count}`} role="dialog">
                                   <div className="modal-dialog">
                                     <div className="modal-content">
                                       <div className="modal-header">
                                         <button type="button" className="close" data-dismiss="modal">&times;</button>
                                         <h4 className="modal-title">Edit Recipe</h4>
                                       </div>
                                       <div className="modal-body">
                                         <form>
                                           <div className="form-group">
                                           <label>
                                             Recipe
                                             <br></br>
                                            </label>
                                             <input type="text" className="form-control" placeholder="Recipe Name" id="recipeTitle" onChange={handleRecipeChange} />
                                           </div>
                                           <div className="form-group">
                                           <label>
                                             Ingredients
                                             </label>
                                             <br></br>
                                             <textarea type="textarea" className="form-control" rows="2" placeholder="Enter Ingredients,Separated,By Commas" id="recipeIngredients" onChange={handleIngredientsChange}></textarea>
                                           </div>
                                         </form>
                                       </div>
                                       <div className="modal-footer">
                                         <button type="button" className="btn btn-primary" onClick={()=>editItem(recipe)}>Edit Recipe</button>
                                         <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                                       </div>
                                     </div>
                                   </div>
                                 </div>
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