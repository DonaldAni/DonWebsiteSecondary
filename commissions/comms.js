const COMMS_DIV = document.getElementById("comms")

let BLANKER = undefined
let PREVIEW_IMG = undefined

function makepreview(imgpath) {
    if(document.getElementById("blanker")) {
        return
    }

    let madeblanker = document.createElement("div")
        madeblanker.id = "blanker"

        let madeimg = document.createElement("img")
            madeimg.id = "preview"
            madeimg.src = imgpath

            madeimg.addEventListener("click", function() {
                window.open(imgpath, '_blank');
            })

        madeblanker.append(madeimg)

    madeblanker.addEventListener("click", function() {
        BLANKER.remove()
        PREVIEW_IMG.remove()
    })

    BLANKER = madeblanker
    PREVIEW_IMG = madeimg

    document.body.append(BLANKER)
}

fetch("comms.json")
    .then(response => response.json())
    .then(data => {
        for(const row of data) {
            let div = document.createElement("div")
                div.className = "commrow"

                let images = document.createElement("div")
                    images.className = "imagerow"
                    for(const image of row.images) {
                        let container = document.createElement("div")
                            container.className = "comm-img-container"

                            let img = document.createElement("img")
                                img.className = "comm-img"
                                img.src = "img/" + image

                                img.addEventListener("click", function() {
                                    makepreview("img/" + image)
                                })
                            container.append(img)

                        images.append(container)
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