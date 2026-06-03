const CardFooter = ({ children, className = "" }) => {
  return (
    <div className={`${className} mt-4 pt-4 border-t border-gray-200`}>
      {children}
    </div>
  );
};

export default CardFooter;
