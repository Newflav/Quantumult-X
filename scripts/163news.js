const url = $request.url;
if (!$response.body) $done({});
let obj = JSON.parse($response.body);

if (url.includes("/gentie-web/api/v3/products")) {
  if (obj?.data?.secretaryVO) {
    // 跟帖小秘书
    delete obj.data.secretaryVO;
  }
} else if (url.includes("/feed/dynamic/video-normal-list")) {
  if (obj.data?.items?.videobanner) {
    // 视频页顶部横幅
    delete obj.data.items.videobanner;
  }
} else {
  $done({});
}

$done({ body: JSON.stringify(obj) });