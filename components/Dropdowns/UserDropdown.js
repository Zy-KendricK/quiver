import React from "react";
import Image from 'next/image'
import Link from "next/link";
import { createPopper } from "@popperjs/core";

const UserDropdown = () => {
  // dropdown props
  const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);
  const btnDropdownRef = React.createRef();
  const popoverDropdownRef = React.createRef();
  const openDropdownPopover = () => {
    createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
      placement: "bottom-start",
    });
    setDropdownPopoverShow(true);
  };
  const closeDropdownPopover = () => {
    setDropdownPopoverShow(false);
  };
  return (
    <>
      <a
        className="text-blueGray-500 block"
        href="#pablo"
        ref={btnDropdownRef}
        onClick={(e) => {
          e.preventDefault();
          dropdownPopoverShow ? closeDropdownPopover() : openDropdownPopover();
        }}
      >
        <div className="items-center flex">
          <span className="w-12 h-12 text-sm text-white bg-blueGray-200 inline-flex items-center justify-center rounded-full">
            <Image src="/img/team-1-800x800.jpg" alt="search" width={50} height={50} />
          </span>
        </div>
      </a>
      <div
        ref={popoverDropdownRef}
        className={
          (dropdownPopoverShow ? "block " : "hidden ") +
          "bg-white text-base z-50 float-right p-5 list-none text-left rounded-xl shadow-lg min-w-48 md:w-1/6"
        }
      >
        <a
          href="#pablo"
          className={
            "text-sm py-3 px-2 rounded-lg font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700 hover:text-blueGray-500 hover:bg-blueGray-200"
          }
          onClick={(e) => e.preventDefault()}
        >
          <Image src='/icons/setting-2.png' alt="support" width={16} height={16} className="md:mr-8 mr-4 mt-4" />
          <span className="ml-6 -mt-1">Setings</span>
        </a>
        <Link href="/admin/settings">
          <a
            href="#pablo"
            className={
              "text-sm py-3 px-2 rounded-lg font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700 hover:text-blueGray-500 hover:bg-blueGray-200"
            }
          >
            <Image src='/icons/lock_.png' alt="support" width={16} height={16} className="md:mr-8 mr-4 mt-1" />
            <span className="ml-6 -mt-1">Account Security</span>
          </a>
        </Link>
        <Link href="/auth/login">
          <a
            href="#pablo"
            className={
              "text-sm py-3 px-2 rounded-lg font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700 hover:text-blueGray-500 hover:bg-blueGray-200"
            }
          >
            <Image src='/icons/logout.svg' alt="support" width={16} height={16} className="md:mr-8 mr-4 text-green-700" />
            <span className="ml-6 -mt-1 text-red-800">Log out</span>
          </a>
        </Link>
      </div>
    </>
  );
};

export default UserDropdown;
