import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Home() {

    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/contact")
    }
    return (
        <div>Home Route

            <button onClick={handleClick}>Go to Contact Us</button>
        </div>
    )
}
