
import { NextResponse } from 'next/server';
import { roadmapsData } from '@/lib/roadmaps-data';

export async function GET(
  request: Request,
  { params }: { params: { slug: string } }
) {
  const slug = params.slug;
  const roadmap = roadmapsData.find((r) => r.slug === slug);

  if (!roadmap) {
    return NextResponse.json({ message: 'Roadmap not found' }, { status: 404 });
  }

  return NextResponse.json(roadmap);
}
