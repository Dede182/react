import React from 'react';

const Catagory = ({cata,filter})=>{
    return(
        <div>
            {cata.map((cc,index)=>{
                return(
                <button type = "button" key = {index} onClick = {()=>filter(cc)}>{cc}</button>
                )
            })}
        </div>
    )
}

// const Catagory =({cata,filter})=>{

//     return(
//         <div>
//             {cata.map((cc,index)=>{
//                 return(
//                     <button type ="button" key = {index} onClick = {()=>filter(cc)}>{cc}</button>
//                 )
//             })}
//         </div>
//     )
// }
export default Catagory;
