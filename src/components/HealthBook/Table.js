import React, { useMemo } from 'react'
import { useTable, usePagination } from 'react-table'
import './style/table.css'
import { Button } from '@mui/material';

function Table(props) {
    const columns = useMemo(() => props.columns, [props.columns])
    const data = useMemo(() => props.tabledata, [props.tabledata])

    const tableInstance = useTable({
        columns,
        data
    }, usePagination)

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        prepareRow,
        page,
        nextPage,
        previousPage,
        canNextPage,
        canPreviousPage,
        pageOptions,
        state,
        gotoPage,

    } = tableInstance
    const { pageIndex } = state;

    return (
        <>
            <div id="table-box">
                <span>Show <input type="number" defaultValue={pageIndex + 1}
                    onChange={e => {
                        const pageNumber = e.target.value ? Number(e.target.value) - 1 : 0
                        gotoPage(pageNumber)
                    }}
                    style={{ width: "35px", height: "20px" }} min={1} max={pageOptions.length} /> entries </span>

                <table className='table' {...getTableProps()}>
                    <thead>
                        {
                            headerGroups.map((headerGroup) => (
                                <tr {...headerGroup.getHeaderGroupProps()}>
                                    {
                                        headerGroup.headers.map((columns) => (
                                            <th {...columns.getHeaderProps()}>{columns.render('Header')} </th>
                                        ))
                                    }
                                </tr>
                            ))
                        }

                    </thead>
                    <tbody {...getTableBodyProps()}>
                        {page.map((row) => {
                            prepareRow(row)
                            return (
                                <tr {...row.getRowProps()}>
                                    {
                                        row.cells.map((cell) => {
                                            return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                        })
                                    }

                                </tr>
                            )
                        })}

                    </tbody>
                </table>
                <div className="bottom">
                    <span>Showing 1 to {page.length} of {pageIndex + 1} entries</span>
                    <Button className='btn' variant="outlined" onClick={() => nextPage()} disabled={!canNextPage}>Next</Button>
                    <Button className='btn' variant="contained" >{pageIndex + 1}</Button>
                    <Button variant="outlined" className='btn' onClick={() => previousPage()} disabled={!canPreviousPage}>Previous</Button>
                </div>
            </div>
        </>
    )
}

export default Table