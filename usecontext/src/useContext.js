import { createContext } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
    const userData = {
        name : "Praful",
        age : 28
    };

    const userData2 = {
        name : "Pradip",
        age : 53
    };

    return <AppContext.Provider value={userData, userData2}>{children}</AppContext.Provider>;
};

export {AppContext, AppProvider};