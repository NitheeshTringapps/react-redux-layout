import { useSelector } from 'react-redux';
import './App.css';

function Footer(){
    const address = useSelector(state => state.address.value);
    return(
        <div className="Footer">
            <h1>Address:</h1>
            <address>{address}</address>
        </div>
    );
}

export default Footer;