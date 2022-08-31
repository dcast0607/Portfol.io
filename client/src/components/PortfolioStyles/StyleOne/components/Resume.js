const Resume = () => {
    const styles = {
        resume: {
            'max-width': '90%',
            'max-height': 'fit-content',
            'margin-top': '20px'
        },
    }
    return (
        <div>
            <header>
                <h1 className="orange">RESUME</h1>
                <h2>CLICK THE IMAGE TO DOWNLOAD PDF</h2>
            </header>
            <div>
                <a href="https://drive.google.com/file/d/1n5-wPxqw82s8pUMNHW0HL1LJuLcvy4Tn/view?usp=sharing" target="_blank" rel="noreferrer">
                    <img src={require('../images/resumePreview.png')} alt="Resume" style={styles.resume}/>
                </a>
            </div>
        </div>
    )
}

export default Resume