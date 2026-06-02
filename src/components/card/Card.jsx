const Card = ({
  children,
  padding = "normal",
  variant = "default",
  hover = true,
  className = "",
}) => {

  const baseStyles="shadow-md hover:transition-all duration-300"

  const paddingStyles = {
    none: "",
    small: "p-4",
    normal: "p-6",
    large: "p-8",
  };

  const variants = {
    default: "bg-gray-50 border-gray-600",
    primary: "bg-blue-200 border-blue-800",
    success: "bg-green-200 border-green-800",
    dark: "bg-gray-800 text-white border-gray-300",
  };

  const hoverStyles = hover ? "hover:shadow-xl hover:-translate-x-1" : "";

  return (
    <div
      className={`${baseStyles} ${className} ${variants[variant]} ${paddingStyles[padding]} ${hoverStyles}`}
    >
      {children}
    </div>
  );
};

export default Card;
