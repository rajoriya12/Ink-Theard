import ConnectDB from "@/app/lib/mongodb";
import Order from "@/models/Order";

export async function GET(request, context) {
  try {
    await ConnectDB();

    const { email } = await context.params;

    console.log("EMAIL:", email);

    const orders = await Order.find({
      customerEmail: decodeURIComponent(email),
    }).sort({ createdAt: -1 });

    return Response.json({
      success: true,
      orders,
    });

  } catch (error) {

    console.log(error);

    return Response.json({
      success: false,
      message: error.message,
    });

  }
}