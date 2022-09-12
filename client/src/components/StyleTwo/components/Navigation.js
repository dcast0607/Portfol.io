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
        backgroundColor: '#3d784a',
    }
};

return (
        <div style={styles.container}>
            <button onClick={props.loadAbout} style={{...styles.btn, ...props.style.about}}>About Me</button>
            <button onClick={props.loadProjects} style={{...styles.btn, ...props.style.projects}}>Projects</button>
            <a href={`${props.userData.resumeUrl}`} target="_blank" rel="noreferrer" style={styles.btn}>Resume</a>    
            <br /><br />
        </div>
    )
}

export default Navigation