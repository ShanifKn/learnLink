import React from "react";
import PhoneEnabledOutlinedIcon from "@mui/icons-material/PhoneEnabledOutlined";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className=" bg-gray-800  text-white font-medium hidden md:block">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4 h-10">
          <div className="flex items-center gap-5">
            <div className="flex items-center gap-2">
              <PhoneEnabledOutlinedIcon fontSize="small" />
              <p className="text-sm font-medium">
                +91 735 621 5644
              </p>
            </div>
            |
            <div className="flex items-center gap-2">
              <MailOutlineOutlinedIcon fontSize="small" />
              <p className="text-sm font-medium">
                info@learnlink.in
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Link
              to="https://www.facebook.com"
              target="_blank">
              <FacebookOutlinedIcon fontSize="small" />
            </Link>
            <Link
              to="https://www.facebook.com"
              target="_blank">
              <InstagramIcon fontSize="small" />
            </Link>
            <Link
              to="https://www.facebook.com"
              target="_blank">
              <TwitterIcon fontSize="small" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
