const url = $request.url;
if (!$response.body) $done({});
let obj = JSON.parse($response.body);
  
    if (obj.data?.dqd_ads) {
    obj.data.dqd_ads = null;
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