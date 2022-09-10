const Project = (params) => {

    const styles = {
        buttonFont: {
            fontSize: '10px'
        }
    }

    const projects = params.userData.projects

if (projects.length === 0) {
    return (
        <div>
            <header>
                <h2 style={styles.h2}>CURRENTLY NO PROJECTS</h2>
            </header>
        </div>
    )
}
    return (     
    
        <div className='workprojects animation2 fadeInLeft'>
            
        {params.userData.projects.map(project => (
    
    <div className='thumbnail' key={project.id}>
        <img src={project.picture} alt={project.title} />
        <div className="caption">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <p><a href={project.git} className="btn btn-primary" styles={styles.buttonFont} role="button">
                    Github
                <i className="fa-brands fa-github fa-2xl"></i></a>
                <a href={project.demo} className="btn btn-default" styles={styles.buttonFont} role="button">
                    Demo  
                </a>
            </p>
        </div>
    </div>
        ))}
</div>

    )
}
export default Project;