function getReversedColor(hexColor) {
    if (typeof hexColor !== "string") {
        throw new Error("Incorrect type (not a string)")
    }

    let c = hexColor.split("")

    if (c.length > 6) {
        throw new Error("Incorrect string length")
    }

    while (c.length < 6) {
        c.unshift("0")
    }

    for (let char of c) {
        if (isNaN(parseInt(char, 16))) {
            throw new Error(`Non-hex character detected: '${char}'`)
        }
    }

    let complementArr = c.map(char => {
        let val = parseInt(char, 16)
        return (15 - val).toString(16).toUpperCase()
    })

    return "#" + complementArr.join("")
}
