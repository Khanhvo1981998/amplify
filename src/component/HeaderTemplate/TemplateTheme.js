import React, { useEffect } from "react";

import Modal from "../../component/Modal/Modal";
import Footer from "../../templates/HomeTemplate/Footer/Footer";
import Header from '../../templates/HomeTemplate/Header/Header';

export default function TemplateTheme({ Component }) {

    useEffect(() => {

        window.scrollTo(0, 0)
    })

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