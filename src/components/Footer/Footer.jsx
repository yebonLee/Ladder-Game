import React from "react";

const Footer = ({ className, children }) => {
  return <footer className={`footer ${className}`}>{children}</footer>;
};

export default Footer;
