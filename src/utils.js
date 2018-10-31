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
    const means=[{k:'N',v:'未审核'},{k:'Y',v:'已通过'},{k:'D',v:'已拒绝'}];
    for(let i=0;i<means.length;i++){
      if(aRecord.buyStatus===means[i].k){
        aRecord.buyStatus=means[i].v;
      }
    }
    for(let i=0;i<means.length;i++){
      if(aRecord.sellStatus===means[i].k){
        aRecord.sellStatus=means[i].v;
      }
    }

    return aRecord;
  }
};

export default utils;
