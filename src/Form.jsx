// import {Component} from "react";
// import Apple from './Apple.jsx'
// class Form extends Component{
//     render(){
//       return(
//         <>
//           <h2>ooiiiiii.....</h2>
//           <Apple/>
//         </>
//       )
//     }
// }

// export default Form;

function Form()
{
  return(
    <>
      <div className="Main-container">
        
        <fieldset>
          <legend><h2>SLAMBOOK</h2></legend>
          <form>
            <div className="text-form">
              <label for="name">NAME</label>
              <input type="text" id="name" placeholder="Enter your name"></input>
            </div>

              
            <div className="text-form">
              <label for="nick">NICKNAME</label>
              <input type="text" id="nick" placeholder="Enter your nickname"></input>
            </div>  

            <div className="text-form">
               <label for="add">ADDRESS</label>
               <input type="text" id="add" placeholder="Enter your address"></input>
            </div>  


            <div className="text-form">
               <label for="phone">PHONE</label>
               <input type="text" id="phone" placeholder="Enter your number"></input>
            </div>
              
            <div className="text-form">
              <label for="memo">MEMORIES</label>
              <textarea type="text" id="memo" placeholder="Tell beautiful memories"></textarea>
            </div>

            <div className="text-form">
              <label for="gend">GENDER</label>

              <input type="radio" id="gen"/>
              <label for="gen"  value="male">Male</label>
              
              <input type="radio" id="genv"/>
              <label for="genv"  value="female" >Female</label>
              
            </div>  
            
            <div className="text-form">
              <label  className="a" for="Actor">Favourite Actor</label>
              
              <input type="checkbox" id="act"/>
              <label for="act">tom</label>
              <input type="checkbox" id="act2"/>
              <label for="act2">mike</label>
              <input type="checkbox" id="act3"/>
              <label for="act3">mikey</label>
            </div>
              
            <div className="text-form">
              <label for="school">Name of your school</label>
               <select id="school">
                   <option value="abc">vihari metric. school</option>
                   <option value="xyz">Bannari higher secondary school</option>
                   <option value="hhj">Bharathi metric and higher secondary school</option>
                </select>
            </div>   

            <button type="sumbit">Submit</button> 
          </form>
        </fieldset>
      </div>

    </>
  )
}

export default Form;
