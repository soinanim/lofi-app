import React from "react";
import styles from "./ButtonCircle.module.css";

const ButtonCircle = ({name, left, top}) => {
  return (
    <div className={styles.popoverAction} style={{left: left +'%', top: top + '%'}}>
      <div className={styles.circleHover}>
        <div></div>
      </div>
      <div className={styles.popoverCard}>
        <h5>{name}</h5>
        <input type="range" min="0" max="100"   name="value" className={styles.input}/>
      </div>
    </div>
  );
};

export default ButtonCircle;
