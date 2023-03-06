import { useRouteError } from "react-router-dom";

import MainNavigation from "../components/MainNavigation";
import PageContent from "../components/PageContent";

const ErrorPage = () => {

    // useRouteError will load any Error Responses thrown by our application.
    const error = useRouteError()

    let title = '😥 An error has occurred.'
    let message = "Something went wrong."

    if(error.status === 404){
        title = "404! Not Found!"
        message = "could not find resource or page."
    }
    if(error.status === 500){
        // message = JSON.parse(error.data).message
        message = error.data.message
    }

    return <>
        <MainNavigation/>
        <PageContent title={title}><p>{message}</p></PageContent>
    </>;
}
 
export default ErrorPage;