if (!$response.body) $done({});
let obj = JSON.parse($response.body);

  if (obj.data?.infos.ad_content) {
    // 收货时寄快递享八折 享受条件苛刻 故移除
    delete obj.data.infos.ad_content;
  }
    
$done({ body: JSON.stringify(obj) });