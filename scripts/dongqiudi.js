var body = $response.body;
var json = JSON.parse(body);

if (data?.infos?.ad_content) {
            delete data.infos.ad_content;
          }

$done({ body: JSON.stringify(json) });