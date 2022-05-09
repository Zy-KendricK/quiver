import React from "react";
import Image from 'next/image'

//utils
import OtherTables from "Utils/OtherTables";
import makeTransData from "Utils/makeTransData";

//components
import TableDropdown from "components/Dropdowns/TableDropdown.js";


export default function TransOne() {
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
                Header: 'Method',
                accessor: 'user',
            },
            {
                Header: 'Status',
                accessor: 'status',
                Cell: tableProps => (
                    <span
                        className={"font-semibold px-2 py-1 rounded-full " + (
                            tableProps.row.original.status == 'Successfull' ? "text-green-500 bg-green-200" :
                                tableProps.row.original.status == 'Pending' ? "text-amber-500 bg-amber-200" : "text-red-500 bg-red-200")}
                    >
                        {tableProps.row.original.status}
                    </span>
                )
            },
            {
                Header: 'Amount',
                accessor: 'amount',
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