const BUTTONS = {
    "Home": "/home",
    "Commissions": "/commissions",
    "FAQ": "../FAQ/",
    "Portfolio": "/portfolio"
}

let style = document.createElement("link")
    style.rel = "stylesheet"
    style.href = "/shared/css/topbar.css"

document.head.append(style)

let topbar = document.createElement("div")
    topbar.id = "topbar"

    let buttons = document.createElement("div")
        buttons.id = "topbar-buttons"

        let didfirst = false
        for(const key of Object.keys(BUTTONS)) {
            let a = document.createElement("a")
                a.href = BUTTONS[key]
                a.className = "topbar-button"
                a.innerHTML = `<p>${key}</p>`

            if(!didfirst) {
                didfirst = true
                a.style.borderLeft = "6px solid #3b2c55"
            }

            buttons.append(a)
        }
    topbar.append(buttons)

    let logo = document.createElement("img")
        logo.src = "/shared/img/logosmall.png"
        logo.id = "topbar-logo"

    topbar.append(logo)

let pad = document.createElement("div")
    pad.id = "topbar-padding"

document.body.prepend(pad)
document.body.prepend(topbar)