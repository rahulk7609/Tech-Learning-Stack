import React from "react"
import "./styles.css"

const InputFeild = () => {
    return(
        <div>
            <form className= "input">
                <input className= "input_box" type= "input" placeholder= "Enter a task"></input> 
                <button type="submit" className="input_submit">GO</button>
            </form>           
        </div>
    )
}
export default InputFeild