const url = $request.url;
if (!$response.body) $done({});
let obj = JSON.parse($response.body);

if (url.includes("/gentie-web/api/v3/products")) {
  if (obj?.data?.secretaryVO) {
    // 跟帖小秘书
    delete obj.data.secretaryVO;
  }
} else if (url.includes("/feed/dynamic/video-normal-list")) {
if (obj?.data?.items?.length > 0) {
    // 视频页顶部横幅
    obj.data.items = obj.data.items.filter((i) => !i.hasOwnProperty("videobanner"));
  }
} else if (url.includes("/api/v1/doc/unitedCardView")) {
  if (obj?.data) {
    obj.data = {};
  }
} else {
  $done({});
}

$done({ body: JSON.stringify(obj) });