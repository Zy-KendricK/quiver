import React from "react";
import { createPopper } from "@popperjs/core";
import Image from 'next/image'

const RolesDropdown = () => {
  // dropdown props
  const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);
  const btnDropdownRef = React.createRef();
  const popoverDropdownRef = React.createRef();
  const openDropdownPopover = () => {
    createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
      placement: "left-start",
    });
    setDropdownPopoverShow(true);
  };
  const closeDropdownPopover = () => {
    setDropdownPopoverShow(false);
  };
  const [showModal, setShowModal] = React.useState(false);
  return (
    <>
      <a
        className="text-blueGray-500 py-1 px-3"
        href="#pablo"
        ref={btnDropdownRef}
        onClick={(e) => {
          e.preventDefault();
          dropdownPopoverShow ? closeDropdownPopover() : openDropdownPopover();
        }}
      >
        <i className="fas fa-ellipsis-v"></i>
      </a>
      <div
        ref={popoverDropdownRef}
        className={
          (dropdownPopoverShow ? "block " : "hidden ") +
          "bg-white text-base z-40 float-left list-none text-left rounded shadow-lg min-w-48"
        }
      >
        <a
          href="#pablo"
          className={
            "text-sm py-2 px-4 font-normal block w-full bg-transparent text-blueGray-700  hover:bg-blueGray-200"
          }
          onClick={(e) => {
            e.preventDefault();
            setShowModal(true);
            closeDropdownPopover()
          }}
        >View
        </a>
        <a
          href="#pablo"
          className={
            "text-sm py-2 px-4 font-normal block w-full bg-transparent text-blueGray-700 hover:text-blueGray-500 hover:bg-blueGray-200"
          }
          onClick={(e) => {
            e.preventDefault();
            closeDropdownPopover()
          }}
        >
          Another action
        </a>
        <a
          href="#pablo"
          className={
            "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700 hover:text-blueGray-500 hover:bg-blueGray-200"
          }
          onClick={(e) => {
            e.preventDefault();
            closeDropdownPopover()
          }}
        >
          Something else here
        </a>
      </div>
      {showModal ? (document.body.style.overflow = "hidden",
        <>
          <div className="justify-end flex fixed top-0 right-0 z-50 outline-none focus:outline-none">
            {/* <UserDetails /> */}
            <div className="relative w-auto mx-auto max-w-md whitespace-pre-line scroll-smooth">
              {/*content*/}
              <div className="border-0 shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none h-screen overflow-auto">
                <div className="flex items-start justify-between p-5 rounded-t">
                  {/* <h3 className="text-3xl font-semibold">
                    Modal Title
                  </h3> */}
                  <button
                    className="p-1 bg-blueGray-50 float-left text-lg rounded-full leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-blueGray-300 px-3 text-lg block outline-none focus:outline-none">
                      -
                    </span>
                  </button>
                </div>
                <div className="relative px-6 h-screen overflow-auto">
                  <h5 className="text-md font-bold text-left text-quivercolor mb-5">Super admin Roles & Permissions<br></br>
                    <span className="text-xs font-normal text-gray-400">Super admin has the following priviledges:</span>
                  </h5>
                  <ul className="mt-12">
                    <li className="mb-5">
                      <h3 className="text-left text-quivercolor font-semibold">Dashboard</h3>
                      <div className="grid grid-cols-2 gap-4 my-2">
                        <div className="font-light text-left text-blueGray-400">View dasboard and dashboard settings</div>
                        <div className="text-right"><i className="far fa-check-circle text-green-400 fa-1x"></i></div>
                      </div>
                    </li>
                    <li className="mb-5">
                      <h3 className="text-left text-quivercolor font-semibold">Menu</h3>
                      <div className="grid grid-cols-2 gap-4 my-2">
                        <div className="font-light text-left text-blueGray-400">Manage users</div>
                        <div className="text-right"><i className="far fa-check-circle text-green-400 fa-1x"></i></div>
                      </div>
                      <div className="grid grid-cols-2 gap-4 my-2">
                        <div className="font-light text-left text-blueGray-400">Send user messages</div>
                        <div className="text-right"><i className="far fa-check-circle text-green-400 fa-1x"></i></div>
                      </div>
                    </li>
                    <li className="mb-5">
                      <h3 className="text-left text-quivercolor font-semibold">Cryptocurrency</h3>
                      <div className="grid grid-cols-2 gap-4 my-2">
                        <div className="font-light text-left text-blueGray-400">Manage cryptocurrencies</div>
                        <div className="text-right"><i className="far fa-check-circle text-green-400 fa-1x"></i></div>
                      </div>
                      <div className="grid grid-cols-2 gap-4 my-2">
                        <div className="font-light text-left text-blueGray-400">Edit loanable coins</div>
                        <div className="text-right"><i className="far fa-check-circle text-green-400 fa-1x"></i></div>
                      </div>
                    </li>
                    <li className="mb-5">
                      <h3 className="text-left text-quivercolor font-semibold">Loans</h3>
                      <div className="grid grid-cols-2 gap-4 my-2">
                        <div className="font-light text-left text-blueGray-400">View loan orders</div>
                        <div className="text-right"><i className="far fa-check-circle text-green-400 fa-1x"></i></div>
                      </div>
                      <div className="grid grid-cols-2 gap-4 my-2">
                        <div className="font-light text-left text-blueGray-400">view user loan</div>
                        <div className="text-right"><i className="far fa-check-circle text-green-400 fa-1x"></i></div>
                      </div>
                    </li>
                    <li className="mb-5">
                      <h3 className="text-left text-quivercolor font-semibold">Savings</h3>
                      <div className="grid grid-cols-2 gap-4 my-2">
                        <div className="font-light text-left text-blueGray-400">Manage all savings plan</div>
                        <div className="text-right"><i className="far fa-check-circle text-green-400 fa-1x"></i></div>
                      </div>
                      <div className="grid grid-cols-2 gap-4 my-2">
                        <div className="font-light text-left text-blueGray-400">Create new savings plan</div>
                        <div className="text-right"><i className="far fa-check-circle text-green-400 fa-1x"></i></div>
                      </div>
                    </li>
                    <li className="mb-5">
                      <h3 className="text-left text-quivercolor font-semibold">Transactions</h3>
                      <div className="grid grid-cols-2 gap-4 my-2">
                        <div className="font-light text-left text-blueGray-400">Manage all transactions</div>
                        <div className="text-right"><i className="far fa-check-circle text-green-400 fa-1x"></i></div>
                      </div>
                    </li>
                    <li className="mb-5">
                      <h3 className="text-left text-quivercolor font-semibold">Teams</h3>
                      <div className="grid grid-cols-2 gap-4 my-2">
                        <div className="font-light text-left text-blueGray-400">Manage all agents</div>
                        <div className="text-right"><i className="far fa-check-circle text-green-400 fa-1x"></i></div>
                      </div>
                      <div className="grid grid-cols-2 gap-4 my-2">
                        <div className="font-light text-left text-blueGray-400">Invite new team members</div>
                        <div className="text-right"><i className="far fa-check-circle text-green-400 fa-1x"></i></div>
                      </div>
                      <div className="grid grid-cols-2 gap-4 my-2">
                        <div className="font-light text-left text-blueGray-400">Edit roles & priviledges</div>
                        <div className="text-right"><i className="far fa-check-circle text-green-400 fa-1x"></i></div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
};

export default RolesDropdown;
