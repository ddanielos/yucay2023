import { createClient } from 'contentful';

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

export async function getEntryById(entryId) {
  try {
    const entry = await client.getEntry(entryId);
    return entry;
  } catch (error) {
    console.error('Error fetching entry:', error);
    return null;
  }
}

export async function getEntriesByContentType(contentType) {
  try {
    const entries = await client.getEntries({
      content_type: contentType,
      limit: 1000 // Ajusta este valor según tus necesidades
    });
    return entries.items;
  } catch (error) {
    console.error('Error fetching entries:', error);
    return [];
  }
}

export async function getAssetById(assetId) {
  try {
    const asset = await client.getAsset(assetId);
    return asset;
  } catch (error) {
    console.error('Error fetching asset:', error);
    return null;
  }
}