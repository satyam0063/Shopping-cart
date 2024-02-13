"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, Fragment } from "react";
import { Menu, MenuItem } from "@mui/material";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
import MenuTwoToneIcon from "@mui/icons-material/MenuTwoTone";

const Header = () => {
  const menuList = ["home", "users", "about"];

  return (
    <div className="flex flex-row justify-between items-center h-16 px-10 bg-lime-300">
      <div className="basis-1/5">
        <Image
          src={"/static/images/logo.png"}
          width={50}
          height={80}
          alt="logo"
          className="mainLogo"
        />
      </div>
      <div className="basis-1/5 menu-list-container-lg">
        <ul className="flex flex-row justify-between header-menu-items">
          {menuList.map((menu: string, id: number) => (
            <li key={id}>
              <Link href={`/${menu}`}>{menu}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="basis-1/5 menu-list-container-sm">
        <PopupState variant="popover" popupId="demo-popup-menu">
          {(popupState) => (
            <Fragment>
              <MenuTwoToneIcon
                {...bindTrigger(popupState)}
                className="menu-sm-btn"
              />
              <Menu {...bindMenu(popupState)} className="menu-pop-up-container">
                {menuList.map((menu: string, id: number) => (
                  <Link href={`/${menu}`} key={id}>
                    <MenuItem
                      onClick={popupState.close}
                      sx={{}}
                    >
                      {menu}
                    </MenuItem>
                  </Link>
                ))}
              </Menu>
            </Fragment>
          )}
        </PopupState>
      </div>
      <div className="basis-1/5 text-right">Third</div>
    </div>
  );
};

export default Header;
