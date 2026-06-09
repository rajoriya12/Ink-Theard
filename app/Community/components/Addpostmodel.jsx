'use client';

import { useState } from "react";

function Addpostmodel({
    activeTab,
    refreshData,
}) {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [author, setAuthor] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const endpoint =
                activeTab === "poetry"
                    ? "/api/poetry"
                    : "/api/story";

            const res = await fetch(endpoint, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    title,
                    content,
                    author,
                }),
            });

            const data = await res.json();

            if (data.success) {
                await refreshData();

                setTitle("");
                setContent("");
                setAuthor("");
            }

        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div
            style={{
                border: "1px solid #333",
                padding: "20px",
                marginTop: "20px",
                width: '100%',
            }}
        >
            <h2>
                {activeTab === "poetry"
                    ? "Add Poetry"
                    : "Add Story"}
            </h2>

            <form onSubmit={handleSubmit} >

                <input
                    type="text"
                    placeholder="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />

                <br /><br />

                <input
                    type="text"
                    placeholder="Author"
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                />

                <br /><br />

                <textarea style={{
                    width: '1000px'
                }}
                    placeholder="Write your content..."
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    rows="6"
                />

                <br /><br />

                <button type="submit" onClick={refreshData}>
                    {activeTab === "poetry"
                        ? "Publish Poetry"
                        : "Publish Story"}
                        
                </button>

            </form>
        </div>
    );
}

export default Addpostmodel;