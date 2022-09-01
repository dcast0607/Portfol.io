import Navigation from './Navigation'
import Social from './Social'

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

const Header = (props) => {
    const userData = props.params
    return (
        //need to add a portfolio title to the list of data to collect from user
        //also for navigation, we need to add a [param] that will be passed on telling code what sections to load
        //instead of having loadAbout, loadProjects, ect.. we will just have one param loadSections={props.sections}
        <div style={styles.header} >
            <header>
                <h3 style={styles.title}>{userData.name}</h3>
                <div style={styles.subTitle}>{userData.title}</div>
            </header>
            <Navigation loadAbout={props.loadAbout} loadProjects={props.loadProjects} loadResume={props.loadResume} style={props.style}/>
            <Social />
        </div>
    )
}

export default Header