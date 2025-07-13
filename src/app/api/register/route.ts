import { NextResponse } from 'next/server';
import { dbConnect } from '@/lib/mongodb';
import Candidate from '@/models/Candidate';
import { sendWelcomeEmail } from '@/lib/email';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email, fullName } = body;

    if (!email || !fullName) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    await dbConnect();

    const existingCandidate = await Candidate.findOne({ email });
    if (existingCandidate) {
      return NextResponse.json(
        { error: 'This email is already subscribed to the open beta.' },
        { status: 400 }
      );
    }

    const newCandidate = new Candidate({ email, fullName });
    await newCandidate.save();

    try {
      await sendWelcomeEmail(email, fullName || "Candidate");
    } catch (emailError) {
      console.error("❌ Failed to send welcome email:", emailError);
    }

    return NextResponse.json(
      { message: 'Candidate registered successfully!' },
      { status: 201 }
    );
  } catch (error: unknown) {
    console.error('❌ Error in /api/register:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Server Error' },
      { status: 500 }
    );
  }
}



