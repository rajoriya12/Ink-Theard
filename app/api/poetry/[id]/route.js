import ConnectDB from "@/app/lib/mongodb";
import Poetry from "@/models/poerty";

export async function PATCH(req, { params }) {
    try {
        await ConnectDB();

        const { id } = await params;

        const poetry = await Poetry.findByIdAndUpdate(
            id,
            { $inc: { likes: 1 } },
            { new: true }
        );

        return Response.json({
            success: true,
            likes: poetry.likes,
        });
    } catch (error) {
        return Response.json({
            success: false,
            message: error.message,
        });
    }
}

export async function DELETE(req, { params }) {
  try {
    await ConnectDB();

    const { id } = await params;

    await Poetry.findByIdAndDelete(id);

    return Response.json({
      success: true,
      message: "Poetry Deleted Successfully",
    });

  } catch (error) {
    return Response.json({
      success: false,
      message: error.message,
    });
  }
}