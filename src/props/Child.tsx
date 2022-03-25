import React from "react";

interface childProps {
    color: string;
    onClick: () => void;
    children: string;
}

export const Child = ({ color, onClick, children }: childProps) => {
    return (
        <div>
            {color}
            <button onClick={onClick}></button>
            {children}
        </div>
    );
};

export const ChildAsFc: React.FC<childProps> = ({
    color,
    onClick,
    children,
}) => {
    return (
        <div>
            {color}
            <button onClick={onClick}></button>
            {children}
        </div>
    );
};
