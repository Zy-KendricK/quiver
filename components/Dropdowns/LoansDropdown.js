import React from "react";
import { createPopper } from "@popperjs/core";
import Image from 'next/image'

const LoansDropdown = () => {
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

  const isBrowser = typeof window !== "undefined";

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
          onClick={() => setShowModal(true)}
        >
          <i className="fas fa-eye"></i> View
        </a>
        <a
          href="#pablo"
          className={
            "text-sm py-2 px-4 font-normal block w-full bg-transparent text-blueGray-700 hover:text-blueGray-500 hover:bg-blueGray-200"
          }
          onClick={(e) => e.preventDefault()}
        >
          Another action
        </a>
        <a
          href="#pablo"
          className={
            "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700 hover:text-blueGray-500 hover:bg-blueGray-200"
          }
          onClick={(e) => e.preventDefault()}
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
                <div className="flex items-start justify-between 2xl:p-5 p-2 rounded-t">
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
                <div className="relative px-6 flex-auto text-center h-screen">
                  <Image className="object-cover object-center h-32 rounded-full" src="/img/team-3-800x800.jpg" width={100} height={100} alt='Woman looking front' />
                  <div className="text-center my-2">
                    <h2 className="font-semibold py-1">$philipM</h2>
                    <p className="py-1">philip.masoan@example.com</p>
                    <p className="py-1">Last seen active <span className="text-blueGray-400"><i className="fas fa-square mx-2"></i>2mins. ago</span></p>
                  </div>
                  <div className="flex-col md:grid md:grid-cols-2 border rounded-lg 2xl:py-4 px">
                    <div className="2xl:p-4 p-2 2xlb:py-3 items-center">
                      <div className="text-left tracking-wide">
                        <p className="text-xs font-normal text-slate-300 ">Loan Amount</p>
                        <p className="text-xl font-medium text-green-500">1,500 BUSD</p>
                      </div>
                    </div>
                    <div className="2xl:p-4 p-2 2xlb:py-3 items-center">
                      <div className="text-left tracking-wide">
                        <p className="text-xs font-normal text-slate-300 ">Collateral</p>
                        <p className="text-xl font-medium text-slate-500">0.0781 BTC<span className="text-xs">≈ $1,800</span></p>
                      </div>
                    </div>
                  </div>
                  <div className="flex-col md:grid md:grid-cols-1 border rounded-lg 2xl:py-4 mt-4 px">
                    <div className="2xl:p-4 p-2 2xlb:py-3 items-center ">
                      <div className="text-center  tracking-wide">
                        <p className="text-xs font-normal text-slate-300 ">Total Amount to payback</p>
                        <p className="text-xl font-medium text-green-500">$1,634.28</p>
                        <p className="text-xs font-normal text-slate-500">(Amount Borrowed + Interest)</p>
                      </div>
                    </div>
                  </div>
                  <div className="2xl:py-6 py-4 mt-2">
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

export default LoansDropdown;
