// import Hello from "./hello"
import {useState} from 'react';
function App() {
  let [counter,setCounter]=useState(15);
  let [warning,setWarning]=useState('')
  // let counter=5;
  const addValue =()=>{
    // console.log("value added",Math.random());
    // counter=counter+1; this will not work

    // counter=counter+1;
    // setCounter(counter);
    if(counter<20){
      setCounter(counter+1);
      console.log('value added',counter);
    }
    else{
      setWarning("Cant add more value");
    }
    
  }
  const removeValue =()=>{
    // console.log("value removed",Math.random());
    // counter=counter-1; this alone will not work

    // counter=counter-1;
    // setCounter(counter);
    if(counter>0){
    setCounter(counter-1);
    // console.log('value removed',counter);
    }
    else{
      setWarning("cannot remove value less than 0")

    }
    

  }
  return (
    <>
      <h1>Counter App</h1>
      {warning && <p style={{color:'red'}}>{warning}</p>}
      <h1>Counter Value : {counter}</h1>
      <button onClick={addValue}>Add Value {counter}</button>
      <br/>
      <br/>
      <button onClick={removeValue}>Remove Value {counter} </button>
      <p>{counter}</p>
    </>
  )
}

export default App
// ham addValue ko execute nahi kar rahe hai nahi to wo sidha update hojayegi
// hame click karnepe hi update karna hai
// variable ki values update ho rahi hai but problem aa rahi hai in ui updation
// ui updation react khud handle karta hai
// there are certain methods which are used to update the hooks
// if we were using normal js then we had to update to various buttons
// use state is responsible to change the state (change ka matlab ye nahi ki aapki value change kardi)
// is change ka matlab ye hai ke aapka ui update ho
// default value ham kya desakte hai inside the useState function it's our choice
// we can give true,false,0,'',[],object,'neer'
// jo counter hai wo behind the function wo hi kar rah ahai usne let counter hi banaya hai
// setCounter is a method ye ek methos hai jo counter variable ko update karne ka kaam karta hai
// so abhi mujhe pure web page mein counter variable ko update karna hai to i can do it using setCounter
// koi document.getElementById wagera nahi likhna