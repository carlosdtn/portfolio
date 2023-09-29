import { getPlaiceholder } from 'plaiceholder';

export async function getBase64(imageUrl: string | undefined) {
  try {
    if (!imageUrl) return '';
    const res = await fetch(imageUrl);
    console.log(res);
    const buffer = await res.arrayBuffer();

    const { base64 } = await getPlaiceholder(Buffer.from(buffer));
    return base64;
  } catch (error) {
    console.log(error);
    return '';
  }
}
