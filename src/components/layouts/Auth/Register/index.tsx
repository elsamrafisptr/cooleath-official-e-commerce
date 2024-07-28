"use client";

import { useRouter } from "next/navigation";
import React, { FormEvent, useState } from "react";

const Register = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState("");
    const router = useRouter();
    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setIsLoading(true);
        setError("");
        const form = event.target as HTMLFormElement;
        const data = {
            username: form.username.value,
            email: form.email.value,
            password: form.password.value,
        };

        const result = await fetch("/api/v0/auth/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });
        if (result.status === 200) {
            form.reset();
            setIsLoading(false);
            alert("Registrasi berhasil!");
        } else {
            setIsLoading(false);
            setError("");
        }

        const response = await result.json();
    };

    return (
        <div className="flex h-screen w-full flex-col items-center justify-center gap-6">
            <h1 className="mb-6 text-2xl font-bold">Register</h1>
            <div className="rounded-[8px] border p-6">
                <form onSubmit={handleSubmit} className="flex flex-col items-start gap-4">
                    <div className="flex flex-col gap-1">
                        <label htmlFor="username" className="text-sm font-medium">
                            Username
                        </label>
                        <input type="text" name="username" id="username" className="rounded-[4px] border bg-gray-50" />
                    </div>
                    <div className="flex flex-col gap-1">
                        <label htmlFor="email" className="text-sm font-medium">
                            Email
                        </label>
                        <input type="email" name="email" id="email" className="rounded-[4px] border bg-gray-50" />
                    </div>
                    <div className="flex flex-col gap-1">
                        <label htmlFor="password" className="text-sm font-medium">
                            Password
                        </label>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            className="rounded-[4px] border bg-gray-50"
                        />
                    </div>
                    <button
                        type="submit"
                        disabled={isLoading}
                        className="mt-4 rounded-[4px] bg-blue-600 px-3 py-1 text-sm text-white disabled:opacity-50"
                    >
                        {isLoading ? "Loading..." : "Register"}
                    </button>
                </form>
            </div>
            <p>Have an account? Sign in here</p>
        </div>
    );
};

export default Register;
