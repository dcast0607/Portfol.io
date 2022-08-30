import React, { useState } from "react";

function Slideshow() {
const styles = {
    container: {
        width: '40%',
        height: '300px',
        margin: '5% 30%'
    },
    btnWrap: {
        position: 'relative',
        top: '60%',
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%'
    },
    btn: {
        border: 'none',
    },
    img: {
        maxWidth: '100%',
        maxHeight:'fit-content',
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

    return (
        <div style={styles.container}>
            <div style={styles.btnWrap}>
                <button onClick={handleDecrement} style={styles.btn}>down</button>
                <button onClick={handleIncrement} style={styles.btn}>up</button>
            </div>
            <img src={`/images/slide${slide}.png`} style={styles.img} alt={`Preview ${slide}`} />

        </div>
    )
}
//{`../../assets/images/slide${img}.png`}
export default Slideshow