 //create a project object and map over it instead of repeating the same code 
const Project = (params) => {
    
const styles = {
    projects: {
        display: 'flex',
        flexDirection: 'column',
        marginTop: '180px',
        marginBottom: '150px'
    }, 
    flex: {
        display: 'flex',
    },
    fit: {
        height: '0',
        maxHeight: 'fit-content',
    },
    img: {
        maxWidth: '80%',
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
        marginTop: '10em',
        fontWeight: '600',
        padding: '0',
    },
};

const projects = params.userData.projects

if (projects.length === 0) {
    return (
        <div>
            <header>
                
            </header>
            <p style={styles.h2}>CURRENTLY NO PROJECTS</p>
        </div>
    )
}

    return (
    <div>
        <header>
            
        </header>
        <div style={styles.projects}>
        {params.userData.projects.map((project) => (
                <div>map projects here</div>
            ))}
            <div style={styles.flex}>
                <div className="project-container">
                    <a href="https://github.com/cartaud/mvcTechBlog" target="_blank" rel="noreferrer" style={styles.fit}>
                    <img src={''}  alt="Tech Blog" style={styles.img}/>
                    </a>
                    <div style={styles.title}>
                        <h5 style={styles.header}>Tech Blog</h5>
                        <h6 style={styles.header}>MVC</h6>
                    </div>
                </div>
                <div className="project-container">
                    <a href="https://github.com/cartaud/E-CommerceBackEnd" target="_blank" rel="noreferrer" style={styles.fit}>
                    <img src={''}  alt="E-Commerce" style={styles.img}/>
                    </a>
                    <div style={styles.title}>
                        <h5 style={styles.header}>E-Commerce</h5>
                        <h6 style={styles.header}>ORM</h6>
                    </div>
                </div>
                <div className="project-container">
                    <a href="https://github.com/cartaud/expressNoteTaker" target="_blank" rel="noreferrer" style={styles.fit}>
                    <img src={''}  alt="Note Taker" style={styles.img}/>
                    </a>
                    <div style={styles.title}>
                        <h5 style={styles.header}>Note Taker</h5>
                        <h6 style={styles.header}>Express.JS</h6>
                    </div>
                </div>
            </div>

            <div style={styles.flex}>
                <div className="project-container">
                    <a href="https://github.com/cartaud/employeeTracker" target="_blank" rel="noreferrer" style={styles.fit}>
                    <img src={''}  alt="Employee Tracker" style={styles.img}/>
                    </a>
                    <div style={styles.title}>
                        <h5 style={styles.header}>Employee Tracker</h5>
                        <h6 style={styles.header}>SQL</h6>
                    </div>
                </div>
                <div className="project-container">
                    <a href="https://cartaud.github.io/etch-a-sketch/" target="_blank" rel="noreferrer" style={styles.fit}>
                    <img src={''}  alt="Etch-A-Sketch" style={styles.img}/>
                    </a>
                    <div style={styles.title}>
                        <h5 style={styles.header}>Etch-A-Sketch</h5>
                        <h6 style={styles.header}>Javascript</h6>
                    </div>
                </div>
                <div className="project-container">
                    <a href="https://github.com/cartaud/vinylMusicShop" target="_blank" rel="noreferrer" style={styles.fit}>
                    <img src={''}  alt="Music Store" style={styles.img}/>
                    </a>
                    <div style={styles.title}>
                        <h5 style={styles.header}>Music Store</h5>
                        <h6 style={styles.header}>Fullstack</h6>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Project