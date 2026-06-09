import ConnectDB from "@/app/lib/mongodb";
import Product from "@/models/Products";

export async function GET(req, { params }) {
  try {
    await ConnectDB();

    const { id } = await params;

    const product = await Product.findById(id);

    return Response.json({
      success: true,
      product,
    });
  } catch (error) {
    return Response.json({
      success: false,
      message: error.message,
    });
  }
}