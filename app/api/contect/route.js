import ConnectDB from "@/app/lib/mongodb";
import ContactForm from "@/models/contectForm";

export async function POST(req) {
  try {
    await ConnectDB();

    const body = await req.json();

    console.log("BODY:", body);

    const contactForm = await ContactForm.create(body);

    return Response.json({
      success: true,
      contactForm,
    });

  } catch (error) {
    console.error(error);

    return Response.json({
      success: false,
      message: error.message,
    });
  }
}