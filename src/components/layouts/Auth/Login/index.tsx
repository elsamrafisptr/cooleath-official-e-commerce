"use client";

import { signIn } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { FormEvent, useState } from "react";

const Login = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState("");
    const router = useRouter();

    // const callbackUrl: any = query.callbackUrl || '/'

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setIsLoading(true);
        setError("");
        const form = event.target as HTMLFormElement;
        try {
            const res = await signIn("credentials", {
                redirect: false,
                email: form.email.value,
                password: form.password.value,
                // callbackUrl
            });
            if (!res?.error) {
                setIsLoading(false);
                form.reset();
                router.push("/admin");
            } else {
                setIsLoading(false);
                setError(res.error || "Invalid login credentials");
            }
        } catch (error) {
            setIsLoading(false);
            setError("An error occurred during login");
        }
    };

    return (
        <>
            <div className="flex h-screen w-full flex-col items-center justify-center gap-6">
                <h1 className="mb-6 text-4xl font-bold text-white">Login</h1>
                <div className="rounded-[8px] border bg-white p-6">
                    <form onSubmit={handleSubmit} className="flex flex-col items-start gap-4">
                        <div className="flex flex-col gap-1">
                            <label htmlFor="email" className="text-sm font-medium">
                                Email
                            </label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                placeholder="Masukkan Email Kamu"
                                className="rounded-[4px] border bg-gray-50 px-4 py-2 placeholder:text-sm"
                            />
                        </div>
                        <div className="flex flex-col gap-1">
                            <label htmlFor="password" className="text-sm font-medium">
                                Password
                            </label>
                            <input
                                type="password"
                                name="password"
                                id="password"
                                className="rounded-[4px] border bg-gray-50 px-4 py-2"
                            />
                        </div>
                        <button
                            type="submit"
                            disabled={isLoading}
                            className="mt-4 flex w-full items-center justify-center rounded-[4px] bg-blue-600 px-5 py-3 text-sm font-medium text-white disabled:opacity-50"
                        >
                            {isLoading ? "Loading..." : "Login"}
                        </button>
                    </form>
                </div>
                <p className="text-white">
                    Belum punya akun?{" "}
                    <Link href={""} className="text-blue-100 underline">
                        Masuk
                    </Link>
                </p>
            </div>
        </>
    );
};

export default Login;
