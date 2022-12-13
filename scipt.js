let input = document.getElementById('input')
let btn = document.getElementById('submit')
let replace = document.getElementById('img')

// https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Prince

let generate = () => {
    let qData = input.value;
    // let pass = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qData}`
    fetch(`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qData}`)
        .then((response) => {
            return response
        }).then((data) => {
            replace.setAttribute("src", data.url)
            replace.style.display = "block"
        })
}

btn.addEventListener('click', () => {
    generate()
})

