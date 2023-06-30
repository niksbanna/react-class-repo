import React, { useEffect, useState } from 'react'

export default function Weather() {
    const [city, setCity] = useState("bhilwara");
    const [data, setData] = useState();
    const API_KEY = "5b491a7cfc1c87453435c57e3fd21daa";

    const handleClick = () => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`)
            .then((response) => response.json())
            .then((data) => setData(data))
            .catch((error) => console.log(error));

    }

    useEffect(() => {
        console.log("city", city);
        console.log(data);

    }, [city])
    return (
        <div>
            <h1>Weather Report</h1>
            <input type="text" value={city} onChange={(e) => setCity(e.target.value)} placeholder='Enter city name' />
            <button onClick={handleClick}>Submit</button>

            {
                data && <div>
                    <h3>{data.name}</h3>
                    <h4>Temp: {data.main.temp} </h4>
                    <h4>Humidity: {data.main.humidity} </h4>
                </div>
            }
        </div>
    )
}
