console.log(`json-2024.1.14`);
let body = JSON.parse($response.body);

    if ('data' in body) {
        if (body.data.not_show_m_ad === "0") {
            body.data.not_show_m_ad = '1';
            console.log('开屏不展示小熊广告');
        } else {
            console.log('无需修改screen_fill_advertisement_bear_switch');
        }
}

body = JSON.stringify(body);

$done({
    body
});