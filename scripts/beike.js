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
  //新房页面调查问卷、反馈
  if (obj?.data?.list?.length > 0) {
    obj.data.list = obj.data.list.filter(
      (i) => !["xinfang_prefer","feedback"]?.includes(i?.item_type)
    );
  }
} else if (url.includes("/config/recommend/home")) {
  if (obj?.data?.list?.length > 0) {
    const items = ["descVice", "title"];
    if (obj?.data?.list?.length > 0) {
      obj.data.list = obj.data.list.filter((i) => items?.includes(i));
    }
  }
} else if (url.includes("v3/house/list")) {
  // 租房宝典
  if (obj.data?.banners) {
     delete obj.data.banners;
  }
} else if (url.includes("Rentplat/v1/homepage")) {
  // 租房顶部横幅
  if (obj.data?.banners) {
     delete obj.data.banners;
  }
  if (obj.data?.bannerList) {
     delete obj.data.bannerList;
  }
}

$done({ body: JSON.stringify(obj) });