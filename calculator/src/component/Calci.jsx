import React, { useState } from 'react'

const Calci = () => {
    const [result, setResult] = useState('')
    const handleClick = (value) => {
            if (value === '=') {
              try {
                setResult(eval(result).toString());
              } catch (error) {
                setResult('Error');
              }
            } else if (value === 'AC') {
            
              setResult('');
            } else {
              setResult((prevInput) => prevInput + value);
            }
          };

  return (
    <div>
        <h1>Calculator</h1>
    <div className='calci'>
        
      <input type="text" placeholder='0'value={result} id='answer' readOnly/>
      <button onClick={()=> handleClick('9')} className='btn'>9</button>
      <button onClick={()=> handleClick('8')} className='btn'>8</button>
      <button onClick={()=> handleClick('7')} className='btn'>7</button>
      <button onClick={()=> handleClick('6')} className='btn'>6</button>
      <button onClick={()=> handleClick('5')} className='btn'>5</button>
      <button onClick={()=> handleClick('4')} className='btn'>4</button>
      <button onClick={()=> handleClick('3')} className='btn'>3</button>
      <button onClick={()=> handleClick('2')} className='btn'>2</button>
      <button onClick={()=> handleClick('1')} className='btn'>1</button>
      <button onClick={()=> handleClick('0')} className='btn'>0</button>
      <button onClick={()=> handleClick('.')} className='btn'>.</button>
      <button onClick={()=> handleClick('+')} className='btn'>+</button>
      <button onClick={()=> handleClick('-')} className='btn'>-</button>
      <button onClick={()=> handleClick('*')} className='btn'>*</button>
      <button onClick={()=> handleClick('/')} className='btn'>/</button>
      <button onClick={()=> handleClick('%')} className='btn'>%</button>
      <button onClick={()=> handleClick('AC')} className='btn btn1'>AC</button>
      <button onClick={()=> handleClick('=')} className='btn btn1' >=</button>
      
      
    </div>
    </div>
  )
}

export default Calci

