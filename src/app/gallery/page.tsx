import { Photo } from "@/types/photo";
import { getPhotos } from "../serverFn/photo";
import ImageComponent from "@/components/Image";

const Gallery = async () => {
  const { photos } = await getPhotos();
  return (
    <div>
      {photos.map((photo: Photo) => (
        <ImageComponent url={photo.src.large} alt={photo.alt} key={photo.id} />
      ))}
    </div>
  );
};

export default Gallery;
