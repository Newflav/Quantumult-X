let body = JSON.parse($response.body);

    if ('data' in body)
        if (body.data.not_show_m_ad === "0") {
            body.data.not_show_m_ad = '1';

$done({ body: JSON.stringify(body) });