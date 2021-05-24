import React from 'react';
import { useHistory } from 'react-router';
import TopBar from '../../components/Topbar';

const LandingPage = (props) => {
    const history = useHistory();

    const goToLoginPage = () => {
        history.replace('/login');
    }

    return(
        <div>
            <TopBar buttonOnClick = { goToLoginPage } >
                Login
            </TopBar>
            <h1 className="px-15" >TaskCo</h1>
        </div>
    )
}

export default LandingPage;