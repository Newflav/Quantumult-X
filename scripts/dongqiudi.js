const url = $request.url;
if (!$response.body) $done({});
let obj = JSON.parse($response.body);
  
    if (obj.data?.dqd_ads) {
    obj.data.dqd_ads = null;
  }
    if (obj.data?.not_show_m_ad) {
    obj.data.not_show_m_ad = null;
  }
    if (obj.data?.infos) {
    obj.data.infos = obj.data.infos.filter(
      (item) =>
        item.name === "channels" ||
        item.name === "column" ||
    );
    fixPos(obj.data.infos);
  }
} else {
  $done({});
}

$done({ body: JSON.stringify(obj) });