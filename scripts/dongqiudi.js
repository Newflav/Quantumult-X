if (!$response.body) $done({});
const url = $request.url;
let obj = JSON.parse($response.body);

  if ("ad_content" in obj) {
    delete obj;
  }
} else {
  $done({});
}

$done({ body: JSON.stringify(obj) });