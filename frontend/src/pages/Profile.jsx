import { useState,useEffect } from "react";




const Profile = () => {
    const [profile,setProfile]=useState("");


    const fetchProfile = async () => {

    const token = localStorage.getItem("access");

    const response = await fetch(
        "http://127.0.0.1:8000/api/accounts/profile/",
        {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }
    );

    const data = await response.json();

    console.log(data);

    setProfile(data);
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