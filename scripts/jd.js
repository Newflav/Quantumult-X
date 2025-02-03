const url = $request.url;
if (!$response.body) $done({});
let obj = JSON.parse($response.body);

if (url.includes("functionId=deliverLayer") || url.includes("functionId=orderTrackBusiness")) {
  // 物流页面
  if (obj?.bannerInfo) {
    // 收货时寄快递享八折 享受条件苛刻 故移除
    delete obj.bannerInfo;
  }
  if (obj?.floors?.length > 0) {
    // 运费八折
    obj.floors = obj.floors.filter((i) => !["banner", "jdDeliveryBanner"]?.includes(i?.mId));
  }
} else if (url.includes("functionId=myOrderInfo")) {
  // 订单页面
  if (obj?.floors?.length > 0) {
    let newFloors = [];
    for (let floor of obj.floors) {
      if (["bannerFloor", "bpDynamicFloor", "plusFloor"]?.includes(floor?.mId)) {
        // bannerFloor满意度评分 bpDynamicFloor专属权益 plusFloor开通会员
        continue;
      } else {
        if (floor?.mId === "virtualServiceCenter") {
          // 服务中心
          if (floor?.data?.virtualServiceCenters?.length > 0) {
            let newCards = [];
            for (let card of floor.data.virtualServiceCenters) {
              if (card?.serviceList?.length > 0) {
                let newLists = [];
                for (let item of card.serviceList) {
                  if (item?.serviceTitle === "精选特惠") {
                    continue;
                  }
                  newLists.push(item);
                }
                card.serviceList = newLists;
              }
              newCards.push(card);
            }
            floor.data.virtualServiceCenters = newCards;
          }
        }
        newFloors.push(floor);
      }
    }
    obj.floors = newFloors;
  }
} else if (url.includes("functionId=personinfoBusiness")) {
  // 个人页面
  if (obj?.floors?.length > 0) {
    let newFloors = [];
    for (let floor of obj.floors) {
      // orderIdFloor我的订单 keyToolsFloor浏览记录 newWalletIdFloor我的钱包 iconToolFloor底部工具栏
      const items = [
        "bigSaleFloor", // 双十一
        "newsFloor", //京东快讯
        "buyOften", // 常买常逛
        "newAttentionCard", // 关注的频道
        "newBigSaleFloor", // 双十一
        "noticeFloor", // 顶部横幅
        "recommendfloor" // 我的推荐
      ];
      if (items?.includes(floor?.mId)) {
        continue;
      } else {
          if (floor?.data?.commonPopup) {
            delete floor.data.commonPopup;
          }
          // 弹窗
          if (floor?.data?.commonPopup_dynamic) {
            delete floor.data.commonPopup_dynamic;
          }
          // 底部会员续费横幅
          if (floor?.data?.commonTips?.length > 0) {
            floor.data.commonTips = [];
          }
          // 弹窗
          if (floor?.data?.commonWindows?.length > 0) {
            floor.data.commonWindows = [];
          }
          // 右下角动图
          if (floor?.data?.floatLayer) {
            delete floor.data.floatLayer;
          }
        } else if (floor?.mId === "orderIdFloor") {
          if (floor?.data?.commentRemindInfo?.infos?.length > 0) {
            // 发布评价的提醒
    floor.data.commentRemindInfo.infos = [];
          }
        } else if (floor?.mId === "userinfo") {
          // 个人页 顶部背景图
          if (floor?.data?.bgImgInfo?.bgImg) {
            delete floor.data.bgImgInfo.bgImg;
          }
          // 开通plus会员卡片
          if (floor?.data?.newPlusBlackCard) {
            delete floor.data.newPlusBlackCard;
          }
        }
        newFloors.push(floor);
      }
    }
    obj.floors = newFloors;
  }
} else if (url.includes("functionId=start")) {
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
  if (obj?.topBgImgBig) {
    delete obj.topBgImgBig;
  }
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