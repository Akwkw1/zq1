/*************************************

自动签到

**************************************/

const token = $prefs.valueForKey('qx_sign_token');
const authentication = $prefs.valueForKey('qx_sign_auth');

if (!token || !authentication) {

  $notify(
    '自动签到失败',
    '',
    '没有获取到token'
  );

  $done();
}

const url = 'http://bkbf.xn--vhqr42drhf5k7b.com/app/task/sign';

const headers = {
  'content-type': 'application/json; charset=utf-8',
  'x-token': token,
  'ts': Date.now().toString(),
  'authentication': authentication,
  'x-version': '2024-09-24',
  'host': 'bkbf.xn--vhqr42drhf5k7b.com',
  'user-agent': 'Dart/3.6 (dart:io)',
  'appid': '4150439554430627',
  'accept-encoding': 'gzip'
};

const request = {
  url,
  method: 'POST',
  headers,
  body: ''
};

$task.fetch(request).then(response => {

  const body = response.body || '';

  console.log(body);

  $notify(
    '自动签到',
    '执行完成',
    body
  );

  $done();

}, reason => {

  console.log(reason.error);

  $notify(
    '签到失败',
    '',
    reason.error
  );

  $done();

});
