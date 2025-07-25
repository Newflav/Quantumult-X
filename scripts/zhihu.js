// 2025-07-03 16:35

if (!$response.body) $done({});
const url = $request.url;
let obj = JSON.parse($response.body);

if (url.includes("/api/cloud/config/all")) {
  if (obj?.data?.configs) {
    obj.data.configs.forEach((i) => {
      if (i.configKey === "feed_gray_theme") {
        if (i.configValue) {
          i.configValue.start_time = "2208960000";
          i.configValue.end_time = "2209046399";
          i.status = false;
        }
      } else if (i.configKey === "feed_top_res") {
        if (i.configValue) {
          i.configValue.start_time = "2208960000";
          i.configValue.end_time = "2209046399";
          i.status = false;
        }
      }
    });
  }
} else if (url.includes("answers/v2") || url.includes("articles/v2")) {
    if (obj?.third_business) {
      delete obj.third_business;
  }
    if (obj?.endorsement) {
      delete obj.endorsement;
  }
    if (obj?.interaction_bar_plugins) {
      delete obj.interaction_bar_plugins;
  }
    if (obj?.structured_content?.segments?.length > 0) {
      obj.structured_content.segments = obj.structured_content.segments.filter(
        (i) => !["heading", "card"]?.includes(i?.type)
    );
  }
} else if (url.includes("/api/v4/answers")) {
  if (obj?.data) {
    delete obj.data;
  }
  if (obj?.paging) {
    delete obj.paging;
  }
} else if (url.includes("/api/v4/articles")) {
  const item = ["ad_info", "paging", "recommend_info"];
  item.forEach((i) => {
    delete obj[i];
  });
} else if (url.includes("/appcloud2.zhihu.com/v3/config")) {
  if (obj?.config) {
    if (obj.config?.homepage_feed_tab) {
      obj.config.homepage_feed_tab.tab_infos =
        obj.config.homepage_feed_tab.tab_infos.filter((i) => {
          if (i.tab_type === "activity_tab") {
            i.start_time = "2208960000";
            i.end_time = "2209046399";
            return true;
          } else {
            return false;
          }
        });
    }
    if (obj.config?.hp_channel_tab) {
      delete obj.config.hp_channel_tab;
    }
    if (obj.config?.zombie_conf) {
      obj.config.zombie_conf.zombieEnable = false;
    }
    if (obj.config?.gray_mode) {
      obj.config.gray_modeenable = false;
      obj.config.gray_mode.start_time = "2208960000";
      obj.config.gray_mode.end_time = "2209046399";
    }
    if (obj.config?.zhcnh_thread_sync) {
      obj.config.zhcnh_thread_sync.LocalDNSSetHostWhiteList = [];
      obj.config.zhcnh_thread_sync.isOpenLocalDNS = "0";
      obj.config.zhcnh_thread_sync.ZHBackUpIP_Switch_Open = "0";
      obj.config.zhcnh_thread_sync.dns_ip_detector_operation_lock = "1";
      obj.config.zhcnh_thread_sync.ZHHTTPSessionManager_setupZHHTTPHeaderField =
        "1";
    }
    obj.config.zvideo_max_number = 1;
    obj.config.is_show_followguide_alert = false;
  }
} else if (url.includes("/commercial_api/app_float_layer")) {
  // 悬浮图标
  if (obj?.feed_egg) {
    delete obj.feed_egg;
  }
} else if (url.includes("/moments_v3")) {
  if (obj?.data?.length > 0) {
    obj.data = obj.data.filter((i) => !i?.title?.includes("为您推荐"));
  }
} else if (url.includes("/next-bff")) {
  if (obj?.data?.length > 0) {
    obj.data = obj.data.filter(
      (i) =>
        !(
          i?.origin_data?.type?.includes("ad") ||
          i?.origin_data?.resource_type?.includes("ad") ||
          i?.origin_data?.next_guide?.title?.includes("推荐")
        )
    );
  }
} else if (url.includes("/next-data")) {
  if (obj?.data?.data?.length > 0) {
    obj.data.data = obj.data.data.filter(
      (i) =>
        !(i?.type?.includes("ad") || i?.data?.answer_type?.includes("PAID"))
    );
  }
} else if (url.includes("/next-render")) {
  if (obj?.data?.length > 0) {
    obj.data = obj.data.filter(
      (i) =>
        !(
          i?.adjson ||
          i?.biz_type_list?.includes("article") ||
          i?.biz_type_list?.includes("content") ||
          i?.business_type?.includes("paid") ||
          i?.section_info ||
          i?.tips ||
          i?.type?.includes("ad")
        )
    );
  }
} else if (url.includes("/questions/")) {
  // 问题回答列表
  if (obj?.data?.length > 0) {
    obj.data = obj.data.filter(
      (i) => !i?.target?.answer_type?.includes("paid")
    );
  }
  if (obj?.data?.ad_info) {
    delete obj.data.ad_info;
  }
  if (obj?.ad_info) {
    delete obj.ad_info;
  }
  if (obj?.query_info) {
    delete obj.query_info;
  }
} else if (url.includes("/topstory/hot-lists/everyone-seeing")) {
  // 热榜信息流
  if (obj?.data?.data?.length > 0) {
    // 合作推广
    obj.data.data = obj.data.data.filter(
      (i) => !i.target?.metrics_area?.text?.includes("合作推广")
    );
  }
} else if (url.includes("/topstory/hot-lists/total")) {
  // 热榜排行榜
  if (obj?.data?.length > 0) {
    // 品牌甄选
    obj.data = obj.data.filter((i) => !i?.hasOwnProperty("ad"));
  }
} else if (url.includes("/topstory/recommend")) {
  // 推荐信息流
  if (obj?.data?.length > 0) {
    obj.data = obj.data.filter((i) => {
      if (
        i.type === "market_card" &&
        i.fields?.header?.url &&
        i.fields.body?.video?.id
      ) {
        let videoID = getUrlParamValue(item.fields.header.url, "videoID");
        if (videoID) {
          i.fields.body.video.id = videoID;
        }
      } else if (i.type === "common_card") {
        if (i.extra?.type === "drama") {
          // 直播内容
          return false;
        } else if (i.extra?.type === "zvideo") {
          // 推广视频
          let videoUrl = i.common_card.feed_content.video.customized_page_url;
          let videoID = getUrlParamValue(videoUrl, "videoID");
          if (videoID) {
            i.common_card.feed_content.video.id = videoID;
          }
        } else if (i.common_card?.feed_content?.video?.id) {
          let search = '"feed_content":{"video":{"id":';
          let str = $response.body.substring(
            $response.body.indexOf(search) + search.length
          );
          let videoID = str.substring(0, str.indexOf(","));
          i.common_card.feed_content.video.id = videoID;
        } else if (
          i.common_card?.footline?.elements?.[0]?.text?.panel_text?.includes(
            "广告"
          )
        ) {
          return false;
        } else if (
          i.common_card?.feed_content?.source_line?.elements?.[1]?.text?.panel_text?.includes(
            "盐选"
          )
        ) {
          return false;
        } else if (i?.promotion_extra) {
          // 营销信息
          return false;
        }
        return true;
      } else if (i.type.includes("aggregation_card")) {
        // 横排卡片 知乎热榜
        return false;
      } else if (i.type === "feed_advert") {
        // 伪装成正常内容的卡片
        return false;
      }
      return true;
    });
    fixPos(obj.data);
  }
}

$done({ body: JSON.stringify(obj) });

// 修复offset
function fixPos(arr) {
  for (let i = 0; i < arr.length; i++) {
    arr[i].offset = i + 1;
  }
}

function getUrlParamValue(url, queryName) {
  return Object.fromEntries(
    url
      .substring(url.indexOf("?") + 1)
      .split("&")
      .map((pair) => pair.split("="))
  )[queryName];
}