import {MutableRefObject} from "react";

export interface IMenu {
    name: string,
    items: IMenuItem[]
}

export interface IMenuItem {
    name: string,
    label: string,
    url: string
}

export interface IHeaderCommonProps {
    menu: IMenu
}

export interface ISearchQuery {
    category: string,
    value?: string
}

export interface IUseSearch {
    query: ISearchQuery,
    placeHolderText: string,
    searchInputRef: MutableRefObject<HTMLInputElement | null>,
    handleSearch: () => void,
    handleSelect: (value: string) => void,
    handleSearchInputChange: () => void
}