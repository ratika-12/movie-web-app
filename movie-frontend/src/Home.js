import React, {useEffect} from "react";
import Form from "./SearchForm";
import Movies from "./Movies";
import {withRouter} from "react-router-dom";

const Home = (props) => {

    useEffect(() => {
        const userData = localStorage.getItem('userData') ? JSON.parse(decodeURIComponent(atob(localStorage.getItem('userData')))) : null;
        if (!userData) {
            props.history.push('/register')
        }
    }, [])

    return (
        <main>
            <Form/>
            <Movies/>
        </main>
    );
};

export default withRouter(Home);
