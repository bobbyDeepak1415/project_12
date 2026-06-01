const Card = ({
  children,
  padding = "normal",
  variant = "default",
  hover = true,
  className = "",
}) => {
  const baseStyles = "";

  const paddingStyles = {};

  const variants = {};

  const hoverStyles = hover ? "hover:bg-blue-700" : "";

  return <div>{children}</div>;
};

export default Card;
