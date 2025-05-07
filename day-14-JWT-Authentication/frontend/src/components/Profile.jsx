import React from 'react'
import { useState, useEffect } from 'react'
import { getProfile } from './services/axiosClient'

const Profile = () => {
    const [profile, setProfile] = useState(null);

    useEffect(() => {
        getProfile().then((res) => setProfile(res.data));
    }, []);

    return <div>{profile ? `Welcome ${profile.email}` : "Loading..."}</div>;
}

export default Profile
