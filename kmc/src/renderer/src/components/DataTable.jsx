import { useEffect, useMemo, useRef, useState } from 'react';
import {
    MaterialReactTable,
    useMaterialReactTable,
} from 'material-react-table';
import { MRT_Localization_VI } from 'material-react-table/locales/vi';

const ItemTable = (data) => {
    const columns = useMemo(    
        () => [
            {
                accessorKey: 'name',
                header: 'TÊN SẢN PHẨM',
                size: 150
            },
            {
                accessorKey: 'id',
                header: 'STT',
                size: 70
            },
            {
                accessorKey: 'barcode',
                header: 'MÃ HÀNG',
                size: 100
            },
            {
                accessorKey: 'type',
                header: 'LOẠI HÀNG',
                size: 120
            },
            {
                accessorKey: 'content',
                header: 'HÀM LƯỢNG',
                size: 120
            },
            {
                accessorKey: 'totalWeight',
                header: 'TL VÀNG',
                size: 90
            },
            {
                accessorKey: 'indiWeight',
                header: 'TL HỘT',
                size: 90
            },
            {
                accessorKey: 'price',
                header: 'TIỀN CÔNG',
                size: 110
            },            
            {
                accessorKey: 'buyDate',
                header: 'NGÀY MUA',
                size: 150
            }
        ]
    );

    const rowVirtualizerInstanceRef = useRef(null);

    const [isLoading, setIsLoading] = useState(false);
    const [sorting, setSorting] = useState([]);

    useEffect(() => {
        try {
            rowVirtualizerInstanceRef.current?.scrollToIndex?.(0);
        } catch (error) {
            console.error(error);
        }
    }, [sorting]);

    console.log(data)

    const table = useMaterialReactTable({
        columns,
        data: data.data,
        initialState: {density: 'compact'},
        enableColumnActions: false,
        defaultDisplayColumn: { enableResizing: true },
        enableBottomToolbar: false,
        enableColumnResizing: true,
        enableColumnVirtualization: true,
        enableGlobalFilterModes: true,
        enablePagination: false,
        enableColumnPinning: true,
        enableRowNumbers: false,
        enableRowVirtualization: true,
        muiTableContainerProps: { sx: { maxHeight: '600px' } },
        onSortingChange: setSorting,
        state: { isLoading, sorting },
        rowVirtualizerInstanceRef, 
        rowVirtualizerOptions: { overscan: 5 },
        columnVirtualizerOptions: { overscan: 2 },
        localization: MRT_Localization_VI
        });
    return <MaterialReactTable table={table} />;
}

export default ItemTable;