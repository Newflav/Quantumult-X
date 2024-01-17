const url = $request.url;
if (!$response.body) $done({});
let obj = JSON.parse($response.body);

if (url.includes("/v2/article/detail")) {
  if (obj.data?.infos) {
    obj.data.infos = [
      {
        channels: 
        column: 
      }
    ];
  }
} else {
  $done({});
}

$done({ body: JSON.stringify(obj) });