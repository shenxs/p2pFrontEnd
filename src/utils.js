const utils = {
  unixTime2YYYYMMDD: function (unix_timestamp) {
    let date = new Date(unix_timestamp);

    let year = date.getFullYear();
    let month = date.getMonth();
    let day = date.getDay();

    // Will display time in 10:30:23 format
    let formattedTime = year + '-' + month + '-' + day;
    return formattedTime;
  }
};

export default utils;
