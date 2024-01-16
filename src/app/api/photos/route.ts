import env from "@/lib/env";

export async function GET() {
  const response = await fetch(
    "https://api.pexels.com/v1/curated?page=2&per_page=40",
    {
      headers: {
        Authorization: env.PEXEL_KEY,
      },
    }
  );

  if (response.ok) {
    return response.json();
  } else {
    throw new Error("unable to fetch photo data");
  }
}
