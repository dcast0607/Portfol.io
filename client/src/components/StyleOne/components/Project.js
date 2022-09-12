const Project = (params) => { //create a project object and map over it instead of repeating the same code 
    //need to map over params.projects 

    const styles = {
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
            border: '2px #f19b2c solid',
            transition: 'all 0.5s ease-in-out',
        },
        title: {
            position: 'relative',
            bottom: '4vw',
            maxWidth: 'fit-content',
            margin: '0',
            backgroundColor: '#f19b2c',
            textDecoration: 'none',
            color: 'white',
            padding: '1% 2%',
            zIndex: '1',
        },
        header: {
            margin: '0',
            fontSize: '1.5vw'
        },
        h1: {
            color: '#f19b2c',
            fontSize: '5vw',
            fontWeight: '600',
            margin: '0',
            lineHeight: '1em',
        },
        h2: {
            color: 'white',
            fontSize: '3vw',
            marginBottom: '0',
            fontWeight: '600',
            padding: '0',
        },
    };
    
    const projects = params.userData.projects
    if (projects.length === 0) {
        return (
            <div>
                <header>
                    <h1 style={styles.h1}>MY PROJECTS</h1>
                    <h2 style={styles.h2}>CURRENTLY NO PROJECTS</h2>
                </header>
            </div>
        )
    }

    return (
    <div>
        <header>
            <h1 style={styles.h1}>MY PROJECTS</h1>
            <h2 style={styles.h2}>CLICK ON THE PROJECT TO VIEW</h2>
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