import ConnectDB from "@/app/lib/mongodb";
import Order from "@/models/Order";

export async function POST(req) {
  try {
    await ConnectDB();

    const body = await req.json();

    const order = await Order.create(body);

    return Response.json({
      success: true,
      order,
    });
  } catch (error) {
    return Response.json({
      success: false,
      message: error.message,
    });
  }
}