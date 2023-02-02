import '../styles/calci.css'
import { useState } from 'react';
const Calci = () => {
 
    let [result,setResult]=useState("")
    let handleClick = (e)=>{
        setResult(result.concat(e.target.name))
    }
  let clear = ()=>{
    setResult("")
  }
  let backSpace = ()=>{
    setResult(result.slice(0,result.length-1))
  }
 let Calculate = ()=>{
    try{
        setResult(eval(result).toString())

    }
    catch(err){
        setResult('Error')
    }
 }
    return ( 
        <div className="main">
                <h1>React Calculaor</h1>
                <div className="input">
                    <form action="">
                     <input type="text" className='input' value={result} />
                    </form>
                   
                </div>
             <div className="info">
                <button onClick={clear} name='AC'  id='clear'> AC </button >
                <button onClick={backSpace} name= 'C'  className="buttons">C</button >
                <button onClick={handleClick} name='%'  className="buttons">%</button >
                <button onClick={handleClick} name='/' className="buttons" style={{backgroundColor:'orange'}}>/</button >
             </div>
             <div className="info">
                <button onClick={handleClick} name='7'  className="buttons">7</button >
                <button onClick={handleClick} name='8'  className="buttons">8</button >
                <button onClick={handleClick} name='9' className="buttons">9</button >
                <button onClick={handleClick} name='*' className="buttons"  style={{backgroundColor:'orange'}} >*</button >
             </div>
             <div className="info">
                <button onClick={handleClick} name='4' className="buttons">4</button >
                <button onClick={handleClick} name='5'  className="buttons">5</button >
                <button onClick={handleClick} name='6'  className="buttons">6</button >
                <button onClick={handleClick} name='-'  className="buttons"  style={{backgroundColor:'orange'}} >-</button >
             </div>
             <div className="info">
                <button onClick={handleClick} name='1' className="buttons">1</button >
                <button onClick={handleClick} name='2'   className="buttons">2</button >
                <button onClick={handleClick} name='3'   className="buttons">3</button >
                <button onClick={handleClick} name='+'  className="buttons"  style={{backgroundColor:'orange'}} >+</button >
             </div>
             <div className="info">
                <button onClick={handleClick} name='0'  className="buttons">0</button >
                <button onClick={handleClick} name='.'   className="buttons">.</button >
                <button onClick={Calculate} name='='  id='result'>=</button >
                <button onClick={handleClick} name='NUM'  className="buttons"  style={{backgroundColor:'orange'}} >NUM</button >
             </div>
        </div>
     );
}
 
export default Calci;