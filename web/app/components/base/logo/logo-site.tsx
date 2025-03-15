"use client";
import type { FC } from "react";
import classNames from "@/utils/classnames";

type LogoSiteProps = {
  className?: string;
  isHeader?: boolean;
};

const LogoSite: FC<LogoSiteProps> = ({ className, isHeader }) => {
  const customizedStyles = {
    width: "200px",
    marginTop: "10px",
    objectFit: "contain",
  };
  const customizedClassname = "block w-[20.651px] h-[200.5px]"

  return (
    <img
      src={"/logo/logo.png"}
      className={classNames(isHeader ? customizedClassname : "block w-[22.651px] h-[24.5px]", className)}
      style={
        isHeader ? customizedStyles : { width: "100%", objectFit: "contain" }
      }
      alt="logo"
    />
  );
};

export default LogoSite;
