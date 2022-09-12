import React, { useState } from "react";
// import '../../pages/Login.css';
import {testimonials} from './testimonials/testimonials'

function Slideshow() {
const styles = {
    container: {
        width: '40%',
        height: '300px',
        flexDirection: 'column',
        display: 'flex',

    },
    btnWrap: {
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        width: '100%'
    },
    btn: {
        margin: '5px',
        width: '80px',
        borderRadius: '5px',
        border: '1px solid black',
    },
    img: {
        maxWidth: '100%',
        maxHeight:'fit-content',
        boxShadow: '0 0 5px 0px #000000ce',
        borderRadius: '5px',
    },
    homecontainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',

    },
    header: {
        fontFamily: 'Justink',
        fontSize: '40px',
        textShadow: '0px 0px 5px white',
        marginBottom: '1%',
    },
    testimonial: {
        display: 'flex',
        alignItems: 'flex-end',
        flexDirection: 'column',
        width: '100%',
        margin: '2% auto',
    }

}

    const [slide, setImage] = useState(0)

    const handleIncrement = () => {
        if (slide === 3) {
            setImage(0)
        } else {
            setImage(slide + 1)
        }
    }

    const handleDecrement = () => {
        if (slide === 0) {
            setImage(3)
        } else {
            setImage(slide - 1)
        }
    }

    console.log(testimonials[1].username);

    return (
        <div style={styles.homecontainer}>
            <div style={styles.header}>Choose from a variety of styles!</div>
            <div style={styles.container}>
                <img src={`/images/slides/slide${slide}.png`} style={styles.img} alt={`Preview ${slide}`} />
                    <div style={styles.testimonial}>
                        <h2>"{testimonials[slide].testimonial}"</h2>
                        <h2>- {testimonials[slide].username}</h2>
                    </div>
                <div style={styles.btnWrap}>
                    <button onClick={handleDecrement} style={styles.btn}>Previous</button>
                    <button onClick={handleIncrement} style={styles.btn}>Next</button>
                </div>

            </div>
        </div>
    )
}
//{`../../assets/images/slide${img}.png`}
export default Slideshow