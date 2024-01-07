import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import SearchInput from "@/modules/header/presentation/components/search-input";
import {FacebookIcon, InstagramIcon} from "lucide-react";
import LinkItem from "@/modules/common/presentation/components/link-item";
import {IHeaderCommonProps} from "@/modules/header/domain/types/header";

const HeaderCommon = ({menu}: IHeaderCommonProps) => {
    return (
        <div className="flex sm:flex-row flex-col justify-evenly py-4 gap-y-2">
            <div id="logo" className="flex items-center">
                <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png"/>
                    <AvatarFallback>SP</AvatarFallback>
                </Avatar>
            </div>
            <SearchInput/>
            <div id="menu" className="flex gap-x-5 sm:items-center sm:flex-row items-start flex-col ">
                {
                    menu.items.map(item => <LinkItem href="#" labelOrIcon={item.label} key={item.name}/>)
                }
            </div>
            <div id="social" className="flex gap-x-1 items-center">
               <LinkItem href="#" labelOrIcon={<InstagramIcon className="text-primary" />} />
               <LinkItem href="#" labelOrIcon={<FacebookIcon className="text-primary" />} />
            </div>
        </div>
    )
}

export default HeaderCommon