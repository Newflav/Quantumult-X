const url = $request.url;
if (!$response.body) $done({});
let obj = JSON.parse($response.body);
  
  if (url.includes("/v2/article/detail")) {
    if (obj.data?.infos) {
    obj.data.infos = obj.data.infos.filter(
      (item) =>
        item.name === "channels" ||
        item.name === "column" ||
    );
    fixPos(obj.data.infos);
  }
} else {
  $done({});
}

$done({ body: JSON.stringify(obj) });