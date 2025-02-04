const url = $request.url;
if (!$response.body) $done({});
let obj = JSON.parse($response.body);

if (url.includes("functionId=start")) {
  // 开屏广告
  if (obj?.images?.length > 0) {
    obj.images = [];
  }
  if (obj?.showTimesDaily) {
    obj.showTimesDaily = 0;
  }
} else if (url.includes("functionId=welcomeHome")) {
  // 首页配置
  if (obj?.floorList?.length > 0) {
    // 首页 图层列表
    // float推广浮层 recommend为你推荐 ruleFloat资质与规则 searchIcon右上角消费券 topRotate左上角logo
    obj.floorList = obj.floorList.filter(
      (i) => !["float", "photoCeiling", "ruleFloat", "searchIcon",  "topRotate"]?.includes(i?.type)
    );
  }
  // 首页 顶部背景图
 // if (obj?.topBgImgBig) {
    //delete obj.topBgImgBig;
  //}
  // 首页 下拉二楼
  if (obj?.webViewFloorList?.length > 0) {
    obj.webViewFloorList = [];
  }
} else if (url.includes("functionId=cart")) {
    if (obj?.config?.textInfo) {
    delete obj.config.textInfo;
  }
    if (obj?.config?.jingEggStrongDateConfig) {
    delete obj.config.jingEggStrongDateConfig;
  }
    if (obj?.config?.jingEggDateConfig) {
    delete obj.config.jingEggDateConfig;
  }
    if (obj?.config?.jingEggCouponNumConfig) {
    delete obj.config.jingEggCouponNumConfig;
  }
}

$done({ body: JSON.stringify(obj) });