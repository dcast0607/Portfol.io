import Navigation from './Navigation'

const styles = {
    header: {
        backgroundColor: '#202020',
        width: '25%',
        padding: '20px 10px',
    },   
    title: {
        color: '#f19b2c',
        fontFamily: 'Edu VIC WA NT Beginner, cursive',
        fontSize: '35px',
        margin: '0',
        lineHeight: '1em',
    },
    subTitle: {
        color: 'white',
    },
};

const Header = (params) => {
    const userData = params.userData
    return (
        //need to add a portfolio title to the list of data to collect from user
        //also for navigation, we need to add a [param] that will be passed on telling code what sections to load
        //instead of having loadAbout, loadProjects, ect.. we will just have one param loadSections={props.sections}
        <div style={styles.header} >
            <header>
                <h3 style={styles.title}>{userData.name}</h3>
                <div style={styles.subTitle}>{userData.title}</div>
            </header>
            <Navigation loadAbout={params.loadAbout} loadProjects={params.loadProjects} loadResume={params.loadResume} userData={userData} style={params.style}/>
        </div>
    )
}

export default Header