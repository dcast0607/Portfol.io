import Footer from './Footer'

const styles = {
    container: {
        backgroundColor: '#3d784a',
        width: '100%',
        
    },
    content: {
        height: '70%',
        marginBottom: '60px'
    },
};

const Content = (params) => {
    return (
        <div style={styles.container}>
            <div style={styles.content}>{params.content}</div>
            <Footer userData={params.userData} />
        </div>
    )
}

export default Content