import Header from './Header'
import Content from './Content'
import Body from './Body'
import Project from './Project'
import Resume from './Resume'
import { useState } from 'react'

const styles = {
    container: {
        display: 'flex',
        height: '100%',
    },
};


const PortfolioContainer = (params) => {
    const [body, setBody] = useState(<Body />);
    const [style, setStyle] = useState({
        about: {
            color: '#f19b2c'
        },
    })
    
    const loadAbout = () => {
        setBody(<Body />)
        setStyle({
            about: {
                color: '#f19b2c'
            },
        })
    }

    const loadProjects = () => {
        setBody(<Project />)
        setStyle({
            projects: {
                color: '#f19b2c'
            },
        })
    }

    const loadResume = () => {
        setBody(<Resume />)
        setStyle({
            resume: {
                color: '#f19b2c'
            }
        })
    }
    
    return (
        <div style={styles.container}>
            <Header loadAbout={loadAbout} loadProjects={loadProjects} loadResume={loadResume} style={style} params={params}/>
            <Content content={body} params={params}/>
        </div>
    )
}

export default PortfolioContainer