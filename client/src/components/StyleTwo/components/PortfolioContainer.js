import Header from './Header'
import Content from './Content'
import Body from './Body'
import Project from './Project'
import { useState } from 'react'


const PortfolioContainer = (params) => {
const styles = {
    container: {
        display: 'flex',
        height: '100%',
        
    },
    width: {
        width: '215%'
    }
};



    const [body, setBody] = useState(<Body userData={params.userData}/>);
    const [style, setStyle] = useState({
        about: {
            color: '#a8a603'
        },
    })
    
    const loadAbout = () => {
        setBody(<Body userData={params.userData}/>)
        setStyle({
            about: {
                color: '#a8a603'
            },
        })
    }

    const loadProjects = () => {
        setBody(<Project userData={params.userData}/>)
        setStyle({
            projects: {
                color: '#a8a603'
            },
        })
    }

    
    return (
        <div style={styles.width}>
        <div style={styles.container}>
            <Header loadAbout={loadAbout} loadProjects={loadProjects} style={style} userData={params.userData}/>
            <Content content={body} userData={params.userData}/>
        </div>
        </div>
    )
}

export default PortfolioContainer