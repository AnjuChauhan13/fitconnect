import React, { useEffect } from "react";
import { useState } from "react";
import api from "../api/api";


const DisplayPost=()=>{

const [showPost, setShowPost] = useState([]);
const [editingId, setEditingId] = useState(null);
const [editContent, setEditContent] = useState("");

const fetchPost = async () => {
    const token = localStorage.getItem("access");

    try {
        const response = await api.get("/api/post/", {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        console.log(response.data);
        setShowPost(response.data);

    } catch (error) {
        console.error(error);
    }
};

useEffect(()=>{
    fetchPost();
},[])

const handleDelete = async (id) => {
    const token = localStorage.getItem("access");

    try {
        await api.delete(`/api/post/${id}/`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        fetchPost();

    } catch (error) {
        console.error(error);
    }
};

const handleEdit = async (id, content) => {
    const token = localStorage.getItem("access");

    try {
        await api.put(
            `/api/post/${id}/`,
            {
                content: content,
            },
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        );

        fetchPost();
        setEditingId(null);
        setEditContent("");

    } catch (error) {
        console.error(error);
    }
};

  return (
        <div>
            <h1>Show all Posts</h1>

            {showPost.map((post) => (
                <div key={post.id}>
                    {editingId === post.id ? (
                    <input
                        type="text"
                        value={editContent}
                        onChange={(e) => setEditContent(e.target.value)}
                    />
                ) : (
                    <p>{post.content}</p>
                )}
                    {post.images && (
                    <img
                        src={`http://127.0.0.1:8000${post.images}`}
                        alt="Post"
                        width="250"
                    />
                    
                )}
              
                {editingId === post.id ? (
                    <>
                        <button
                            onClick={() => handleEdit(editingId, editContent)}
                        >
                            Save
                        </button>

                        <button
                            onClick={() => {
                                setEditingId(null);
                                setEditContent("");
                            }}
                        >
                            Cancel
                        </button>
                    </>
                ) : (
                    <>
                        <button
                            onClick={() => {
                                setEditingId(post.id);
                                setEditContent(post.content);
                            }}
                        >
                            Edit
                        </button>

                        <button
                            onClick={() => handleDelete(post.id)}
                        >
                            Delete
                        </button>
                    </>
                )}


                </div>
            ))}
        </div>
    );
};



export default DisplayPost;