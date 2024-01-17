const url = $request.url;
if (!$response.body) $done({});
let obj = JSON.parse($response.body);


  if (obj.data?.not_show_m_ad) {
    obj.data.not_show_m_ad = 1;
  }
  if (obj.data?.infos?.ad_content?.vip) {
    obj.data.infos.ad_content.vip = 1;
  }
  if (obj.data?.infos?.ad_content?.request_id) {
    obj.data.infos.ad_content.request_id = null;
  }
} else {
  $done({});
}

$done({ body: JSON.stringify(obj) });