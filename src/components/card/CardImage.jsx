const CardImage = ({ src, alt = "CardImage" }) => {
  return (
    <div className="w-full h-48 overflow-hidden rounded-t-lg">
      {src ? (
        <img className="w-full h-full object-cover" src={src} alt={alt} />
      ) : (
        <div className="w-full h-full bg-linear-to-br from-gray-100 to-gray-400 flex items-center justify-center">
          <span className="text-sm text-gray-800">No Image Available</span>
        </div>
      )}
    </div>
  );
};

export default CardImage;
