"use client";
import Image from "next/image";

type Props = {
  url: string;
  alt: string;
};

const ImageComponent: React.FC<Props> = ({ url, alt }: Props) => {
  return (
    <div>
      <Image
        src={url}
        height={300}
        width={150}
        alt={alt}
        loader={() => url}
        unoptimized={true}
        priority={true}
        className="w-full h-48 object-cover object-center"
      />
    </div>
  );
};

export default ImageComponent;
