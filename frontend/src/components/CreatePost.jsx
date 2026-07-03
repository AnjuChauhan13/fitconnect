import React from "react";
import { useState } from "react";

const CreatePost=()=>{

const [content, setContent] = useState("");
const [image, setImage] = useState(null);

const handlePost = async () => {
    const token = localStorage.getItem("access");

    // Step 1: Create FormData
    const formData = new FormData();

    // Step 2: Add data
    formData.append("content", content);
    formData.append("images", image);

    const response = await api.post("/api/post/", formData, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

    const data = await response.json();
    console.log(data);
    
};
return(
    <>
    <div>
       <h1>Create Post</h1>
            <input
                type="file"
                accept="image/*"
                onChange={(e) => setImage(e.target.files[0])}
            />
            
            <br /><br />
            <textarea
            placeholder="What's on your mind?"
            value={content}
            onChange={(e) => setContent(e.target.value)}
        />
            <br /><br />

        <button onClick={handlePost}>Post</button>



    </div>
    
    
    </>
)




}
export default CreatePost;