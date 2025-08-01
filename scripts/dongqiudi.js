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
  if (obj?.data?.body) {
  obj.data.body = obj.data.body
    .replace(/https:\/\/bdimg6\.qunliao\.info\/fastdfs7\/M00\/B3\/2A\/rBUBsmbwW56AIsp-AACsJBHa6v0979\.jpg/g, "");
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
}

$done({ body: JSON.stringify(obj) });