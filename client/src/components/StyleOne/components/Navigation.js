const Navigation = (props) => {
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

    return (
        <div style={styles.container}>
            <button onClick={props.loadAbout} style={{...styles.btn, ...props.style.about}}>ABOUT ME</button>
            <button onClick={props.loadProjects} style={{...styles.btn, ...props.style.projects}}>PROJECTS</button>
            <a href={`${props.userData.resumeUrl}`} target="_blank" rel="noreferrer" style={styles.btn}>RESUME</a>  
            <br /><br />
        </div>
    )
}

export default Navigation