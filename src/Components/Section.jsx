import React, { useState } from "react";
import { Player, ControlBar, BigPlayButton, VolumeMenuButton } from 'video-react';
import '../styles/App.css';
import "../../node_modules/video-react/dist/video-react.css";

const Section = ({name, smile, vidOp, id, text}) => {
    return (
        <div className="costil">
                <h1>{name +" "} <span className="sp">{smile}</span></h1>
                <div className="Video">
                    <div className="main">
                        <Player style={{all: 'unset'}}>
                            <source src={`${vidOp}`} />
                            <ControlBar autoHide={true} className="my-class">
                                <VolumeMenuButton vertical />
                            </ControlBar>
                            <BigPlayButton position="center" />
                        </Player>
                    </div>
                </div>
                <div className={`text text${id}`}>
                    <p>{`- " ${text} "`}</p>
                </div>
        </div>        
    );
}

export default Section;