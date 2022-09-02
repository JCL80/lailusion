import { useState } from 'react'
import { useEffect } from 'react'

const ImageSlider = ({slides}) => {
    const [currentIndex ,  setCurrentIndex] = useState(0) 
   
    const sliderStyles = {
        height : "100%",
        position : "relative",
    }

    const slideStyles = {
        width : "100%",
        height : "100%",
        borderRadius : "10px",
        backgroundPosition : "center",
        backgroundSize : "cover",
        backgroundImage : `url(${slides[currentIndex].url})`,
    }
    
    const leftArrowStyles = {
        position : "absolute",
        top : "50%",
        transform: "translate(0 , -50%)",
        left : "16px",
        fontSize : "45px",
        color : "black",
        zIndex : 1 , 
        cursor : "pointer" ,
    }
    
    const rightArrowStyles = {
        position : "absolute",
        top : "50%",
        transform: "translate(0 , -50%)",
        right : "16px",
        fontSize : "45px",
        color : "black",
        zIndex : 1 , 
        cursor : "pointer" , 
    }

    const arrow = {
        width : "25px",
        height : "25px",
    }

    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1
        setCurrentIndex(newIndex)
    }

    const goToNext = () => {
        const isLastSlide = currentIndex === slides.length - 1
        const newIndex = isLastSlide ? 0 : currentIndex + 1
        setCurrentIndex(newIndex)
    }

    useEffect(() => {
    let slider = setInterval(() => {
        goToNext()
        }, 5000);
        return () => clearInterval(slider)
        }, [currentIndex])

    return (
        <div style = {sliderStyles}>
            <div style={leftArrowStyles} onClick = {goToPrevious}> 
                <img style={arrow} src =
                 {require("./arrows/arrow-icon--myiconfinder-23 - left.png")}
                />
            </div>
            <div style={rightArrowStyles} onClick = {goToNext}> 
                <img style={arrow} src =
                 {require("./arrows/arrow-icon--myiconfinder-23.png")}
                />
            </div>


            <div style = {slideStyles}> 
            </div>
        </div>
    )
}

export default ImageSlider