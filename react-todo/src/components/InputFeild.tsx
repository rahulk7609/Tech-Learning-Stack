import React from "react"
import "./styles.css"

interface Props {
    todo : string;
    setTodo : React.Dispatch<React.SetStateAction<string>>;
}


const InputFeild = ({todo ,setTodo}: Props) => {
    return(
        <div>
            <form className= "input">
                <input className= "input_box" 
                    value = {todo}
                    onChange = {(e) => setTodo(e.target.value)}
                type= "input" placeholder= "Enter a task"></input> 
                <button type="submit" className="input_submit">GO</button>
            </form>           
        </div>
    )
}
export default InputFeild