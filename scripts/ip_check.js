if ($response.statusCode != 200) {
  $done(null);
}

const emojis = [
  "🆘",
  "🈲",
  "⚠️",
  "🔞",
  "📵",
  "🚦",
  "🏖",
  "🖥",
  "📺",
  "🐧",
  "🐬",
  "🦉",
  "🍄",
  "⛳️",
  "🚴",
  "🤑",
  "👽",
  "🤖",
  "🎃",
  "👺",
  "👁",
  "🐶",
  "🐼",
  "🐌",
  "👥",
];
var city0 = "未知地区";
var isp0 = "未知服务商";
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
function City_ValidCheck(para) {
  if (para) {
    return para;
  } else {
    return city0;
    //emojis[getRandomInt(emojis.length)]
  }
}
function ISP_ValidCheck(para) {
  if (para) {
    return para;
  } else {
    return isp0;
    //emojis[getRandomInt(emojis.length)]
  }
}
function Area_check(para) {
  if (para == "中华民国") {
    return "台湾";
  } else {
    return para;
  }
}

var flags = new Map([
  ["AC", "🇦🇨"],
  ["AE", "🇦🇪"],
  ["AF", "🇦🇫"],
  ["AI", "🇦🇮"],
  ["AL", "🇦🇱"],
  ["AQ", "🇦🇶"],
  ["AR", "🇦🇷"],
  ["AS", "🇦🇸"],
  ["AT", "🇦🇹"],
  ["AU", "🇦🇺"],
  ["AW", "🇦🇼"],
  ["AX", "🇦🇽"],
  ["AZ", "🇦🇿"],
  ["BA", "🇧🇦"],
  ["BB", "🇧🇧"],
  ["BD", "🇧🇩"],
  ["BE", "🇧🇪"],
  ["BF", "🇧🇫"],
  ["BG", "🇧🇬"],
  ["BH", "🇧🇭"],
  ["BI", "🇧🇮"],
  ["BJ", "🇧🇯"],
  ["BM", "🇧🇲"],
  ["BN", "🇧🇳"],
  ["BO", "🇧🇴"],
  ["BR", "🇧🇷"],
  ["BS", "🇧🇸"],
  ["BT", "🇧🇹"],
  ["BV", "🇧🇻"],
  ["BW", "🇧🇼"],
  ["BY", "🇧🇾"],
  ["BZ", "🇧🇿"],
  ["CA", "🇨🇦"],
  ["CF", "🇨🇫"],
  ["CH", "🇨🇭"],
  ["CK", "🇨🇰"],
  ["CL", "🇨🇱"],
  ["CM", "🇨🇲"],
  ["CN", "🇨🇳"],
  ["CO", "🇨🇴"],
  ["CP", "🇨🇵"],
  ["CR", "🇨🇷"],
  ["CU", "🇨🇺"],
  ["CV", "🇨🇻"],
  ["CW", "🇨🇼"],
  ["CX", "🇨🇽"],
  ["CY", "🇨🇾"],
  ["CZ", "🇨🇿"],
  ["DE", "🇩🇪"],
  ["DG", "🇩🇬"],
  ["DJ", "🇩🇯"],
  ["DK", "🇩🇰"],
  ["DM", "🇩🇲"],
  ["DO", "🇩🇴"],
  ["DZ", "🇩🇿"],
  ["EA", "🇪🇦"],
  ["EC", "🇪🇨"],
  ["EE", "🇪🇪"],
  ["EG", "🇪🇬"],
  ["EH", "🇪🇭"],
  ["ER", "🇪🇷"],
  ["ES", "🇪🇸"],
  ["ET", "🇪🇹"],
  ["EU", "🇪🇺"],
  ["FI", "🇫🇮"],
  ["FJ", "🇫🇯"],
  ["FK", "🇫🇰"],
  ["FM", "🇫🇲"],
  ["FO", "🇫🇴"],
  ["FR", "🇫🇷"],
  ["GA", "🇬🇦"],
  ["GB", "🇬🇧"],
  ["HK", "🇭🇰"],
  ["HU", "🇭🇺"],
  ["ID", "🇮🇩"],
  ["IE", "🇮🇪"],
  ["IL", "🇮🇱"],
  ["IM", "🇮🇲"],
  ["IN", "🇮🇳"],
  ["IS", "🇮🇸"],
  ["IT", "🇮🇹"],
  ["JP", "🇯🇵"],
  ["KR", "🇰🇷"],
  ["LU", "🇱🇺"],
  ["MO", "🇲🇴"],
  ["MX", "🇲🇽"],
  ["MY", "🇲🇾"],
  ["NL", "🇳🇱"],
  ["PH", "🇵🇭"],
  ["RO", "🇷🇴"],
  ["RS", "🇷🇸"],
  ["RU", "🇷🇺"],
  ["RW", "🇷🇼"],
  ["SA", "🇸🇦"],
  ["SB", "🇸🇧"],
  ["SC", "🇸🇨"],
  ["SD", "🇸🇩"],
  ["SE", "🇸🇪"],
  ["SG", "🇸🇬"],
  ["TH", "🇹🇭"],
  ["TN", "🇹🇳"],
  ["TO", "🇹🇴"],
  ["TR", "🇹🇷"],
  ["TV", "🇹🇻"],
  ["TW", "🇹🇼"],
  ["UK", "🇬🇧"],
  ["UM", "🇺🇲"],
  ["US", "🇺🇸"],
  ["UY", "🇺🇾"],
  ["UZ", "🇺🇿"],
  ["VA", "🇻🇦"],
  ["VE", "🇻🇪"],
  ["VG", "🇻🇬"],
  ["VI", "🇻🇮"],
  ["VN", "🇻🇳"],
  ["ZA", "🇿🇦"],
  ["UA", "🇺🇦"],
  ["MD", "🇲🇩"],
  ["AD", "🇦🇩"],
  ["AM", "🇦🇲"],
  ["AO", "🇦🇴"],
  ["KP", "🇰🇵"],
  ["KY", "🇰🇾"],
  ["KZ", "🇰🇿"],
  ["LA", "🇱🇦"],
  ["NZ", "🇳🇿"],
  ["PK", "🇵🇰"],
  ["NO", "🇳🇴"],
  ["PT", "🇵🇹"],
  ["PL", "🇵🇱"],
  ["GR", "🇬🇷"],
  ["NG", "🇳🇬"],
  ["MV", "🇲🇻"],
  ["KH", "🇰🇭"],
  ["LA", "🇱🇦"],
  ["GU", "🇬🇺"],
  ["MN", "🇲🇳"],
  ["JO", "🇯🇴"],
  ["IR", "🇮🇷"],
  ["OM", "🇴🇲"],
  ["PS", "🇵🇸"],
  ["NP", "🇳🇵"],
  ["LB", "🇱🇧"],
  ["IQ", "🇮🇶"],
  ["SY", "🇸🇾"],
  ["QA", "🇶🇦"],
  ["GE", "🇬🇪"],
  ["LK", "🇱🇰"],
  ["KG", "🇰🇬"],
  ["ME", "🇲🇪"],
  ["LT", "🇱🇹"],
  ["MT", "🇲🇹"],
  ["MC", "🇲🇨"],
  ["HR", "🇭🇷"],
  ["MK", "🇲🇰"],
  ["LV", "🇱🇻"],
  ["SK", "🇸🇰"],
  ["GI", "🇬🇮"],
  ["SM", "🇸🇲"],
  ["LI", "🇱🇮"],
  ["RE", "🇷🇪"],
  ["PA", "🇵🇦"],
  ["GL", "🇬🇱"],
  ["PE", "🇵🇪"],
  ["PY", "🇵🇾"],
  ["JM", "🇯🇲"],
  ["SR", "🇸🇷"],
  ["GT", "🇬🇹"],
  ["PR", "🇵🇷"],
  ["HN", "🇭🇳"],
  ["NI", "🇳🇮"],
  ["GH", "🇬🇭"],
  ["MA", "🇲🇦"],
  ["LY", "🇱🇾"],
  ["KE", "🇰🇪"],
  ["MU", "🇲🇺"],
  ["TL", "🇹🇱"],
  ["SI", "🇸🇮"],
  ["GF", "🇬🇫"],
  ["TG", "🇹🇬"],
]);

// 运行脚本
var body = $response.body;
var obj = JSON.parse(body);
// 展示在顶部开关左边（第1行） 格式：国旗 地区名
var title = flags.get(obj["countryCode"]) + " " + City_ValidCheck(obj["city"]); //+Area_check(obj['country']);
// 展示在顶部开关左边（第2行）
var subtitle = obj['query'] + ' ' + ISP_ValidCheck(obj['isp']);
var ip = obj["query"];
// 长按节点选择“查看节点信息”时的信息
var description =
  "国家:" + 
  flags.get(obj["countryCode"]) + ' ' + obj["country"] +            
  "\n" +
  "服务商:" +
  obj["isp"] +
  "\n" +
  "IP:" +
  obj["query"] +
  "\n" +
  "地区:" +
  City_ValidCheck(obj["regionName"]) +
  "\n" +
  "时区:" +
  obj["timezone"];
$done({ title, subtitle, ip, description });