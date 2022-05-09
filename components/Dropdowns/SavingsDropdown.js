import React from "react";
import { createPopper } from "@popperjs/core";
import Image from 'next/image'

const SavingsDropdown = () => {
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
            <div className="relative w-auto mx-auto max-w-md whitespace-pre-line scroll-smooth overflow-auto">
              {/*content*/}
              <div className="border-0 shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
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
                <div className="relative px-6 h-screen">
                  <div className="bg-gray-200 rounded-lg border p-6 bg-local">
                    <p className="font-bold flex top-0">
                      <Image className="shrink-0 h-12 w-12 rounded-full" src="/crypto/Bitcoin.svg" alt="" width={15} height={15} />
                      <p className="text-xs font-semibold text-slate-500 ml-1">1.5345 BUSD Daily</p>
                    </p>
                    <p className="text-base bottom-0 mt-12 font-semibold">Crypto Kings</p>
                  </div>
                  <div className="relative bg-white border-b py-4">
                    <div className="p-1 2xl:p-3 mx-auto w-full">
                      <div className="flex-col md:grid md:grid-cols-2 px">
                        <div className="text-left">
                          <p className="2xl:text-sm text-xs font-normal text-gray-400">Total Challenge balance</p>
                          <p className="font-bold flex items-center">
                            <Image className="shrink-0 h-12 w-12 rounded-full" src="/crypto/Bitcoin.svg" alt="" width={25} height={25} />
                            <p className="text-lg font-extrabold text-slate-500 ml-2">15.00 BUSD</p>
                          </p>
                          <p className="font-bold flex items-center">
                            <i className="fas fa-star text-green-500 mx-1"></i>
                            <p className="text-xs font-medium text-slate-500 ml-2">3,207 QPs</p>
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="2xl:text-sm text-xs font-normal text-gray-400">Interest Rate</p>
                          <p className="2xl:text-xl text-lg font-medium text-green-500">+10.0%</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="2xl:py-6 py-4 mt-2">
                    <h5 className="text-xs font-normal text-left text-blueGray-400">Leaderboard</h5>
                    <table className="items-center w-full bg-transparent border-collapse">
                      <tbody>
                        <tr className="border-b">
                          <th className="align-middle text-xs whitespace-nowrap p-4 text-left flex items-center">
                            <span className={"text-blueGray-400 font-light"}>Request Date</span>
                          </th>
                          <td className="align-middle text-xs whitespace-nowrap p-4 text-right font-bold">
                            Apr 02, 2023
                          </td>
                        </tr>
                        <tr className="border-b">
                          <th className="align-middle text-xs whitespace-nowrap p-4 text-left flex items-center">
                            <span className={"text-blueGray-400 font-light"}>Due Date</span>
                          </th>
                          <td className="align-middle text-xs whitespace-nowrap p-4 text-right text-quivercolor font-bold">
                            Apr 02, 2023
                          </td>
                        </tr>
                        <tr className="border-b">
                          <th className="align-middle text-xs whitespace-nowrap p-4 text-left flex items-center">
                            <span className={"text-blueGray-400 font-light"}>Transaction ID</span>
                          </th>
                          <td className="align-middle text-xs whitespace-nowrap p-4 text-right font-bold">
                            led_126TPzIrHFcM1QdkincnSr
                          </td>
                        </tr>
                        <tr className="border-b">
                          <th className="align-middle text-xs whitespace-nowrap p-4 text-left flex items-center">
                            <span className={"text-blueGray-400 font-light"}>Liquidation at</span>
                          </th>
                          <td className="align-middle text-xs whitespace-nowrap p-4 text-right font-bold">
                            $40,410.19
                          </td>
                        </tr>
                        <tr className="border-b">
                          <th className="align-middle text-xs whitespace-nowrap p-4 text-left flex items-center">
                            <span className={"text-blueGray-400 font-light"}>BTC Margin Call at</span>
                          </th>
                          <td className="align-middle text-xs whitespace-nowrap p-4 text-right font-bold">
                            $44,823.09
                          </td>
                        </tr>
                        <tr>
                          <th className="align-middle text-xs whitespace-nowrap p-4 text-left flex items-center">
                            <span className={"text-blueGray-400 font-light"}>Interest Rate</span>
                          </th>
                          <td className="align-middle text-xs whitespace-nowrap p-4 text-right font-bold">
                            0.18%
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
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

export default SavingsDropdown;
