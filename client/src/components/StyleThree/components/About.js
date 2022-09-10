const About = (params) => {
    const userData = params.userData;

    return (
        <div className="aboutmebio">
                    <div>
                        <h1>
                            <span>
                            A bit about me:
                            </span>
                        </h1>

                    <p>{userData.bio}</p>
      
            <div className="image">
                <img src={userData.portrait} alt='aboutmepicture' className="animation"/>
            </div>
                </div>
            </div>
    );
}

export default About