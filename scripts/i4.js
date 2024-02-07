const url = $request.url;
if (!$response.body) $done({});
let obj = JSON.parse($response.body);

  if (url.includes("/getHotSearchList")) {
  // 热搜页面
    if (obj?.spappli?.length > 0) {
      obj.spappli = [];
  }
    if (obj?.adli?.length > 0) {
      obj.adli = [];
  }
} else if (url.includes("/adclickcb")) {
    obj = [];
} else if (url.includes("/getopfstadinfo")) {
    obj = [];
}

$done({ body: JSON.stringify(obj) });