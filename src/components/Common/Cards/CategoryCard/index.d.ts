type CategoryCardProps = {
    color: "black" | "white",
    title: string,
    description: string,
    img?: string,
    onClick?: () => void,
    className?: string,
    style?: React.CSSProperties,
    alt?: string,
}

export default CategoryCardProps;