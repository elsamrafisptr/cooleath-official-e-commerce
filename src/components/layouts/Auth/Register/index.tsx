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
    <div className="flex items-center justify-center flex-col h-screen w-full gap-6">
      <h1 className="text-2xl font-bold mb-6">Register</h1>
      <div className="p-6 border rounded-[8px]">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 items-start"
        >
          <div className="flex flex-col gap-1">
            <label htmlFor="username" className="text-sm font-medium">
              Username
            </label>
            <input
              type="text"
              name="username"
              id="username"
              className="border rounded-[4px] bg-gray-50"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="email" className="text-sm font-medium">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="border rounded-[4px] bg-gray-50"
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
              className="border rounded-[4px] bg-gray-50"
            />
          </div>
          <button
            type="submit"
            disabled={isLoading}
            className="px-3 py-1 mt-4 bg-blue-600 text-white text-sm rounded-[4px] disabled:opacity-50"
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
