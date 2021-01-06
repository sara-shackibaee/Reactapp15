import React from 'react'
import '../CSS/Recipe.css'
function Resultrecipe({title,src,calory,ingi}) {

   console.log(ingi)

    return (
        <div className='mydiv'>
           <h1>{title}</h1>
           <img src={src} alt="" />
           <p>{calory}</p>
           <h1>Recipe:</h1>
            {ingi.map((item1)=>(<li>{item1.text}</li>))}
            <br></br>
        </div>
    )
}

export default Resultrecipe
