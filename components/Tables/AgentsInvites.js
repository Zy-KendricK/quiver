import React from "react";
import Image from 'next/image'

//utils
import makeData from "Utils/makeData";
import UserTable from "Utils/UserTable";
//components
import TableDropdown from "components/Dropdowns/TableDropdown.js";

export default function AgentsInvites() {
    const columns = React.useMemo(
        () => [
            {
                Header: 'Name',
                accessor: 'firstName',
                Cell: tableProps => (
                    <div className="flex items-center">
                        <div className="rounded-full bg-green-100 text-green-600 w-12 h-12 uppercase font-semibold text-lg text-center inline-block py-2 px-2">
                            <span className="mt-2">{tableProps.row.original.firstName.charAt(0)}{tableProps.row.original.lastName.charAt(0)}</span>
                        </div>
                        <span className="ml-5">
                            {tableProps.row.original.firstName}{' '}{tableProps.row.original.lastName}
                        </span>
                    </div>
                )
            },
            {
                Header: 'Email address',
                accessor: 'email',
            },
            {
                Header: 'Role',
                accessor: 'role',
            },
            {
                Header: 'Invited by',
                accessor: 'invitedBy',
                Cell: tableProps => (
                    <span className={"font-semibold text-green-600"}>
                        {tableProps.row.original.invitedBy}
                    </span>
                )
            },
            {
                Header: 'Invitation Status',
                accessor: 'invite',
                Cell: tableProps => (
                    <span
                        className={"font-semibold px-2 py-1 rounded-full " + (
                            tableProps.row.original.invite == 'Pending' ? "text-green-500 bg-green-200" : "text-red-500 bg-red-200")}
                    >
                        {tableProps.row.original.invite}
                    </span>
                )
            },
            {
                Header: "",
                accessor: 'age',
                Cell: () => (
                    <TableDropdown />
                )
            }
        ],
        []
    )

    const data = React.useMemo(() => makeData('activity', 3), [])
    return (
        <UserTable columns={columns} data={data} />
    )
}