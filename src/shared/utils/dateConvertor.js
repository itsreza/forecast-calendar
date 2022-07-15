import moment from "moment";
import { GREGORIAN_DASHED_DATE_FORMAT } from "../constants/dateFormats";

/**
 * Function Helper To Convert Dates To customized format
 * @param {Date} date
 * @param {String} format By Default We Using GREGORIAN_DASHED_DATE_FORMAT
 * @returns Formatted Date With Passing Format as Default Return Date With "YYYY-MM-DD" format
 */
export const convertDateToEntryFormat = (
  date,
  format = GREGORIAN_DASHED_DATE_FORMAT
) => moment(date).format(format);

export const convertTimeStampToDateFormat = (
  date,
  format = GREGORIAN_DASHED_DATE_FORMAT
) => {
  return moment.unix(date).format(format);
};

export const getCurrentDate = () => moment();
