
function CoreConcept({img,title,description}){
    return (
        <li>
            <img src={img} alt="Img" />
            <h2>{title}</h2>
            <p>{description}</p>
        </li>
    )
}

export default CoreConcept;