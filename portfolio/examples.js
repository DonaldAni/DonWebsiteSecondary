const CAROUSEL = document.getElementById("carousel")
const BUTTON_LEFT = document.getElementById("leftbutton")
const BUTTON_RIGHT = document.getElementById("rightbutton")
const CAPTION = document.getElementById("caption")

function clearcarousel() {
    CAROUSEL.replaceChildren()
}

function loadcarouselentry(entry) {
    switch(entry.type) {
        case "video":
            let video = document.createElement("video")
                video.controls = true

                let source = document.createElement("source")
                    source.src = entry.src

                video.append(source)
            
            video.load()

            CAROUSEL.append(video)
        break
        case "img":
            let img = document.createElement("img")
                img.src = entry.src

            CAROUSEL.append(img)
        break
    }

    CAPTION.innerText = entry.caption
}

let curidx = 0
fetch("examples.json")
    .then(res => res.json())
    .then(data => {
        function changeidxby(amt) {
            curidx += amt

            if(curidx < 0) {
                curidx = data.length - 1
            } else if(curidx >= data.length) {
                curidx = 0
            }
        }
        function change(amt) {
            changeidxby(amt)
            clearcarousel()
            loadcarouselentry(data[curidx])
        }

        BUTTON_LEFT.addEventListener("click", function() {
            change(-1)
        })
        BUTTON_RIGHT.addEventListener("click", function() {
            change(1)
        })
        change(0)
    })

