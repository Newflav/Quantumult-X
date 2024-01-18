const url = $request.url;
if (!$response.body) $done({});
let obj = JSON.parse($response.body);

if (url.includes("/v2/article/detail")) {
  if (obj?.data?.infos?.ad_content?.length > 0) {
    obj.data.infos.ad_content = obj.data.infos.ad_content.filter(
      (i) => !["banner"]?.includes(i?.ad_type)
    );
  }
} else {
  $done({});
}

$done({ body: JSON.stringify(obj) });