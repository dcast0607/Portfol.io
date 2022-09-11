import Footer from './Footer'

const styles = {
    container: {
        backgroundColor: '#252525',
        width: '75%',
        padding: '20px 5px',
    },
    content: {
        height: '95%',
        marginBottom: '30px'
    },
};

const Content = (params) => {
    return (
        <div style={styles.container}>
            <div style={styles.content}>{params.content}</div>
            <Footer userData={params.userData}/>
        </div>
    )
}

export default Content