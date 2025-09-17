// 2024-01-11 17:45

const url = $request.url;
if (!$response.body) $done({});
let obj = JSON.parse($response.body);

if (url.includes("/boss/car/order/content_info")) {
  // 打车页面
  if (obj?.data?.lubanData?.skin?.dataList?.length > 0) {
    // oss营销皮肤
    obj.data.lubanData.skin.dataList = [];
  }
} else if (url.includes("/shield/search/poi/detail")) {
  //搜索地点详情页
    const items = ["comprehensiveEditEntranc", "check_in", "reviews", "merchantSettlement", "societyPublicExperience", "widgets", "business_scope", "business_scope", "comprehensiveEditEntrance", "claim", "evaluateVO", "discount_commodity", "yellowPageAdRecommendModule", "similarShopRecommend", "commonGoodsShelf", "platformCustomerCommonModule", "platformCustomerComplianceInfo", "subscription", "shopQualifications", "verification", "shopBasePerson", "brand_story", "push_data", "businessQualifications", "brand_service", "horizontalGoodsShelf", "CouponBanner", "poiDetailNewBeltV2", "human_traffic", "floorGuideGbf", "new_operation_banner", "commonAiAgent", "similarShelfRecommend", "travelGuideAndQa", "poiDetailWaterFeed", "poiDetailWaterFeedTitle", "dayTripRecommendList", "adStoreBigBannerModule", "outdoorActivity", "dayTripList", "scenic_ticket", "mini_hook_shelf", "scenic_filter", "packageShelf", "poiDetailCommonConfig", "serviceBookingGoodsShelf", "waterFallFeedTitle", "cityCardFeed", "hotelList", "flash_purchase_ticket", "cards", "hotelRooms", "roomSelect", "shop_story", "house_price_v2", "gas_station_recommend", "nearbyGoodCar", "shoppingMallEvent", "official_account", "houseShelf", "residentialOwners", "carServiceCard", "hotelMustRead", "hotelFacilities", "scenic_mustplay", "legal_document", "surroundOldSellHouse", "recommend_food", "surroundRentHouse", "rentSaleHouse", "serviceGuide", "anchor", "poiMapModule", "hkfMiniPortal", "transportation", "navbarMore", "enhanceCustomerServicePoiModule", "hotelGraphicDetail", "shopStructGift", "nearbyRecommendModule", "retainInfo", "matrix_banner", "recommend_real_case", "recommend_designer_card", "transportationGBF", "poiDetailBottomBar", "combineReviews", "hospital_strategy", "houseAgentService", "commonHkfMiniPortal", "official_account_hospital"];
  if (obj?.data?.modules) {
    for (let i of items) {
      delete obj.data.modules[i];
  }
 }
    if (obj?.data?.modules?.attractGalleryInfo?.data?.list) {
obj.data.modules.attractGalleryInfo.data.list = [];
 }
} else if (url.includes("/bus/plan/integrate")) {
  // 公交列表
  if (obj?.data?.banner_lists?.data?.length > 0) {
    // 公交列表 顶部滚动横图
    obj.data.banner_lists.data = [];
  }
  if (obj?.data?.banner_lists?.tips?.length > 0) {
    obj.data.banner_lists.tips = [];
  }
  if (obj?.data?.mixed_plans?.data?.taxiPlans?.length > 0) {
    // 公交列表 推广打车出行
    obj.data.mixed_plans.data.taxiPlans = [];
  }
  if (obj?.data?.mixed_plans?.data?.hkfRecommendPlans?.length > 0) {
    // 公交列表 推广打车出行
    obj.data.mixed_plans.data.hkfRecommendPlans = [];
  }
} else if (url.includes("/search_bff/hotword")) {
  // 搜索页面
  if (obj?.data?.headerHotWord) {
    delete obj.data.headerHotWord;
  }
} else if (url.includes("/boss/order_web/friendly_information")) {
  // 打车页面
  const items = ["banners", "carouselTips", "integratedBanners", "integratedTips", "skins", "skinAndTips", "tips"];
  if (obj?.data?.["105"]) {
    for (let i of items) {
      delete obj.data["105"][i];
    }
  }
} else if (url.includes("/faas/amap-navigation/card-service-plan-home")) {
  // 路线规划页
  if (obj?.data?.children?.length > 0) {
    // 有schema参数的为推广
    obj.data.children = obj.data.children.filter((i) => !i.hasOwnProperty("schema"));
  }
} else if (url.includes("/faas/amap-navigation/main-page")) {
  // 首页底部卡片
  if (obj?.data?.cardList?.length > 0) {
    obj.data.cardList = obj.data.cardList.filter(
      (i) =>
        i?.dataKey === "ContinueNavigationCard" || // 继续导航
        i?.dataKey === "FrequentLocation" || // 常去地点
        i?.dataKey === "LoginCard" // 登陆卡片
    );
  }
  if (obj?.data?.mapBizList?.length > 0) {
    obj.data.mapBizList = obj.data.mapBizList.filter(
      (i) => i?.dataKey === "FindCarVirtualCard" // 显示关联车辆位置
    );
  }
} else if (url.includes("/perception/drive/routePlan")) {
  // 路线规划页
  if (obj?.data?.front_end) {
    const items = ["global_guide_data", "route_search"];
    for (let i of items) {
      delete obj.data.front_end[i];
    }
  }
} else if (url.includes("/promotion-web/resource")) {
  // 打车页面
  const items = [
    "alpha", // 出行优惠套餐
    "banner",
    "bravo", // 第三方推广 喜马拉雅月卡
    "bubble",
    "charlie", // 横版推广 单单立减 领专属优惠 体验问卷
    "icon",
    "other",
    "popup",
    "push", // 顶部通知 发单立享优惠
    "tips"
  ];
  if (obj?.data) {
    for (let i of items) {
      delete obj.data[i];
    }
  }
} else if (url.includes("/sharedtrip/taxi/order_detail_car_tips")) {
  // 打车页
  if (obj.data?.carTips?.data?.popupInfo) {
    delete obj.data.carTips.data.popupInfo;
  }
} else if (url.includes("/aos_public_travel/mixed/recommend_route_plan_list")) {
  // 公交路线页打车推广
  if (obj.data?.mixed_plans?.data?.taxiPlans) {
    delete obj.data.mixed_plans.data.taxiPlans;
  }
} else if (url.includes("/shield/dsp/profile/index/nodefaasv3")) {
  // 我的页面
  if (obj?.data?.cardList?.length > 0) {
    obj.data.cardList = obj.data.cardList.filter((i) => i?.dataKey === "MyOrderCard");
  }
  if (obj?.data?.tipData) {
    delete obj.data.tipData;
  }
  // 足迹
  // if (obj.data.footPrintV2) {
  //   delete obj.data.footPrintV2;
  // }
  // 成就勋章 lv1见习达人
  if (obj?.data?.memberInfo) {
    delete obj.data.memberInfo;
  }
} else if (url.includes("/shield/search/common/coupon/info")) {
  if (obj?.data) {
    obj.data = {};
  }
} else if (url.includes("/shield/search/nearbyrec_smart")) {
  // 附近页面
  if (obj?.data?.modules?.length > 0) {
    const items = ["head", "search_hot_words", "feed_rec"];
    if (obj?.data?.modules?.length > 0) {
      obj.data.modules = obj.data.modules.filter((i) => items?.includes(i));
    }
  }
} else if (url.includes("/shield/search/client/push")) {
  if (obj?.data) {
    obj.data = {};
  }
} else if (url.includes("/shield/search_business/process/marketingOperationStructured")) {
  // 详情页 顶部优惠横幅
  if (obj?.data?.tipsOperationLocation) {
    delete obj.data.tipsOperationLocation;
  }
  if (obj?.data?.resourcePlacement) {
    delete obj.data.resourcePlacement;
  }
} else if (url.includes("/shield/search_poi/homepage")) {
  // 首页 搜索框历史记录 推广标签
  if (obj?.history_tags) {
    delete obj.history_tags;
  }
} else if (url.includes("/shield/search_poi/tips_operation_location")) {
  // 搜索页面 底部结果上方窄横幅
  if (obj?.data?.coupon) {
    delete obj.data.coupon;
  }
  const items = [
    "belt",
    "common_float_bar",
    "common_image_banner",
    "coupon_discount_float_bar",
    "coupon_float_bar",
    "discount_coupon",
    "image_cover_bar",
    "mood_coupon_banner",
    "operation_brand",
    "promotion_wrap_card",
    "tips_top_banner"
  ];
  if (obj?.data?.modules) {
    for (let i of items) {
      delete obj.data.modules[i];
    }
  }
} else if (url.includes("/valueadded/alimama/splash_screen")) {
  // 开屏广告
  if (obj?.data?.ad?.length > 0) {
    for (let item of obj.data.ad) {
      item.set.setting.display_time = 0;
      item.creative[0].start_time = 3818332800; // Unix 时间戳 2090-12-31 00:00:00
      item.creative[0].end_time = 3818419199; // Unix 时间戳 2090-12-31 23:59:59
    }
  }
}

$done({ body: JSON.stringify(obj) });