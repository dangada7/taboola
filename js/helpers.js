
// formatDate
export const formatDate = (date) => {
    return `${addZero(date.getDate())}/${addZero(date.getMonth() + 1)}/${date.getFullYear()}`
}


// addZero
export const addZero = (num) => {
    if (num < 10) {
        return "0" + num
    } else {
        return num
    }
}