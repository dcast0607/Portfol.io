 //create a project object and map over it instead of repeating the same code 
const Project = (params) => {
    
const styles = {
    container: {
        marginTop: '10%',
    },
    projects: {
        display: 'flex',
        gap: '5%',
        flexWrap: 'wrap',
        width: '100%',
        marginLeft: '40px',
        marginTop: '20px',
    }, 
    projectContainer: {
        width: '25%',
    },
    flex: {
        display: 'flex',
    },
    fit: {
        height: '0',
        maxHeight: 'fit-content',
        maxWidth: 'fit-content'
    },
    img: {
        maxWidth: '100%',
        maxHeight: 'fit-content',
        border: '2px #f7f779 solid',
        transition: 'all 0.5s ease-in-out',
    },
    title: {
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        bottom: '25%',
        width: 'fit-content',
        backgroundColor: '#f7f779',
        textDecoration: 'none',
        color: '#3d784a',
        padding: '1% 2%',
        zIndex: '1',
    },
    header: {
        margin: '0',
    },
    h2: {
        color: '#f7f779',
        fontSize: '60px',
        marginTop: '2em',
        fontWeight: '600',
        padding: '0',
    },
};

const projects = params.userData.projects

if (projects.length === 0) {
    return (
        <header>
            <h2 style={styles.h2}>CURRENTLY NO PROJECTS</h2>
        </header>
    )
}

    return (
    <div style={styles.container}>
        <header>
            <h2 style={styles.h2}>My Projects</h2>
        </header>
        <div style={styles.projects}>
            {projects.map((project) => (
                <div style={styles.projectContainer} key={project.projectName}>
                    <a href={`${project.projectUrl}`} target="_blank" rel="noreferrer" style={styles.fit}>
                        <img src={`/images/projectPreviews/${project.projectPreview}.png`}  alt="Project preview" style={styles.img}/>
                    </a>
                    <div style={styles.title}>
                        <h5 style={styles.header}>{project.projectName}</h5>
                    </div>
                </div>
            ))}
        </div>     
    </div>
    )
}

export default Project