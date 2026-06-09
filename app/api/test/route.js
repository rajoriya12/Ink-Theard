import ConnectDB from "@/app/lib/mongodb";

export async function GET() {

  try {

    await ConnectDB();

    return Response.json({
      success: true,
      message: "Database Connected 😎🔥",
    });

  } catch (error) {

    return Response.json({
      success: false,
      message: "Database Failed 😭",
      error: error.message,
    });

  }

}