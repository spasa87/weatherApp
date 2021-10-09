import React, {useState} from "react";

const SelectCity = ({onSearch}) => {
    const [city, setCity] = useState("");

    return (
        <div className="container">
            <div>
                <h1>Search your city</h1>
            </div>

            <div>
                <input type="text" className="cityName" placeholder="Enter city..."
                    onChange={(event) => setCity(event.target.value)}
                    value={city}
                />
            </div>

            <div>
                <button className="search" onClick= {() => onSearch(city)}>
                    Check weather
                </button>
            </div>
        </div>
    );
};

export default SelectCity;