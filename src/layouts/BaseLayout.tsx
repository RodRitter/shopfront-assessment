import React from "react";
import Header from "../containers/Header";

type BaseLayoutTypes = {
    children?: React.ReactNode;
};

const BaseLayout = ({ children }: BaseLayoutTypes) => {
    return (
        <main className="container">
            <Header />
            {children}
        </main>
    );
};

export default BaseLayout;
