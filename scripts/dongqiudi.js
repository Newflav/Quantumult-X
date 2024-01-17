const url = $request.url;
if (!$response.body) $done({});
let obj = JSON.parse($response.body);

  if (obj.data?.not_show_m_ad) {
    obj.data.not_show_m_ad = 1;
  }
} else {
  $done({});
}

$done({ body: JSON.stringify(obj) });