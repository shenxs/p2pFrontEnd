const utils = {
  unixTime2YYYYMMDD (unix_timestamp) {
    const date = new Date(unix_timestamp);
    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDay();

    // Will display time in 10:30:23 format
    const formattedTime = year + '-' + month + '-' + day;
    return formattedTime;
  },
  parseData (aRecord) {
    aRecord.transactionTime = utils.unixTime2YYYYMMDD(aRecord.transactionTime);
    aRecord.interest = aRecord.interest + '%';
    const means = [
      {k: 'N', v: '未审核'},
      {k: 'Y', v: '已通过'},
      {k: 'D', v: '已拒绝'},
      {k: 'O', v: '已完成'}];
    for (let i = 0; i < means.length; i++) {
      if (aRecord.buyStatus === means[i].k) {
        aRecord.buyStatus = means[i].v;
      }
    }
    for (let i = 0; i < means.length; i++) {
      if (aRecord.sellStatus === means[i].k) {
        aRecord.sellStatus = means[i].v;
      }
    }
    return aRecord;
  },
  dateFormatter (str) {//默认返回yyyy-MM-dd HH-mm-ss
    var hasTime = arguments[1] != false ? true : false;//可传第二个参数false，返回yyyy-MM-dd
    var d = new Date(str);
    var year = d.getFullYear();
    var month = (d.getMonth() + 1) < 10
      ? '0' + (d.getMonth() + 1)
      : (d.getMonth() + 1);
    var day = d.getDate() < 10 ? '0' + d.getDate() : d.getDate();
    var hour = d.getHours() < 10 ? '0' + d.getHours() : d.getHours();
    var minute = d.getMinutes() < 10 ? '0' + d.getMinutes() : d.getMinutes();
    var second = d.getSeconds() < 10 ? '0' + d.getSeconds() : d.getSeconds();
    if (hasTime) {
      return [year, month, day].join('-') + ' ' +
        [hour, minute, second].join(':');
    } else {
      return [year, month, day].join('-');
    }
  }
};

export default utils;
