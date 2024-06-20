import moment from 'moment-timezone';
import {isInteger, isString} from "lodash";

const DateUtils = {
    READABLE_FORMAT: 'MMMM D, YYYY h:mm A z',
    READABLE_FORMAT_DATE: 'MMMM D, YYYY',
    READABLE_FORMAT_TIME:'HH:mm A',
    UTC_FORMAT: 'YYYY-MM-DDTHH:mm:ss.SSS[Z]',
    TIME_ZONES: {
        India: 'Asia/Kolkata',
    },
    convertTimeToRedableFormat:(time)=>{
        return moment(time).format(DateUtils.READABLE_FORMAT_TIME);

    },
    isDateInFormat: (dateTimeString, format) => {
        if (!isString(dateTimeString)) {
            console.error('Invalid data type of input dateTimeString. It must be of type string.');
            return null;
        }
        return moment(dateTimeString, format, true).isValid();
    },

    getCurrentDateTime: () => {
        return moment.utc().format(DateUtils.UTC_FORMAT);
    },

    convertUTCDateTimeToReadableFormat: (UTCDateTimeString, timezone = DateUtils.TIME_ZONES.India) => {
        if (!isString(UTCDateTimeString)) {
            console.error('Invalid data type of input dateTime. It must be of type string.');
            return null;
        }
        return moment(UTCDateTimeString).tz(timezone).format(DateUtils.READABLE_FORMAT);
    },

    convertUTCDateToReadableFormat: (UTCDateTimeString, timezone = DateUtils.TIME_ZONES.India) => {
        if (!isString(UTCDateTimeString)) {
            console.error('Invalid data type of input dateTime. It must be of type string.');
            return null;
        }
        return moment(UTCDateTimeString).tz(timezone).format(DateUtils.READABLE_FORMAT_DATE);
    },

    getDateTimeAfterDays: (numberOfDays) => {
        if (!isInteger(numberOfDays)) {
            console.error('Invalid data type of input numberOfDays. It must be of type integer.');
            return null;
        }
        return moment.utc().add(numberOfDays, 'days').format(DateUtils.UTC_FORMAT);
    },

    convertReadableDateTimeToUTCFormat: (readableDateTimeString) => {
        if (!isString(readableDateTimeString)) {
            console.error('Invalid data type of input readableDateTimeString. It must be of type string.');
            return null;
        }
        return moment(readableDateTimeString, DateUtils.READABLE_FORMAT).utc().format(DateUtils.UTC_FORMAT);
    },

    isDateSameOrEarlier: (date1String, date2String) => {
        if (!isString(date1String)) {
            console.error('Invalid data type of input date1String. It must be of type string.');
            return null;
        }
        if (!isString(date2String)) {
            console.error('Invalid data type of input date2String. It must be of type string.');
            return null;
        }
        const parsedDate1 = moment(date1String, DateUtils.UTC_FORMAT, true);
        const parsedDate2 = moment(date1String, DateUtils.UTC_FORMAT, true);
        if (!parsedDate1.isValid()) {
            console.error('Invalid format of date1String.');
            return null;
        }
        if (!parsedDate2.isValid()) {
            console.error('Invalid format of date2String.');
            return null;
        }
        return moment.utc(date1String, DateUtils.UTC_FORMAT).isSameOrBefore(moment.utc(date2String, DateUtils.UTC_FORMAT));
    },

    convertJavascriptDateToUTCFormat: (date) => {
        if (!(date instanceof Date)) {
            console.error('Input must be a Date object.');
            return null;
        }
        return moment(date).utc().format(DateUtils.UTC_FORMAT);
    },

    convertUTCStringToDateObject: (UTCString) => {
        if (!isString(UTCString)) {
            console.error('Input must be a string.');
            return null;
        }
        return moment.utc(UTCString, DateUtils.UTC_FORMAT).toDate();
    },
};

export default DateUtils;