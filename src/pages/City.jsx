import React from 'react'

import { useParams } from 'react-router-dom';

import './Page.css'
import WeatherCard from '../components/WeatherCard';

const CityPage = () => {

    const params = useParams();
    return (
        <div id="content">
            <WeatherCard city={params.city}/>
        </div>
    );
}
 
export default CityPage;