"use client"

import React, { useEffect, useState } from 'react';

const ImageCarousel = ({ images }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const handlePreviousClick = () => {
        setCurrentImageIndex(
            currentImageIndex === 0 ? images.length - 1 : currentImageIndex - 1
        );
    };

    const handleNextClick = () => {
        setCurrentImageIndex((currentImageIndex + 1) % images.length);
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            handleNextClick();
        }, 5000);

        return () => clearTimeout(timer);
    }, [currentImageIndex]);

    return (
        <section>
            <div className="image-container" style={{display:"flex", flex:"row", margin:"30px"}}>
                <button className="nav-button left" onClick={handlePreviousClick} style={{fontFamily: "serif", fontWeight:"bolder"}}>&lt;</button>

                {images && images.map((image, index) => (
                    <img 
                        src={image.url} 
                        alt="images" 
                        className={ currentImageIndex === index ? 'block' : 'hidden'}
                        key={image.id} 
                        style={{width: "5000px", margin:"10px"}}
                    />
                ))}

                <button className="nav-button right" onClick={handleNextClick} style={{fontFamily: "serif", fontWeight:"bolder"}}>&gt;</button>

            </div>
        </section>
    )
}

export default ImageCarousel