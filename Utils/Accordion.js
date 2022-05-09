import React, { useState, useRef } from "react"
const Accordion = ({ title, color, count, content }) => {
    const [isOpened, setOpened] = useState(false)
    const [height, setHeight] = useState("0px")
    const contentElement = useRef(null)

    const HandleOpening = () => {
        setOpened(!isOpened)
        setHeight(!isOpened ? `${contentElement.current.scrollHeight}px` : "0px")
    }
    return (
        <div onClick={HandleOpening}>
            <fieldset className={"py-4 flex text-white"}>
                <h4 className="font-semibold text-quivercolor">{title}</h4>
                <span className={"py-1 px-2 text-xs rounded-md ml-2 mb-2 bg-" + color}>{count}</span>
                {isOpened ? <i className="fas fa-angle-up w-1.5 h-8 mt-1 ml-7 text-gray-400"></i> : <i className="fas fa-angle-down w-1.5 h-8 mt-1 ml-7 text-gray-400"></i>}
            </fieldset>
            <div
                ref={contentElement}
                style={{ height: height }}
                className="overflow-hidden transition-all duration-200"
            >
                <p className="py-4">{content}</p>
            </div>
        </div>
    )
}

export default Accordion
