const url = $request.url;
if (!$response.body) $done({});
let obj = JSON.parse($response.body);

if (url.includes("/v2/article/detail")) {
  const items = [
    "user_id",
    "dqd_ads",
    "topic_tags",
    "not_show_m_ad",
    "code"
  ];
  if (obj?.data) {
    for (let i of items) {
      delete obj.data[i];
    }
  }
} else {
  $done({});
}

$done({ body: JSON.stringify(obj) });