import React from 'react'
import { Link } from 'react-router-dom'

export const Home = () => {
    return (
        <div>
            <Link to="/login">
                <h3>Login</h3>
            </Link>
            <Link to="/register">
                <h3>Register</h3>
            </Link>
        </div>
    )
}
