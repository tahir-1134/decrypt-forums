import React from "react";
import { Link } from "react-router-dom";

function NavLink({ catagory, isActive }) {
  return (
    <Link
      to={`/news/${catagory}`}
      style={{ color: "white", textDecorationLine: isActive?"under-line":"none", textDecorationColor: "#0888FF" }}
    >
      {catagory}
    </Link>
  );
}

export default NavLink;
