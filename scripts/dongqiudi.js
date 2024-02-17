const url = $request.url;
if (!$response.body) $done({});
let obj = JSON.parse($response.body);

if (url.includes("/v2/article")) {
  // 文章广告
  if (obj?.data?.topic_tags?.length > 0) {
    delete obj.data.topic_tags;
  }
  if (obj?.data?.infos?.ad_content?.length > 0) {
    delete obj.data.infos.ad_content;
  }
  if (obj?.data?.infos?.column) {
    obj.data.infos.column = {};
  }
  if (obj?.data?.infos?.channels?.length > 0) {
    obj.data.infos.channels = obj.data.infos.channels.filter(
      (i) => !["剑南春"]?.includes(i?.tag)
    );
  }
  // 评论区广告
  if (obj?.data?.comment_list?.length > 0) {
    obj.data.comment_list = 
obj.data.comment_list.filter(
      (i) => !["12320463"]?.includes(i?.user_id)
    );
  }
  if (obj?.data?.recommend_list?.length > 0) {
   obj.data.recommend_list = obj.data.recommend_list.filter(
      (i) => !["12320463"]?.includes(i?.user_id)
    );
  }
} else if (url.includes("/match/pre_analysis")) {
  // 直播页广告
  if (obj?.asian_plans) {
    obj.asian_plans = {};
  }
} else if (url.includes("/detail/match")) {
  if (obj?.matchSample?.competition_bk_logo?.length > 0) {
    delete obj.matchSample.competition_bk_logo;
  }
} else if (url.includes("/articles/info")) {
  if (obj?.share_image_info) {
    obj.share_image_info = {};
  }
  if (obj?.share_miniprogram) {
    delete obj.share_miniprogram;
  }
  if (obj?.miniprogram_path) {
    delete obj.miniprogram_path;
  }
  if (obj?.shares_total) {
    delete obj.shares_total;
  }
  if (obj?.miniprogram_id) {
    delete obj.miniprogram_id;
  }
  if (obj?.share) {
    delete obj.share;
  }
  if (obj?.url) {
    delete obj.url;
  }
  if (obj?.thumb) {
    delete obj.thumb;
  }
}

$done({ body: JSON.stringify(obj) });