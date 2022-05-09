/* eslint-disable react/jsx-key */
import React from "react";

// components
import ActiveUsers from "components/Tables/ActiveUsers";
// layout for page
import Admin from "layouts/Admin.js";
import TransOne from "components/Tables/TransOne";
import TransTwo from "components/Tables/TransTwo";
import TransThree from "components/Tables/TransThree";

export default function Transactions() {
    const [openTab, setOpenTab] = React.useState(1);
    const tabs = [{ name: 'Wallet Funding' }, { name: 'Withdrawal' }, { name: 'Savings' }, { name: 'Transfer' }, { name: 'Receive' }, { name: 'Swap' }, { name: 'Loan Request' }, { name: 'Add Collateral' }, { name: 'Loan Repayment' },]
    return (
        <>
            <div className="md:pt-32 pt-12 mx-auto w-full">
                <div className="flex flex-wrap">
                    <div className="px-4 md:px-10 relative w-full max-w-full flex-grow flex-1 mb-2">
                        <h2 className="text-blueGray-700 text-lg font-semibold">
                            Transactions
                        </h2>
                    </div>
                    <div className="w-full">
                        <div className="flex flex-wrap">
                            <div className="w-full">
                                <ul
                                    className="px-4 md:px-10 flex mb-0 list-none flex-wrap pt-3 flex-row border-b w-full "
                                    role="tablist"
                                >
                                    {tabs.map((tab, i) => (
                                        <li className="-mb-px mr-2">
                                            <a
                                                className={
                                                    "text-md py-3 pr-5 rounded block leading-normal " +
                                                    (openTab === i + 1
                                                        ? "border-b-4 border-green-600 font-semibold"
                                                        : "text-quivercolor")
                                                }
                                                onClick={e => {
                                                    e.preventDefault();
                                                    setOpenTab(i + 1);
                                                }}
                                                data-toggle="tab"
                                                href={'#link' + (i + 1)}
                                                role="tablist"
                                            >{tab.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 rounded">
                                    <div className="px-4 py-5 flex-auto">
                                        <div className="tab-content tab-space">
                                            {tabs.map((tab, i) => (
                                                i < 5 ?
                                                    <div className={openTab === i + 1 ? "block" : "hidden"} id={'link' + (i + 1)}>
                                                        <TransOne />
                                                    </div> :
                                                    i > 5 ?
                                                        <div className={openTab === i + 1 ? "block" : "hidden"} id={'link' + (i + 1)}>
                                                            <TransTwo />
                                                        </div> :
                                                        <div className={openTab === i + 1 ? "block" : "hidden"} id={'link' + (i + 1)}>
                                                            <TransThree />
                                                        </div>
                                            ))}
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

Transactions.layout = Admin;
