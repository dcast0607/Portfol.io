const Navigation = (props) => {

    const styles = {
    container: {
        display: 'flex',
        width: '84%',
        margin: 'auto',
        borderRadius: '1px',
        padding: '10px',
        marginBottom: '0',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    btn: {
        textDecoration: 'none',
        color: 'white',
        fontSize: '20px',
        width: 'fit-content',
        border: 'none',
        letterSpacing: '.5px',
        backgroundColor: '#202020',
    }
};


    
    return (
        <div style={styles.container}>
            <button onClick={props.loadAbout} style={{...styles.btn, ...props.style.about}}>about me</button>
            <button onClick={props.loadProjects} style={{...styles.btn, ...props.style.projects}}>projects</button>
            <button onClick={props.loadResume} style={{...styles.btn, ...props.style.resume}}>resume</button>    
            <br /><br />
        </div>
    )
}

export default Navigation