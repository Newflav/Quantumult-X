var body = $response.body;
var json = JSON.parse(body);
console.log(`json-2024.1.14`);

let body = JSON.parse($response.body);
  if (body.data?.infos?.ad_content) {
      body.data.infos.ad_content = null;
      console.log('去除横幅');
  }

$done({ body: JSON.stringify(json) });