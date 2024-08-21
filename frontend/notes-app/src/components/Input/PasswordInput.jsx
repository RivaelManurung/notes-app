import React from "react";

import { FaRegEye, FaRegEyeSlash } from "react-icons/fa"; // Pastikan mengimpor ikon

const PasswordInput = ({ value, onChange, placeholder }) => {
  const [isShowPassword, setIsShowPassword] = React.useState(false);

  const toggleShowPassword = () => {
    setIsShowPassword(!isShowPassword);
  };

  return (
    <div className="flex items-center bg-transparent border-[1.5px] px-5 mb-3 rounded">
      <input
        value={value}
        onChange={onChange}
        type={isShowPassword ? "text" : "password"}
        placeholder={placeholder || "Password"}
        className="outline-none w-full bg-transparent py-3 text-sm rounded mr-3"
      />

      {isShowPassword ? (
        <FaRegEye
          size={20}
          className="cursor-pointer"
          onClick={toggleShowPassword}
        />
      ) : (
        <FaRegEyeSlash
          size={20}
          className="cursor-pointer"
          onClick={toggleShowPassword}
        />
      )}
    </div>
  );
};



export default PasswordInput;
