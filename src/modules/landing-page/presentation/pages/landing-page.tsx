import {headerMenuObject} from "@/modules/header/data/menuData";
import HeaderCommon from "@/modules/header/presentation/components/header-common";
import {ReactNode} from "react";

const LandingPage = (): ReactNode => <HeaderCommon menu={headerMenuObject}/>

export default LandingPage