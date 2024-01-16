const LoadingSpinner = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="border-t-4 border-blue-500 rounded-full animate-spin h-16 w-16"></div>
    </div>
  );
};

export default LoadingSpinner;
