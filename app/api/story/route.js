import ConnectDB from "@/app/lib/mongodb";
import Story from "@/models/story"

export async function POST(req) {
  try {
    await ConnectDB();

    const body = await req.json();

    const story = await Story.create(body);

    return Response.json({
      success: true,
      story,
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

    const stories = await Story.find()
      .sort({ createdAt: -1 });

    return Response.json({
      success: true,
      stories,
    });

  } catch (error) {

    return Response.json({
      success: false,
      message: error.message,
    });

  }
}