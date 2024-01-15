const url = $request.url;
if (!$response.body) $done({});
let obj = JSON.parse($response.body);

if (obj?.data) {
    let list = obj.data.infos;
    // 详情页 底部 房产推广
    if (list?.ad_content) {
      if (list?.ad_content) {
        delete list.ad_content;
      }
} else {
  $done({});
}

$done({ body: JSON.stringify(obj) });

