/**
 * @description - Max file size in MB for uploading background photo
 * @kind constant
 */
const MAX_FILE_SIZE_MB = 10;

/**
 * @description Month names to select from
 * @kind constant
 */
const MONTH_NAMES = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

/**
 * @description Day names to select from
 * @kind constant
 */
const DAY_NAMES = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

/**
 * @description Defaults for phone
 * @kind constant
 */
const DEFAULTS = {
    CARRIER: 'Gab',
    ALERT: 'Enter your custom text here...',
    ELAPSED_TIME: '15m ago',
    BACKGROUND_IMAGE: 'static/images/photos/mountains.jpeg',
};

//

module.exports = {
    MAX_FILE_SIZE_MB,
    MONTH_NAMES,
    DAY_NAMES,
    DEFAULTS,
};