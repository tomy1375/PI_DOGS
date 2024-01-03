import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import React from 'react'
import "./home.styles.css"
import Navbar from '../../components/navbar/navbar.component'
import Cards from '../../components/cards/cards.component'
import { getUsers } from '../../redux/actions';

export default function Home() {
  const dispatch = useDispatch()
  const allUser = useSelector((state)=> state.allUser)//mi componente se esta SUSCRIBIENDO al estado global
  useEffect(()=>{
    dispatch(getUsers())// cuando mi pagina se cargue va a enviar esta action , esta action va a llegar al reducer , reducer va a definir q es de tipo GET_USER modifica
    //el estado con el payload(resutado q me da la action) y se lo devuelvo a todos los componentes
  },[dispatch])
  return (
    <div className='home'>
        <h2 className='home-title'>Home</h2>
        <Navbar/>
        <Cards allUser={allUser}/>
    </div>
  )
}
