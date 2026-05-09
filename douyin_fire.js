const $ = new Env("抖音小火人喂食");
const key = "DouYin_Fire_Cookie";

(async () => {
  let cookie = $persistentStore.read(key);
  if (!cookie) {
    $.msg("喂食失败", "无Cookie", "挂QX打开抖音一次抓包");
    return $done();
  }

  // 小火人喂食接口
  const url = "https://www.douyin.com/xxxx/fire/feed";
  const headers = {
    Cookie: cookie,
    "User-Agent": "QuantumultX/1.5.5 (iPhone15,3; iOS 17.0)"
  };

  $httpClient.get({ url, headers }, (err, resp, body) => {
    if (err) {
      $.msg("小火人喂食", "请求失败", err);
    } else {
      $.msg("小火人喂食成功", "返回", body.slice(0, 120));
    }
    $done();
  });
})();

function Env(n) {
  this.name = n;
  this.msg = (t,s,c)=>$notification.post(t,s,c);
}
