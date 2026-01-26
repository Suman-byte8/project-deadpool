import React from 'react'

const ArrowButton = (props) => {
    return (
        <div className={`w-32 h-32 flex items-center justify-center rounded-full ${props.className} text-3xl`}>{props.icon}</div>
    )
}

export default ArrowButton