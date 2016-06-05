/**
 * Main application routes
 */

'use strict';

import errors from './components/errors';
import path from 'path';
var requestify = require('requestify');


var client_id="db1709737d07de486728";
var secret = "d95f21a78183735143f2d496bc5c049cc47601e5";
var redirect_uri="https://repo-explorer.herokuapp.com/success";
var authURL="https://github.com/login/oauth/authorize?client_id="+client_id+"&redirect_uri="+redirect_uri;
var tokenURL = "https://github.com/login/oauth/access_token";


export default function(app) {
  // Insert routes below
  app.use('/authUrl',function index(req, res) {
    res.json({url: authURL});
  });

  app.use('/success',  function index(req, res) {
    console.log(req.query.code);
    requestify.post(tokenURL, {
      client_id: client_id,
      client_secret : secret,
      code : req.query.code,
      redirect_uri : 'https://repo-explorer.herokuapp.com/repos'
    }).then(function(response) {
        res.redirect('/repos/' + response.getBody().access_token);
    });


  });
  // All undefined asset or api routes should return a 404
  app.route('/:url(api|auth|components|app|bower_components|assets)/*')
   .get(errors[404]);

  // All other routes should redirect to the index.html
  app.route('/*')
    .get((req, res) => {
      res.sendFile(path.resolve(app.get('appPath') + '/index.html'));
    });
}
