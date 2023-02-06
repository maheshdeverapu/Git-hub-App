import React,{useState } from 'react';
import './App.css';

const App=()=>{
  const [temp,setTemp] = useState(0);
  const [color,setColor] = useState('white')
  const tempHandle=(temp)=>{
    if(temp>80){setColor('red')}
    else if(temp>60){setColor('orange') }
    else if(temp>40){setColor('yellow')}
    else if(temp>20){setColor('skyblue')}
    else if(temp>0){setColor('blue')}
    setTemp(temp)
  }
  return (
    <div className='temp_content'>

    <h3 className='display_temp' style={{"backgroundColor":color}}>{temp}&deg;C</h3>
    <div className='buttons'>
    <button onClick={()=>{tempHandle(temp-1)}}>-</button>
    <button onClick={()=>{tempHandle(temp+1)}}>+</button>
    </div>
    </div>
  );
}

export default App;
