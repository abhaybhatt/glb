import React, { useState } from "react"
import avatar from '../assets/avatar.png'
import { useNavigate } from "react-router-dom";
import useClickPreventionOnDoubleClick from "../doubleclick/clickHook";
import Draggable, { DraggableCore } from "react-draggable";
import '../App.css';

const ClickableBox = ({ x, y, setX, setY, onClick, onDoubleClick }) => {
    const [handleClick, handleDoubleClick] = useClickPreventionOnDoubleClick(onClick, onDoubleClick);

    const handleStop = (event, dragElement) => {
        console.info("x-", dragElement.x, " y-", dragElement.y)
        if (dragElement.x >= 0 && dragElement.x<= 550){
            setX(dragElement.x);
        } else if (dragElement.x <0){
            setX(0)
        } else if (dragElement.x >550){
            setX(550)
        }

        if (dragElement.y >= 0 && dragElement.y <= 400) {
            setY(dragElement.y);
        } else if (dragElement.y < 0) {
            setY(0)
        } else if (dragElement.y > 400) {
            setY(400)
        }
    };
    return(
        <Draggable onStop={handleStop} position={{ x: x, y: y }}>
            <div className='blackBox' onDoubleClick={handleDoubleClick}>
                <img src={avatar} className='avatar-image' alt="avatar" />
            </div>
        </Draggable>
    )
}

const Avatar = ({ x, y, setX, setY }) => {
    const history = useNavigate();
    return(
        <ClickableBox x={x} y={y} setX={setX} setY={setY} onClick={() => console.log("on click")} onDoubleClick={() => history('/avatar')} />
    )
};

export default Avatar