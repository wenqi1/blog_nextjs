class StringUtil {
  // 将字符串日期格式化成指定格式
  formatDate(dataString: string, format: string) {
    const date = new Date(dataString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const hour = String(date.getHours()).padStart(2, "0");
    const minute = String(date.getMinutes()).padStart(2, "0");
    const second = String(date.getSeconds()).padStart(2, "0");
    let formattedDate = format
      .replace("YYYY", `${year}`)
      .replace("MM", month)
      .replace("DD", day)
      .replace("hh", hour)
      .replace("mm", minute)
      .replace("ss", second);
    return formattedDate;
  }
}

export const stringUtil = new StringUtil();
