import React from 'react'

function List(props) {
  return (
    <div>
        <div className='mt-5 bg-info p-3'>
            <div>Entrer le mot cle de rechercher :</div>
            <ul>
                {     
                  props.data.length != 0 ? props.data.map((i)=><li key={i.nom}>{i.nom}</li>): props.allData.map((i)=><li key={i.nom}>{i.nom} - {i.type}</li>) 
                }
            </ul>
        </div>
    </div>
  )
}

export default List;