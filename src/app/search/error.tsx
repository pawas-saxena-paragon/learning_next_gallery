"use client";
type Props = {
  error: Error & { digest?: string };
  reset: () => void;
};
const SearchError: React.FC<Props> = ({ error, reset }: Props) => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="text-center ">
        <p className="text-lg text-gray-600 mb-8">{error.message}</p>
      </div>
    </div>
  );
};

export default SearchError;
