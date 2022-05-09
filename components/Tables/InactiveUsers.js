import React from "react";
import Image from 'next/image'

//utils
import makeData from "Utils/makeData";
import UserTable from "Utils/UserTable";
//components
import TableDropdown from "components/Dropdowns/TableDropdown.js";

export default function InactiveUsers() {
    const columns = React.useMemo(
        () => [
            {
                Header: 'Quivertag',
                accessor: 'firstName',
                Cell: tableProps => (
                    <div className="flex items-center">
                        <Image
                            className="bg-white rounded-full border"
                            //   src={tableProps.row.original.PlayerImageURL}
                            src="/img/team-4-470x470.png"
                            width={50} height={50}
                            alt='Player' /><span
                                className="ml-5"
                            >
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
                Header: 'Last Seen Active',
                accessor: 'age',
                Cell: tableProps => (
                    <span
                        className="text-red-400"
                    >
                        Inactive
                    </span>
                )
            },
            {
                Header: 'Referred By',
                accessor: 'lastName',
            },
            {
                Header: 'NO. of Referals',
                accessor: 'progress',
            },
            {
                Header: 'KYC level',
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
                    <TableDropdown />
                )
            }
        ],
        []
    )

    const data = React.useMemo(() => makeData('activity', 100), [])
    return (
        <UserTable columns={columns} data={data} />
    )
}