import { FC } from "react"

const ParentComponent: FC = () => {
    function handleButtonClick(e: string) {
        alert(e + "点击了按钮！")
    }
    return <ChildComponent onClick={handleButtonClick} />
}

interface ChildComponentProps {
    onClick: (e: string) => void
}

const ChildComponent: FC<ChildComponentProps> = props => {
    return <button onClick={() => props.onClick("AK-103")}>按钮</button>
}

export default ParentComponent
