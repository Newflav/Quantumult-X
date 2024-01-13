var body = $response.body;
var json = JSON.parse(body);

let body = JSON.parse($response.body);
if (body?.data?.infos?.ad_content) {
            delete body.data.infos.ad_content;
          }

$done({ body: JSON.stringify(json) });