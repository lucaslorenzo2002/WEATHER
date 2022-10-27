import React, { useState } from 'react'
import styles from '../hojas_de_estilo/WeatherForm.module.css'

const WheatherForm = ({onChangeCity}) => {
    const[city, setCity] = useState('');

    const handleChange = (e) => {
        setCity(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        onChangeCity(city)
    }
  return (
    <div>
      <form onSubmit={handleSubmit} className={styles.container}>
        <input type="text" name='' value={city} onChange={handleChange} className={styles.input} />
        <input type="submit" value="buscar" />
      </form>
    </div>
  )
}

export default WheatherForm
