"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function ProfilePage() {

    const [user, setUser] = useState(null);

    useEffect(() => {

        const name =
            localStorage.getItem("userName");

        const email =
            localStorage.getItem("userEmail");

        const role =
            localStorage.getItem("userRole");

        if (email) {

            setUser({
                name,
                email,
                role,
            });

        }

    }, []);
    const router = useRouter();
    useEffect(() => {

        const email =
            localStorage.getItem("userEmail");

        if (!email) {

            router.push("/login");
            return;
        }

    }, []);

    if (!user) {

        return (
            <div
                className="min-h-screen bg-black text-white flex items-center justify-center"
            >
                Please Login
            </div>
        );
    }

    return (

        <div
            className="min-h-screen bg-black text-white"
            style={{
                paddingTop: "130px",
                paddingLeft: "30px",
                paddingRight: "30px",
            }}
        >

            <div
                className="max-w-3xl mx-auto bg-zinc-900 rounded-2xl p-8"
            >

                <h1 className="text-4xl font-bold mb-8">
                    My Profile
                </h1>

                <div className="space-y-5">

                    <div>
                        <p className="text-zinc-400">
                            Name
                        </p>

                        <h2 className="text-2xl">
                            {user.name}
                        </h2>
                    </div>

                    <div>
                        <p className="text-zinc-400">
                            Email
                        </p>

                        <h2 className="text-2xl">
                            {user.email}
                        </h2>
                    </div>

                    <div>
                        <p className="text-zinc-400">
                            Role
                        </p>

                        <h2 className="text-2xl">
                            {user.role}
                        </h2>
                    </div>

                </div>

            </div>

        </div>

    );
}