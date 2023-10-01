import React from "react";
import Table from './table'

const Page = (props) => {
    return (
        <div>
            {props.tables.map((t) => {
                return (<Table table={t} key={t.table_id}>

                </Table>)
            })}
        </div>
    )
}

export default Page