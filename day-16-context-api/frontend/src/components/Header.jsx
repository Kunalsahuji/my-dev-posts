import React, { useContext } from 'react'
import UserContext from '../context/UserContext'

const Header = () => {
    const { user } = useContext(UserContext)

    return (

        <header style={{textAlign:'center'}}>
            <h1 style={{ textAlign: 'center' }}>User Management System</h1>
            <div >
                {user ? (
                    <h2 >Hello, {user.name}!</h2>
                ) : (
                    <h2>Please log in</h2>
                )}
            </div>
        </header>
    )
}

export default Header
