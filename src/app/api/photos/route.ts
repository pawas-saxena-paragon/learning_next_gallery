import env from "@/lib/env";
import { Photo } from "@/types/photo";

export async function GET(): Promise<Response> {
  const response = await fetch(
    "https://api.pexels.com/v1/curated?page=2&per_page=40",
    {
      headers: {
        Authorization: env.PEXEL_KEY,
      },
    }
  );

  if (response.ok) {
    const data: Photo[] = await response.json();
    return Response.json({ data });
  } else {
    throw new Error("unable to fetch photo data");
  }
}
