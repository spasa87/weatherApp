import React from 'react';

const WeatherCard = ({dt, temp_min, temp_max, main, icon}) => {
    const date = new Date(dt);

    return (
        <div style={{width: "15px"}}>
            <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt="imageOfWeather"/>
            <div>
                <h4>{main}</h4>
                <p>
                    {date.toLocaleDateString()} - {date.toLocaleTimeString()}
                </p>
                <p>Min: {temp_min}</p>
                <p>Max: {temp_max}</p>
            </div>
        </div>
    );
};

export default WeatherCard;