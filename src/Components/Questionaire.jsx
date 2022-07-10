/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { Card } from "./Card"
import styles from "./Questionaire.module.css"
import Button from '@mui/material/Button';

export const Questionaire = () => {
  const [data, setData] = useState([]);
  const [open, setOpen] = useState(false);

  const getData = async () => {
    await fetch("https://interviewquestionaire.herokuapp.com/questionaire")
    .then((res)=>res.json())
    .then((res)=>{
      console.log(res)
      setData(res[Math.floor(Math.random() * res.length)]);
      console.log(data)
    })
    .catch((err)=>console.log(err));
    setOpen(false)
  }
  
  useEffect(()=>{
    getData();
  },[])

  return (
    <div>
      <Button variant="contained" onClick={getData} className={styles.newBtn}>Get New Question</Button>
      <div className={styles.clr}></div>
      <Card data={data} open={open} setOpen={setOpen}/>
      
    </div>
  )
}
