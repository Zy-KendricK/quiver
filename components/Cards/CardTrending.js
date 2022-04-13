import React from "react";
import Image from 'next/image'


export default function CardTrending() {
  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 border rounded">
        <div className="rounded-t mb-0 px-4 py-3 border-0">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full px-4 max-w-full flex-grow flex-1">
              <h3 className="font-semibold text-base text-blueGray-700">
                Trending Collaterals
              </h3>
            </div>
          </div>
        </div>
        <div className="block w-11/12 mx-auto">
          <div className="flex-auto px-4 lg:px-10 mt-6 pb-0 rounded-t-lg bg-blueGray-100">
            <table className="items-center w-full border-b-0 bg-bluegray-700">
              <tbody className="p-3">
                <tr>
                  <td className="px-6 border-l-0 border-r-0 text-xs p-4 group flex items-center">
                    <Image className="shrink-0 h-12 w-12 rounded-full" src="/crypto/Bitcoin.svg" alt="" width={60} height={60} />
                    <div className="pl-4">
                      <p className="text-sm font-normal text-gray-400 group-hover:text-white">BTC</p>
                      <p className="text-lg font-medium text-slate-500 group-hover:text-slate-300">Bitcoin</p>
                    </div>
                  </td>
                  <td className="hidden md:table-cell px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    <div className="pl-4">
                      <p className="text-sm font-normal text-gray-400 group-hover:text-white">Times Today</p>
                      <p className="text-lg font-medium text-slate-500 group-hover:text-slate-300">3,750</p>
                    </div>
                  </td>
                  <td className="px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    <div className="pl-4">
                      <p className="text-sm font-normal text-gray-400 group-hover:text-white">% Rate</p>
                      <p className="text-sm font-medium text-red-500 group-hover:text-slate-300">
                        <i className="fas fa-arrow-down text-red-500 mr-4"></i>
                        0.21%
                      </p>
                    </div>
                  </td>

                </tr>
                <tr className="border-t">
                  <td className="px-6 border-l-0 border-r-0 text-xs p-4 group flex items-center">
                    <Image className="shrink-0 h-12 w-12 rounded-full" src="/crypto/Ethereum.svg" alt="" width={60} height={60} />
                    <div className="pl-4">
                      <p className="text-sm font-normal text-gray-400 group-hover:text-white">BNB</p>
                      <p className="text-lg font-medium text-slate-500 group-hover:text-slate-300">Binance Coin</p>
                    </div>
                  </td>
                  <td className="hidden md:table-cell  px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    <div className="pl-4">
                      <p className="text-sm font-normal text-gray-400 group-hover:text-white">Times Today</p>
                      <p className="text-lg font-medium text-slate-500 group-hover:text-slate-300">4,754</p>
                    </div>
                  </td>
                  <td className="px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    <div className="pl-4">
                      <p className="text-sm font-normal text-gray-400 group-hover:text-white">% Rate</p>
                      <p className="text-sm font-medium text-red-500 group-hover:text-slate-300">
                        <i className="fas fa-arrow-down text-red-500 mr-4"></i>
                        0.21%
                      </p>
                    </div>
                  </td>

                </tr>
                <tr className="border-t">
                  <td className="px-6 border-l-0 border-r-0 text-xs p-4 group flex items-center">
                    <Image className="shrink-0 h-12 w-12 rounded-full" src="/crypto/Binance_Coin(BNB).svg" alt="" width={60} height={60} />
                    <div className="pl-4">
                      <p className="text-sm font-normal text-gray-400 group-hover:text-white">ETH</p>
                      <p className="text-lg font-medium text-slate-500 group-hover:text-slate-300">Ethereum</p>
                    </div>
                  </td>
                  <td className="hidden md:table-cell px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    <div className="pl-4">
                      <p className="text-sm font-normal text-gray-400 group-hover:text-white">Times Today</p>
                      <p className="text-lg font-medium text-slate-500 group-hover:text-slate-300">4,754</p>
                    </div>
                  </td>
                  <td className="px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    <div className="pl-4">
                      <p className="text-sm font-normal text-gray-400 group-hover:text-white">% Rate</p>
                      <p className="text-sm font-medium text-red-500 group-hover:text-slate-300">
                        <i className="fas fa-arrow-down text-red-500 mr-4"></i>
                        0.21%
                      </p>
                    </div>
                  </td>

                </tr>
                <tr className="border-t">
                  <td className="px-6 border-l-0 border-r-0 text-xs p-4 group flex items-center">
                    <Image className="shrink-0 h-12 w-12 rounded-full" src="/crypto/Tether(USDT).svg" alt="" width={60} height={60} />
                    <div className="pl-4">
                      <p className="text-sm font-normal text-gray-400 group-hover:text-white">USDT</p>
                      <p className="text-lg font-medium text-slate-500 group-hover:text-slate-300">Tether</p>
                    </div>
                  </td>
                  <td className="hidden md:table-cell px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    <div className="pl-4">
                      <p className="text-sm font-normal text-gray-400 group-hover:text-white">Times Today</p>
                      <p className="text-lg font-medium text-slate-500 group-hover:text-slate-300">2,754</p>
                    </div>
                  </td>
                  <td className="px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    <div className="pl-4">
                      <p className="text-sm font-normal text-gray-400 group-hover:text-white">% Rate</p>
                      <p className="text-sm font-medium text-red-500 group-hover:text-slate-300">
                        <i className="fas fa-arrow-down text-red-500 mr-4"></i>
                        0.21%
                      </p>
                    </div>
                  </td>

                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
