import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import SearchIcon from "@mui/icons-material/Search";
const Navbar = () => {
  const handleclick = () => {
    setSearchDisappearing(!searchDisappearing);
  };
  const [searchDisappearing, setSearchDisappearing] = useState(false);
  return (
    <div width="200px">
      <SearchIcon
        color="secondary"
        fontSize="large"
        onClick={handleclick}
        sx={{ m: -2 }}
      />

      {searchDisappearing ? (
        <input
          type="search"
          style={{
            width: "500px",
            margin: "10%",
            marginTop: "10px",
            height: "50px",
            borderRadius: "10px",
            border: "solid 3px gray",
          }}
        />
      ) : null}
    </div>
  );
};
export default Navbar;
