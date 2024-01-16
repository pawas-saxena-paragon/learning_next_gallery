import env from "@/lib/env";
import { PhotoResponse } from "@/types/photo";

export async function getPhotos(): Promise<PhotoResponse> {
  const response = await fetch(
    "https://api.pexels.com/v1/curated?page=2&per_page=40",
    {
      headers: {
        Authorization: env.PEXEL_KEY,
      },
    }
  );

  if (response.ok) {
    const data: PhotoResponse = await response.json();
    return data;
  } else {
    throw new Error("unable to fetch photo data");
  }
}

export async function searchPhotos(text: string): Promise<PhotoResponse> {
  const response = await fetch(
    `https://api.pexels.com/v1/search?query=${text}&per_page=40`,
    {
      headers: {
        Authorization: env.PEXEL_KEY,
      },
    }
  );

  if (response.ok) {
    const data: PhotoResponse = await response.json();
    return data;
  } else {
    throw new Error("unable to search photo data for" + text);
  }
}
