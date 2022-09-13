const Footer = (params) => {
    const userData = params.userData
    const styles = {
        container: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        },
        footer: {
            color: 'white',
            letterSpacing: '.75px'
        }
    }


    return (
        <div style={styles.container}>
            <p style={styles.footer}>Questions? Comments? Email me at {userData.contactEmail}</p>
        </div>
    )
}

export default Footer