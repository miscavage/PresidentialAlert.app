//Helpers
const Constants = require('./constants');

/**
 * @description Get current time in format 'hour:minute'
 * @function getTime
 * @kind constant
 */
const getTime = () => {
    let now = new Date();

    let hour = now.getHours();
    hour = (hour <= 12 ? hour : hour - 12);

    let min = now.getMinutes();
    min = (min < 10 ? '0' : '') + min;

    //
    return `${hour}:${min}`;
};

/**
 * @description Get current date in format 'dayName, monthName day'
 * @function getDate
 * @kind constant
 */
const getDate = () => {
    /**
     * @description Helper function to get current name
     */
    let getMonthName = (index) => {
        if (isNaN(index)) return '';
        if (index > Constants.MONTH_NAMES.length - 1) return false;
        return Constants.MONTH_NAMES[index];
    };

    /**
     * @description Helper function to get day of month
     */
    let getDayOfMonth = (d) => {
        return (d.getDate() < 10 ? '0' : '') + d.getDate();
    };

    /**
     * @description Helper function to get day name
     */
    let getDayName = (index) => {
        if (isNaN(index)) return '';
        if (index > Constants.DAY_NAMES.length - 1) return false;
        return Constants.DAY_NAMES[index];
    };

    //

    let now = new Date();

    let month = now.getMonth();
    let monthName = getMonthName(month);

    let dayIndex = now.getDay();
    let day = parseInt(getDayOfMonth(now));
    let dayName = getDayName(dayIndex);
    
    //
    return `${dayName}, ${monthName} ${day}`;
};

//

module.exports.Utilities = { getTime, getDate };