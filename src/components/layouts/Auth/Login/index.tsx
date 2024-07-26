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
      <div className="flex items-center justify-center flex-col h-screen w-full gap-6">
        <h1 className="text-4xl font-bold mb-6 text-white">Login</h1>
        <div className="p-6 border rounded-[8px] bg-white">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4 items-start"
          >
            <div className="flex flex-col gap-1">
              <label htmlFor="email" className="text-sm font-medium">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Masukkan Email Kamu"
                className="border placeholder:text-sm rounded-[4px] px-4 py-2 bg-gray-50"
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
                className="border rounded-[4px] px-4 py-2 bg-gray-50"
              />
            </div>
            <button
              type="submit"
              disabled={isLoading}
              className="px-5 w-full flex justify-center items-center font-medium py-3 mt-4 bg-blue-600 text-white text-sm rounded-[4px] disabled:opacity-50"
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
