let details = navigator.userAgent
let regexp = /android|iphone|kindle|ipad/i

let isMobile = regexp.test(details)
let path = window.location.pathname;
let page = path.split("/");

if (isMobile) {
    if (page.includes("countries")) {
        window.location.href = "../mobile.html"
    } else if (!page.includes("countries") && page.includes("pages")) {
        window.location.href = "./mobile.html"
    } else {
        window.location.href = "./pages/mobile.html"
    }
}