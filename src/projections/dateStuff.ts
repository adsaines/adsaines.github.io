
/**
 * @param date string
 * @returns date as a MM-YYYY string
 */
export const dateToMMYYYY = (date: string) => {
    const dateObj = new Date(date);

    const month = dateObj.getMonth() +1;
    const year = dateObj.getFullYear();

    return `${month < 10 ? '0' : ''}${month}-${year}`;
}

/**
 * Returns a set of dates formatted as MM-YYYY. If the end date is not provided it return "Present" instead of a date.
 * @param start string
 * @param end string
 * @returns MM-YYYY - MM-YYYY
 */
export const dateRangeToMonthAndYearRange = (start: string, end?: string) => {
    const startDate = dateToMMYYYY(start);
    const endDate = end ? dateToMMYYYY(end) : 'Present'

    return `${startDate} - ${endDate}`
}

/**
 * Returns the years of two dates. If the end date is not defined it returns only the year of start.
 * @param start string
 * @param end string
 * @returns YYYY - YYYY
 */
export const datesToYearRange = (start: string, end?: string) => {
    const startDate = new Date(start).getFullYear();
    const endDate = end ? new Date(end).getFullYear() : ''
    const dash = endDate !== '' ? ' - ' : ''

    return startDate + dash + endDate
}