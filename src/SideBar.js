import { useSelector } from 'react-redux';
import './App.css';

function SideBar(){
    const allMenu = useSelector(state => state.menu);

    return(
        <div className="SideBar">
            <p className='menu'>{allMenu.menu1}</p>
            <p className='menu'>{allMenu.menu2}</p>
            <p className='menu'>{allMenu.menu3}</p>
            <p className='menu'>{allMenu.menu4}</p>
        </div>
    );
}

export default SideBar;