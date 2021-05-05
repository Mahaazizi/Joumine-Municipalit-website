import React from 'react'

export default function Banner({children,title,subtitle}) {
    return (
        <div className='banner'>
            <h1>بلدية جومين</h1>
            <div></div>
            <p>في خدمتكم</p>
            {children}
           

        </div>
    )
}
