import ReactImg from '../assets/react-core-concepts.png';

const desrciptions=['Fundamental','Crucial','Important'];

function RandomDescription(max){
    return Math.floor(Math.random()*(max+1))
}
function Header(){
    
    return(
            <header>
              <img src={ReactImg} alt="React-Logo" />
              <h1>React Essentials</h1>
              <p>{desrciptions[RandomDescription(desrciptions.length)]} React concepts you will need for almost any app you are
                  going to build!</p>
            </header>
    )
}

export default Header;