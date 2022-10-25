import { useState } from "react";

const useModal = () => {
    const [isVisibleModal, setIsVisibleModal] = useState(false);

    function toggleModal() {
        setIsVisibleModal(!isVisibleModal);
    }

    return {
        isVisibleModal,
        toggleModal,
    };
};

export default useModal;
