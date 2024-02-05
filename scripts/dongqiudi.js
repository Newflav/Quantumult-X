const url = $request.url;
if (!$response.body) $done({});
let obj = JSON.parse($response.body);

if (url.includes("/article/detail")) {
  if (obj.data?.topic_tags?.length > 0) {
    obj.data.topic_tags = [];
  }
  if (obj.data?.infos?.length > 0) {
    obj.data.infos = obj.data.infos.filter((i) => !i.hasOwnProperty("column"));
  }
} else if (url.includes("/data/match/pre_analysis")) {
  if (obj.asian_plans?.length > 0) {
    ojb.asian_plans = [];
  }
} else {
  $done({});
}

$done({ body: JSON.stringify(obj) });