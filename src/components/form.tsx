import './form.css';
function form(){
   return (
       <div>
           <p>
               What are your hobbies?
           </p>
           <textarea>
           </textarea>

           <div>
               <label>
                   Baking
               </label>
               <input type="checkbox"></input>
               <label>
                   Painting
               </label>
               <input type="checkbox"></input>
               <label>
                   Diving
               </label>
               <input type="checkbox"></input>
           </div>

           <label>
               Green Tea
               <input type={"radio"} name={"selectOne"}/>
           </label>
           <label>
               Milk Tea
               <input type={"radio"} name={"selectOne"}/>
           </label>
           <label>
               Moroccan Mint Tea
               <input type={"radio"} name={"selectOne"}/>
           </label>
           <div>
               <button>
                   submit
               </button>

           </div>
       </div>


   )
}

export default form;