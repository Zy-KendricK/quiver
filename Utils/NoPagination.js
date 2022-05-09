/* eslint-disable react/jsx-key */
/* eslint-disable react/display-name */
import React from 'react'
import { useTable, usePagination, useRowSelect } from 'react-table'

function NoPagination({ columns, data }) {
  // Use the state and functions returned from useTable to build your UI
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page, // Instead of using 'rows', we'll use page,
    // which has only the rows for the active page

    // The rest of these things are super handy, too ;)
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    selectedFlatRows,
    state: { pageIndex, pageSize, selectedRowIds },
  } = useTable(
    {
      columns,
      data,
    },
    usePagination,
    useRowSelect,
  )

  // Render the UI for your table
  return (
    <>
      <table {...getTableProps()} className="items-center w-full bg-transparent border-collapse px-0 md:px-0 ">
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}
            >
              {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps()}
                  className={
                    "px-6 align-middle border border-solid py-3 text-sm border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-blueGray-50 text-blueGray-500 border-blueGray-100" +
                    "bg-blueGray-50 text-blueGray-500 border-blueGray-100"}
                >{column.render('Header')}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row, i) => {
            prepareRow(row)
            return (
              <tr {...row.getRowProps()} className="border-t last:border-b px-6 py-3 align-middle text-left border-l-0 border-r-0 text-sm whitespace-nowrap p-4 hover:bg-blueGray-50">
                {row.cells.map(cell => {
                  return <td {...cell.getCellProps()} className="px-6 whitespace-nowrap p-4 text-quivercolor items-center">{cell.render('Cell')}</td>
                })}
              </tr>
            )
          })}
        </tbody>
      </table>
    </>
  )
}

export default NoPagination
