
import Keyboard from "./Keyboard";
import data from "./Data";
import data2 from "./Data2";
import Render from "./Render";
import "./App.css"

function App(){
  //read all objects from data (first keyboard's data) and send to child component's prop
  const key1 = data.map((item)=>{
      return <Keyboard id={item.id} key={item.id}  src={item.src}/>
  });
  //read all objects from data2 (second keyboard's data) and send to child component's prop
  const key2 = data2.map((item)=>{
    return <Keyboard id={item.id} key={item.id}  src={item.src}/>

});
    return (
    
    <Render key1={key1} key2={key2}/>

    )
  }

export default App
