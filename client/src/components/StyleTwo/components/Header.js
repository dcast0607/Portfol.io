import Navigation from './Navigation';


const styles = {
    header: {
        backgroundColor: '#3d784a',
        position: 'absolute',
        width: '90%',
        padding: '0',
    },   
    title: {
        color: 'white',
        fontFamily: 'Roboto Condensed, sans-serif',
        fontSize: '35px',
        margin: '0',
        lineHeight: '1em',
    },
    subTitle: {
        color: '#f7f779',
        fontWeight: 'bold',
        fontFamily: 'Poppins, sans-serif',
        lineHeight: '2em'
    },
};

const Header = (params) => {
    const userData = params.userData;
    return (
        <div style={styles.header}>
            <header>
                <h3 style={styles.title}>{userData.name}</h3>
                <div style={styles.subTitle}>{userData.title}</div>
            </header>
            <Navigation loadAbout={params.loadAbout} loadProjects={params.loadProjects} loadResume={params.loadResume} style={params.style}/>
            
        </div>
    )
}

export default Header