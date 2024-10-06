import { NextResponse } from 'next/server';

const TOKEN_IG = process.env.INSTAGRAM_ACCESS_TOKEN;
export async function GET() {
  const url = `https://graph.instagram.com/me/media?access_token=${TOKEN_IG}&fields=id,caption,media_type,media_url,permalink,thumbnail_url,timestamp,username`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (!response.ok) {
      return NextResponse.json({ message: 'Error fetching Instagram data', error: data }, { status: response.status });
    }

    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    console.error('Error fetching Instagram data:', error);
    return NextResponse.json({ message: 'Internal Server Error', error: error.message }, { status: 500 });
  }
}
