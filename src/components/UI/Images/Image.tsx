import React from 'react';
import styles from './Image.module.css';

interface ImageProps {
    title: string,
    url: string
}
const Image: React.FC<ImageProps> = (props) => (
    <img className= {styles.img} src={props.url} alt={props.title} />
);

export default Image;