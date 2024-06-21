import React from "react";
import './InputItems.css';




//we can write same things using "props" word with "." like "props.Icon" ,"props.title" so on....
// function InputItems(props){
//     return(
//         <div className="input_items">
//             {props.Icon && <props.Icon style={{color:props.color}}/>}
//             <p>{props.title}</p>
//         </div>
//     )
// }





//another way of writing same by passing argument in function like this ------
function InputItems({Icon,title,color}){
    return(
        
        <div className="inputItems">
            {Icon && <Icon style={{color:color}}/>}
            <p className="photo_title" >{title}</p>
        </div>
    )
}

export default InputItems