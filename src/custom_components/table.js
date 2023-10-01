import React from "react";
import Cell from "./cell";

const Table = (props) => {
    return (<div>
        {props.table.cells.map((c) => {
            return <Cell cell={c} key={c.cell_id}>

            </Cell>
        })}
    </div>)
}

export default Table