//phantom.injectJs('settings.js');
var casper 	= require('casper').create();
var json 	= require('love.json');
var system 	= require('system');
var fs     	= require('fs');

var username	=json['username'];
var password	=json['password'];
var lastindx	=json['lastindx'];
var profile_dir	=json['profile_dir'];


function saveJSON(){
	//this.echo('[saveJSON]'); DO NOT ECHO IN FUNCTION!!!
	var jsonStr = "{\n";
	jsonStr+= '"username":"'+username+"\",\n";
	jsonStr+= '"password":"'+password+"\",\n";
	jsonStr+= '"lastindx":'+lastindx+",\n";
	jsonStr+= '"profile_dir":"'+profile_dir+"\"\n";
	jsonStr+= '}';
	fs.write('love.json', jsonStr, 'w');
}



casper.echo("Loveplanet Vasja started");
//this.userAgent('Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1)');
casper.userAgent('Mozilla/5.0 (Macintosh; Intel Mac OS X)');
casper.start('https://loveplanet.ru/a-logon', function() {
	phantom.outputEncoding="cp866";
    this.echo(this.getTitle());
	this.capture('love-000.png');
});

//asper.then(function() {
//	this.capture('love-00.png');
//	this.echo("Enter");
//	//this.click('a.gbut_grd_gray.gnl_but30.w90.fbold span');
//	this.capture('love-01.png');
//);

casper.then(function() {
	
	this.capture('love-10.png');
	//*[@id="anketa"]
	//test.assertExists('form[id="anketa"]', "main form is found");
	//this.fill('form[id="anketa"]', {
    //    dlg_login_log: "qwe",
    //     dlg_login_pas: "qwe"
    // }, true);
	 
	//this.fillSelectors('form#user-login', {
    //    'input[name = name ]' : 'abc@gmail.com',
    //    'input[name = pass ]' : 'pwd'
    //}, true);
	//this.waitForSelector("form input[name='login']", function() {
	//	this.fillSelectors('form#user-login', {
	//		'input[name = login]' : 'abc@gmail.com',
	//		'input[name = password ]' : 'pwd'
    //}, true);
	//casper.waitForSelector('form', function(){
	//	this.fill('form', {
	//		'login': 'abc@gmail.com', 
	//		'password': 'pwd'},
	//		true);
	//});
	//this.echo('I am out of selector');
	//this.echo(email);
	//this.echo(password);
	this.echo('Whaiting for form...');
	this.waitForSelector('form', function(){
		this.echo('Form detected');
		this.fill('form', {
			'login': username, 
			'password': password},
			true);
		},
		function(){
			this.echo('ERROR: Form not detected');
		},
		1000);
		
	// <button class="gbut_grd_gray gnl_but30 fbold w75 plr5 fl" type="submit"><span>Войти</span></button>
	this.click('button[type="submit"]');
		
	//<input id="dlg_pict_val" class="inp_grd rds3 w100pct mt10" type="text" maxlength="4" tabindex="6" name="pic" data-place-holder="Введите код" autocomplete="off">	
	//this.waitForSelector('input#dlg_pict_val',function(){
	//		this.echo('Capcha detected. Open capcha.png end enter code:');
	//		this.capture('capcha.png');
	//		var capcha = system.stdin.readLine();
	//		this.waitForSelector('form#anketa', function(){
	//			this.fill('form', {'pic': capcha},true);
	//			this.click('button[name="submit"]');
	//			//this.capture('capcha1.png');	
	//		});
	//	},function(){
	//		this.echo('no capcha');
	//		//this.capture('love-17.png');
	//	},5000
	//);
	//this.echo('filled');
});


//										<div class="fl img_clr"><img name="picture" src="https://pics.loveplanet.ru/captcha/12721763411362766289.jpeg" alt="цифры на картинке" height="50" width="120"></div>
//										<a class="fl mt18 ml10 img_clr" href="#" onclick="document.picture.src='https://pics.loveplanet.ru/captcha/12721763411362766289.jpeg?'+Math.round(Math.random()*10000000);return false;"><img class="refresh_but" src="https://pics.loveplanet.ru/css/3/imgstc/spacer.png" alt="Обновить"></a>
//										<div class="cb"></div>
//										<input placeholder="Введите код" id="dlg_pict_val" class="inp_grd rds3 w100pct mt10" maxlength="4" tabindex="6" name="pic" data-place-holder="Введите код" autocomplete="off" type="text">

