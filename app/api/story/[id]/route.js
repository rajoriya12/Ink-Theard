import ConnectDB from "@/app/lib/mongodb";
import Story from "@/models/story";

export async function PATCH(req, { params }) {
    try {
        await ConnectDB();

        const { id } = await params;

        const story = await Story.findByIdAndUpdate(
            id,
            { $inc: { likes: 1 } },
            { new: true }
        );

        return Response.json({
            success: true,
            likes: story.likes,
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

    await Story.findByIdAndDelete(id);

    return Response.json({
      success: true,
      message: "Story Deleted Successfully",
    });

  } catch (error) {
    return Response.json({
      success: false,
      message: error.message,
    });
  }
}