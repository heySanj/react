import MainNavigation from "../components/MainNavigation";

const ErrorPage = () => {
    return <>
        <MainNavigation/>
        <main>
            <h1>😥 An error has occurred.</h1>
            <p>Could not find the page you were looking for.</p>
        </main>
    </>;
}
 
export default ErrorPage;