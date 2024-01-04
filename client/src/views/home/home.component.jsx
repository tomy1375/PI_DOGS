import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import React from 'react'
import "./home.styles.css"
import Navbar from '../../components/navbar/navbar.component'
import Cards from '../../components/cards/cards.component'
import { getByName, getUsers } from '../../redux/actions';

export default function Home() {
  const dispatch = useDispatch()
  const allUsers = useSelector((state)=> state.allUsers)//mi componente se esta SUSCRIBIENDO al estado global
 const [searchString , setSearchString] = useState("")
   function handleChange(e) { 
    e.preventDefault()//sirve para qu la pagina no se re-renderice, cuando se realice el onchange en la barra de busqueda no se te refresque
    setSearchString(e.target.value)
  }
  //FILTRO CON LA BACKEND
  function handleSubmit(e) {
    e.preventDefault()
    dispatch(getByName(searchString))
  }

  //FILTRO SOBRE EL ESTADO
  // const [filtered, setFiltered] = useState(allUsers)
  // const [searchString , setSearchString] = useState("")

  // function handleChange(e) { 
  //   e.preventDefault()//sirve para qu la pagina no se re-renderice, cuando se realice el onchange en la barra de busqueda no se te refresque
  //   setSearchString(e.target.value)
  // }

  // function handleSubmit(e) {
  //   e.preventDefault()
  //   const filtered =  allUsers.filter(user => 
  //     user.name.includes(searchString)
  //   )
  //   setFiltered(filtered)
  // }

  useEffect(()=>{
    dispatch(getUsers())// cuando mi pagina se cargue va a enviar esta action , esta action va a llegar al reducer , reducer va a definir q es de tipo GET_USER modifica
    //el estado con el payload(resutado q me da la action) y se lo devuelvo a todos los componentes
  },[dispatch])
  return (
    <div className='home'>
        {/* <h2 className='home-title'>Home</h2> */}
        <h2 className='img_title'>PI dogs Soy Henry</h2>
        <Navbar handleChange={handleChange} handleSubmit={handleSubmit}/>
        <img className='img_home' src="https://images.alphacoders.com/457/457890.jpg" alt="" />
        <Cards allUser={allUsers}/>
    </div>
  )
}
