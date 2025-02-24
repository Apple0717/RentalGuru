import React from "react";

import { flexRender, getCoreRowModel, useReactTable, getSortedRowModel } from "@tanstack/react-table";

import { Table, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";

const ReactTable = ({
    columns,
    data = [],
    headerProps = {},
    headerCellProps = {},
    bodyProps = {},
    rowDataProps = {},
    cellProps = {},
    tableProps = {},
    variant = "",
    size = "",
    ...restConfig
}) => {
    const tableConfig = {
        columns,
        data,
        getCoreRowModel: getCoreRowModel(),
        getSortedRowModel: getSortedRowModel(),
        ...restConfig,
    };

    const table = useReactTable(tableConfig);

    // Render the UI for your table
    return (
        <Table className={restConfig["className"] || ""} variant={variant} size={size} {...tableProps}>
            <Thead {...headerProps}>
                {table.getHeaderGroups().map((headerGroup) => (
                    <Tr key={headerGroup.id}>
                        {headerGroup.headers.map((header) => (
                            <Th {...header.column.columnDef?.meta} key={header.id} {...headerCellProps}>
                                {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                            </Th>
                        ))}
                    </Tr>
                ))}
            </Thead>
            <Tbody {...bodyProps}>
                {table.getRowModel().rows.map((row) => (
                    <Tr key={row.id} {...rowDataProps}>
                        {row.getVisibleCells().map((cell) => (
                            <Td key={cell.id} {...cellProps}>
                                {flexRender(cell.column.columnDef.cell, cell.getContext())}
                            </Td>
                        ))}
                    </Tr>
                ))}
            </Tbody>
        </Table>
    );
};

export { ReactTable };