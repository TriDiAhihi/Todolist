 import React from 'react' 

 const Todo = (props) => {
    
    return (
        <div className='Todo' >
        <ul>
            <li>{props.action}</li>
        </ul>
        </div>
    )
 }
 export default Todo