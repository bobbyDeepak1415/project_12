const CardImage = ({ src, alt }) => {
  return (
    <div className="w-full h-48 overflow-hidden">
      {src ? (
        <img src={src} alt={alt} className="w-full h-full object-cover rounded-t-lg mt-2" />
      ) : (
        <div className="w-full h-full items-center justify-center flex bg-linear-to-br from-gray-200 to-gray-300">
          <span className="text-sm text-gray-400">No Image Available</span>
        </div>
      )}
    </div>
  );
};

export default CardImage;
