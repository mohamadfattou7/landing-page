import { NextResponse } from 'next/server';
import { dbConnect } from '@/lib/mongodb';
import Candidate from '@/models/Candidate';
import { sendWelcomeEmail } from '@/lib/email';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email, fullName } = body;

    await dbConnect();

    // Check if candidate already exists
    const existingCandidate = await Candidate.findOne({ email });
    if (existingCandidate) {
      return NextResponse.json({ message: 'Candidate already exists' }, { status: 400 });
    }

    // Save candidate
    const newCandidate = new Candidate(body);
    await newCandidate.save();

    // Send welcome email
    await sendWelcomeEmail(email, fullName || "Candidate");

    return NextResponse.json({ message: 'Candidate registered and email sent!' }, { status: 201 });
  } catch (error: any) {
    console.error('Error:', error);
    return NextResponse.json({ error: 'Server Error' }, { status: 500 });
  }
}
