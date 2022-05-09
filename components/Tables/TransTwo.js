import React from "react";
import Image from 'next/image'

//utils
import OtherTables from "Utils/OtherTables";
import makeTransData from "Utils/makeTransData";

//components
import TableDropdown from "components/Dropdowns/TableDropdown.js";


export default function TransTwo() {
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
                Header: 'Due Date',
                accessor: 'due',
            },
            {
                Header: 'Amount',
                accessor: 'amount',
            },
            {
                Header: 'Collateral',
                accessor: 'collateral',
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