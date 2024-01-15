let body = JSON.parse($response.body);

    if (body.data.infos.ad_content.ad_source.image) {
        body.data.infos.ad_content.ad_source.image = [];
    }
    if (body.data.infos) {
        body.data.infos = [];
    }
    if ('data' in body) {
        if (body.data.not_show_m_ad === "0") {
            body.data.not_show_m_ad = '1';
    }
} else {
  $done({});
}
$done({ body: JSON.stringify(body) });