import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from 'next/image'

import UserDropdown from "components/Dropdowns/UserDropdown.js";

export default function Sidebar() {
  const [collapseShow, setCollapseShow] = React.useState("hidden");
  const router = useRouter();
  return (
    <>
      <nav className="container-snap md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden border-r bg-white flex flex-wrap items-center justify-between relative md:w-64 z-10 py-4 px-6">
        <div className="md:flex-col md:items-stretch md:min-h-full md:flex-nowrap px-0 flex flex-wrap items-center justify-between w-full mx-auto">
          {/* Toggler */}
          <button
            className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border-transparent"
            type="button"
            onClick={() => setCollapseShow("bg-white m-2 py-3 px-6")}
          >
            <Image src='/icons/menu.png' alt="dashboard" width={16} height={16} />
          </button>
          {/* Brand */}
          <Link href="/">
            <a
              href="#pablo"
              className="md:block text-left md:pb-3 text-blueGray-600 mr-0 inline-block whitespace-nowrap text-sm p-4 px-0 "
            >
              <Image src="/img/logo.png" alt="quiverlogo" width={100} height={31} />
              <span className="relative inline-block float-right md:mt-2">
                <span className="inline-flex items-center justify-right px-2 py-1 mr-2 text-xs leading-none text-green-600 bg-green-200 rounded-full">Super admin</span>
              </span>
            </a>

          </Link>
          <hr className="max-w-sm md:max-w-lg md:-mx-6 md:z-20" />

          {/* User */}
          <ul className="md:hidden items-center flex flex-wrap list-none">
            <li className="inline-block relative">
              <UserDropdown />
            </li>
          </ul>
          {/* Collapse */}
          <div
            className={
              "md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded " +
              collapseShow
            }
          >
            {/* Collapse header */}
            <div className="md:min-w-full md:hidden block pb-4 mb-4 border-b border-solid border-blueGray-200">
              <div className="flex flex-wrap">
                <div className="w-6/12">
                  <Link href="/">
                    <a
                      href="#pablo"
                      className="md:block text-left md:pb-2 text-blueGray-600 mr-0 inline-block whitespace-nowrap text-sm font-bold p-4 px-0"
                    >
                      <Image src="/img/logo.png" alt="quiverlogo" width={100} height={31} />
                    </a>
                  </Link>
                </div>
                <div className="w-6/12 flex justify-end">
                  <button
                    type="button"
                    className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent border-transparent"
                    onClick={() => setCollapseShow("hidden")}
                  >
                    <Image src='/icons/close-square.png' alt="dashboard" width={16} height={16} />
                  </button>
                </div>
              </div>
            </div>
            {/* Form */}
            <form className="mt-6 mb-4 md:hidden">
              <div className="mb-3 pt-0">
                <input
                  type="text"
                  placeholder="Search"
                  className="border-0 px-3 py-2 h-12 border border-solid  border-blueGray-500 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-base leading-snug shadow-none outline-none focus:outline-none w-full font-normal"
                />
              </div>
            </form>

            {/* Heading */}
            <h6 className="md:min-w-full text-gray-400 text-sm font-bold block pt-1 pb-4 no-underline">
              General
            </h6>
            {/* Navigation */}

            <ul className="md:flex-col md:min-w-full flex flex-col list-none">
              <li className={"items-center flex hover:bg-blueGray-200 px-3 rounded-lg mb-3 " +
                (router.pathname.indexOf("/admin/dashboard") !== -1
                  ? "bg-blueGray-100 hover:bg-blueGray-200"
                  : "text-blueGray-700 hover:text-blueGray-200")}>
                <Image src='/icons/menu.png' alt="dashboard" width={16} height={16}
                  className={(router.pathname.indexOf("/admin/dashboard") !== -1
                    ? "opacity-75"
                    : "text-blueGray-300")
                  }
                />
                <Link href="/admin/dashboard">

                  <a
                    href="#pablo"
                    className={
                      "text-base py-3 font-medium block md:pl-8 pl-4"
                    }
                  >

                    Dashboard
                  </a>
                </Link>
              </li>

              <li className={"items-center flex hover:bg-blueGray-200 px-3 rounded-lg " +
                (router.pathname.indexOf("/admin/support") !== -1
                  ? "bg-blueGray-100 hover:bg-blueGray-200"
                  : "text-blueGray-700 hover:bg-blueGray-200")}>
                <Image src='/icons/message-text.png' alt="support" width={16} height={16}
                  className={(router.pathname.indexOf("/admin/support") !== -1
                    ? "opacity-75"
                    : "text-blueGray-300")
                  }
                />
                <Link href="/admin/support">

                  <a
                    href="#pablo"
                    className={
                      "text-base py-3 font-medium block md:pl-8"
                    }
                  >

                    User Support <Image src='/icons/export.png' alt="support" width={12} height={12} />
                  </a>
                </Link>
              </li>
            </ul>

            {/* Divider */}
            <hr className="my-4 md:min-w-full" />
            {/* Heading */}
            <h6 className="md:min-w-full text-gray-400 text-sm font-bold block pt-1 pb-4 no-underline">
              Menu
            </h6>
            {/* Navigation */}

            <ul className="md:flex-col md:min-w-full flex flex-col list-none md:mb-4">
              <li className={"items-center flex hover:bg-blueGray-200 px-3 rounded-lg " +
                (router.pathname.indexOf("/admin/payment") !== -1
                  ? "bg-blueGray-100 hover:bg-blueGray-200"
                  : "text-blueGray-700 hover:bg-blueGray-200")}>
                <Image src='/icons/money-send.png' alt="support" width={16} height={16}
                  className={(router.pathname.indexOf("/admin/payment") !== -1
                    ? "opacity-75"
                    : "text-blueGray-300")
                  }
                />
                <Link href="/admin/payment">

                  <a
                    href="#pablo"
                    className={
                      "text-base py-3 font-medium block md:pl-8"
                    }
                  >

                    Payment
                  </a>
                </Link>
              </li>

              <li className={"items-center flex hover:bg-blueGray-200 px-3 rounded-lg " +
                (router.pathname.indexOf("/admin/users") !== -1
                  ? "bg-blueGray-100 hover:bg-blueGray-200"
                  : "text-blueGray-700 hover:bg-blueGray-200")}>
                <Image src='/icons/profile.png' alt="support" width={16} height={16}
                  className={(router.pathname.indexOf("/admin/users") !== -1
                    ? "opacity-75"
                    : "text-blueGray-300")
                  }
                />
                <Link href="/admin/users">

                  <a
                    href="#pablo"
                    className={
                      "text-base py-3 font-medium block md:pl-8"
                    }
                  >

                    Users
                  </a>
                </Link>
              </li>
              <li className={"items-center flex hover:bg-blueGray-200 px-3 rounded-lg " +
                (router.pathname.indexOf("/admin/currencies") !== -1
                  ? "bg-blueGray-100 hover:bg-blueGray-200"
                  : "text-blueGray-700 hover:bg-blueGray-200")}>
                <Image src='/icons/coin_1.png' alt="support" width={16} height={16}
                  className={(router.pathname.indexOf("/admin/currencies") !== -1
                    ? "opacity-75"
                    : "text-blueGray-300")
                  }
                />
                <Link href="/admin/currencies">

                  <a
                    href="#pablo"
                    className={
                      "text-base py-3 font-medium block md:pl-8"
                    }
                  >

                    Crytocurrencies
                  </a>
                </Link>
              </li>
              <li className={"items-center flex hover:bg-blueGray-200 px-3 rounded-lg " +
                (router.pathname.indexOf("/admin/loans") !== -1
                  ? "bg-blueGray-100 hover:bg-blueGray-200"
                  : "text-blueGray-700 hover:bg-blueGray-200")}>
                <Image src='/icons/moneys.png' alt="support" width={16} height={16}
                  className={(router.pathname.indexOf("/admin/loans") !== -1
                    ? "opacity-75"
                    : "text-blueGray-300")
                  }
                />
                <Link href="/admin/loans">

                  <a
                    href="#pablo"
                    className={
                      "text-base py-3 font-medium block md:pl-8"
                    }
                  >

                    Loans
                  </a>
                </Link>
              </li>
              <li className={"items-center flex hover:bg-blueGray-200 px-3 rounded-lg " +
                (router.pathname.indexOf("/admin/savings") !== -1
                  ? "bg-blueGray-100 hover:bg-blueGray-200"
                  : "text-blueGray-700 hover:bg-blueGray-200")}>
                <Image src='/icons/wallet.png' alt="support" width={16} height={16}
                  className={(router.pathname.indexOf("/admin/savings") !== -1
                    ? "opacity-75"
                    : "text-blueGray-300")
                  }
                />
                <Link href="/admin/savings">

                  <a
                    href="#pablo"
                    className={
                      "text-base py-3 font-medium block md:pl-8"
                    }
                  >

                    Savings
                  </a>
                </Link>
              </li>
              <li className={"items-center flex hover:bg-blueGray-200 px-3 rounded-lg " +
                (router.pathname.indexOf("/admin/transactions") !== -1
                  ? "bg-blueGray-100 hover:bg-blueGray-200"
                  : "text-blueGray-700 hover:bg-blueGray-200")}>
                <Image src='/icons/graph.png' alt="support" width={16} height={16}
                  className={(router.pathname.indexOf("/admin/transactions") !== -1
                    ? "opacity-75"
                    : "text-blueGray-300")
                  }
                />
                <Link href="/admin/savings">

                  <a
                    href="#pablo"
                    className={
                      "text-base py-3 font-medium block md:pl-8"
                    }
                  >

                    Transactions
                  </a>
                </Link>
              </li>
            </ul>

            {/* Divider */}
            <hr className="my-4 md:min-w-full" />
            {/* Heading */}
            <h6 className="md:min-w-full text-gray-400 text-sm font-bold block pt-1 pb-4 no-underline">
              Teams
            </h6>
            {/* Navigation */}

            <ul className="md:flex-col md:min-w-full flex flex-col list-none md:mb-4">
              <li className={"items-center flex hover:bg-blueGray-200 px-3 rounded-lg " +
                (router.pathname.indexOf("/admin/agents") !== -1
                  ? "bg-blueGray-100 hover:bg-blueGray-200"
                  : "text-blueGray-700 hover:bg-blueGray-200")}>
                <Image src='/icons/user-octagon.png' alt="support" width={16} height={16}
                  className={(router.pathname.indexOf("/admin/agents") !== -1
                    ? "opacity-75"
                    : "text-blueGray-300")
                  }
                />
                <Link href="/admin/agents">

                  <a
                    href="#pablo"
                    className={
                      "text-base py-3 font-medium block md:pl-8"
                    }
                  >

                    Agents
                  </a>
                </Link>
              </li>

              <li className={"items-center flex hover:bg-blueGray-200 px-3 rounded-lg " +
                (router.pathname.indexOf("/admin/roles") !== -1
                  ? "bg-blueGray-100 hover:bg-blueGray-200"
                  : "text-blueGray-700 hover:bg-blueGray-200")}>
                <Image src='/icons/lock_.png' alt="support" width={16} height={16}
                  className={(router.pathname.indexOf("/admin/roles") !== -1
                    ? "opacity-75"
                    : "text-blueGray-300")
                  }
                />
                <Link href="/admin/roles">

                  <a
                    href="#pablo"
                    className={
                      "text-base py-3 font-medium block md:pl-8"
                    }
                  >

                    Roles & Permissions
                  </a>
                </Link>
              </li>
              <li className={"items-center flex hover:bg-blueGray-200 px-3 rounded-lg " +
                (router.pathname.indexOf("/admin/audit") !== -1
                  ? "bg-blueGray-100 hover:bg-blueGray-200"
                  : "text-blueGray-700 hover:bg-blueGray-200")}>
                <Image src='/icons/task-square.png' alt="support" width={16} height={16}
                  className={(router.pathname.indexOf("/admin/audit") !== -1
                    ? "opacity-75"
                    : "text-blueGray-300")
                  }
                />
                <Link href="/admin/audit">

                  <a
                    href="#pablo"
                    className={
                      "text-base py-3 font-medium block md:pl-8"
                    }
                  >

                    Activities
                  </a>
                </Link>
              </li>
            </ul>

            {/* Divider */}
            <hr className="my-4 md:min-w-full" />
            {/* Heading */}
            <h6 className="md:min-w-full text-gray-400 text-sm font-bold block pt-1 pb-4 no-underline">
              Priorities
            </h6>
            {/* Navigation */}

            <ul className="md:flex-col md:min-w-full flex flex-col list-none md:mb-4">
              <li className={"items-center flex hover:bg-blueGray-200 px-3 rounded-lg " +
                (router.pathname.indexOf("/admin/urgent") !== -1
                  ? "bg-blueGray-100 hover:bg-blueGray-200"
                  : "text-blueGray-700 hover:bg-blueGray-200")}>
                <Image src='/icons/circle-red.png' alt="support" width={16} height={16}
                  className={(router.pathname.indexOf("/admin/urgent") !== -1
                    ? "opacity-75"
                    : "text-blueGray-300")
                  }
                />
                <Link href="/admin/urgent">

                  <a
                    href="#pablo"
                    className={
                      "text-base py-3 font-medium block md:pl-8"
                    }
                  >

                    Urgent
                  </a>
                </Link>
                <span className="text-xs font-semibold ml-5 inline-block py-1 px-2 uppercase rounded text-blueGray-600 bg-blueGray-200 uppercase last:mr-0 mr-1">
                  5
                </span>
              </li>

              <li className={"items-center flex hover:bg-blueGray-200 px-3 rounded-lg " +
                (router.pathname.indexOf("/admin/high") !== -1
                  ? "bg-blueGray-100 hover:bg-blueGray-200"
                  : "text-blueGray-700 hover:bg-blueGray-200")}>
                <Image src='/icons/circle-yellow.png' alt="support" width={16} height={16}
                  className={(router.pathname.indexOf("/admin/high") !== -1
                    ? "opacity-75"
                    : "text-blueGray-300")
                  }
                />
                <Link href="/admin/high">

                  <a
                    href="#pablo"
                    className={
                      "text-base py-3 font-medium block md:pl-8"
                    }
                  >

                    High
                  </a>
                </Link>
                <span className="text-xs font-semibold ml-5 inline-block py-1 px-2 uppercase rounded text-blueGray-600 bg-blueGray-200 uppercase last:mr-0 mr-1">
                  1
                </span>
              </li>

              <li className={"items-center flex hover:bg-blueGray-200 px-3 rounded-lg " +
                (router.pathname.indexOf("/admin/normal") !== -1
                  ? "bg-blueGray-100 hover:bg-blueGray-200"
                  : "text-blueGray-700 hover:bg-blueGray-200")}>
                <Image src='/icons/circle-blue.png' alt="support" width={16} height={16}
                  className={(router.pathname.indexOf("/admin/normal") !== -1
                    ? "opacity-75"
                    : "text-blueGray-300")
                  }
                />
                <Link href="/admin/normal">

                  <a
                    href="#pablo"
                    className={
                      "text-base py-3 font-medium block md:pl-8"
                    }
                  >

                    Normal
                  </a>
                </Link>
                <span className="text-xs font-semibold l-0 inline-block py-1 px-2 uppercase rounded text-blueGray-600 bg-blueGray-200 uppercase last:mr-0 mr-1">
                  12
                </span>
              </li>

              <li className={"items-center flex hover:bg-blueGray-200 px-3 rounded-lg " +
                (router.pathname.indexOf("/admin/low") !== -1
                  ? "bg-blueGray-100 hover:bg-blueGray-200"
                  : "text-blueGray-700 hover:bg-blueGray-200")}>
                <Image src='/icons/circle-grey.png' alt="support" width={16} height={16}
                  className={(router.pathname.indexOf("/admin/low") !== -1
                    ? "opacity-75"
                    : "text-blueGray-300")
                  }
                />
                <Link href="/admin/low">

                  <a
                    href="#pablo"
                    className={
                      "text-base py-3 font-medium block md:pl-8"
                    }
                  >

                    Low
                  </a>
                </Link>
                <span className="text-xs font-semibold ml-5 inline-block py-1 px-2 uppercase rounded text-blueGray-600 bg-blueGray-200 uppercase last:mr-0 mr-1">
                  6
                </span>
              </li>
            </ul>

          </div>
        </div>
      </nav>
    </>
  );
}
