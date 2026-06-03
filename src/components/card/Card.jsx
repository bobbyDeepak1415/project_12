const Card = ({
  children,
  padding = "normal",
  variant = "default",
  hover = true,
  className = "",
}) => {
  const baseStyles = "rounded-lg shadow-md transition-all duration-300";

  const paddingStyles = {
    none: "",
    small: "p-4",
    normal: "p-6",
    large: "p-8",
  };

  const variants = {
    default: "bg-white border border-gray-200",
    primary: "bg-blue-100 border border-blue-200",
    success: "bg-green-200 border border-green-800",
    dark: "bg-gray-800 text-white border border-white",
  };

  const hoverStyles = hover ? "hover:shadow-xl hover:-translate-y-2" : "";

  return (
    <div
      className={`${baseStyles} ${className} ${variants[variant]} ${paddingStyles[padding]} ${hoverStyles}`}
    >
      {children}
    </div>
  );
};

export default Card;
