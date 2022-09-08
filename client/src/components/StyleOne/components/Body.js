const Body = (params) => {
    const userData = params.userData
    const styles = {
        container: {
            marginTop: '20px',
            display: 'flex',
            gap: '20px',
        },
        portrait: {
            maxWidth: '100%',
            maxHeight:'fit-content',
        },
        bio: {
            color: 'white',
            fontFamily: 'Raleway' || 'sans-serif',
            lineHeight: '25px',
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
        }
    }
    const uppercaseName = userData.name.toUpperCase()
    return (
        <div>
            <header>
                <h1 style={styles.h1}>MY NAME IS {uppercaseName}</h1>
                <h2 style={styles.h2}>DEDICATED TO WRITING CLEAN CODE</h2>
            </header>
            <div style={styles.container}>
                <div>
                    <img alt="portrait" src={userData.portrait} style={styles.portrait}/>
                </div>
                <div>
                    <p style={styles.bio}>
                        {userData.bio}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Body