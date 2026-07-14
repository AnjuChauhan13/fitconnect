import { useState,useEffect } from "react";
import api from "../api/api";



const Profile = () => {
    const [profile,setProfile]=useState("");


 const fetchProfile = async () => {
    const token = localStorage.getItem("access");

    try {
        const response = await api.get("/api/accounts/profile/", {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        console.log(response.data);
        setProfile(response.data);

    } catch (error) {
        console.error(error);
    }
};
useEffect(() => {
    fetchProfile();
}, []);

  return (
    <div>

        <h1>Profile Page</h1>

        {profile && (
            <>
                <p>Username: {profile.username}</p>
                <p>Email: {profile.email}</p>
                <p>Bio: {profile.bio}</p>
                <p>Fitness Goal: {profile.fitness_goal}</p>
                <p>Height: {profile.height}</p>
            </>
        )}

    </div>
);
};

export default Profile;