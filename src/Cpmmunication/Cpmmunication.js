import React, { useState } from 'react'
import './Cpmmunication.css'
import List from './subcomponant/list';
import Form from './subform/form';

const list_Par_type=[
  {nom:"banane",type:"fruit"},
  {nom:"orange",type:"fruit"},
  {nom:"pomme",type:"fruit"},
  {nom:"raisins",type:"fruit"},
  {nom:"kiwi",type:"fruit"},
  {nom:"tomate",type:"legume"},
  {nom:"carotte",type:"legume"},
  {nom:"pomme de terre",type:"legume"},
  {nom:"navet",type:"legume"},
  {nom:"poivron",type:"legume"}
  ];

function recherch(index){
  // list_Par_type.map((items)=>{
    var listNome =  list_Par_type.filter((i)=>i.type === index)
    console.log(listNome)
    return listNome
  //   return listNome ? Object.values(listNome): ''

  // })

}

function Cpmmunication() {
  const [cle,setCle] = useState('')
  return (
    <div>
        <h1 className='mt-1'>App</h1>
        <Form setCle={setCle}/>        
        <List data = {recherch(cle)} allData={list_Par_type}/>
    </div>
  )
}

export default Cpmmunication