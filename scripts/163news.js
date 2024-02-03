const url = $request.url;
if (!$response.body) $done({});
let obj = JSON.parse($response.body);

if (url.includes("/feed/dynamic/headline-list")) {
  if (obj?.data?.items?.length > 0) {
    // 移除置顶新闻
    obj.data.items = obj.data.items.filter((i) => !(i?.tagList?.length > 0));
  }
} else if (url.includes("/search/hot-word")) {
  if (obj?.data?.special?.length > 0) {
    // 猜你想搜
    obj.data.special = [];
  }
} else if (url.includes("/gentie-web/api/v3/products")) {
  if (obj?.data?.secretaryVO?.length > 0) {
    // 跟帖小秘书
    obj.data.secretaryVO = [];
  }
} else {
  $done({});
}

$done({ body: JSON.stringify(obj) });