import ConnectDB from "@/app/lib/mongodb";
import Product from "@/models/Products";

export async function GET() {
  try {
    await ConnectDB();

    const products = await Product.find({}).sort({
      createdAt: -1,
    });

    return Response.json({
      success: true,
      products,
    });
  } catch (error) {
    console.log(error);

    return Response.json({
      success: false,
      message: error.message,
    });
  }
}

export async function POST(req) {
  try {
    await ConnectDB();

    const body = await req.json();

    const product = await Product.create(body);

    return Response.json({
      success: true,
      product,
    });
  } catch (error) {
    console.log(error);

    return Response.json({
      success: false,
      message: error.message,
    });
  }
}
console.log(Product.image);