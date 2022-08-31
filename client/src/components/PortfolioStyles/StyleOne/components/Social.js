const Social = () => {

    const styles = {
        container: {
            color: 'white',
        },
        icons: {
            display: 'flex',
            gap: '5%',
        },
    };

    return (
        <div style={styles.container}>
            <p>SOCIAL</p>
             <div style={styles.icons}>
             <a href="https://www.linkedin.com/in/chadd-artaud/" target="_blank" rel="noreferrer"><i className="fa-brands fa-linkedin"></i></a>
                <a href="https://github.com/cartaud" target="_blank" rel="noreferrer"><i className="fa-brands fa-github"></i></a>
                <a href="https://twitter.com/ArtaudChadd" target="_blank" rel="noreferrer"> <i className="fa-brands fa-twitter-square"></i></a>
                <a href="https://www.facebook.com/chadd.artaud" target="_blank" rel="noreferrer"><i className="fa-brands fa-facebook"></i></a>
                <a href="https://www.instagram.com/chadd_a33/" target="_blank" rel="noreferrer"><i className="fa-brands fa-instagram-square"></i></a>
             </div>
        </div>
    )
}

export default Social