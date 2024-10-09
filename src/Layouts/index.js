import React from 'react'
import HeaderOne from './Headers/HeaderOne'
import FooterOne from './Footers/FooterOne'

export default function MasterLayout({ children }) {
    return (
        <>
            <HeaderOne />
                { children }
            <FooterOne />
        </>
    )
} 
