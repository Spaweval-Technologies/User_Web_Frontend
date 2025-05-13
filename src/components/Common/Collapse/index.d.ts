import { ReactElement, ReactNode } from "react"

type CollapseProps = {
    children: ReactNode | ReactNode[] | ReactElement;
    title: string;
}

export default CollapseProps;