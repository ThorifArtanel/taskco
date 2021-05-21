import React, { useContext, useEffect, useRef, useState } from 'react';
import TopBar from '../Topbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { UserContext } from '../../services/UserContext';
import { LayoutContext } from './layoutContext';
import Sidebar from '../Sidebar';

const DefaultLayout = (props) => {
    const [user, setUser] = useContext(UserContext);
    const userData = user.userData;

    const [layout, setLayout] = useContext(LayoutContext);
    let layoutTemp = layout;
    const [height, setHeight] = useState(0);
    const bar = useRef(null);

    const [width, setWidth] = useState(0);
    
    useEffect(() => {
        setWidth(window.innerWidth);
    }, [])

    useEffect(() => {
        setHeight(bar.current.clientHeight);
        layoutTemp.topBarHeight = height;
        setLayout(layoutTemp);
    }, [height, layoutTemp, setLayout]);

    const showLogout = () => {

    }

    return(
        <div>
            <TopBar buttonAction={ showLogout } ref = { bar }>
                <FontAwesomeIcon icon={ faUserCircle } /> {userData.displayName}
            </TopBar>
            <div
                className="main-container"
                style={{marginTop: height + 'px'}}
            >
                <div className="flex-row justify-start">
                <Sidebar menus={ props.menus }/>
                <div style={{width: (width - (width * 18/100)) + "px"}}>
                    { props.children }
                </div>
            </div>
            </div>
        </div>
    );
}

export default DefaultLayout;