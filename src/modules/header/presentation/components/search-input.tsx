"use client"

import {Input} from "@/components/ui/input";
import {Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import {Button} from "@/components/ui/button";
import {SearchIcon} from "lucide-react";
import {useSearch} from "@/modules/header/presentation/hooks/use-header";
import {IUseSearch} from "@/modules/header/domain/types/header";

const SearchInput = () => {
    const {placeHolderText, searchInputRef, handleSelect, query, handleSearchInputChange}: IUseSearch = useSearch()

    const handleSearch = () => {
        (query.value !== '' && query.category !== '') ? console.log(query) : console.warn('give proper input')
    }
    return (
        <div id="search" className="flex sm:flex-row flex-col shadow-sm sm:items-center items-start gap-1">
            <Input name="search-products" placeholder={placeHolderText} ref={searchInputRef}
                   onChange={handleSearchInputChange}/>
            <Select onValueChange={handleSelect}>
                <SelectTrigger className="w-64">
                    <SelectValue placeholder="All Categories"/>
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        <SelectItem value="apples">Apples</SelectItem>
                        <SelectItem value="bananas">Bananas</SelectItem>
                        <SelectItem value="blueberries">Blueberries</SelectItem>
                        <SelectItem value="grapes">Grapes</SelectItem>
                        <SelectItem value="pineapples">Pineapples</SelectItem>
                    </SelectGroup>
                </SelectContent>
            </Select>
            <Button className="flex gap-1 items-center" onClick={handleSearch}>
                <SearchIcon/>
            </Button>
        </div>
    )
}

export default SearchInput