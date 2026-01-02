import { useState } from "react";
import Styles from "./Carousel.module.css";

const Carousel = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };
    
    const nextSlide = () => {
        const isLastSlide = currentIndex === images.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    return (
        <div className={Styles.carouselContainer}>
            {/* On mobile, these can stay as buttons above/below or be styled as a row */}
            
            <img 
                src={images[currentIndex]} 
                alt={`Slide ${currentIndex + 1}`} 
                className={Styles.carouselImage} 
            />
            <div className={Styles.navButtons}>
                <button onClick={prevSlide} className={Styles.navPrev}>Prev</button>
                <button onClick={nextSlide} className={Styles.navNext}>Next</button>
            </div>
        </div>
    );
};

export default Carousel;