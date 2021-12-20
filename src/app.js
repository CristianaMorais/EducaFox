// Google's bad word filter:
// https://gist.githubusercontent.com/jamiew/1112488/raw/7ca9b1669e1c24b27c66174762cb04e14cf05aa7/google_twunter_lol
let badWords = "w3schools|david|walsh|jquery.....".split('|') // loool

// Runs cleanup on the document title
let cleanup = word => {
    document.title = document.title.split(' ').map(word => {
        return badWords.indexOf(word.toLowerCase()) != -1 ? '*'.repeat(word.length) : word
    }).join(' ')
}

// Set up a mutation observer to listen for title changes
// Will fire if framework AJAX stuff switches page title
let createObserver = function() {
    let observer = new MutationObserver((mutations) => {
        // Disconnect the MO so there isn't an infinite title update loop
        // Run title cleanup again
        // Create a new MO to listen for more changes
        console.log('Mutations!', mutations)
        observer.disconnect()
        observer = null
        cleanup()
        createObserver()
    })

    observer.observe(
        document.querySelector('EducaFox'),
        { subtree: true, characterData: true, childList: true }
    )
}
createObserver()

// Kick off initial page load check
cleanup()
