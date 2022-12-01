import React from "react";
import HeaderTemplate from "../../../component/HeaderTemplate/HeaderTemplate";
import Modal from "../../../pages/Modal/Modal";
import Footer from "../../HomeTemplate/Footer/Footer";
import Header from '../../HomeTemplate/Header/Header';

export default function TemplateTheme({ Component }) {
    return (
        <div>
            {/* <HeaderTemplate /> */}
            <Header />
            <Modal />
            <div>
                <Component />
            </div>
            <Footer />
        </div>
    );
}