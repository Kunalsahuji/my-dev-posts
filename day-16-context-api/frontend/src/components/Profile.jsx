import React, { useContext } from 'react'
import UserContext from '../context/UserContext'

const Profile = () => {
    const { user } = useContext(UserContext)
    return (
        <div>
            <h2 style={{ margin: '0', textAlign:'center' }}>User Profile</h2>
            {user ? (
                <div style={{ textAlign: 'start' }}>
                    <h3 style={{ margin: '0' }}>Name: {user.name}</h3>
                    <p style={{ margin: '0' }}>Email: {user.email}</p>
                    <p style={{ margin: '0' }}>Age: {user.age}</p>
                </div>
            ) : (
                <p style={{ margin: '0' }}>No user data available</p>
            )}

        </div>
    )
}

export default Profile
