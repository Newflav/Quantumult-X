const url = $request.url;
if (!$response.body) $done({});
let obj = JSON.parse($response.body);
  
  if (url.includes("/v2/article/detail")) {
  if (obj.data?.not_show_m_ad) {
    obj.data.not_show_m_ad = {
      is_show: 0
    };
} else {
  $done({});
}

$done({ body: JSON.stringify(obj) });