import React from 'react'

export default function Loading(props) {
    return (
        <>
            <div className="dynamic-page loading d-flex justify-content-center align-items-center">
                <div>
                    <h2 className="title-darkblue">Getting Cryptocurrency Prices ...</h2>
                    <p>Your page will be ready soon.</p>
                </div>
            </div>
        </>
    )
}