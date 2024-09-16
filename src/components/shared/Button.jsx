const Button = ({ 
  label, 
  onClick, 
  disabled, 
  variant = 'primary', // default to 'primary' variant
  icon: Icon,
}) => {

  const baseStyles = `
    flex
    items-center
    justify-center
    gap-2
    px-6
    py-3
    rounded-md
    transition
    duration-300
    ease-in-out
    focus:outline-none
    focus:ring-2
    focus:ring-offset-2
    focus:ring-opacity-50
    disabled:opacity-60
    disabled:cursor-not-allowed
  `;

  const variants = {
    primary: 'bg-indigo-600 text-white hover:bg-indigo-700 focus:ring-indigo-500',
    secondary: 'bg-gray-100 text-gray-800 hover:bg-gray-200 focus:ring-gray-300',
    danger: 'bg-red-500 text-white hover:bg-red-600 focus:ring-red-400',
    success: 'bg-green-500 text-white hover:bg-green-600 focus:ring-green-400',
  };

  return ( 
    <button
      disabled={disabled}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]}`}
    >
      {Icon && (
        <Icon
          size={20}
          className="mr-2"
        />
      )}
      <span>{label}</span>
    </button>
  );
}

export default Button;
