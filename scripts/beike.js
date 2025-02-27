const url = $request.url;
if (!$response.body) $done({});
let obj = JSON.parse($response.body);

if (url.includes("/config/ershoufang/content")) {
  //二手房页面净化
  if (obj.data?.top_banner) {
    delete obj.data.top_banner;
  }
  if (obj.data?.scene) {
    delete obj.data.scene;
  }
} else if (url.includes("/secondhand/ershoufang/homepagesearch")) {
    //二手房页面调查
  if (obj?.data?.list?.length > 0) {
    obj.data.list = obj.data.list.filter(
      (i) => !["evaluate"]?.includes(i?.cardType)
    );
  }
} else if (url.includes("/user/profile/getusercenterinfov4")) {
    //我的页面净化
  const items = ["banners","promises","myhouse"];
  if (obj?.data) {
    for (let i of items) {
      delete obj.data[i]
    }
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
  //首页直播、调查问卷、一周好文
  if (obj?.data?.list?.length > 0) {
    obj.data.list = obj.data.list.filter(
      (i) => !["直播看房","满意度小调研"]?.includes(i?.title)
    );
  }
  if (obj?.data?.list?.length > 0) {
    obj.data.list = obj.data.list.filter(
      (i) => !["cms_content"]?.includes(i?.recoItemType)
    );
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
} else if (url.includes("config/home/contentv5")) {
    if (obj?.data?.moduleList?.length > 0) {
    obj.data.moduleList = obj.data.moduleList.filter(
      (i) => !["decoration_v2"]?.includes(i?.itemKey)
    );
  }
} else if (url.includes("platform/shellapp/userCenter/feed")) {
  if (obj?.data) {
    obj.data = {};
  }
}

$done({ body: JSON.stringify(obj) });