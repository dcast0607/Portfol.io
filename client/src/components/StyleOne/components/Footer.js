const styles = {
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    link: {
        color: 'white',
    }
}

const Footer = () => {
    return (
        <div style={styles.container}>
            <a style={styles.link} href="mailto: chadd.artaud@gmail.com">Questions? Send me an email chadd.artaud@gmail.com</a>
        </div>
    )
}

export default Footer