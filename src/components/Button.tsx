import React, { MouseEventHandler } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

type ButtonTypes = {
    className: string;
    onClick: MouseEventHandler;
    children?: React.ReactNode;
    icon?: IconProp;
    iconAlign?: string;
};

const Button = ({
    icon,
    iconAlign,
    onClick,
    className,
    children,
}: ButtonTypes) => {
    return (
        <button onClick={onClick} className={className}>
            {icon && iconAlign !== "right" && <FontAwesomeIcon icon={icon} />}
            {children && <span>{children}</span>}
            {icon && iconAlign === "right" && <FontAwesomeIcon icon={icon} />}
        </button>
    );
};

export default Button;
