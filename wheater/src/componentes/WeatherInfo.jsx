import React from 'react'
import styles from '../hojas_de_estilo/WeatherInfo.module.css'

const WeatherInfo = ({weather}) => {
  return (
    <div>
        <div className={styles.mainInfo}>
            <div className={styles.city}>{weather ?.location.name}</div>
            <div className={styles.country}>{weather ?.location.country}</div>
        <div className={styles.row}>
        <div>
            <img src={`http:${weather ?.current.condition.icon}`} width="127px" alt="" />
        </div>
        <div className={styles.weatherConditions}>
        <div className={styles.conditions}>{weather ?.current.condition.text}</div>
        <div className={styles.current}>{weather ?.current.temp_c}</div>
        </div>
        </div>
        </div>
        <div>
        <iframe 
        title='mapa'
        src={`https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d13138.65737799015!2d${weather ?.location.lon}9!3d${weather ?.location.lat}1!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2sar!4v1666882760426!5m2!1ses!2sar`}
        width="100%" 
        height="450" 
        style={{border:0}} 
        allowfullscreen="" 
        loading="lazy" 
        referrerpolicy="no-referrer-when-downgrade">
        </iframe>
        </div>
    </div>
  )
}

export default WeatherInfo
