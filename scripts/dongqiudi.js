const url = $request.url;
if (!$response.body) $done({});
let obj = JSON.parse($response.body);

if (url.includes("/v2/article/detail")) {
  if (obj?.data?.infos?.ad_content?.length > 0) {
    delete obj.data.infos.ad_content
  }
  if (obj?.data?.infos?.column) {
    obj.data.infos.column = {};
  }
} else if (url.includes("/data/match/pre_analysis")) {
  if (obj?.asian_plans) {
    obj.asian_plans = {};
  }
} else {
  $done({});
}

$done({ body: JSON.stringify(obj) });