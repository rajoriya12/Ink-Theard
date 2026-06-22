'use client';

import React, { useEffect, useState } from 'react';
import Hero from '@/app/Community/components/Hero';
import Tabs from '@/app/Community/components/Tabs';
import Sidebar from '@/app/Community/components/sidebar';
import Feed from '@/app/Community/components/feed';
import Addpostmodel from '@/app/Community/components/Addpostmodel';

function Page() {
    const [activeTab, setActiveTab] = useState("poetry");
    const [poetry, setPoetry] = useState([]);
    const [stories, setStories] = useState([]);

    const fetchPoetry = async () => {
        try {
            const res = await fetch('/api/poetry');
            const data = await res.json();

            if (data.success) {
                setPoetry(data.poetry);
            }
        } catch (err) {
            console.log(err);
        }
    };

    const fetchStories = async () => {
        try {
            const res = await fetch("/api/story");
            const data = await res.json();

            if (data.success) {
                setStories(data.stories);
            }
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        fetchPoetry();
        fetchStories();
    }, []);
    const refreshData = async () => {
        await fetchPoetry();
        await fetchStories();
    };
    const handleLike = async (id) => {
        const endpoint =
            activeTab === "poetry"
                ? `/api/poetry/${id}`
                : `/api/story/${id}`;

        await fetch(endpoint, {
            method: "PATCH",
        });

        refreshData();
    };

    const handleDelete = async (id) => {
        console.log("DELETE CLICKED:", id);

        const endpoint =
            activeTab === "poetry"
                ? `/api/poetry/${id}`
                : `/api/story/${id}`;

        await fetch(endpoint, {
            method: "DELETE",
        });

        refreshData();
    };
    return (
        <div>
            <Hero />
            <Tabs
                activeTab={activeTab}
                setActiveTab={setActiveTab}
            />

            <div
                style={{
                    display: 'flex',
                    gap: '20px',
                    padding: '20px',
                    flexDirection:'column'
                }}
            >
                <div>
                    <Sidebar
                        poetryCount={poetry.length}
                        storyCount={stories.length}
                    />
                </div>

                <div style={{ flex: 1 }}>
                    {activeTab === "poetry" ? (
                        <Feed
                            poetry={poetry}
                            handleLike={handleLike}
                            handleDelete={handleDelete}
                        />
                    ) : (
                        <Feed
                            poetry={stories}
                            handleLike={handleLike}
                            handleDelete={handleDelete}
                        />
                    )}

                </div>
            </div>

            <Addpostmodel
                activeTab={activeTab}
                refreshData={refreshData}
            />
        </div>

    );
}

export default Page;