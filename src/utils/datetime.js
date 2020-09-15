import * as moment from 'moment';

export const isValidDateOfBirth = (day, month, year) => {
  if (!moment(`${year} ${month} ${day}`, 'YYYY/MM/DD').isValid()) {
    return false;
  }

  const dateOfBirth = new Date(parseInt(year), parseInt(month) - 1, parseInt(day), 0, 0, 0, 0);
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  if (dateOfBirth >= today) {
    return false;
  }

  return true;
}