import React from "react";
import ProfileInfo from "../Cards/ProfileInfo";
import { Navigate, useNavigate } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";

const Navbar = () => {
  const [searchQuerry, setSearchQuerry] = React.useState("");

  const navigate = useNavigate();
  const onLogout = () => {
    navigate("/login");
  };
  const handleSearch = () => {};

  const onClearSearch = () => {
    setSearchQuerry("");
  };

  return (
    <div className="bg-white flex justify-between px-6 py-2 drop-shadow">
      <h1 className="text-xl font-medium text-black py-2">Notes</h1>
      <SearchBar
        value={searchQuerry}
        onChange={(e) => setSearchQuerry(e.target.value)}
        handleSearch={handleSearch}
        onClearSearch={onClearSearch}
      />
      <ProfileInfo onLogout={onLogout} />
    </div>
  );
};

export default Navbar;
