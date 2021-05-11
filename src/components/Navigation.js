import React from "react";
import { Link } from "react-router-dom";

const links = [
  {
    to: "/react-deploy-21hw/",
    label: "Home",
  },
  {
    to: "/react-deploy-21hw/posts",
    label: "Posts",
  },
  {
    to: "/react-deploy-21hw/photos",
    label: "Photos",
  },
  {
    to: "/react-deploy-21hw/contacts",
    label: "Contacts",
  },
];

const Navigation = () => {
  return (
    <nav className="nav-list">
      <ul className="nav">
        {links.map((link) => (
          <li key={link.to}>
            <Link exact to={link.to} className="active">{link.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
