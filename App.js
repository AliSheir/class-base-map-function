import React ,{Component} from 'react';



class App extends Component{
  state = [
      {  name : "Ali Hamza", age : 20, number : 82},
      {  name : "Hassan", age : 20, number : 45},
      {  name : "Sheraz", age : 20, number : 55},
      {  name : "Mustafa", age : 21, number : 50},
      {  name : "Ahmad Raza", age : 24, number : 72},
      {  name : "Umair", age : 22, number : 37},
      { name : "Awais", age : 24, number : 46},
      {  name : "Numan", age : 21, number : 78},
     { name : "Rashid", age : 20, number : 51},
      {  name : "Anwar", age : 23, number : 59},
      {  name : "Faisal", age : 22, number : 49},
      {  name : "Zehraan", age : 19, number : 80},
      {  name : "Qasim", age : 23, number : 70},
    
    ]
 
  render(){
    
return(
<div>
{
  this.state.map((item) =>{
    return(
      <div>{item.name} <br/>
      {item.age} <br/>
      {item.number}
      </div>
    )
  })
}
 
</div>
)

  }
}


export default App;