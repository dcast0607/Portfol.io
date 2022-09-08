const Resume = (params) => {
    const userData = params.userData
    const styles = {
        resume: {
            'maxWidth': '90%',
            'maxHeight': 'fit-content',
            'marginTop': '20px'
        },
    }
    //instead of including an image of the resume lets just take the user to the uploaded file 
    //when they click the resume section a tag
    return (
        <div>
            <header>
                <h1 className="orange">RESUME</h1>
                <h2>CLICK THE IMAGE TO DOWNLOAD PDF</h2>
            </header>
            <div>
                <a href="https://drive.google.com/file/d/1n5-wPxqw82s8pUMNHW0HL1LJuLcvy4Tn/view?usp=sharing" target="_blank" rel="noreferrer">
                    <img src={``} alt="Resume preview" style={styles.resume}/>
                </a>
            </div>
        </div>
    )
}

export default Resume