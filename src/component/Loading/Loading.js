import React, { Fragment } from 'react'
import { useSelector } from 'react-redux'
import "../Loading/Loading.css"

export default function Loading(props) {


    const { isLoading } = useSelector(state => state.LoadingReducer)
    return (
        <Fragment>
            {isLoading ?
                <div div style={{ position: "fixed", backgroundColor: "rgba(0, 0, 0,.5)", width: "100%", height: "100%", top: 0, left: 0, display: "flex", justifyContent: "center", alignItems: "center", zIndex: 99 }}>
                    <div class="loader" style={{ width: "10em", height: "10em", fontSize: 16 }}>
                        <div class="face">
                            <div class="circle"></div>
                        </div>
                        <div class="face">
                            <div class="circle"></div>
                        </div>
                    </div>
                </div> : ""

            }
        </Fragment >
    )
}
