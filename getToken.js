/*************************************

自动获取 token

**************************************/

if ($request) {

  const headers = $request.headers;

  const token = headers['x-token'] || headers['X-Token'];
  const authentication = headers['authentication'];

  if (token) {
    $prefs.setValueForKey(token, 'qx_sign_token');
  }

  if (authentication) {
    $prefs.setValueForKey(authentication, 'qx_sign_auth');
  }

  $notify(
    'token获取成功',
    '',
    '已自动更新'
  );

  console.log('x-token: ' + token);
  console.log('authentication: ' + authentication);

  $done({});
}

$done({});
