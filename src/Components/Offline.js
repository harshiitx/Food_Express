const Offline = () => {
    return (
        <main id="Offline-Container" role="main" aria-label="Offline status">
            <h1 role="heading" aria-level="1" aria-live="assertive">
                Looks like You are offline...
            </h1>
            <p role="text" aria-describedby="offline-description">
                Check your internet connection and try again 
            </p>
            <div id="offline-description" className="sr-only">
                The application is currently offline and requires an internet connection to function
            </div>
        </main>
    )
}
export default Offline