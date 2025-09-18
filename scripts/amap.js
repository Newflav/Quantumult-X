// 2025-09-18 17:45

const url = $request.url;
if (!$response.body) $done({});
let obj = JSON.parse($response.body);


if (url.includes("/shield/search/poi/detail")) {
  //搜索地点详情页
    const items = ["comprehensiveEditEntranc", "check_in", "reviews", "merchantSettlement", "societyPublicExperience", "widgets", "business_scope", "comprehensiveEditEntrance", "claim", "evaluateVO", "discount_commodity", "yellowPageAdRecommendModule", "similarShopRecommend", "commonGoodsShelf", "platformCustomerCommonModule", "platformCustomerComplianceInfo", "subscription", "shopQualifications", "verification", "shopBasePerson", "brand_story", "push_data", "businessQualifications", "brand_service", "horizontalGoodsShelf", "CouponBanner", "poiDetailNewBeltV2", "human_traffic", "floorGuideGbf", "new_operation_banner", "commonAiAgent", "similarShelfRecommend", "travelGuideAndQa", "poiDetailWaterFeed", "poiDetailWaterFeedTitle", "dayTripRecommendList", "adStoreBigBannerModule", "outdoorActivity", "dayTripList", "scenic_ticket", "mini_hook_shelf", "scenic_filter", "packageShelf", "poiDetailCommonConfig", "serviceBookingGoodsShelf", "waterFallFeedTitle", "cityCardFeed", "hotelList", "flash_purchase_ticket", "cards", "hotelRooms", "roomSelect", "shop_story", "house_price_v2", "gas_station_recommend", "nearbyGoodCar", "shoppingMallEvent", "official_account", "houseShelf", "residentialOwners", "carServiceCard", "hotelMustRead", "hotelFacilities", "scenic_mustplay", "legal_document", "surroundOldSellHouse", "recommend_food", "surroundRentHouse", "rentSaleHouse", "serviceGuide", "anchor", "poiMapModule", "hkfMiniPortal", "transportation", "navbarMore", "enhanceCustomerServicePoiModule", "hotelGraphicDetail", "shopStructGift", "nearbyRecommendModule", "retainInfo", "matrix_banner", "recommend_real_case", "recommend_designer_card", "transportationGBF", "poiDetailBottomBar", "combineReviews", "hospital_strategy", "houseAgentService", "commonHkfMiniPortal", "official_account_hospital"];
  if (obj?.data?.modules) {
    for (let i of items) {
      delete obj.data.modules[i];
  }
 }
    if (obj?.data?.modules?.attractGalleryInfo?.data?.list) {
obj.data.modules.attractGalleryInfo.data.list = [];
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
} else if (url.includes("/shield/search_poi/search/sp") || url.includes("/shield/search_poi/mps")) {
   if (obj?.data?.list_data) {
     let list = obj.data.list_data.content[0];
  //   // 详情页 底部 房产推广
     if (list?.hookInfo) {
       let hookData = list.hookInfo.data;
       delete hookData.header;
       delete hookData.house_info;
     }
  //   // 详情页 底部 订酒店
     if (list && list.map_bottom_bar && list.map_bottom_bar.hotel) {
       delete list.map_bottom_bar.hotel;
     }
     if (list && list.poi.item_info && list.poi.item_info.tips_bottombar_button && list.poi.item_info.tips_bottombar_button.hotel) {
       delete list.poi.item_info.tips_bottombar_button.hotel;
     }
     delete list.map_bottom_bar.hotel;
     delete list.poi.item_info.tips_bottombar_button.hotel;
  //   // 地图优惠推广
     delete list.map.main_point;
     delete list.tips_operation_info;
     delete list.bottom.bottombar_button.hotel;
  //   // 搜索页 顶部卡片
     if (list?.card?.card_id === "SearchCardBrand" && list?.item_type === "brandAdCard") {
       delete list.card;
     }
     if (list?.card?.card_id === "NearbyGroupBuy" && list?.item_type === "toplist") {
       delete list.card;
     }
     if (list?.card?.card_id === "ImageBanner" && list?.item_type === "ImageBanner") {
       delete list.card;
     }
   } else if (obj?.data?.district?.poi_list) {
  //   // 搜索列表详情页
     let poi = obj.data.district.poi_list[0];
     delete poi.transportation; // 订票横幅
     delete poi.feed_rec_tab; // 景点门票 酒店特惠 特色美食 休闲玩乐
   } else if (obj?.data?.modules) {
     if (obj?.data?.modules?.not_parse_result?.data?.list_data) {
  let list = obj.data.modules.not_parse_result.data.list_data.content[0];
  //      详情页 底部 房产推广
       if (list?.hookInfo) {
         let hookData = list.hookInfo.data;
         delete hookData.header;
         delete hookData.house_info;
       }
  //     // 详情页 底部 订酒店
       if (list && list.map_bottom_bar && list.map_bottom_bar.hotel) {
         delete list.map_bottom_bar.hotel;
       }
       if (list && list.poi.item_info && list.poi.item_info.tips_bottombar_button && list.poi.item_info.tips_bottombar_button.hotel) {
         delete list.poi.item_info.tips_bottombar_button.hotel;
       }
       delete list.map_bottom_bar.hotel;
       delete list.poi.item_info.tips_bottombar_button.hotel;
  //     // 地图优惠推广
       delete list.map.main_point;
       // 左上角动图推广
       delete list.tips_operation_info;
       delete list.bottom.bottombar_button.hotel;
     }
     if (obj?.data?.modules?.list_data?.data) {
       // 搜索列表
       let list = obj.data.modules.list_data.data;
       if (list?.content?.length > 0) {
          brandAdCard广告卡片 toplist_al人气榜单 高德指南
         list.content = list.content.filter((i) => !["brandAdCard", "toplist_al"]?.includes(i?.item_type));
       }
     }
   }

$done({ body: JSON.stringify(obj) });