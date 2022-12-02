import React from "react";
import Modal from "../../../component/Modal/Modal";
import Footer from "../../HomeTemplate/Footer/Footer";
import Header from '../../HomeTemplate/Header/Header';

export default function DetailTemplate({ Component }) {
    return (
        <div>
            <Header />
            <Modal />
            <div>
                <Component />
            </div>

        </div>
    );
}