if ('serviceWorker' in navigator) {
    const showSuccessMessage = () => console.log("[Service Worker] Registered");
    const showErrorMessage = () => console.log("[Service Worker] Registrarion failed");

    navigator.serviceWorker
        .register("sw.js")
        .then(showSuccessMessage)
        .catch(showErrorMessage);
}