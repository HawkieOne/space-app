export const compareDates = (date1 : Date, date2: Date) => {
    return date1 > date2;
}

export const compareDateToToday = (date : Date) => {
    var today = new Date();
    return today < date;
}