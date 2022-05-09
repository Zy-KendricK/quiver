import React from "react";
import Image from 'next/image'

//utils
import makeData from "Utils/makeData";
import UserTable from "Utils/UserTable";

//components
import OtherTables from "Utils/OtherTables";
import RolesDropdown from "components/Dropdowns/RolesDropdown";

export default function RolesTable() {
    const columns = React.useMemo(
        () => [
            {
                Header: 'Role name',
                accessor: 'role',
            },
            {
                Header: 'Created by',
                accessor: 'lastName',
            },
            {
                Header: 'Team members',
                accessor: 'age',
            },
            {
                Header: "",
                accessor: 'age' + 'visits',
                Cell: () => (
                    <RolesDropdown />
                )
            }
        ],
        []
    )

    const data = React.useMemo(() => makeData('activity', 4), [])
    return (
        <OtherTables columns={columns} data={data} />
    )
}