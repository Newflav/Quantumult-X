const url = $request.url;
if (!$response.body) $done({});
let obj = JSON.parse($response.body);

if (url.includes("/boss/car/order/content_info")) {
  if (obj?.data?.infos?.ad_content?.length > 0) {
    obj.data.infos.ad_content = [];
  }
}
