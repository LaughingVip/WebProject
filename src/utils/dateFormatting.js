export default (time) => {
  let date = new Date(time);
  let year = date.getFullYear();
  let month = lgTenAddZero(date.getMonth() + 1);
  let day = lgTenAddZero(date.getDate());
  let hour = lgTenAddZero(date.getHours());
  let minutes = lgTenAddZero(date.getMinutes());
  let seconds = lgTenAddZero(date.getSeconds());
  return `${year}.${month}.${day} ${hour}:${minutes}:${seconds}`;
};

function lgTenAddZero(number) {
  return number < 10 ? "0" + number : number;
}
