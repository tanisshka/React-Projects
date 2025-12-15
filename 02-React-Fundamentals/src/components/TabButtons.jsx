

function TabButtons({children,isSelected,onSelect}){
    return(
        <li><button className={isSelected?'active':''} onClick={onSelect}>{children}</button></li>
    )
}


export default TabButtons;