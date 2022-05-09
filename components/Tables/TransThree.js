import React from "react";
import Image from 'next/image'

//utils
import OtherTables from "Utils/OtherTables";
import makeTransData from "Utils/makeTransData";

//components
import TableDropdown from "components/Dropdowns/TableDropdown.js";


export default function TransThree() {
    const columns = React.useMemo(
        () => [
            {
                Header: 'Date',
                accessor: 'date',
            },
            {
                Header: 'User',
                accessor: 'email',
            },
            {
                Header: 'Transaction ID',
                accessor: 'id',
            },
            {
                Header: 'Status',
                accessor: 'status',
                Cell: tableProps => (
                    <span
                        className={"font-semibold px-2 py-1 rounded-full " + (
                            tableProps.row.original.status == 'Successfull' ? "text-green-800 bg-green-200" :
                                tableProps.row.original.status === 'Pending' ? "text-amber-800 bg-amber-200" : "text-red-800 bg-red-200")}
                    >
                        {tableProps.row.original.status}
                    </span>
                )
            },
            {
                Header: 'Pair',
                accessor: 'collateral',
                Cell: tableProps => (
                    tableProps.row.original.collateral == 'Bitcoin (BTC)' ?
                        <div className='font-bold flex items-center'>
                            <Image className='shrink-0 h-12 w-12 rounded-full' src='/crypto/Bitcoin.svg' alt='' width={25} height={25} />
                            <span className='text-xs font-medium text-slate-500 group-hover:text-slate-300 mx-2'><i className='fas fa-exchange-alt'></i></span>
                            <Image className='shrink-0 h-12 w-12 rounded-full' src='/crypto/Ethereum.svg' alt='' width={25} height={25} /></div>
                        : tableProps.row.original.collateral == 'Etherium (ETC)' ?
                            <div className='font-bold flex items-center'>
                                <Image className='shrink-0 h-12 w-12 rounded-full' src='/crypto/Ethereum.svg' alt='' width={25} height={25} />
                                <span className='text-xs font-medium text-slate-500 group-hover:text-slate-300 mx-2'><i className='fas fa-exchange-alt'></i></span>
                                <Image className='shrink-0 h-12 w-12 rounded-full' src='/crypto/Solana (SOL).svg' alt='' width={25} height={25} /></div>
                            : tableProps.row.original.collateral == 'Binance Coin (BNB)' ?
                                <div className='font-bold flex items-center'>
                                    <Image className='shrink-0 h-12 w-12 rounded-full' src='/crypto/Tether(USDT).svg' alt='' width={25} height={25} />
                                    <span className='text-xs font-medium text-slate-500 group-hover:text-slate-300 mx-2'><i className='fas fa-exchange-alt'></i></span>
                                    <Image className='shrink-0 h-12 w-12 rounded-full' src='/crypto/Bitcoin.svg' alt='' width={25} height={25} /></div>
                                : tableProps.row.original.collateral == 'Solana (SOL)' ?
                                    <div className='font-bold flex items-center'>
                                        <Image className='shrink-0 h-12 w-12 rounded-full' src='/crypto/Solana (SOL).svg' alt='' width={25} height={25} />
                                        <span className='text-xs font-medium text-slate-500 group-hover:text-slate-300 mx-2'><i className='fas fa-exchange-alt'></i></span>
                                        <Image className='shrink-0 h-12 w-12 rounded-full' src='/crypto/Ethereum.svg' alt='' width={25} height={25} /></div>
                                    : <div className='font-bold flex items-center'>
                                        <Image className='shrink-0 h-12 w-12 rounded-full' src='/crypto/Binance_Coin(BNB).svg' alt='' width={25} height={25} />
                                        <span className='text-xs font-medium text-slate-500 group-hover:text-slate-300 mx-2'><i className='fas fa-exchange-alt'></i></span>
                                        <Image className='shrink-0 h-12 w-12 rounded-full' src='/crypto/Tether(USDT).svg' alt='' width={25} height={25} /></div>
                )
            },
            {
                Header: "",
                accessor: 'id' + 'date',
                Cell: () => (
                    <TableDropdown />
                )
            }
        ],
        []
    )

    const data = React.useMemo(() => makeTransData(100), [])
    return (
        <OtherTables columns={columns} data={data} />
    )
}