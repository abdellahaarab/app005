import React from 'react'

function Form(props) {
  return (
    <div>
        <div>Entrer le mot cle de rechercher :</div>
        <input className='form-control mt-2' type="text" 
        onChange={(e)=>props.setCle(e.target.value)}
        ></input>
        {/* <button onClick={recherch(cle)}>Recherch</button> */}
    </div>
  )
}

export default Form