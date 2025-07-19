import { NextResponse } from 'next/server';
import { problems } from '../../../../lib/problems';

export async function GET(request: Request) {
  // クエリパラメータでdifficulty指定可能
  const { searchParams } = new URL(request.url);
  const difficulty = searchParams.get('difficulty');
  const filtered = difficulty
    ? problems.filter((p) => p.difficulty === difficulty)
    : problems;
  const random = filtered[Math.floor(Math.random() * filtered.length)];
  return NextResponse.json(random);
}
