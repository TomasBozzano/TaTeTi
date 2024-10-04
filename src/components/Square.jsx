export const Square = ({children, index, updateBoard, isSelected})=>{
    const className = `square ${isSelected ? 'is-selected' : ''}`
    const handleClick = ()=>{
        updateBoard(index)
    }
    return (
        <div onClick={handleClick} className={className}>
            {children}
        </div>
    )
}