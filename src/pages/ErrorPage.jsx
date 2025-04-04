import React from 'react';
import { useRouteError } from "react-router-dom";
import NavBar from "../components/NavBar";

const ErrorPage = () => {


    const error = useRouteError();
    return (
        <>
        <header>
        <NavBar />
        </header>
        <div>
            <h1>Error!</h1>
            <h2>Oops! Sorry, an error occurred.</h2>
            <p>data:
                <i>{error.data}</i>
            </p>
            <p>status:
                <i>{error.status}</i>
            </p>
            <p>statusText:
                <i>{error.statusText}</i>
            </p>
            <p>message:
                <i>{error.message}</i>
            </p>
        </div>
        </>
    );
};

export default ErrorPage;