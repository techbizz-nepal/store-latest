import Link from "next/link";
import {ILinkItemProps} from "@/modules/common/domain/types/common";

const LinkItem = ({labelOrIcon, href = "#"}: ILinkItemProps) => <Link href={href}
                                                                      className=" p-2 rounded-md hover:cursor-pointer hover:bg-accent">{labelOrIcon}</Link>

export default LinkItem