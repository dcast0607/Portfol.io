const Home = (params) => {
    const userData = params.userData

    return (
        <div className="aboutme">
    <h1>Hello! <br />
        <span>I'm {userData.name}</span></h1>

    <p> And this is my professional portfolio.  
    </p>
    
        
    <div className="image">
        <img src={userData.portrait} alt="homepagepicture" className="animation" />
    </div>
    </div>
    );
}