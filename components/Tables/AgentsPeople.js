import React from "react";
import Image from 'next/image'

//utils
import makeData from "Utils/makeData";
import UserTable from "Utils/UserTable";
//components
import TableDropdown from "components/Dropdowns/TableDropdown.js";

export default function AgentsPeople() {
    const columns = React.useMemo(
        () => [
            {
                Header: 'Name',
                accessor: 'firstName',
                Cell: tableProps => (
                    <div className="flex items-center">
                        <Image
                            className="bg-white rounded-full border"
                            //   src={tableProps.row.original.PlayerImageURL}
                            src={tableProps.row.original.image}
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
                Header: 'Role',
                accessor: 'role',
            },
            {
                Header: 'Activity',
                accessor: 'activity',
                Cell: tableProps => (
                    <span
                        className={"font-semibold " + (
                            tableProps.row.original.activity == 'Online' ? "text-green-400" : "text-red-400")}
                    >
                        <i className="fas fa-square mx-2"></i>{tableProps.row.original.activity}
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

    const data = React.useMemo(() => makeData('activity', 24), [])
    return (
        <UserTable columns={columns} data={data} />
    )
}