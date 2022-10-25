import React, { Fragment, useEffect } from 'react'
import { Route } from "react-router-dom"
import Footer from './Footer/Footer'
import Header from "./Header/Header"



export const HomeTemplate = (props) => {
    const { Component, ...restParam } = props

    useEffect(() => {
        window.scrollTo(0, 0);

    }, [])
    return <Route {...restParam} children={(propsRoute) => {
        console.log(propsRoute, "aaaaa");
        return <Fragment>
            <Header {...propsRoute} />

            <Component {...propsRoute} />

            <Footer />
        </Fragment>
    }} />
}