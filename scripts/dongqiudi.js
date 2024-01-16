if (!$response.body) $done({});
const url = $request.url;
let obj = JSON.parse($response.body);
  
    if (obj.data?.dqd_ads) {
    delete obj.data.dqd_ads;
  }
  if (obj.data?.not_show_m_ad) {
    obj.data.not_show_m_ad = null;
  }
  if ("ad_content" in obj) {
    delete obj;
  }
} else {
  $done({});
}

$done({ body: JSON.stringify(obj) });