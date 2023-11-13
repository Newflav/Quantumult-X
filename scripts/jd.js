// 2023-11-13 18:40

const url = $request.url;
const isResponse = typeof $response !== "undefined";
let body = $response.body;

    // 京东-个人主页
    case /^https:\/\/api\.m\.jd\.com\/client\.action\?functionId=personinfoBusiness/.test(url):
      try {
        let obj = JSON.parse(body);
        if (obj?.floors?.length > 0) {
          let newFloors = [];
          for (let floor of obj.floors) {
            // orderIdFloor我的订单 keyToolsFloor浏览记录 newWalletIdFloor我的钱包 iconToolFloor底部工具栏
            const items = [
              "bigSaleFloor", // 双十一
              "buyOften", // 常买常逛
              "newAttentionCard", // 关注的频道
              "newBigSaleFloor", // 双十一
              "noticeFloor", // 顶部横幅
              "recommendfloor" // 我的推荐
            ];
            if (items?.includes(floor?.mId)) {
              continue;
            } else {
              if (floor?.mId === "basefloorinfo") {
                // 弹窗
                if (floor?.data?.commonPopup) {
                  delete floor.data.commonPopup;
                }
                // 弹窗
                if (floor?.data?.commonPopup_dynamic) {
                  delete floor.data.commonPopup_dynamic;
                }
                // 底部会员续费横幅
                if (floor?.data?.commonTips?.length > 0) {
                  floor.data.commonTips = [];
                }
                // 弹窗
                if (floor?.data?.commonWindows?.length > 0) {
                  floor.data.commonWindows = [];
                }
                // 右下角动图
                if (floor?.data?.floatLayer) {
                  delete floor.data.floatLayer;
                }
              } else if (floor?.mId === "orderIdFloor") {
                if (floor?.data?.commentRemindInfo?.infos?.length > 0) {
                  // 发布评价的提醒
                  floor.data.commentRemindInfo.infos = [];
                }
              } else if (floor?.mId === "userinfo") {
                // 顶部背景图 去掉会导致顶部黑字在黑暗模式中无法显示 暂时保留
                // if (floor?.data?.bgImgInfo?.bgImg) {
                //   delete floor.data.bgImgInfo.bgImg;
                // }
                // 开通plus会员卡片
                if (floor?.data?.newPlusBlackCard) {
                  delete floor.data.newPlusBlackCard;
                }
              }
              newFloors.push(floor);
            }
          }
          obj.floors = newFloors;
        }
        body = JSON.stringify(obj);
      } catch (error) {
        console.log(`京东-个人主页, 出现异常: ` + error);
      }
      break;
  // 京东-开屏广告
  case /^https:\/\/api\.m\.jd\.com\/client\.action\?functionId=start/.test(url):
    try {
      let obj = JSON.parse(body);
      if (obj?.images?.length > 0) {
        obj.images = [];
      }
      if (obj?.showTimesDaily) {
        obj.showTimesDaily = 0;
      }
      body = JSON.stringify(obj);
    } catch (error) {
      console.log(`京东-开屏广告, 出现异常: ` + error);
    }
    break;
  case /^https:\/\/api\.m\.jd\.com\/client\.action\?functionId=welcomeHome/.test(url):
    // 京东-首页配置
    try {
      let obj = JSON.parse(body);
      if (obj?.webViewFloorList?.length > 0) {
        // 首页二楼
        obj.webViewFloorList = [];
      }
      if (obj?.floorList?.length > 0) {
        // float推广浮层 recommend为你推荐 ruleFloat资质与规则 searchIcon右上角消费券 topRotate左上角logo
        obj.floorList = obj.floorList.filter(
          (i) => !["float", "ruleFloat", "searchIcon", "topRotate"]?.includes(i?.type)
        );
      }
      body = JSON.stringify(obj);
    } catch (error) {
      console.log(`京东-首页配置, 出现异常: ` + error);
    }
    break;

  default:
    $done({});
}

$done({ body });