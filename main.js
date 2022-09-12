let delivered = false

const element = document.querySelector('#addition')
        let score = Number(element.textContent)

function alerts() {
    if (!delivered) {

        score += 1

        delivered = true
    } else {
        score -= 1
        delivered = false
    }

    element.textContent = score
}
