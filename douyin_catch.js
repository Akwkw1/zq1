// QuantumultX 抖音APP 劫持抓取 Cookie 重写脚本
const url = $request.url;
const host = $request.headers.host || "";

// 匹配抖音域名
if (host.includes("douyin.com") || host.includes("bytedance.com")) {
    const cookie = $request.headers.Cookie || $request.headers.cookie;
    if (cookie) {
        // 持久化保存抖音Cookie
        $persistentStore.write(cookie, "DouYin_Fire_Cookie");
        $notification.post("✅ 抖音Cookie抓取成功", "已保存", "可用于小火人自动喂食");
    }
}

$done({});
