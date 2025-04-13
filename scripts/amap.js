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
} else if (url.includes("/shield/frogserver/aocs")) {
  // 整体图层
  const items = [
    // "ARWalkNavi", // AR导航
    // "Clipboard", // 剪贴板
    // "DIYMap", // DIY地图
    // "GuiJi", // 轨迹
    "Naviendpage_Searchwords",
    "SplashScreenControl",
    "TipsTaxiButton",
    // "TrainOrderBanner", // 火车票订单
    // "_testmark_info",
    // "_user_profile_",
    // "air_card",
    // "amap_basemap_config", // 基本库
    "amapCoin",
    // "aos_feedback",
    // "app_improve", // app改进
    // "apple_location_log_collect",
    // "collect",
    // "comment_info",
    // "deviceml_force_recommend",
    // "deviceml_update_apk_conf",
    "feedback_banner", // 店主专属通道
    "footprint", // 足迹
    // "gd_code_cover",
    // "gd_notch_logo",
    "his_input_tip",
    "home_business_position_config", // 首页右上角动图
    // "homepage_resource_config",
    // "hotcity", // 热门城市
    "hotel_activity",
    "hotel_fillin_opt",
    "hotel_loop",
    "hotel_portal",
    "hotel_tipsicon",
    "hotsaleConfig", // 酒店限时抢购
    // "icon_show",
    // "info_env_setting",
    // "ip_square",
    // "ip_square_share",
    // "isNewSearchMapCard", // 可能是足迹
    // "isPoiBubbleDisplay",
    // "lab_beta",
    // "lab_screenrecording",
    "landing_page_info", // 发现吃喝玩乐好去处
    // "list_action_drawer",
    // "listguide",
    // "map_environment_air",
    // "map_weather_switch", // 天气
    // "maplayers", // 赏花地图
    // "message_tab",
    "navi_end", // 导航结束 领油滴
    // "nearby",
    "nearby_business_popup",
    "nearby_map_entry_guide",
    "nearby_map_pull_down_guide",
    // "newcommentreply",
    // "nore_rec",
    "operation_layer", // 首页右上角图层
    // "photo_with_location",
    // "poi_rec",
    // "preword",
    // "profileHeaderPic",
    // "profiletTopBtn",
    // "recommend_api",
    // "recommend_key",
    // "redesign_user",
    // "renovate_control", // 今夜特价
    "route_banner", // 搜索路线 免费抽机票
    "routeresult_banner",
    "search_homepage",
    "search_keyword",
    "search_moni",
    "search_perf",
    "search_poi_recommend",
    "search_service_adcode",
    "search_word",
    "small_biz_b2b_kb", // 入驻高德
    "small_biz_case", // 推广
    "small_biz_fun",
    "small_biz_index",
    "small_biz_news",
    "splashscreen",
    "splashview_config",
    "sur_bar", // 十一特惠
    "taxi_activity", // 打车活动
    // "tel_retention_popup",
    "testflight_adiu",
    "tf_remind", // tf测试版
    // "third_party_places",
    "tips_bar_black_list",
    // "tips_hook",
    // "trackupload",
    // "user_insight", // 您对本次导航满意吗
    "vip"
    // "weather_restrict_config",
  ];
  if (obj?.data) {
    for (let i of items) {
      if (obj?.data?.[i]) {
        obj.data[i] = { status: 1, version: "", value: "" };
      }
    }
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
} else if (url.includes("/shield/search/poi/detail")) {
  //搜索地点详情页
  if (obj?.data?.modules) {
    const items = ["comprehensiveEditEntranc", "check_in", "reviews", "merchantSettlement", "societyPublicExperience", "widgets", "business_scope", "business_scope", "comprehensiveEditEntrance", "claim", "evaluateVO", "discount_commodity", "yellowPageAdRecommendModule", "similarShopRecommend", "commonGoodsShelf", "platformCustomerCommonModule", "platformCustomerComplianceInfo", "subscription", "shopQualifications", "verification", "shopBasePerson", "brand_story", "push_data", "businessQualifications", "brand_service", "horizontalGoodsShelf", "CouponBanner", "poiDetailNewBeltV2", "human_traffic", "floorGuideGbf", "new_operation_banner", "commonAiAgent", "similarShelfRecommend", "travelGuideAndQa", "poiDetailWaterFeed", "poiDetailWaterFeedTitle", "dayTripRecommendList", "adStoreBigBannerModule", "outdoorActivity", "dayTripList", "scenic_ticket", "mini_hook_shelf", "scenic_filter", "packageShelf", "poiDetailCommonConfig", "serviceBookingGoodsShelf", "waterFallFeedTitle", "cityCardFeed", "hotelList", "flash_purchase_ticket", "cards", "hotelRooms", "roomSelect", "shop_story", "house_price_v2", "gas_station_recommend", "nearbyGoodCar", "shoppingMallEvent", "official_account", "houseShelf", "residentialOwners", "carServiceCard", "hotelMustRead", "hotelFacilities", "scenic_mustplay", "legal_document", "surroundOldSellHouse", "recommend_food", "surroundRentHouse", "rentSaleHouse", "serviceGuide", "anchor", "poiMapModule", "hkfMiniPortal", "transportation", "navbarMore", "enhanceCustomerServicePoiModule", "shopStructGift", "nearbyRecommendModule"];
    for (let i of items) {
      delete obj.data.modules[i];
    }
  }
  if (obj.data?.modules?.attractGalleryInfo?.length > 0) {
    obj.data.modules.attractGalleryInfo = obj.data.modules.attractGalleryInfo.filter((i) => i?.card_id === "AttractGalleryUpload");
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
} else if (url.includes("/shield/search_business/process/middleLayer")) {
  // 搜索页列表净化
  if (obj?.city_list?.tip_list?.tip) {
      let list = obj.city_list.tip_list.tip;
  if (list?.product_info)
      delete list.product_info;
  }
} else if (url.includes("/shield/search_poi/homepage")) {
  // 首页 搜索框历史记录 推广标签
  if (obj?.history_tags) {
    delete obj.history_tags;
  }
} else if (url.includes("/shield/search_poi/search/sp") || url.includes("/shield/search_poi/mps")) {
  if (obj?.data?.list_data) {
    let list = obj.data.list_data.content[0];
    // 详情页 底部 房产推广
    if (list?.hookInfo) {
      let hookData = list.hookInfo.data;
      if (hookData?.header) {
        delete hookData.header;
      }
      if (hookData?.house_info) {
        delete hookData.house_info;
      }
    }
    // 详情页 底部 订酒店
    if (list?.map_bottom_bar?.hotel) {
      delete list.map_bottom_bar.hotel;
    }
    if (list?.poi?.item_info?.tips_bottombar_button?.hotel) {
      delete list.poi.item_info.tips_bottombar_button.hotel;
    }
    // 地图优惠推广
    if (list?.map?.main_point) {
      delete list.map.main_point;
    }
    if (list?.tips_operation_info) {
      delete list.tips_operation_info;
    }
    if (list?.bottom?.bottombar_button?.hotel) {
      delete list.bottom.bottombar_button.hotel;
    }
    // 搜索页 顶部卡片
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
    // 搜索列表详情页
    let poi = obj.data.district.poi_list[0];
    // 订票横幅
    if (poi?.transportation) {
      delete poi.transportation;
    }
    // 景点门票 酒店特惠 特色美食 休闲玩乐
    if (poi?.feed_rec_tab) {
      delete poi.feed_rec_tab;
    }
  } else if (obj?.data?.modules) {
    if (obj?.data?.modules?.not_parse_result?.data?.list_data) {
      let list = obj.data.modules.not_parse_result.data.list_data.content[0];
      // 详情页 底部 房产推广
      if (list?.hookInfo) {
        let hookData = list.hookInfo.data;
        if (hookData?.header) {
          delete hookData.header;
        }
        if (hookData?.house_info) {
          delete hookData.house_info;
        }
      }
      // 详情页 底部 订酒店
      if (list?.map_bottom_bar?.hotel) {
        delete list.map_bottom_bar.hotel;
      }
      if (list?.poi?.item_info?.tips_bottombar_button?.hotel) {
        delete list.poi.item_info.tips_bottombar_button.hotel;
      }
      // 地图优惠推广
      if (list?.map?.main_point) {
        delete list.map.main_point;
      }
      // 左上角动图推广
      if (list?.tips_operation_info) {
        delete list.tips_operation_info;
      }
      if (list?.bottom?.bottombar_button?.hotel) {
        delete list.bottom.bottombar_button.hotel;
      }
    }
    if (obj?.data?.modules?.list_data?.data) {
      // 搜索列表
      let list = obj.data.modules.list_data.data;
      if (list?.content?.length > 0) {
        // brandAdCard广告卡片 toplist_al人气榜单 高德指南
        list.content = list.content.filter((i) => !["brandAdCard", "toplist_al"]?.includes(i?.item_type));
      }
    }
  }
} else if (url.includes("/shield/search_poi/sug")) {
  if (obj?.tip_list) {
    let newLists = [];
    if (obj?.tip_list?.length > 0) {
      for (let item of obj.tip_list) {
        if (
          ["12"]?.includes(item?.tip?.datatype_spec) ||
          ["ad", "poi_ad", "toplist"]?.includes(item?.tip?.result_type) ||
          ["ad", "exct_query_sug_merge_theme", "query_sug_merge_theme", "sp"]?.includes(item?.tip?.task_tag)
        ) {
          continue;
        } else {
          newLists.push(item);
        }
      }
      obj.tip_list = newLists;
    }
  } else if (obj?.city_list) {
    let newLists = [];
    if (obj?.city_list?.length > 0) {
      for (let item of obj.city_list) {
        let newTips = [];
        if (item?.tip_list?.length > 0) {
          for (let ii of item.tip_list) {
            if (["12"]?.includes(ii?.tip?.datatype_spec)) {
              continue;
            } else if (["ad", "poi_ad"]?.includes(ii?.tip?.result_type)) {
              continue;
            } else {
              newTips.push(ii);
            }
          }
          item.tip_list = newTips;
        }
        newLists.push(item);
      }
      obj.city_list = newLists;
    }
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