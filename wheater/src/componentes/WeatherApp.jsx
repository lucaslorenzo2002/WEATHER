import React, { useState } from 'react'
import { useEffect } from 'react';
import WeatherInfo from './WeatherInfo';
import WheatherForm from './WheatherForm'
import styles from '../hojas_de_estilo/WeatherApp.module.css'
import Loading from './Loading';

const  APP_KEY = "01357f739f3c41ffb4904242222710";
const API_URL = "http://api.weatherapi.com/v1/current.json?aqi=no"

const WeatherApp = () => {
    const[weather, setWeather] = useState(null)

    useEffect(() => {
        loadInfo()
    },[])

    useEffect(() => {
        document.title = `weather | ${weather ?.location.name ?? ""}`
    },[weather])

    const loadInfo = async(city = 'london') => {
    try{
        const request = await fetch(`${API_URL}&key=${APP_KEY}&q=${city}`);
        const json = await request.json();
        setWeather(json)
    }catch(err){

    }
    }

    const handleChangeCity = (city) => {
        setWeather(null);
        loadInfo(city)
    }

  return (
    <>
    <div className={styles.weatherContainer}>
      <WheatherForm onChangeCity={handleChangeCity}/>
      {weather ? <WeatherInfo weather={weather}/> : <Loading />} 
    </div>
    </>
  )
}

export default WeatherApp
