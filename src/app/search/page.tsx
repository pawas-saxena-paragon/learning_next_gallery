import Grid from "@/components/Grid";
import { searchPhotos } from "../serverFn/photo";

const Page: React.FC = async ({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}) => {
  if (searchParams && searchParams["text"]) {
    const { photos } = await searchPhotos(searchParams["text"] as string);
    return <Grid photos={photos} />;
  } else {
    throw new Error(" no search param present");
  }
};

export default Page;
