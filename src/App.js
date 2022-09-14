import React, { useEffect, useState } from 'react';
import './App.css';
import moonIcon from "./assets/moon.png";
import sunIcon from "./assets/sun.png";
const App = () => {
    const [result, setResult] = useState("");
    const handleClick = (e) => {
        setResult(result.concat(e.target.name));
    }
    const clear = () => {
        setResult("");
    }
    const backspace = () => {
        setResult(result.slice(0, result.length - 1));
    }
    const calculate = () => {
        try {
            setResult(eval(`(${result})`).toFixed(3));
        }
        catch (err) {
            setResult("Error");
        }

    }

    const [isDarkMode, setIsDarkMode] = useState(false);
    return (
        <>

            <div className={`bg1 ${isDarkMode ? "bg2" : ""}`}>
                <div className={`container1 ${isDarkMode ? "container2" : ""}`}>
                    <form className={`display1 ${isDarkMode ? "display2" : ""}`}>
                        <input type="text" placeholder="0" value={result} />
                    </form>
                    <div className={`keypad1 ${isDarkMode ? "keypad2" : ""}`}>
                        <button onClick={clear} id="clear">Clear</button>
                        <button onClick={backspace} id="backspace">Del</button>
                        <button name="(" onClick={handleClick}>(</button>
                        <button name=")" onClick={handleClick}>)</button>
                        <button name="/" onClick={handleClick}>/</button>
                        <button name="7" onClick={handleClick}>7</button>
                        <button name="8" onClick={handleClick}>8</button>
                        <button name="9" onClick={handleClick}>9</button>
                        <button name="*" onClick={handleClick}>*</button>
                        <button name="4" onClick={handleClick}>4</button>
                        <button name="5" onClick={handleClick}>5</button>
                        <button name="6" onClick={handleClick}>6</button>
                        <button name="-" onClick={handleClick}>-</button>
                        <button name="1" onClick={handleClick}>1</button>
                        <button name="2" onClick={handleClick}>2</button>
                        <button name="3" onClick={handleClick}>3</button>
                        <button name="+" onClick={handleClick}>+</button>
                        <button name="0" onClick={handleClick}>0</button>
                        <button name="." onClick={handleClick}>.</button>
                        <button onClick={calculate} id="result">=</button>
                    </div>
                </div>
                <div className={`bg1 ${isDarkMode ? "bg2" : ""}`}>
                    <div className="app_calculator_navbar" >
                        <div className="app_calculator_navbar_toggle" onClick={() => setIsDarkMode(!isDarkMode)} >
                            <div className={`app_calculator_navbar_toggle_circle ${isDarkMode ? "app_calculator_navbar_toggle_circle_active" : ""}`}></div>
                        </div>
                        <img src={isDarkMode ? moonIcon : sunIcon} alt="mode" />
                    </div>
                </div>
                {/* <div>
                <button onClick={"changeMode"}></button>
            </div> */}
            </div>

        </>
    );
}
export default App;