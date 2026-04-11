const ColumnTableHeaderFactory = ({headers}:{headers: string[]}) => {
    return headers.map((header, idx) => {
        return (
            <div key={`th-${idx}`} className="grid-cell font-bold text-(--light-tertiary)">
                {header}
            </div>
        )
    })
}

const TableDataFactory = ({data}:{data: string[]}) => {
    return data.map((data, idx) => {
        return (
            <div key={`th-${idx}`} className="grid-cell text-(--light-tertiary)">
                {data}
            </div>
        )
    })
}


export const GridFactory = {
    Headers: ColumnTableHeaderFactory,
    Row: TableDataFactory
}