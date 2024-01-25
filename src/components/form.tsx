import './form.css';
function form(){
   return (
       <div>
           <p>
               Text area:
           </p>
           <textarea>
           </textarea>

           <div>
               <label>
                   lol
               </label>
               <input type="checkbox"></input>
               <label>
                   lol
               </label>
               <input type="checkbox"></input>
               <label>
                   lol
               </label>
               <input type="checkbox"></input>
           </div>

           <label>
               radio 1
               <input type={"radio"} name={"selectOne"}/>
           </label>
           <label>
               radio 2
               <input type={"radio"} name={"selectOne"}/>
           </label>
           <label>
               radio 3
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