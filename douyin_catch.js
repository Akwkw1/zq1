const host = $request.headers.host || '';
if (host.includes('douyin.com')) {
  let ck = $request.headers.Cookie || $request.headers.cookie;
  if (ck) {
    $persistentStore.write(ck, "DouYin_Fire_Cookie");
    $notification.post("抖音小火人", "Cookie抓取成功", "已自动保存可喂食");
  }
}
$done({});
