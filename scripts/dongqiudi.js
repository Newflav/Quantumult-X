const url = $request.url;
if (!$response.body) $done({});
let obj = JSON.parse($response.body);

if (obj.data?.infos?.ad_content) {
    delete obj.data.infos.ad_content;
  }
} else {
  $done({});
}

$done({ body: JSON.stringify(obj) });