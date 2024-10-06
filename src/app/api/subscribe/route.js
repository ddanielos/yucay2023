import { NextResponse } from 'next/server';

export async function POST(request) {
  const { name, email } = await request.json();

  const spaceId = process.env.CONTENTFUL_SPACE_ID;
  const environmentId = process.env.CONTENTFUL_ENVIRONMENT_ID;
  const accessToken = process.env.CONTENTFUL_CMA_TOKEN;

  const url = `https://api.contentful.com/spaces/${spaceId}/environments/${environmentId}/entries`;

  const data = {
    fields: {
      name: {
        'en-US': name,
      },
      email: {
        'en-US': email,
      }
    }
  };

  try {
    // Crear una nueva entrada en Contentful
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Content-Type': 'application/vnd.contentful.management.v1+json',
        'X-Contentful-Content-Type': 'yucayLovers',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const errorDetails = await response.json();
      return NextResponse.json({ message: `Error creating entry: ${errorDetails.message}` }, { status: response.status });
    }

    const entry = await response.json();

    // Publicar la entrada
    const publishUrl = `${url}/${entry.sys.id}/published`;
    const version = entry.sys.version;

    const publishResponse = await fetch(publishUrl, {
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Content-Type': 'application/vnd.contentful.management.v1+json',
        'X-Contentful-Version': version,
      },
    });

    if (!publishResponse.ok) {
      const publishErrorDetails = await publishResponse.json();
      return NextResponse.json({ message: `Error publishing entry: ${publishErrorDetails.message}` }, { status: publishResponse.status });
    }

    const publishedEntry = await publishResponse.json();
    return NextResponse.json({ message: 'Entry created and published successfully', entry: publishedEntry }, { status: 200 });
  } catch (error) {
    console.error('Error creating and publishing entry:', error);
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  }
}
