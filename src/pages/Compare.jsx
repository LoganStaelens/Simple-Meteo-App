import React, { useRef, useState } from 'react'

import './Page.css'
import WeatherCard from '../components/WeatherCard';

const ComparePage = () => {

    const [search1, setSearch1] = useState("Bruxelles");
    const [search2, setSearch2] = useState("Bruxelles");

    const sh1Ref = useRef();
    const sh2Ref = useRef();

    const search = (state, ref) => {
        state(ref.current.value);
    }

    return (
        <div id="content">
            <div className='compare-box'>
                <div className='compare-card'>
                    <div className='inputField'>
                        <label htmlFor="sh1">Ville1: </label>
                        <input ref={sh1Ref} type="text" name='sh1'/>
                        <button onClick={() => {search(setSearch1, sh1Ref)}}>Search</button>
                    </div>
                    <WeatherCard city={search1}/>
                </div>
                <div className='compare-card'>
                    <div className='inputField'>
                        <label htmlFor="sh2">Ville2: </label>
                        <input ref={sh2Ref} type="text" name='sh2'/>
                        <button onClick={() => {search(setSearch2, sh2Ref)}}>Search</button>
                    </div>
                    <WeatherCard city={search2}/>
                </div>
            </div>
        </div>
    );
}
 
export default ComparePage;