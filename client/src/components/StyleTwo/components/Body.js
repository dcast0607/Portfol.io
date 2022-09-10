const Body = (params) => {
    const userData = params.userData

    const styles = {
        container: {
            position: 'relative',
            width: '100vh',
            height: '100vh',
            top: '10em',
            justifyContent: 'center',
            columns: '2'
        },
        portrait: {
            width: '75%',
            height: '75%',
            marginLeft: '40em'

        },
        bio: {
            color: 'white',
            fontFamily: 'Raleway' || 'sans-serif',
            lineHeight: '2em',
            fontSize: '20px',
            marginBottom: '10px',
        },
        biocontainer: {
            width: '170%'
        },
        h1: {
            color: 'white',
            fontSize: '60px',
            margin: '0',
            lineHeight: '1em',
        },
        h2: {
            color: '#f7f779',
            fontSize: '60px',
            marginTop: '0em',
            fontWeight: '600',
            padding: '0',
        }
}


    return (
        <div>
    
            <div style={styles.container}>
                <div style={styles.biocontainer}>
                    <h1 style={styles.h1}>Welcome to my portfolio!&thinsp;</h1>
                    <h2 style={styles.h2}>A bit about me:</h2>
                         
                    <p style={styles.bio}>
                        {userData.bio}
                    </p>
                </div>
                <div>
                    <img alt="profile" src={userData.portrait} style={styles.portrait}/>
                </div>
            </div>
        </div>
    )
}

export default Body