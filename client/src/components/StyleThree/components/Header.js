const styles = {
    header: {
        padding: '0 0 5% 5%'
    }
};

// TODO: header for name and title
const Header = (params) => {
    const userData = params.userData;
    return (
        <div>
           <header>
            <h3>{userData.name}</h3>
            <div>{userData.title}</div> 
           </header>
            
        </div>
    )
}

export default Header;