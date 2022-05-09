import React from "react";

// layout for page
import Admin from "layouts/Admin.js";

// components
import TrendingCollaterals from "components/Tables/TrendingCollaterals";
import LoanableCoins from "components/Tables/LoanableCoins";

export default function Currencies() {
    const [openTab, setOpenTab] = React.useState(1);
    return (
        <>
            <div className="md:pt-32 pt-12 mx-auto w-full">
                <div className="flex flex-wrap">
                    <div className="px-4 md:px-10 relative w-full max-w-full flex-grow flex-1 mb-2">
                        <h2 className="text-blueGray-700 text-lg font-semibold">
                            Cryptocurrencies
                        </h2>
                    </div>
                    <div className="w-full">
                        <div className="flex flex-wrap">
                            <div className="w-full">
                                <ul
                                    className="px-4 md:px-10 flex mb-0 list-none flex-wrap pt-3 flex-row border-b w-full "
                                    role="tablist"
                                >
                                    <li className="-mb-px mr-2">
                                        <a
                                            className={
                                                "text-md py-3 pr-5 rounded block leading-normal " +
                                                (openTab === 1
                                                    ? "border-b-4 border-green-600 font-semibold"
                                                    : "text-quivercolor bg-white")
                                            }
                                            onClick={e => {
                                                e.preventDefault();
                                                setOpenTab(1);
                                            }}
                                            data-toggle="tab"
                                            href="#link1"
                                            role="tablist"
                                        >Trending Collaterals
                                        </a>
                                    </li>
                                    <li className="-mb-px mr-2">
                                        <a
                                            className={
                                                "text-md py-3 pr-5 rounded block leading-normal " +
                                                (openTab === 2
                                                    ? "border-b-4 border-green-600 font-semibold"
                                                    : "text-quivercolor bg-white")
                                            }
                                            onClick={e => {
                                                e.preventDefault();
                                                setOpenTab(2);
                                            }}
                                            data-toggle="tab"
                                            href="#link2"
                                            role="tablist"
                                        >
                                            Loanable Coins
                                        </a>
                                    </li>
                                </ul>
                                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 rounded">
                                    <div className="px-4 py-5 flex-auto">
                                        <div className="tab-content tab-space">
                                            <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                                                <TrendingCollaterals />
                                            </div>
                                            <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                                                <LoanableCoins />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

Currencies.layout = Admin;
