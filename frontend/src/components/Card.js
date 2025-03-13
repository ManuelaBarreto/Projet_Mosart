import React from "react";
import "./Card.css";
import {getMosaicOriginalUrl, getMosaicThumbnailUrl} from "../api";

function Card({ mosaic }) {
    return (
        <div className="polaroid-card">
            <div className="preview-container">
                <img
                    className="mosaic-original"
                    src={getMosaicOriginalUrl(mosaic.slug)}
                    alt="Original"
                    loading="lazy"
                />
                <img
                    src={getMosaicThumbnailUrl(mosaic.slug)}
                    alt="Generated"
                    loading="lazy"
                />
            </div>
            <div className="polaroid-content">
                <div className="polaroid-title">{mosaic.title}</div>
                <div className="polaroid-labels">
                    {mosaic.labels.map((label, index) => (
                        <span key={index} className="polaroid-label">{label}</span>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Card;