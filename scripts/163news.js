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
} else if (url.includes("/commons/user/profile/main")) {
  if (obj?.data?.creativeCenter) {
    // 个人主页创作中心
    delete obj.data.creativeCenter;
  }
} else if (url.includes("/commons/config/user/global")) {
  if (obj?.data) {
    // 个人主页VIP
    obj.data = {};
  }
} else if (url.includes("/user/profile/signTask")) {
  if (obj?.data) {
    // 每日签到
    obj.data = {};
  }
} else if (url.includes("/api/v1/doc/unitedCardView")) {
  if (obj?.data) {
    // 文章底部圈子推广
    obj.data = {};
  }
} else if (url.includes("/api/v1/daily-guess/today-question")) {
  if (obj?.data) {
    // 文章底部每日竞猜
    obj.data = {};
  }
}

$done({ body: JSON.stringify(obj) });