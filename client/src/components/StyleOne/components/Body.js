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
        fontFamily: 'Raleway' || 'sans-serif',
        lineHeight: '25px',
    }
}

const Body = (params) => {
    const userData = params.userData
    return (
        <div>
            <header>
                <h1 className="orange">MY NAME IS {userData.name}</h1>
                <h2>DEDICATED TO WRITING CLEAN CODE</h2>
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