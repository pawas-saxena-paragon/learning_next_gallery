import { Photo } from "@/types/photo";
import ImageComponent from "./Image";

type Props = {
  photos: Photo[];
};
const Grid: React.FC<Props> = ({ photos }: Props) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {photos.map((photo: Photo) => (
        <div
          key={photo.id}
          className="bg-white  overflow-hidden  rounded-lg  shadow-md"
        >
          <ImageComponent url={photo.src.large} alt={photo.alt} />
        </div>
      ))}
    </div>
  );
};

export default Grid;
