console.log(`贴吧json-2024.1.14`);
let body = JSON.parse($response.body);

    if ('data' in body) {
        if (body.data.not === "0") {
body.screen_fill_data_result.screen_fill_advertisement_bear_switch = '1';
        }

body = JSON.stringify(body);

$done({
    body
});