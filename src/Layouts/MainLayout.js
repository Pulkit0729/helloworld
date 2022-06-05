import React,{useState} from 'react';
import Navbar from '../Components/Mobile/Navbars/Navbar';
import Sidebar from '../Components/Mobile/SideBar';
export default function MainLayout({ children }) {
    const [showSideMenu, setDisplay] = useState(false); // display profile menu

    const toggleSideMenu = () => {
        showSideMenu ? setDisplay(false) : setDisplay(true);
    }
    return (
        <React.Fragment>
            <Sidebar display={showSideMenu} menuCallback={toggleSideMenu}></Sidebar>
            <Navbar menuCallback={toggleSideMenu}></Navbar>
            {children}
        </React.Fragment>
    )
}
