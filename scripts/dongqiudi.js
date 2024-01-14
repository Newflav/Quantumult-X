if (!$response.body) $done({});
let obj = JSON.parse($response.body);

  if (obj.data?.infos?.ad_content) {
      detele.obj.data.infos.ad_content;
  }

$done({ body: JSON.stringify(obj) });