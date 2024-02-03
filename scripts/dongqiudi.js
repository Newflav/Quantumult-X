const url = $request.url;
if (!$response.body) $done({});
let obj = JSON.parse($response.body);

if (url.includes("/v2/article/detail")) {
  if (obj?.data?.not_show_m_ad) {
    if (obj?.data?.not_show_m_ad === 0) {
      obj.data.not_show_m_ad = 1;
    }
  }
  if (obj?.data?.infos?.length > 0) {
    obj.data.infos = obj.data.infos.filter((i) => !i.hasOwnProperty("ad_content"));
  }
} else {
  $done({});
}

$done({ body: JSON.stringify(obj) });