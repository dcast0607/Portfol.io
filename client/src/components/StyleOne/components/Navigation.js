const styles = {
    container: {
        marginTop: '50px',
        display: 'flex',
        flexDirection: 'column',
        gap: '8px',
        marginBottom: '10px',
    },
    btn: {
        textDecoration: 'none',
        color: 'white',
        fontSize: '20px',
        width: 'fit-content',
        border: 'none',
        backgroundColor: '#202020',
    }
};

const Navigation = (props) => {
    
    return (
        <div style={styles.container}>
            <button onClick={props.loadAbout} style={{...styles.btn, ...props.style.about}}>ABOUT ME</button>
            <button onClick={props.loadProjects} style={{...styles.btn, ...props.style.projects}}>PROJECTS</button>
            <button onClick={props.loadResume} style={{...styles.btn, ...props.style.resume}}>RESUME</button>    
            <br /><br />
        </div>
    )
}

export default Navigation