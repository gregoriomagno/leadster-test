import React from "react";
import Image from "next/image";

const Logo = () => {
  return (
    <Image
      src={"/assets/logo.png"}
      alt="logo-leadster"
      width={194}
      height={42}
    />
  );
};

export default Logo;
