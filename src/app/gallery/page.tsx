import { getPhotos } from "../serverFn/photo";
import Grid from "@/components/Grid";

const Gallery = async () => {
  const { photos } = await getPhotos();
  return <Grid photos={photos} />;
};

export default Gallery;
