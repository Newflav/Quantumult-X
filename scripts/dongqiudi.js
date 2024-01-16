const url = $request.url;
if (!$response.body) $done({});
let obj = JSON.parse($response.body);

if (url.includes("/v2/article/detail")) {
if (ojb?.data?.infos?.ad_content) {
        ojb.data.infos.ad_content = [1];
    }
} else {
  $done({});
}

$done({ body: JSON.stringify(obj) });