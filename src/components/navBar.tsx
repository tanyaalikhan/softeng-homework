import './navBar.css'

function navBar(){
    return(
        <div className={"NavBarColor"}>
            <div>
                <a href={"/"}>Home</a>
            </div>
            <div>
                <a href={"/Intro"}>Hobbies</a>
            </div>
            <div>
                <a href={"/Table"}>Table</a>
            </div>
            <div>
                <a href={"/Form"}>Form</a>
            </div>
            <div>
                <a href={"/List"}>List</a>
            </div>
        </div>
    )
}

export default navBar;