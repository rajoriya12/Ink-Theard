import ConnectDB from "@/app/lib/mongodb";
import User from "@/models/User";
import bcrypt from "bcryptjs";

export async function POST(req) {
    try {
        await ConnectDB();

        const { name, email, password } =
            await req.json();

        const exists = await User.findOne({
            email,
        });

        if (exists) {
            return Response.json({
                success: false,
                message: "User already exists",
            });
        }

        if (!name || !email || !password) {
            return Response.json({
                success: false,
                message: "All fields are required",
            });
        }

        if (!email.includes("@")) {
            return Response.json({
                success: false,
                message: "Invalid email",
            });
        }
        const hashedPassword =
            await bcrypt.hash(password, 10);

        await User.create({
            name,
            email,
            password: hashedPassword,
            phone,
        });

        return Response.json({
            success: true,
        });

    } catch (error) {

        return Response.json({
            success: false,
            message: error.message,
        });

    }
}