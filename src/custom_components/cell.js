import React from "react";
import './cell.css'

// Transfered this to python processing. This was taking up a lot of unessecary compute time
// const getParagraphText = (text, link_map) => {
//     let start_index = -1
//     let end_index = -1
//     for (const [link_text, href] of Object.entries(link_map)){
//         start_index = text.indexOf(link_text)
//         if(start_index === -1){
//             console.log(`Couldn't find the substring ${link_text} in ${text}`)
//         }else{
//             end_index = start_index + link_text.length
//             text = text.slice(0,end_index) + "</a>" + text.slice(end_index)
//             text = text.slice(0,start_index) + `<a href="${href}">` +text.slice(start_index)
//         }
//     }
//     return {__html: text}
// } 

const Cell = (props) => {
    return (<div className="singleCell">
        {props.cell.paragraphs.map((p,index) => {
            let class_string = ""
            if(index === 0){
                class_string += "firstLine"
            }else{
                class_string += "notFirstLine"
            }
            if(index === props.cell.paragraphs.length -1){
                class_string += " lastLine"

            }
            return <p className={class_string} key={p.p_id} dangerouslySetInnerHTML={{__html: p.integrated_hrefs}}></p>
        })}
    </div>)
}

export default Cell;