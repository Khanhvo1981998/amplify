const USER = "USER_INFO";
export const localStoreService = {
    setUserLocal: (data) => {
        const { accessToken, ...userInfo } = data;
        const dataToSave = {
            accessToken,
            userInfo,
        };
        const dataJson = JSON.stringify(dataToSave);
        localStorage.setItem(USER, dataJson);
    },
    getUserLocal: () => {
        return localStorage.getItem(USER)
            ? JSON.parse(localStorage.getItem(USER))
            : null;
    },
    removeUserLocal: () => {
        let dataJson = localStorage.getItem(USER);

        if (dataJson) {
            localStorage.removeItem(USER);
        }
    },
};
