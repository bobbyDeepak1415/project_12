const CardImage = ({ src, alt = "Card Image" }) => {
  return (
    <div className="w-full h-48 overflow-hidden rounded-t-xl">
      {src ? (
        <img className="w-full h-full object-cover" src={src} alt={alt} />
      ) : (
        <div className=" bg-linear-to-br from-gray-100 to-gray-300">
          <span>No Image available</span>
        </div>
      )}
    </div>
  );
};

export default CardImage;
