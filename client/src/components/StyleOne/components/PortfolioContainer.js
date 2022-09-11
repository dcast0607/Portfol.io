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
    };

    const [body, setBody] = useState(<Body userData={params.userData}/>);
    const [style, setStyle] = useState({
        about: {
            color: '#f19b2c'
        },
    })
    
    const loadAbout = () => {
        setBody(<Body userData={params.userData}/>)
        setStyle({
            about: {
                color: '#f19b2c'
            },
        })
    }

    const loadProjects = () => {
        setBody(<Project userData={params.userData}/>)
        setStyle({
            projects: {
                color: '#f19b2c'
            },
        })
    }
    
    return (
        <div style={styles.container}>
            <Header loadAbout={loadAbout} loadProjects={loadProjects} style={style} userData={params.userData}/>
            <Content content={body} userData={params.userData}/>
        </div>
    )
}

export default PortfolioContainer