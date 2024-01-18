const url = $request.url;
if (!$response.body) $done({});
let obj = JSON.parse($response.body);

if (url.includes("/v2/article/detail")) {
   if (obj?.data?.body?.length > 0) {
    obj.data.body = obj.data.body.filter(
      (i) => !["1080"]?.includes(i?.data-width)
    );
  }
} else {
  $done({});
}

$done({ body: JSON.stringify(obj) });