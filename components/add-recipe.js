import React from 'react';

const AddRecipeModal = ({ recipeList, handleSubmit, handleRecipeChange, handleIngredientsChange }) => {
    return (
       <div className="container">
         <button type="button" className="btn btn-primary btn-lg" data-toggle="modal" data-target="#myModal">Add Recipe</button>
         <div className="modal fade" id="myModal" role="dialog">
           <div className="modal-dialog">
             <div className="modal-content">
               <div className="modal-header">
                 <button type="button" className="close" data-dismiss="modal">&times;</button>
                 <h4 className="modal-title">Add a Recipe</h4>
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
                 <button type="button" className="btn btn-primary" onClick={handleSubmit}>Add Recipe</button>
                 <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
               </div>
             </div>
           </div>
         </div>
       </div>
    );
};

export default AddRecipeModal;