//									<button name="submit" class="gbut_grd_blue gnl_but40 w140" type="submit"><span>Войти</span></button>
								


//casper.then(function() {
//	this.echo('submit');
//	this.evaluate(function () {
//        $('form#anketa').submit();
//    });
//	
//	this.capture('love-20.png');
//
//});	

//casper.then(function() {
//	
//	//body > div.height_full > div.head > div > ul > li:nth-child(1) > a
//	
//	this.echo('preexit');
//	//this.wait(5000,function(){
//	//	this.echo('exit');
//	//	this.capture('love-30.png');
//	//});
//	this.waitForSelector('div.height_full', function(){
//		this.echo('exit');
//		this.capture('love-30.png');
//	});
//	
//
//});	

// <a class="hm_icon" href="/a-searchlik/d-1/foto-1/p-0/pol-1/spol-2/geo-3159,4312,4400/purp-2/bage-20/tage-28/country-3159/region-4312/city-4400/">Знакомства</a>



casper.then(function() {
	this.capture('love-50-enter.png');
	this.echo('Waiting for login ...');
	this.waitForSelector('a.hm_icon.hm_message.fl',
		function(){
			this.capture('love-50-ok.png');
			this.echo('Logged OK!');
		},
		function(){
			this.capture('love-50-error.png');
			this.echo('[ERROR] - Logging failed!');
			this.exit();
		},
		1000
	);
});



casper.then(function() {
	this.echo('Waiting for game-button ...');
	this.capture('love-60-enter.png');
	this.waitForSelector('a.hm_icon',
		function(){
			this.echo('[OK!] - button game detected & clicked!');
			this.click('a.hm_icon');
			this.capture('love-60.png');
		},function(){
			this.capture('love-60-Error.png');
			this.echo('[ERROR-60] - button game failed !');
			this.exit();
		},
		1000
	);
});

casper.then(function() {
//	this.capture('love-50.png');
	//for(var i=1; i<=5; i++){    
	var numTimes = 10000, count = 100;

	this.repeat(numTimes, function() {
		//this.thenEvaluate(function(count) {
		//	nextPage(count);
		//}, ++count);
		this.wait(1000,function(){
			this.echo('I like '+lastindx);
			
			//<div class="pu-likes-head-link tdu">	<a href="#" data-closeid="#dlg_background">Играть дальше</a>	</div>
			//this.waitForSelector('div.pu-likes-head-link.tdu',function(){
			//		this.echo("Играть дальше");
			//		this.click('div.pu-likes-head-link.tdu');
			//	}, 
			//	function() {	},
			//	1000
			//);
			//class="gbut_grd_green gnl_but36 w190"
			this.waitForSelector('div.gbut_grd_green.gnl_but36.w190', 
				function(){
					lastindx++;
					this.capture(profile_dir+'/love='+lastindx+'.png');
					this.click('div.gbut_grd_green.gnl_but36.w190');
					saveJSON();
					
				},
				function(){
					this.echo('[ERROR-70]: no like button'+count);
					this.capture('love-70-Error.png');
					this.exit();
				},
				5000
			);
			
			
			
			++count;
		});

		
		
	});
	
});



//casper.then(function() {
//	this.capture('love-50.png');
//	this.waitForSelector('a.gbut_grd_green.gnl_but36.w190', function(){
//		this.echo('I like it');
//		this.click('a.gbut_grd_green.gnl_but36.w190');
//		this.capture('love-51.png');
//	});
//	
//	
//});
//
//casper.then(function() {
//	this.capture('love-60.png');
//	this.waitForSelector('a.gbut_grd_green.gnl_but36.w190', function(){
//		this.echo('I like it');
//		this.click('a.gbut_grd_green.gnl_but36.w190');
//		this.capture('love-61.png');
//	});
//});


casper.then(function() {
	
	//body > div.height_full > div.head > div > ul > li:nth-child(1) > a
	
	this.echo('prefinal');
	this.wait(5000,function(){
		this.echo('final');
		this.capture('love-99.png');
	});

});	

	 
	//this.sendKeys('#dlg_login_log','sergvcx@mail.ru');
	//this.sendKeys('#dlg_login_pas','hifly1');
	//dlg_login > ul.reset.line.lab_w43 > li:nth-child(4) > div > button
	//this.capture('love-11.png');
	
//});


casper.run();