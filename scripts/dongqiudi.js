const url = $request.url;
if (!$response.body) $done({});
let obj = JSON.parse($response.body);

if (url.includes("/v2/article")) {
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
  if (obj?.data?.comment_list?.length > 0) {
    obj.data.comment_list = obj.data.comment_list.filter(
      (i) => !["12320463"]?.includes(i?.user_id)
    );
  }
  if (obj?.data?.recommend_list?.length > 0) {
    obj.data.recommend_list = obj.data.recommend_list.filter(
      (i) => !["12320463"]?.includes(i?.user_id)
    );
  }
} else if (url.includes("/data/match/pre_analysis")) {
  if (obj?.asian_plans) {
    obj.asian_plans = {};
  }
} else if (url.includes("/data/detail/match")) {
  if (obj?.matchSample?.competition_bk_logo?.length > 0) {
    delete obj.matchSample.competition_bk_logo;
  }
}

$done({ body: JSON.stringify(obj) });