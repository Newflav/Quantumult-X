const url = $request.url;
if (!$response.body) $done({});
let obj = JSON.parse($response.body);

  if (url.includes("/config/ershoufang/content")) {
  //二手房页面直播看房区域
  if (obj.data?.top_banner) {
    delete obj.data.top_banner;
  }
} else if (url.includes("/user/profile/getusercenterinfov4")) {
  //我的页面底部经纪人横幅
  if (obj.data?.banners) {
     delete obj.data.banners;
  }
} else if (url.includes("/xinfang/shellapp/index/indexv1")) {
  //新房页面文章区域
  if (obj?.data?.modules?.length > 0) {
    obj.data.modules = obj.data.modules.filter(
      (i) => !["operation_area"]?.includes(i?.type)
    );
  }
} else if (url.includes("/xinfang/shellapp/feed/index")) {
  //新房页面调查问卷
  if (obj?.data?.list?.length > 0) {
    obj.data.list = obj.data.list.filter(
      (i) => !["xinfang_prefer"]?.includes(i?.item_type)
    );
  }
  if (obj?.data?.list?.length > 0) {
    obj.data.list = obj.data.list.filter(
      (i) => !["feedback"]?.includes(i?.item_type)
    );
  }
} else {
  $done({});
}

$done({ body: JSON.stringify(obj) });