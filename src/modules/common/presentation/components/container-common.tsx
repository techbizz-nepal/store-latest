import {IContainerCommonProps} from "@/modules/common/domain/types/common";

const ContainerCommon = ({children}: IContainerCommonProps) => {
    return (
        <div className="container mx-auto p-2">
            {children}
        </div>
    )
}

export default ContainerCommon