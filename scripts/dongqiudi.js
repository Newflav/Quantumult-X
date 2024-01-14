console.log(`json-2024.1.14`);
let body = JSON.parse($response.body);

    if ('data' in body) {
        if (body.data.not_show_m_ad === "0") {
            body.data.not_show_m_ad = '1';
            console.log('不展示广告');
        }

$done({ body: JSON.stringify(body) });