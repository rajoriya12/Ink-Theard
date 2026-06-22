import ConnectDB from "@/app/lib/mongodb";
import Poetry from "@/models/poerty";

export async function POST(req) {
  try {
    await ConnectDB();

    const body = await req.json();

    const poetry = await Poetry.create(body);

    return Response.json({
      success: true,
      message: "Poetry Published Successfully ",
      poetry,
    });

  } catch (error) {
    return Response.json({
      success: false,
      message: error.message,
    });
  }
}

export async function GET() {
  try {
    await ConnectDB();

    const poetry = await Poetry.find()
      .sort({ createdAt: -1 });

    return Response.json({
      success: true,
      poetry,
    });

  } catch (error) {
    return Response.json({
      success: false,
      message: error.message,
    });
  }
}

