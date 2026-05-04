import { NextRequest, NextResponse } from 'next/server';
export async function POST(req: NextRequest) {
  const { title } = await req.json();
  console.log(`🎵 받은 노래 제목: ${title}`);
  return NextResponse.json({ message: '검색 완료!', receivedTitle: title });
}