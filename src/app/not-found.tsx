import ImageComponent from "@/components/Image";

const NotFound: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="text-center ">
        <p className="text-lg text-gray-600 mb-8">
          Sorry, the page you are looking for does not exist.
        </p>
        <div>
          <ImageComponent
            alt="Not Found"
            url="https://images.pexels.com/photos/78793/automotive-defect-broken-car-wreck-78793.jpeg"
          />
        </div>
      </div>
    </div>
  );
};

export default NotFound;
