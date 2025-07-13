// app/api/register/route.ts
import { NextResponse } from 'next/server';
import { dbConnect } from '@/lib/mongodb';
import Candidate from '@/models/Candidate';
import { sendWelcomeEmail } from '@/lib/email';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email, fullName } = body;

    // ✅ Validate required fields
    if (!email || !fullName) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    await dbConnect();

    // ✅ Check for duplicates
    const existingCandidate = await Candidate.findOne({ email });
    if (existingCandidate) {
      return NextResponse.json(
        { message: 'Candidate already exists' },
        { status: 400 }
      );
    }

    // ✅ Save new candidate
    const newCandidate = new Candidate({ email, fullName });
    await newCandidate.save();

    // ✅ Send welcome email
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


