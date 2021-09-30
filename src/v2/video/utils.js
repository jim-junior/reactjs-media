

export function EvaluateTime(d) {
    if (isNaN(d)) {
        return '00:00'
    }
    let hours = d / 3600;
    let hh = d % 3600;
    let time = hh / 60;
    let h = Math.floor(hours)
    let f = Math.floor(time)
    let seconds = d % 60
    seconds = Math.floor(seconds)
    if (seconds < 10) {
        seconds = `0${seconds}`
    }
    if (f < 10) {
        f = `0${f}`
    }
    if (h <= 0) {
        h = ``
    } else if (h < 10 && h > 0) {
        h = `0${h}:`
    }

    return `${h}${f}:${seconds}`
}
