const url = $request.url;
if (!$response.body) $done({});
let obj = JSON.parse($response.body);

  if (obj?.data?.infos) {
    let list = obj.data.infos.ad_content;
    // 详情页 底部 房产推广
    if (list?.ad_source) {
      let ad = list.ad_source;
      if (ad?.image) {
        delete ad.image;
      }
} else {
  $done({});
}

$done({ body: JSON.stringify(obj) });

