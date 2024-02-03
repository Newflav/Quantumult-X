const url = $request.url;
if (!$response.body) $done({});
let obj = JSON.parse($response.body);

if (url.includes("/gentie-web/api/v3/products")) {
  if (obj?.data?.secretaryVO) {
    // 跟帖小秘书
    delete obj.data.secretaryVO;
  }
} else if (url.includes("/feed/dynamic/video-normal-list")) {
    // 视频页顶部横幅
  if (obj?.data?.items?.videobanner?.length > 0) {
    obj.data.items.videobanner = obj.data.items.videobanner.filter(
      (i) => !["春节活动"]?.includes(i?.title)
    );
  }
} else {
  $done({});
}

$done({ body: JSON.stringify(obj) });