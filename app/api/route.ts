// app/api/contact/route.ts
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    // ✅ Validation (optional)
    if (!name || !email || !message) {
      return NextResponse.json({ error: 'All fields are required' }, { status: 400 });
    }

    // ✅ For now, just log to the terminal
    console.log('📬 New Contact Form Submission:', { name, email, message });

    // TODO: You can add email sending logic here

    return NextResponse.json({ message: 'Form submitted successfully' }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
