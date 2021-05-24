import React, { useContext, useEffect, useRef, useState } from 'react';
import TopBar from '../Topbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { UserContext } from '../../services/UserContext';
import { LayoutContext } from './layoutContext';

const DefaultLayout = (props) => {
    const [user, setUser] = useContext(UserContext);
    const userData = user;

    const [layout, setLayout] = useContext(LayoutContext);
    let layoutTemp = layout;
    const [height, setHeight] = useState(0);
    const bar = useRef(null);


    useEffect(() => {
        setHeight(bar.current.clientHeight);
        layoutTemp.topBarHeight = height;
        setLayout(layoutTemp);
    }, [height, layoutTemp, setLayout]);

    const showLogout = () => {

    }

    return(
        <div>
            <TopBar buttonOnClick={ showLogout } ref = { bar }>
                <FontAwesomeIcon icon={ faUserCircle } /> { userData.name || "Name" }
            </TopBar>
            <div
                className="main-container"
                style={{marginTop: height + 'px'}}
            >
                <div className="flex-row justify-start">
                    { props.children }
            </div>
            </div>
        </div>
    );
}

export default DefaultLayout;