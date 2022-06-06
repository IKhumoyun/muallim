import React from "react";
// @ts-ignore
import styles from './tile.module.scss';

type TileProps = {
    index: number;
    title: string;
    symbol: string;
    audio: string[];
}

export const Tile = ({ index, title, symbol, audio }: TileProps) => {
    return (
        <div className={styles.tile}>
            <h1>{`${index}. ${title} - ${symbol}`}</h1>
            {audio.map(audioSrc => (
                <audio src={audioSrc} controls></audio>
            ))}
        </div>
    )
}