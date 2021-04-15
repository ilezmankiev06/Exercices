import moment from "moment";

function formatDate(day) {
  return moment(day).format("dddd Do MMMM YYYY");
};
function yearsSinceDate(day) {
  return parseInt(moment(day).fromNow());
};
function getDayFromDate(day) {
  return moment(day).format("dddd");
};
function daysSinceDate(day) {
  const currentDay = moment();
  const dateGiven = moment(day);
  return Math.round(moment.duration((currentDay - dateGiven)).asDays());
};
export { formatDate, yearsSinceDate, getDayFromDate, daysSinceDate };