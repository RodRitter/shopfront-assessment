export const getStore = (storeName: string) => {
    try {
        const data = localStorage.getItem(storeName);
        if (data) {
            const dataJSON = JSON.parse(data);
            return dataJSON;
        }
    } catch (err) {
        return {};
    }
};

export const setStore = (storeName: string, data: any) => {
    try {
        localStorage.setItem(storeName, JSON.stringify(data));
    } catch (err) {
        console.error(err);
    }
};
