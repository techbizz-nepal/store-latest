import {MutableRefObject, useRef, useState} from "react";
import {ISearchQuery, IUseSearch} from "@/modules/header/domain/types/header";

export const useSearch = (): IUseSearch => {
    const [query, setQuery] = useState<ISearchQuery>({category: '', value: ''})
    const searchInputRef: MutableRefObject<HTMLInputElement | null> = useRef<HTMLInputElement | null>(null)
    const placeHolderText: string = query.category == '' ? "Search Products" : "Search in " + query.category
    const handleSelect = (value: string) => {
        setQuery(prevState => ({...prevState, category: value}))
    }
    const handleSearchInputChange = () => {
        setQuery(prevState => ({...prevState, value: searchInputRef.current?.value}))
    }

    const handleSearch = () => {
        (query.value !== '' && query.category !== '') ? console.log(query) : console.warn('give proper input')
    }
    return {
        query,
        searchInputRef,
        placeHolderText,
        handleSearch,
        handleSelect,
        handleSearchInputChange,
    }
}