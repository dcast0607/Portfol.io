const styles = {
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    footer: {
        fontFamily: 'Poppins, sans-serif',
        fontSize: '16px',
        fontWeight: 'bold',
        color: 'white',
        letterSpacing: '.75px'
    },
    link: {
        color: '#a8a603'
    }
}

// TO DO: add email value from user data to be integrated in footer
const Footer = () => {
    return (
        <div style={styles.container}>
            <p style={styles.footer}>Questions? Reach me via Email <a style={styles.link} href="mailto: USERDATA.EMAIL">here!</a></p>
        </div>
    )
}

export default Footer