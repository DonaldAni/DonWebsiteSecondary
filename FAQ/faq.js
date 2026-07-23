const FAQ_DIV = document.getElementById("faq")

fetch("faq.json")
    .then(response => response.json())
    .then(data => {
        console.log(data)
        for(const sequence of data) {
            let div = document.createElement("div")
                div.className = "container"

                let idx = 0
                for(const message of sequence) {
                    let addedicon = false
                    for(const text of message.text) {
                        let msg = document.createElement("div")
                            msg.className = "message"

                            let lefticon = document.createElement("div")
                                lefticon.className = "icon"
                            msg.append(lefticon)

                            let body = document.createElement("div")
                                body.className = message.side == "left" ? "questionmsg" : 'donaldmsg'
                                body.style.width = "80%"

                                body.innerHTML = text
                             msg.append(body)

                            let righticon = document.createElement("div")
                                righticon.className = "icon"
                            msg.append(righticon)

                            if(!addedicon) {
                                addedicon = true
                                if(message.side == "left") {
                                    let icon = document.createElement("img")
                                        icon.src = "img/question guy.gif"
                                    lefticon.append(icon)
                                } else {
                                    let icon = document.createElement("img")
                                        icon.src = "img/darcy guy.gif"
                                    righticon.append(icon)
                                }
                            }

                        div.append(msg)
                    }
                    idx++

                    if(idx != sequence.length) {
                        div.append(document.createElement("hr"))
                    }
                }

            FAQ_DIV.append(div)
            FAQ_DIV.append(document.createElement("br"))
        }
    })