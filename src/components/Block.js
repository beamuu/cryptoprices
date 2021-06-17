import React from 'react'
export default function Block(props) {
    return (
        <div className="d-flex justify-content-center" style={{minHeight: props.height}}>
            <div className="block">
                { props.children }
            </div>
        </div>
    )
}