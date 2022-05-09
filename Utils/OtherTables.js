/* eslint-disable react/jsx-key */
/* eslint-disable react/display-name */
import React from 'react'
import { useTable, usePagination, useRowSelect } from 'react-table'

import TableDropdown from "components/Dropdowns/TableDropdown.js";

const IndeterminateCheckbox = React.forwardRef(
  ({ indeterminate, ...rest }, ref) => {
    const defaultRef = React.useRef()
    const resolvedRef = ref || defaultRef

    React.useEffect(() => {
      resolvedRef.current.indeterminate = indeterminate
    }, [resolvedRef, indeterminate])

    return (
      <>
        <input type="checkbox" className='focus:ring-green-500 rounded text-green-500' ref={resolvedRef} {...rest} />
      </>
    )
  }
)

function OtherTables({ columns, data }) {
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
      {/* 
        Pagination can be built however you'd like. 
        This is just a very basic UI implementation:
      */}
      <div className="pagination pl-10 pt-3">
        {/* <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
          {'<<'}
        </button>{' '}
        <button onClick={() => previousPage()} disabled={!canPreviousPage}>
          {'<'}
        </button>{' '}
        <button onClick={() => nextPage()} disabled={!canNextPage}>
          {'>'}
        </button>{' '}
        <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
          {'>>'}
        </button>{' '} */}
        <span>
          <span>
            <span className='border border-gray-300 text-quivercolor rounded-lg py-1 px-2 mr-2'>{pageIndex + 1}</span> <span className='font-bold text-quivercolor'>of {pageOptions.length}</span>
          </span>{' '}
        </span>
        <button onClick={() => previousPage()} disabled={!canPreviousPage} className="disabled:opacity-25 disabled:cursor-not-allowed bg-blueGray-400 text-quivercolor hover:text-white active:bg-blueGray-600 font-bold uppercase px-2 py-0 rounded-l shadow hover:shadow-md outline-none focus:outline-none ml-2 mb-1 ease-linear transition-all duration-150">
          <i className="fas fa-angle-left"></i>
        </button>{' '}
        <button onClick={() => nextPage()} disabled={!canNextPage} className="disabled:opacity-75 disabled:cursor-not-allowed bg-blueGray-400 text-quivercolor hover:text-white active:bg-blueGray-600 font-bold uppercase px-2 py-0 rounded-r shadow hover:shadow-md outline-none focus:outline-none mb-1 ease-linear transition-all duration-150">
          <i className="fas fa-angle-right"></i>
        </button>{' '}
        <span>
          <span className='font-semibold ml-5 mr-2 text-quivercolor'>
            Entries per page:
          </span>
          <select
            className='form-select rounded-lg py-px pl-px border-gray-300'
            value={pageSize}
            onChange={e => {
              setPageSize(Number(e.target.value))
            }}
          >
            {[5, 10, 20, 30, 40, 50].map(pageSize => (
              <option key={pageSize} value={pageSize}>
                {pageSize}
              </option>
            ))}
          </select>
        </span>

      </div>
    </>
  )
}

export default OtherTables
