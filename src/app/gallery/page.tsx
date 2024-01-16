import { GET as getPhoto } from "@/app/api/photos/route";
import env from "@/lib/env";

const Gallery = async () => {
  const photos = await getPhoto();
  console.log('hot photos', photos);
  return <h1>Gallery component</h1>;
};

export default Gallery;
