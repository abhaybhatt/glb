import React, { useState } from 'react'
import Timer from '../Timer';
import '../App.css';
import './util.css'

const CheckBox = ({id,name, isChecked, handleOnChange}) => {
    return(
        <input
            className='checkbox'
            type="checkbox"
            id={id}
            name={name}
            value={name}
            checked={isChecked}
            onChange={handleOnChange}
        />
    )
}
const Navbar = ({x,y,setX,setY}) => {
    const [topRight, setTopRight] = useState(false)
    const [topLeft, setTopLeft] = useState(false)
    const [bottomRight, setBottomRight] = useState(false)
    const [bottomLeft, setBottomLeft] = useState(false)

    const handleByyId = (id) => {
        if(id === 1){
            setTopLeft(true)
            setTopRight(false)
            setBottomRight(false)
            setBottomLeft(false)
            setX(0)
            setY(0)
        }
        else if (id === 2) {
            setTopLeft(false)
            setTopRight(true)
            setBottomRight(false)
            setBottomLeft(false)
            setX(550)
            setY(0)
        }
        else if (id === 3) {
            setTopLeft(false)
            setTopRight(false)
            setBottomRight(false)
            setBottomLeft(true)
            setX(0)
            setY(400)
        } else if (id === 4) {
            setTopLeft(false)
            setTopRight(false)
            setBottomRight(true)
            setBottomLeft(false)
            setX(550)
            setY(400)
        }
    }
    return(
        <div className='navbar'>
            <div style={{display: 'flex'}}>
                <label className='main'>Top Left<CheckBox id={1} name="Top Left" isChecked={topLeft} handleOnChange={() => handleByyId(1)} /><span className='mark'></span> </label>
                <label className='main'>Top Right<CheckBox id={2} name="Top Right" isChecked={topRight} handleOnChange={() => handleByyId(2)} /><span className='mark'></span> </label>
                <label className='main'>Bottom Left<CheckBox id={3} name=" Bottom Left" isChecked={bottomLeft} handleOnChange={() => handleByyId(3)} /><span className='mark'></span> </label>
                <label className='main'>Bottom Right<CheckBox id={4} name="Bottom Right" isChecked={bottomRight} handleOnChange={() => handleByyId(4)} /> <span className='mark'></span></label>
            </div>
            <Timer />
        </div>
    )
}

export default Navbar