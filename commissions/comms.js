const COMMS_DIV = document.getElementById("comms")

fetch("comms.json")
    .then(response => response.json())
    .then(data => {
        for(const row of data) {
            let div = document.createElement("div")
                div.className = "commrow"

                let images = document.createElement("div")
                    images.className = "imagerow"
                    for(const image of row.images) {
                        let img = document.createElement("img")
                            img.src = "img/" + image

                        images.append(img)
                    } 
                div.append(images)

                let caption = document.createElement("div")
                    caption.className = "caption"

                    let p = document.createElement("p")
                        p.innerText = `${row.label} - ${row.price}`

                    caption.append(p)
                div.append(caption)

            COMMS_DIV.append(div)
            COMMS_DIV.append(document.createElement("br"))
        }
    })