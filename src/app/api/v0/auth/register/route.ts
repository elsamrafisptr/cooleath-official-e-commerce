import { register } from "@/services/auth/register";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    if (req.method === "POST") {
        const userData = await req.json();
        const result = await register(userData);

        if (result) {
            return NextResponse.json({ apiStatus: true, message: "success" }, { status: 200 });
        } else {
            return NextResponse.json({ apiStatus: false, message: "failed" }, { status: 400 });
        }
    } else {
        return NextResponse.json({ apiStatus: false, message: "Method not allowed" }, { status: 405 });
    }
}
