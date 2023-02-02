import '../styles/calci.css'
const Calci = () => {
    return ( 
        <div className="main">
                <h1>React Calculaor</h1>
                <div className="input">
                    <input type="text" className='input' />
                </div>
             <div className="info">
                <div className="buttons">AC</div>
                <div className="buttons">M+/-</div>
                <div className="buttons">%</div>
                <div className="buttons" style={{backgroundColor:'orange'}}>/</div>
             </div>
             <div className="info">
                <div className="buttons">7</div>
                <div className="buttons">8</div>
                <div className="buttons">9</div>
                <div className="buttons"  style={{backgroundColor:'orange'}} >*</div>
             </div>
             <div className="info">
                <div className="buttons">4</div>
                <div className="buttons">5</div>
                <div className="buttons">6</div>
                <div className="buttons"  style={{backgroundColor:'orange'}} >-</div>
             </div>
             <div className="info">
                <div className="buttons">1</div>
                <div className="buttons">2</div>
                <div className="buttons">3</div>
                <div className="buttons"  style={{backgroundColor:'orange'}} >+</div>
             </div>
             <div className="info">
                <div className="buttons">0</div>
                <div className="buttons">.</div>
                <div className="buttons">=</div>
                <div className="buttons"  style={{backgroundColor:'orange'}} >NUM</div>
             </div>


        </div>
     );
}
 
export default Calci;