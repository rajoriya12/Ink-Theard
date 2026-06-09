'use client';

import { useState } from "react";

function Addpostmodel({ activeTab, refreshData }) {
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
        <div className="w-full border border-zinc-800 rounded-2xl p-5 md:p-8 bg-zinc-950">

            <h2 className="text-2xl font-bold mb-6">
                {activeTab === "poetry"
                    ? "Add Poetry"
                    : "Add Story"}
            </h2>

            <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-5"
            >
                <input
                    type="text"
                    placeholder="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="w-full p-4 rounded-xl bg-zinc-900 border border-zinc-700 outline-none"
                />

                <input
                    type="text"
                    placeholder="Author"
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                    className="w-full p-4 rounded-xl bg-zinc-900 border border-zinc-700 outline-none"
                />

                <textarea
                    placeholder="Write your content..."
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    rows={8}
                    className="w-full p-4 rounded-xl bg-zinc-900 border border-zinc-700 outline-none resize-none"
                />

                <button
                    type="submit"
                    className="retro-btn px-8 py-4 rounded-xl font-semibold w-full sm:w-fit"
                >
                    {activeTab === "poetry"
                        ? "Publish Poetry"
                        : "Publish Story"}
                </button>
            </form>
        </div>
    );
}

export default Addpostmodel;