function Button({ bgVariant = "bg-black", text, children, ...props }) {
  return (
    <button
      {...props}
      className={`${bgVariant} text-xs px-3  py-2 text-white rounded hover:opacity-80`}
    >
      {text || children}
    </button>
  );
}

export default Button;
