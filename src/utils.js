const utils = {

  unixTime2YYYYMMDD: function(unix_timestamp) {
    const date = new Date(unix_timestamp)

    const year = date.getFullYear()
    const month = date.getMonth()
    const day = date.getDay()

    // Will display time in 10:30:23 format
    const formattedTime = year + '-' + month + '-' + day
    return formattedTime
  }
}

export default utils
