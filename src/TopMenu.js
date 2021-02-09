import './MenuStyle.css'

function TopMenu() {
    return (
        <div className="navbar">
            <ul className="NavBarLinks">
                
                <a className="NavBarItems" href="#home">Home</a>

                <a className="NavBarItems" href="#work-tab">Work</a>
              
                <a className="NavBarItems" href="#education">Education</a>
        
                <a className="NavBarItems" href="#about-me">About</a>

                <a className="NavBarItems" href="#contact">Contact</a>

            </ul>
        </div>
    )
}

export default TopMenu;