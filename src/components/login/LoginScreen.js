import React from 'react'

const LoginScreen = ({ history }) => {

    const handleLogin = () => {
        console.log('Hola')
        history.replace('/')
    }

    return (
        <>
            <h1>LoginScreen</h1>
            <hr />
            <button 
                className="btn btn-primary"
                onClick={handleLogin}>
                Login
            </button>
        </>
    )
}

export default LoginScreen