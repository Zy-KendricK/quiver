import React from "react";
import Image from 'next/image'

//utils
import makeLoanData from "Utils/makeLoanData";
import OtherTables from "Utils/OtherTables";

//components
import LoansDropdown from "components/Dropdowns/LoansDropdown.js";

export default function LoansTable() {
    const columns = React.useMemo(
        () => [
            {
                Header: 'Request Date',
                accessor: 'request',
            },
            {
                Header: 'User',
                accessor: 'user',
            },
            {
                Header: 'Transaction ID',
                accessor: 'id',
            },
            {
                Header: 'Due Date',
                accessor: 'due',
            },
            {
                Header: 'Amount',
                accessor: 'amount',
            },
            {
                Header: 'Collateral',
                accessor: 'status',
                Cell: tableProps => (
                    <span
                        className={"font-semibold " + (
                            tableProps.row.original.status == "Completed" ? "text-green-400" :
                                tableProps.row.original.status == "KYC Level 1" ? "text-gray-400" :
                                    tableProps.row.original.status == "KYC Level 2" ? "text-indigo-400" : "text-red-400")}
                    >
                        {tableProps.row.original.status}
                    </span>
                )
            },
            {
                Header: "",
                accessor: 'age' + 'visits',
                Cell: () => (
                    <LoansDropdown />
                )
            }
        ],
        []
    )

    const data = React.useMemo(() => makeLoanData(15), [])
    return (
        <OtherTables columns={columns} data={data} />
    )
}