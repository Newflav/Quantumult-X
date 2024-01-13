var body = $response.body;
var json = JSON.parse(body);

let body = JSON.parse($response.body);
  if (body.data?.info?.ad_content) {
      body.data.infos.ad_content = null;
  }

$done({ body: JSON.stringify(json) });