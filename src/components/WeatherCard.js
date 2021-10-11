import React from 'react';

const WeatherCard = ({dt, temp_min, temp_max, main, icon}) => {
    const date = new Date(dt);

    return (
        <div className="card">
            <h4>{main}</h4>

            <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt="imageOfWeather"/>
            
            <p>
                {date.toLocaleDateString()} - {date.toLocaleTimeString()}
            </p>

            <p>Min: {temp_min}&#8451;</p>
            <p>Max: {temp_max}&#8451;</p>
        </div>
    );
};

export default WeatherCard;