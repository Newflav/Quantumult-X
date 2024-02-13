const url = $request.url;
if (!$response.body) $done({});
let obj = JSON.parse($response.body);

if (url.includes("/getHotSearchList")) {
  // 热搜页面
  if (obj?.adli?.length > 0) {
    obj.adli = [];
  }
  if (obj?.spappli?.length > 0) {
    obj.spappli = [];
  }
} else if (url.includes("/adclickcb")) {
    obj = [];
} else if (url.includes("/getopfstadinfo")) {
    obj = [];
} else if (url.includes("/getAppList")) {
  //app横幅广告
  if (obj?.ad?.length > 0) {
    delete obj.ad;
  }
  if (obj?.adli?.length > 0) {
    delete obj.adli;
  }
}
$done({ body: JSON.stringify(obj) });