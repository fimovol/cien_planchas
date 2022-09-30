
import { useState,useEffect } from 'react'
import styles from '../styles/Home.module.css'

export default function Home () {
  const [contador,setContador] = useState(0)
  useEffect(() => {
    // if (typeof window !== 'undefined') {
    //   // localStorage.setItem('numero','3')
    //   if (localStorage.getItem('numero') !== null) {
    //     const numero = localStorage.getItem('numero')
    //     let numeros = parseInt(numero)
    //     setContador(numeros)
    //   }else{
    //     console.log('nope')
    //   }
    // } else {
    //   console.log('we are running on the server')
    // }
  },[])
  return (
    <div className={styles.container}>
      <h1 className={styles.h1}>contador de planchas del dia</h1>
      <button
        className={styles.reset}
        onClick={()=>setContador(0)}>reset</button>
      <input type='text' onChange={(e)=>{
        let variable =e.target.value
        variable = parseInt(variable)
        if (Number.isNaN(variable)) {
          // 👉️ this runs only if NaN and type of number
          console.log('Number is NaN')
        }else{
          setContador(variable)
        }
      }}/>
      {contador >= 100 ?
        <h1
          className={styles.lolograste}
        >lo lograste llegaste a las {contador} planchas</h1>
        :
        <button
          className={styles.boton}
          onClick={()=>setContador(contador+1)}>plancha {contador}</button>
      }

    </div>
  )
}
