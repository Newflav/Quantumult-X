const url = $request.url;
if (!$response.body) $done({});
let obj = JSON.parse($response.body);

if (url.includes("/xinfang/shellapp/index/index")) {
  //新房页面文章区域
  if (obj?.data?.modules?.length > 0) {
    obj.data.modules = obj.data.modules.filter(
      (i) => !["operation_area","articles"]?.includes(i?.type)
    );
  }
  if (obj?.data) {
    let list = obj.data.modules[0];
    if (list?.data?.banner) {
        delete list.data.banner;
      }
 }
} else if (url.includes("/xinfang/shellapp/feed/index")) {
  //新房页面调查问卷、反馈
  if (obj?.data?.list?.length > 0) {
    obj.data.list = obj.data.list.filter(
      (i) => !["xinfang_prefer","feedback"]?.includes(i?.item_type)
    );
  }
} else if (url.includes("/platform/shellapp/homepage/index")) {
  
} else if (url.includes("/platform/shellapp/homepage/feed")) {
  // 过滤掉首页不需要展示的卡片
  if (obj?.data?.list?.length > 0) {
    obj.data.list = obj.data.list.filter(
    (i) =>
      !["直播看房", "满意度小调研"].includes(i?.title) &&       // 过滤首页直播、调查问卷、一周好文
      !["cms_banner", "xinfang_demand_card", "cms_content"].includes(i?.recoItemType) && // 
      !["demandV3", "liveContainer", "banner"].includes(i?.cardType)                                   // 过滤首页楼龄接受程度调查
  );
  }
} else if (url.includes("v3/house/list")) {
  // 租房宝典
  if (obj.data?.banners) {
     delete obj.data.banners;
  }
} else if (url.includes("platform/shellapp/userCenter/feed")) {
  if (obj.data?.list) {
     delete obj.data.list;
  }
}

$done({ body: JSON.stringify(obj) });