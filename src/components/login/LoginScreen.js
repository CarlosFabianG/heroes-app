import React from 'react'

const LoginScreen = () => {

    const handleLogin = () => {
        console.log('Hola')
    }

    return (
        <>
            <h1>LoginScreen</h1>
            <button 
                className="btn btn-primary"
                onClick={handleLogin}>
                Login
            </button>
        </>
    )
}

export default LoginScreen