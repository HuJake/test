app.get('/jaketest', function(req, res) {
    
    var token = req.body.token;
    // set cookie
    res.cookie('access_token',token, { domain: '.example.com.tw' });
    res.cookie('token_type' ,"bearer", { domain: '.example.com.tw' });
    res.cookie('refresh_token' ,"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX25hbWUiOiJjaHQvYWNtdXNlcjEiLCJzY", { domain: '.example.com.tw' });
    res.cookie('expires_in' ,"35999", { domain: '.example.com.tw' });
    res.cookie('scope' ,"acm", { domain: '.example.com.tw' });
    res.cookie('jti' ,"c46b5999-a55c-46d9-84e8-850547009ac3", { domain: '.example.com.tw' });
    // redirect
    res.redirect('http://abc.example.com.tw/sso/') // 302 redirect
})
