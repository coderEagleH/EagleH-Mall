// 公共的方法抽取到本文件
export function debounce(func, delay) {
  let timer = null;
  return function (...args) {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, delay)
  }
}

// 根据毫秒数计算日期（返回格式为 year-month-day 的字符串）
export function gDate(mSeconds) {

  let days = parseInt(mSeconds / 1000 / 60 / 60 / 24);
  let years = 1970;
  let month = 1;
  let day = 1;
  // 计算年份
  while (days > 365) {
    if ((years % 4 === 0 && years % 100 !== 0) || years % 400 === 0) {
      days -= 366;
    } else {
      days -= 365;
    }
    years++;
  }
  // 计算月份
  while (days > 0) {
    if (
      month === 1 ||
      month === 3 ||
      month === 5 ||
      month === 7 ||
      month === 8 ||
      month === 10 ||
      month === 12
    ) {
      days -= 31;
    } else if (month === 2) {
      if ((years % 4 === 0 && years % 100 !== 0) || years % 400 === 0) {
        days -= 29;
      } else {
        days -= 28;
      }
    } else {
      days -= 30;
    }
    month++;
  }
  month--;
  day += days;
  // 计算日期
  if (
    month === 1 ||
    month === 3 ||
    month === 5 ||
    month === 7 ||
    month === 8 ||
    month === 10 ||
    month === 12
  ) {
    day += 31;
  } else if (month === 2) {
    if ((years % 4 === 0 && years % 100 !== 0) || years % 400 === 0) {
      day += 29;
    } else {
      day += 28;
    }
  } else {
    day += 30;
  }

  month = month > 9 ? month : '0' + month;
  day = day > 9 ? day : '0' + day;
  // 返回确定日期
  return years + "-" + month + "-" + day;
}