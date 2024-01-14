if (!$response.body) $done({});
let obj = JSON.parse($response.body);

  if (obj.data?.infos?.ad_content) {
      obj.data.infos.ad_content = null;
  }

$done({ body: JSON.stringify(json) });