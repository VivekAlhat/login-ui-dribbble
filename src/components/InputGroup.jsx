const InputGroup = ({ label, placeholder, type }) => {
  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor={label.toLowerCase()}
        className="font-semibold text-gray-500"
      >
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full border border-zinc-400 p-2 rounded-lg"
      />
    </div>
  );
};

export default InputGroup;
