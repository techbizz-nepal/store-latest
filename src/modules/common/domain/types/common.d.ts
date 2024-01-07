import React, {ReactNode} from "react";

export interface ILinkItemProps {
    labelOrIcon: ReactNode,
    href: string
}

export interface IRootLayoutProps {
    children: React.ReactNode
}

export interface IContainerCommonProps {
    children: React.ReactNode
}