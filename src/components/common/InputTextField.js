const Input = ({ label, name, type = "text", ...rest }) => {
  return (
    <div className="relative z-0 w-[100%] sm:mb-8">
      <input
        {...rest}
        id={name}
        type={type}
        placeholder={label}
        className="sm:pt-3 sm:pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-[1px] appearance-none focus:outline-none focus:ring-0 focus:border-black border-black text-black placeholder:text-black"
      />
      <label
        htmlFor={name}
        className="absolute duration-300 top-3 -z-1 origin-0 text-black"
      ></label>
    </div>
  );
};

export default Input;
