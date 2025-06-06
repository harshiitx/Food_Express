const PathError = () => {
    return (
        <main id="PathError-Container" role="main" aria-label="Page not found error">
            <h1 role="heading" aria-level="1" aria-live="assertive">
                Looks like You have forgotten your path...
            </h1>
            <p role="text" aria-describedby="error-description">
                We do not serve food on this route, Enter a Valid URL and try again 
            </p>
            <div id="error-description" className="sr-only">
                This is a 404 error page indicating the requested page was not found
            </div>
        </main>
    )
}
export default PathError