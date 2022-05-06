import { useSelector } from 'react-redux';
import './App.css';

function Header(){
    const name = useSelector(state => state.name.value);
    return(
        <div className="Header">
            <h1>Name:</h1>
            <h3>{name}</h3>
        </div>
    );
}

export default Header;