import styles from './Card.module.css'
import React from "react";
import getImageRequest from "../../../api/requests/getImageRequest";
import Image from "../../Images/Image";
import RenderImage from "../../Images/RenderImage";

interface CardProps {
    category: string
}

const Card: React.FC<CardProps> = props => {
    return (
      <div className={styles.card}>
        <div className={styles.container}>
            <RenderImage query={props.category} />
            <div className={styles.bannerContent}>
                <p className={styles.text}>{props.category}</p>
            </div>
        </div>
      </div>
    );
}

export default Card;