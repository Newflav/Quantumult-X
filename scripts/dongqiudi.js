const url = $request.url;
if (!$response.body) $done({});
let obj = JSON.parse($response.body);

  if (obj?.data?.infos?.ad_content?.ad_resource?.length > 0) {
    obj.data.infos.ad_content.ad_resource = [];
  }
} else {
  $done({});
}

$done({ body: JSON.stringify(obj) });