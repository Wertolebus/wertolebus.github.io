function setCookies() {
    if (document.cookie.includes("compatibility=true")) {
        document.cookie = "compatibility=false; SameSite=None"
    }
    else {
        document.cookie = "compatibility=true; SameSite=None"
    }
    let cb = document.querySelector(".compatibility-button")

    if (document.cookie.includes("compatibility=true")) {
        setActiveStyleSheet("compatibility")
    }
    else {
        setActiveStyleSheet("global")
    }
    
    if (cb) {
        if (document.cookie.includes("compatibility=true")) {
            cb.innerText = "Compatibility settings ON"
        }
        else {
            cb.innerText = "Compatibility settings OFF"
        } 
    }
}


let cb = document.querySelector(".compatibility-button")

if (document.cookie.includes("compatibility=true")) {
    setActiveStyleSheet("compatibility")
}
else {
    setActiveStyleSheet("global")
}
if (cb) {
    if (document.cookie.includes("compatibility=true")) {
        cb.innerText = "Compatibility settings ON"
        setActiveStyleSheet("compatibility")
    }
    else {
        cb.innerText = "Compatibility settings OFF"
        setActiveStyleSheet("global")
    }
}

function setActiveStyleSheet(title) {
    var i, a;
    for(i=0; (a = document.getElementsByTagName("link")[i]); i++) {
        if(a.getAttribute("rel").indexOf("style") != -1
            && a.getAttribute("title")) {
            a.disabled = true;
            if(a.getAttribute("title") == title) a.disabled = false;
        }
    }
    
}


if (navigator.userAgent.includes("Chrome")) {
    document.querySelector("#back-button").style.opacity = 0
}
