import React from "react";
import { Button } from "./button";
import ScaleIdentification from "../../assets/svg/HomeScaleIdentification.svg";
import HoverScaleIdentification from "../../assets/svg/HoverScaleIdentification.svg";
import IntervalIdentification from "../../assets/svg/HomeIntervalIdentification.svg";
import HoverIntervalIdentification from "../../assets/svg/HoverIntervalIdentification.svg";
import ChordIdentification from "../../assets/svg/HomeChordIdentification.svg";
import HoverChordIdentification from "../../assets/svg/HoverChordIdentification.svg";
import VirtualPiano from "../../assets/svg/HomeVirtualPiano.svg";
import HoverVirtualPiano from "../../assets/svg/HoverVirtualPiano.svg";
import yellowGuy from "../../assets/svg/yellowGuy.svg";
import light from "../../assets/svg/HomePageLight.svg";
import bubbles from "../../assets/svg/HomePageBubble.svg";

import { useSetAtom } from "jotai";
import { appStateAtom, gameStateAtom } from "../../store/atoms";

export default function Home() {
  const setAppState = useSetAtom(appStateAtom);
  const setGameState = useSetAtom(gameStateAtom);
  const handleClick = (game) => {
    setGameState(game);
    setAppState("welcome");
  };

  return (
    <div className = "background-set">
      <img src={light} alt="homePageLight" id="light-background"/>
      <img src={bubbles} alt="HomePageBubble" id="homePageBubble"/>
    <div className="homeContainer">
      <div className="contentContainer">
        <div>
        
          <img src={yellowGuy} alt="little yelow creature" id="yellowGuy" />
          
          
        </div>
        <div className="text">
          <h1 className="white">Let's take </h1>
          <h1 className="orange">a</h1>
          <br></br>
          <h1 className="orange">game break!</h1>
          <p>
            <br></br>
            Test your skills with engaging games that
            <br></br>challenge your memory and rhythm recognition
            <br></br>while having some musical fun.
            <br></br>
            <br></br>Choose a game you want to play!
          </p>
   
        </div>
       
      </div>
      <div className="buttonContainer">
        <Button
          icon={VirtualPiano}
          hoverIcon={HoverVirtualPiano}
          title="Note identificaiton"
          tips="Identify the Note on the staff"
          hoverColor="#75C973"
          hoverBorderColor="#519750"
          onClick={() => handleClick("note")}
        />
        <Button
          icon={IntervalIdentification}
          hoverIcon={HoverIntervalIdentification}
          title="Key Signature identification"
          tips="Identify the Key Signature on the staff"
          hoverColor="#F6AD69"
          hoverBorderColor="#E98427"
          onClick={() => handleClick("key")}
        />
        <Button
          icon={ChordIdentification}
          hoverIcon={HoverChordIdentification}
          title="Major-Minor identificaiton"
          tips="Identify the Major/Minor on the staff"
          hoverColor="#F8D867"
          hoverBorderColor="#E9BB18"
          onClick={() => handleClick("major-minor")}
        />
        <Button
          icon={ScaleIdentification}
          hoverIcon={HoverScaleIdentification}
          title="Scale identification"
          tips="Identify the Scale on the staff"
          hoverColor="#D8BCFD"
          hoverBorderColor="#C986FA"
          onClick={() => handleClick("scale")}
        />
      </div>
      </div>
     
    </div>
  );
}
