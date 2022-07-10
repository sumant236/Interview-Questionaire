import React from 'react'
import styles from "./Questionaire.module.css";
import Button from '@mui/material/Button';

export const Card = ({data, open, setOpen}) => {

  const handleClick = () =>{
    setOpen(!open)
  }

  return (
    <div key={data.id}>
        <h4>Ques: {data.ques}</h4>
        <div className={styles.btnWrapper}>
          <Button variant="contained" onClick={handleClick}>{open?"Hide Answer":"Show Answer"}</Button>
        </div>
        {open?<p>{data.ans}</p>:null}
    </div>
  )
}
