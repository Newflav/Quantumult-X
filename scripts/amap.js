// 2025-09-18 17:45

const url = $request.url;
if (!$response.body) $done({});
let obj = JSON.parse($response.body);


if (url.includes("/shield/search/poi/detail")) {
  //搜索地点详情页
    const items = ["check_in", "reviews", "merchantSettlement", "societyPublicExperience", "widgets", "business_scope", "relatedPoiList", "comprehensiveEditEntrance", "claim", "evaluateVO", "discount_commodity", "yellowPageAdRecommendModule", "similarShopRecommend", "commonGoodsShelf", "platformCustomerCommonModule", "platformCustomerComplianceInfo", "subscription", "shopQualifications", "verification", "shopBasePerson", "brand_story", "push_data", "businessQualifications", "brand_service", "horizontalGoodsShelf", "CouponBanner", "poiDetailNewBeltV2", "human_traffic", "floorGuideGbf", "new_operation_banner", "commonAiAgent", "similarShelfRecommend", "travelGuideAndQa", "poiDetailWaterFeed", "poiDetailWaterFeedTitle", "dayTripRecommendList", "adStoreBigBannerModule", "outdoorActivity", "dayTripList", "scenic_ticket", "mini_hook_shelf", "scenic_filter", "packageShelf", "poiDetailCommonConfig", "serviceBookingGoodsShelf", "waterFallFeedTitle", "cityCardFeed", "hotelList", "flash_purchase_ticket", "cards", "hotelRooms", "roomSelect", "shop_story", "house_price_v2", "gas_station_recommend", "nearbyGoodCar", "shoppingMallEvent", "official_account", "houseShelf", "residentialOwners", "carServiceCard", "hotelMustRead", "hotelFacilities", "scenic_mustplay", "legal_document", "surroundOldSellHouse", "recommend_food", "surroundRentHouse", "rentSaleHouse", "serviceGuide", "anchor", "poiMapModule", "hkfMiniPortal", "transportation", "navbarMore", "enhanceCustomerServicePoiModule", "hotelGraphicDetail", "shopStructGift", "nearbyRecommendModule", "retainInfo", "matrix_banner", "recommend_real_case", "recommend_designer_card", "houseTrendContainer", "transportationGBF", "poiDetailBottomBar", "combineReviews", "hospital_strategy", "houseAgentService", "commonHkfMiniPortal", "official_account_hospital"];
  if (obj?.data?.modules) {
    for (let i of items) {
      delete obj.data.modules[i];
  }
 }
    let list = obj?.data?.modules?.attractGalleryInfo?.data?.list;
    if (list) {
obj.data.modules.attractGalleryInfo.data.list = list.filter(item => (item.source || "").toUpperCase() !== "NOTE");
    }
    if (obj?.data?.modules?.baseInfo?.data?.baseExtendInfo?.poiDetailBottomBarConfig) {
    delete obj.data.modules.baseInfo.data.baseExtendInfo.poiDetailBottomBarConfig;
  }
  // 清理 attractGalleryInfo 的 "上传图片" 和 "帮助更多人"
    if (obj?.data?.modules?.attractGalleryInfo?.data) {
    let ag = obj.data.modules.attractGalleryInfo.data;
    if (ag.title === "上传图片") delete ag.title;
    if (ag.desc === "帮助更多人") delete ag.desc;
  }
}

$done({ body: JSON.stringify(obj) });