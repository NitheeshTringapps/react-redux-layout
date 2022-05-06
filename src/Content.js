import { useState } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import { updateAddress } from './slices/addressSlice';
import { updateName } from './slices/nameSlice';

function Content(){
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const dispatch = useDispatch();
    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(updateName(name))
        dispatch(updateAddress(address));
        setName("");
        setAddress("");
    }
    return(
        <div className="Content" onSubmit={handleSubmit}>
            <form className='Form'>
                <label>Name:</label>
                <input type="text" id='name' name='name' onChange={(e) => setName(e.target.value)} value={name} required></input><br/><br/>
                <label>Address:</label>
                <textarea rows="4" cols="50" id="address" name='address' onChange={(e) => setAddress(e.target.value)} value={address} required></textarea><br/><br/>
                <input type="submit"></input>
            </form>
        </div>
    );
}

export default Content;