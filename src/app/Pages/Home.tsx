"use client"
import React from 'react'
import Header from "@/app/Components/Header"
import Container from "@/app/Components/Container"
import Table from "@/app/Components/Table"
import Container2 from "@/app/Components/Container2"
import { Outlet } from 'react-router-dom'



const Home=()=>{
  return(
    
    <>
    <Header/>
    
    
    <Container/>
    <div className=' text-white p-4'> </div>
    
    <Table/>
    


    <Container2/>
    <Outlet/>
    
    
    
    </>
  )
  
}
export default Home