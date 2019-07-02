export const truncateTitle = (title = '') => {
    if(title.length > 30) {
        return title.substring(0, 18).concat('...')
    }
    return title
}

export const truncateDescription = (desc = '') => {
    if(desc.length > 100) {
        return desc.substring(0, 76).concat('...')
    }
    return desc
}