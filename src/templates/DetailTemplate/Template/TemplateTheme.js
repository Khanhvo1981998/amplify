import React from "react";
import Modal from "../../../pages/Modal/Modal";
import Footer from "../../HomeTemplate/Footer/Footer";
import Header from '../../HomeTemplate/Header/Header';

export default function TemplateTheme({ Component }) {
    return (
        <div>
            <Header />
            <Modal />
            <div>
                <Component />
            </div>
            <Footer />
        </div>
    );
}