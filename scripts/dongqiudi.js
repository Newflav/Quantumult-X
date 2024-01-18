const url = $request.url;
if (!$response.body) $done({});
let obj = JSON.parse($response.body);

if (url.includes("/v2/article/detail")) {
   if (obj.data?.topic_tags) {
        delete obj.data.topic_tags;
  }
   if (obj.data?.not_show_m_ad) {
      obj.data.not_show_m_ad = false;
    if (obj.data.infos.ad_content) {
        obj.data.infos.ad_content = [];
    }
} else {
  $done({});
}

$done({ body: JSON.stringify(obj) });