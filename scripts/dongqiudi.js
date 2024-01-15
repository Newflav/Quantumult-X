if (!$response.body) $done({});
let body = JSON.parse($response.body);
    
    if (body.data?.infos) {
        delete body.data.infos;
    }
} else {
  $done({});
}
$done({ body: JSON.stringify(body) });