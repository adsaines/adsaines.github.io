const ColumnTableHeaderFactory = ({headers}:{headers: string[]}) => {
    return headers.map((header) => {
        return (
            <div className="grid-cell font-bold">
                {header}
            </div>
        )
    })
}

const TableDataFactory = ({data}:{data: string[]}) => {
    return data.map((data) => {
        return (
            <div className="grid-cell">
                {data}
            </div>
        )
    })
}


export const GridFactory = {
    Headers: ColumnTableHeaderFactory,
    Row: TableDataFactory
}