import ConnectDB from "@/app/lib/mongodb";
import User from "@/models/User";
import bcrypt from "bcryptjs";

export async function POST(req) {
  try {
    await ConnectDB();

    const { email, password } =
      await req.json();

    const user = await User.findOne({
      email,
    });

    if (!user) {
      return Response.json({
        success: false,
        message: "User not found",
      });
    }

    const match = await bcrypt.compare(
      password,
      user.password
    );

    if (!match) {
      return Response.json({
        success: false,
        message: "Invalid Password",
      });
    }

    return Response.json({
      success: true,
      user: {
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });

  } catch (error) {

    return Response.json({
      success: false,
      message: error.message,
    });

  }
}