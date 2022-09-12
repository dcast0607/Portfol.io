import React from 'react';
import dog from '../img/doggy.jpg';
import theater from '../img/movie.jpg';
import pencil from '../img/pencil.jpg';
import sun from '../img/sunny.jpg';



export default function Home(params) {
    const projects = params.userData.projects

    console.log("how many projects", projects);

    const styles = {
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
        },
    }

    if (projects.length === 0) {
        return (
            <div>
                <header>
                    <h1 style={styles.h1}>MY PROJECTS</h1>
                    <h2 style={styles.h2}>CURRENTLY NO PROJECTS</h2>
                </header>
            </div>
        )
    }

    return (
        <div>
        <div className='pictures'>
            <div className='projects containers small'>
                <a href='https://dcast0607.github.io/Restaurant-Picker-Project/'>
                    <img src={dog} alt='puppy sitting in flower field'/>
                    <div> W.O.O.F. </div>
                </a>
                <a href="https://github.com/yippeejimmee/Restaurant-Picker-Project">W.O.O.F. Repository</a>
            </div>
            <div className='projects containers small'>
                <a href='https://moviemates-deployer.herokuapp.com/'>
                    <img src={theater} alt='movie theater seating'/>
                    <div> Movie Mates</div>
                </a>
                <a href="https://github.com/yippeejimmee/movie_mates">Movie Mates Repository</a>
            </div>
            <div className='projects containers small'>
                <a href='https://jimmy-takes-notes.herokuapp.com/'>
                    <img src={pencil} alt='pencil and paper'/>
                    <div> Note Taker</div>
                </a>
                <a href="https://github.com/yippeejimmee/Note-Taker/tree/main/Develop">Note Taker Repository</a>
            </div>
            <div className='projects containers small'>
                <a href='https://yippeejimmee.github.io/Weather-Dashboard/'>
                    <img src={sun} alt='sunny day'/>
                    <div> Weather App</div>
                </a>
                <a href="https://github.com/yippeejimmee/Weather-Dashboard">Weather App Repository</a>
            </div>
        </div>
        <div className='contact'>
                <p> Feel free to check out some of my work!</p>
        </div>
    </div>    
    )
}