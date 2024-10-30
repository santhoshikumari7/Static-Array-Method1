
import './App.css';
import TenthStudent from './classes/TenthStudent';

function App() {
  let manasa = new TenthStudent();
  manasa.engMarks = 88;
  manasa.telMarks = 77;
  manasa.hindMarks = 66;
  manasa.mathMarks = 55;
  manasa.sciMarks = 78;
  manasa.sociMarks = 70;
  manasa.calculateResult();
  console.log(TenthStudent.passMarks)
  
  let fruits = ["Mango","Apple","Banana","Papayya","Litchi","Kiwi","Grapes","Cherry","Orrange","Pineapple","Watermaloon","Appricut","Custuredapple","Lemon"]

  return (
    <div className="App">
      <button type='button' onClick={()=>{
         console.log(fruits.length);
         
         for(let i=0;i<fruits.length;i++){
           console.log(fruits[i]);
         }
      }}>length</button>
      
      <button type='button' onClick={()=>{
        console.log(fruits.at(8));
      
      }}>at</button>
      
      <button type='button' onClick={()=>{
        console.log(fruits);
        console.log(fruits.toString());
        console.log(fruits.join("||"));
      
      }}>toString/join</button>
      <button type='button' onClick={()=>{
        console.log(fruits);
        fruits.push("Pompogranate")
      }}>push</button>
      <button type='button' onClick={()=>{
        console.log(fruits)
        fruits.pop();
      }}>pop</button>
      <button type='button' onClick={()=>{
        fruits.unshift("DragenFruit");
        console.log(fruits)
      }}>unshift</button>
      <button type='button' onClick={()=>{
        fruits.shift();
        console.log(fruits)
      }}>shift</button>
      <button type='button' onClick={()=>{
        fruits.splice(3,5,"Guva");
        console.log(fruits)
      }}>splice</button>
    </div>
  );
}

export default App;
