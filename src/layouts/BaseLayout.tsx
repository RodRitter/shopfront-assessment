import React from "react";

type BaseLayoutTypes = {
    children?: React.ReactNode;
};

const BaseLayout = ({ children }: BaseLayoutTypes) => {
    return <div>{children}</div>;
};

export default BaseLayout;
