export default function Square({value,onSquareClick,isSelected}){
    return (
        <button className="square" onClick={onSquareClick} disabled={isSelected}>{value}</button>
    )
}