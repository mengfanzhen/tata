/*
 mobileJs ::A js interface for hybrid app
 Author: sunwq
 Version: 0.2.0 
 MJxxx is a interface for js;
 MCxxx is a interface for native java.
 */

//document.addEventListener("deviceready", MJAnylHead, false);
//document.addEventListener("DOMContentLoaded", MJAnylHead, false)
//    document.addEventListener("deviceready", onDeviceReady, false);
//function onDeviceReady() {
//  // Register the event listener
//  document.addEventListener("backbutton", MJOnBackKeyDown, false);
//}

/**
 * 自动引入js文件 默认与mobile同级
 * filename :文件名
 * 返回 无
 */
function loadjsfile(filename){
    var s=document.getElementsByTagName("script").length;
    var file="";
    while(s>0){
        s--
        var path=document.getElementsByTagName("script")[s].src
        var n=path.indexOf("mobile.js")
        if(n>=0){
            file= path.substr(0,n)+filename;
            document.write('<script charset="utf-8" src="'+file+'"></script>')
            return;
        }
    }
}
/**
 * 引入webComponents.js文件
 */
loadjsfile("webComponents.js")

 try {
        window.inspur.invoke("com.inspur.plugin.Plugin","sho",'{"message":"'+message+'"}');
 }catch (e) {    
    loadjsfile("mobileOld.js")
    }
/**
 * this method for web to excute callbackfunction
 */
function BJCallFun(methodName, data) {
    this.func = new Function(methodName + "('" + data + "');");
    this.func();
}

//document.addEventListener("DOMContentLoaded", getCurrentOS, false);// 新增
function validataOS() {
    if (navigator.userAgent.match(/MicroMessenger/i)) {
        return 'WEIXIN';
    } else if ((navigator.userAgent.match(/iPhone/i))
        || (navigator.userAgent.match(/iPod/i))
        || (navigator.userAgent.match(/iPad/i))) {
        return "IOS";
    } else if (navigator.userAgent.match(/Android/i)) {
        return "Android";
    } else if (navigator.userAgent.match(/Mac/i)
        || navigator.userAgent.match(/Windows/i)
             || (navigator.userAgent.match(/Linux/i))) {
        return "PC";
    } else {
        return "unkown";
    }
}
var os = validataOS();
//function getCurrentOS() {
//    os = validataOS();
//}
/**
 * js 异常处理
 */
onerror = function (msg, url, l) {
    /*txt = "本页中存在错误。\n\n";
     txt += "错误：" + msg + "\n";
     txt += "URL: " + url + "\n";
     txt += "行：" + l + "\n\n";
     txt += "点击“确定”继续。\n\n";
     alert(txt);*/
};
var message = "your divice is not supported ";

/**
 * 调用拨打电话 param telnum：telnum为传过来的要拨打的电话号码
 */
function MJCallTel(telnum) {
    try {
        if (os == "IOS") {
        } else if (os == "Android") {
            window.inspur.invoke("com.inspur.plugin.Plugin","callTel",'{"number":"'+telnum+'"}');
        }
    } catch (e) {
        console.log("Exception: " + arguments.callee.toString());
    }
}

/**
 * 删除指定目录下的文件 ; param pathfile ; pathfile：路径名加文件名
 */
function MJDelFile(pathfile) {
    try {
        if (os == "IOS") {
        } else if (os == "Android") {
   return window.inspur.invokeAndReturn("com.inspur.plugin.Plugin","fileDel",'{"pathfile":"'+pathfile+'"}');
}
    } catch (e) {
        console.log("Exception: " + arguments.callee.toString());
    }
}
/**
 * 对数据加密 ; param strMi; strMi：需要加密的数据 key:秘钥
 */      
function MJEncryptStr(strMi,key) {
    try {
        var OriginalArg = arguments.length;
        if (os == "IOS") { 
        } else if (os == "Android") {
            var json
            if (OriginalArg=1) {
                json='{"strMi":"'+strMi+'"}'
            } else{
                 json='{"strMi":"'+strMi+'","key":"'+key+'"}'
            } 
       return    window.inspur.invokeAndReturn("com.inspur.plugin.Plugin","encryptStr",json);
        }
    } catch (e) {
        console.log("Exception: MJEncryptStr ");
    }
}
/**
 * 对数据解密 ; param strMi; strMi：需要解密的数据 key:秘钥
 */
function MJDecryptStr(strMi,key) {
    try {
        var OriginalArg = arguments.length;
        if (os == "IOS") { 
        } else if (os == "Android") {
            var json
            if (OriginalArg=1) {
                json='{"strMi":"'+strMi+'"}'
            } else{
                 json='{"strMi":"'+strMi+'","key":"'+key+'"}'
            } 
         return window.inspur.invokeAndReturn("com.inspur.plugin.Plugin","decryptStr",json);
        }
    } catch (e) {
        console.log("Exception: " + arguments.callee.toString());
    }
}
var tempInput;
/**
 * 获取sd卡根目录
 */
function MJGetSdcardPath() {
      try {
        if (os == "IOS") {
            // IOS add js here
         } else if (os == "Android") {
           return window.inspur.invokeAndReturn("com.inspur.plugin.Plugin","getSdcardPath");
        }
    } catch (e) {
        console.log("Exception: " + arguments.callee.toString());
    }
}

/**
 * 文件下载
 */
function MJDownload(url,filePath,filename){
      try {
        if (os == "IOS") {
            // IOS add js here
            window.location.href = "objc:setUIParm:::" + +"";
        } else if (os == "Android") {
          window.inspur.invoke("com.inspur.plugindownload.PluginDownload","downloadfile",'{"url":"'+url+'","filePath":"'+filePath+'","filename":"'+filename+'"}');
        }
    } catch (e) {
        console.log("Exception: " + arguments.callee.toString());
    }

}

/**
 * 弹出等待提示框
 */
function MJStartProgress(message) {
    try {
        if (os == "IOS") {
            // IOS add js here
            window.location.href = "objc:showWaitView:::" + message + "";
        } else if (os == "Android") {
          window.inspur.invoke("com.inspur.plugin.ProgressPlugin","startProgressDialog",'{"message":"'+message+'"}');
        }
    } catch (e) {
        console.log("Exception: " + arguments.callee.toString());
    }
}
/**
 * 消失 等待提示框
 */
function MJStopProgress() {
    try {
        if (os == "IOS") {
            // IOS add js here
        } else if (os == "Android") {
          window.inspur.invoke("com.inspur.plugin.ProgressPlugin","stopProgressDialog",'{}');
        }
    } catch (e) {
        console.log("Exception: " + arguments.callee.toString());
    }
}
/**
 * 配置菜单
 */
function MJTabInit(json){
     try {
        if (os == "IOS") {
            // IOS add js here
        } else if (os == "Android") {
          window.inspur.invoke("com.inspur.plugin.TabMenuPlugin","tabInit",json);
        }
    } catch (e) {
        console.log("Exception: " + arguments.callee.toString());
    }
}
/**
 * 配置菜单
 */
function MJLoginOK(js) {
      try {
        if (os == "IOS") {
            // IOS add js here
        } else if (os == "Android") {
          MJTabInit(js)
        }
    } catch (e) {
        console.log("Exception: " + arguments.callee.toString());
    }
         
}
/**
 * 隐藏tab页
 */

function MJTabHidden() {
    try {
        if (os == "IOS") {
            // IOS add js here

        } else if (os == "Android") {
            return  window.inspur.invoke("com.inspur.plugin.TabMenuPlugin","tabHidden",'');

        }
        return message;
    } catch (e) {
        console.log("Exception: " + arguments.callee.toString());
    }
}
/**
 * 显示 footer
 */
function MJTabShow() {
    try {
        if (os == "IOS") {
            // IOS add js here
            window.location.href = "objc:setUIParm:::" + +"";
        } else if (os == "Android") {
           window.inspur.invoke("com.inspur.plugin.TabMenuPlugin","tabShow",'');
        }
    } catch (e) {
        console.log("Exception: " + arguments.callee.toString());
    }
}
/**
 * 调用电话 ; param tel:电话号码 多个号码用英文逗号间隔; param message:消息内容
 */
function MJSendMS(tel, message) {
    try {
        if (os == "IOS") {
            // IOS add js here
            window.location.href = "objc:sendMS:::" + tel + "|"
            + message + "";
        } else if (os == "Android") {
             window.inspur.invoke("com.inspur.plugin.Plugin","sendMS",'{"tel":"'+tel+'","message":"'+message+'"}');
        }
    } catch (e) {
        console.log("Exception: " + arguments.callee.toString());
    }
}


/**
 * 消息提示框 ; param message:消息内容
 */
function MJShowToastMsg(message) {
    try {
        if (os == "IOS") {
            // IOS add js here
            window.location.href = "objc:showAlertView:::" + message + "";
        } else if (os == "Android") {
             window.inspur.invoke("com.inspur.plugin.Plugin","showToast",'{"message":"'+message+'"}');
        } else if (os == "PC") {
            window.parent.BJJMobile(message);
        }

    } catch (e) {
        console.log("Exception: " + arguments.callee.toString());
    }
}

/**
 * 扫描条码二维码 ; param callBack：回调方法名称
 */
function MJScanCode(callBack) {
    try {
        var OriginalArg = arguments.length;
        if (os == "IOS") {
            // IOS add js here
            if (OriginalArg == 1) {
                window.location.href = "objc:scanCode:" + callBack;
            } else {
                window.location.href = "objc:scanCode:MCScanCode";
            }
        } else if (os == "Android") {
            if (OriginalArg == 1) {
           window.inspur.invoke("com.inspur.plugin.ScanPlugin","scan",'{"callBack":"'+callBack+'"}');
            } else {
           window.inspur.invoke("com.inspur.plugin.ScanPlugin","scan",'{"callBack":"MCScanCode" }');
            }
        }
    } catch (e) {
        console.log("Exception: " + arguments.callee.toString());
    }
}
/**
 * 默认扫描条码二维码回调函数 ; param code：数据
 */
function MCScanCode(scanCode) {
    alert("扫描返回结果   MJScanCode(scanCode)  scanCode =" + scanCode);
}

/**
 * 退出系统
 */
function MJExitSYS() {
    try {
        if (os == "IOS") {
            // IOS add js here
            window.location.href = "objc:exitSYS";
        } else if (os == "Android") {
           window.inspur.invoke("com.inspur.plugin.Plugin","exitSYS");
        }
    } catch (e) {
        console.log("Exception: " + arguments.callee.toString());
    }
}

/**
 * 获取系统类型
 */
function MJGetOSType() {
    return validataOS();
}
/**
 * 获取程序版本信息
 */
function MJGetAppVersionName(callback) {
    if (!callback)
        callback = "MCSetAppVersionName";
    try {
        if (os == "IOS") {
            // IOS add js here
            window.location.href = "objc:getAppVersionName:" + callback;
        } else if (os == "Android") {
             return window.inspur.invokeAndReturn("com.inspur.plugin.Plugin","getAppVersionName");
        }
        return message;
    } catch (e) {
        console.log("Exception: " + arguments.callee.toString());
    }
}
/**
 * 启动自动更新 param url：更新程序下载地址
 */
function MJUpdateApp(url,appName) {
    try {
        if (os == "IOS") {
            window.location.href = "objc:updateApp:::" + url + "";
        } else if (os == "Android") {
           window.inspur.invoke("com.inspur.plugin.Plugin","updateDialog",'{"url":"'+url+'","appName":"'+appName+'"}');
        }
        return message;
    } catch (e) {
        console.log("Exception: " + arguments.callee.toString());
    }
}

/**
 * 打开地图 param json :坐标数据
 */
function MJUpdateMapData(json) {
    try {
        if (os == "IOS") {

        } else if (os == "Android") {
            window.inspur.invoke("com.inspur.plugin.MapPlugin","upDateMapData",json);
        }
        return message;
    } catch (e) {
        console.log("Exception: " + arguments.callee.toString());
    }
}
/**
 * 打开地图 param json :坐标数据
 */
function MJOpenMap(json) {
    try {
        if (os == "IOS") {
            window.location.href = "objc:openMap:::" + json + "";
        } else if (os == "Android") {
            window.inspur.invoke("com.inspur.plugin.MapPlugin","openMap",json);
        }
        return message;
    } catch (e) {
        console.log("Exception: " + arguments.callee.toString());
    }
}

/**
 * 开启gps
 * js函数说明 MJOpenGps(upLoadUrl, comCode, visitorCode, visitorType, gpsFrequency,upLoadFrequency)
 * upLoadUrl 为调用的服务端servlet URL
 * comCode在gis信息记录服务端不做记录，visitorCode作为唯一识别标识记录在device_id字段中
 * gpsFrequency单位为毫秒，
 * upLoadFrequency单位为毫秒
 * comCode,visitorCode 传国家局标准码
 *  XComCode  xsm公司编码
 * or upLoadUrl='{"upLoadUrl":"s", "comCode":"sdf","XComCode":"sdf", "visitorCode":"sd", "visitorType":"sd", "gpsFrequency":"sd","upLoadFrequency":"sd"}'
 *
 */

function MJOpenGps(upLoadUrl, comCode, visitorCode, visitorType, gpsFrequency,
                   upLoadFrequency) {
    try {
        var OriginalArg = arguments.length;
        if (os == "IOS") {
            // IOS add js here
            window.location.href = "objc:openGps:::" + upLoadUrl + "|"
            + comCode + "|" + visitorCode + "|" + visitorType + "|" + gpsFrequency + "|" + upLoadFrequency + "";
        } else if (os == "Android") {
            if (OriginalArg == 1) {
                return window.inspur.invoke("com.inspur.plugin.GpsPlugin","openGps",upLoadUrl);
            } else {
                var json = '{"upLoadUrl":"'+upLoadUrl+'","comCode":"'+comCode+'","XComCode":"'+comCode+'","visitorCode":"'+visitorCode+'","visitorType":"'+visitorType+'","gpsFrequency":"'+gpsFrequency+'","upLoadFrequency":"'+upLoadFrequency+'"}';
                return window.inspur.invoke("com.inspur.plugin.GpsPlugin","openGps",json);
            }
        }
        return message;
    } catch (e) {
        console.log("Exception: " + arguments.callee.toString());
    }
}


/**
 * 关闭gps
 */
function MJCloseGps() {
    try {
        if (os == "IOS") {
            // IOS add js here
            window.location.href = "objc:closeGps";
        } else if (os == "Android") {
            return window.inspur.invoke("com.inspur.plugin.GpsPlugin","closeGps");

        }
        return message;
    } catch (e) {
        console.log("Exception: " + arguments.callee.toString());
    }
}

/**
 * 获取地理坐标 单词错误不要使用
 */
function MJGetLcoation(callback) {
    if (!callback)
        callback = "MCSetLocation";
    try {
        if (os == "IOS") {
            // IOS add js here
            window.location.href = "objc:getLocation:" + callback;
        } else if (os == "Android") {
            return window.inspur.getLocation(callback);
        }
        return message;
    } catch (e) {
        console.log("Exception: " + arguments.callee.toString());
    }
}
/**
 * 获取地理坐标
 */
function MJGetLocation(callback) {
    if (!callback)
        callback = "MCSetLocation";
    try {
        if (os == "IOS") {
            // IOS add js here
        	objcPlugin.getBaiduMapLocation(callback);
        } else if (os == "Android") {
            var json = '{"callback":"'+callback+'"}';
            return window.inspur.invoke("com.inspur.plugin.GpsPlugin","getLocation",json);
        }
        return message;
    } catch (e) {
        console.log("Exception: " + arguments.callee.toString());
    }
}

/**
 * 拍照相关
 * @param json  （key:callback value:回调函数名称）
 * @returns 返回uri照 片存储本机地址，直接放在src里面就能用
 */
function MJOpenCamera(json) {
	try {
		if (os == "IOS") {
        	objcPlugin.openCamera(callback);
		} else if (os == "Android") {
			return window.inspur.invoke(
					"com.inspur.plugin.ImagePlugin", "openCamera", json);
		}
	} catch (e) {
		console.log("Exception: " + arguments.callee.toString());
	}
}


/**
 * location默认回调函数
 */
function MCSetLocation(lat, lng) {
    console.log("默认方法MCSetlocation( lat,lng) 当前坐标：lat=" + lat + " lng=" + lng);
}

/**
 * nfc刷卡 param json 卡片数据
 */
function MCNFCSendData(json) {
    try {
        console.log("call: MCOnNFCCall ");
    } catch (e) {
        console.log("Exception: MCOnNFCCall ");
    }
}
/**
 * 获取设备屏幕大小 A5 A8  A10
 */
function MJGetScreenSize() {
    try {
        if (os == "IOS") {
            // IOS add js here

        } else if (os == "Android") {
           return window.inspur.invokeAndReturn("com.inspur.plugin.Plugin","getScreenSize");
        }
        return message;
    } catch (e) {
        console.log("Exception: " + arguments.callee.toString());
    }
}

/**
 * 获取gps状态 0：未开启 1：已开启
 */
function MJCheckGps() {
    try {
        if (os == "IOS") {
            // IOS add js here

        } else if (os == "Android") {
            return window.inspur.invokeAndReturn("com.inspur.plugin.GpsPlugin","checkGps");
        }
        return message;
    } catch (e) {
        console.log("Exception: " + arguments.callee.toString());
    }
} 
/**
 * 展示数据（图片、doc等）
 */
function MCShowData(url) {
    try {
        window.inspur.showDataByOtherApp(url);
    } catch (e) {
        console.log("Exception: " + arguments.callee.toString());
    }
}

//获取地理坐标 返回json   
function MJGetLocationJson() {
    try {
        if (os == "IOS") {
        	
        } else if (os == "Android") {
            return window.inspur.invokeAndReturn("com.inspur.plugin.GpsPlugin","getLocation");
        }
        return message;
    } catch (e) {
        console.log("Exception: " + arguments.callee.toString());
    }
}
/**
*向下兼容方法
*/
function MJuploadGpsManually() {
    MJUploadGpsManually();
}
/**
 * 开启自动上传gps
 * 命名符合大小写标准 
 */
function MJUploadGpsManually() {
    try {
        if (os == "IOS") {
        	
        } else if (os == "Android") {
            window.inspur.invoke("com.inspur.plugin.GpsPlugin","uploadGpsManually");
        }
    } catch (e) {
        console.log("Exception: " + arguments.callee.toString());
    }
}
/**
*功能：MJProgressDialog为展示进度条并更新进度的方法
*返回： 无
*参数：json格式如下：
*{"progress":3,"max":10}
*/
function MJProgressDialog(json) {
    try {
        if (os == "IOS") {

        } else if (os == "Android") {
            window.inspur.invoke("com.inspur.plugin.ProgressPlugin","setPdStatus",json);
        }
    } catch (e) {
        console.log("Exception: " + arguments.callee.toString());
    }
}
/**
 * 开启第三方 程序
 * @param json   {"packgeName":"com.spestream","className":"com.spestream.DlgLogin","jsonData":"stringdata"}
 * @returns 无
 */

function MJStarActivity(json) {
    try {
        if (os == "IOS") {

        } else if (os == "Android") {
          window.inspur.invoke("com.inspur.plugin.Plugin","startActivity",json);
        }
    } catch (e) {
        console.log("Exception: " + arguments.callee.toString());
    }
}

/**
 *开启蓝牙读卡功能
 */
function MJOpenBlueTooth() {
    try {
        if (os == "IOS") {

        } else if (os == "Android") {
            window.inspur.invoke("com.inspur.plugin.BlueToothPlugin","openBlueTooth","");
        }
    } catch (e) {
        console.log("Exception: " + arguments.callee.toString());
    }
}

/**
 *功能：对指定数据进行本地缓存存储(手机应用缓存不是手机数据库)
 *参数：key string类型：保存数据的名称;value string类型:保存数据的值
 *返回：true 存储成功 false为失败
 */
function MJSetItem(key, value) {
    try {
        if (os == "IOS") {
        } else if (os == "Android") {
            var reg=new RegExp('"',"g"); //创建正则RegExp对象   
            if(!value)value="";
                value=value+"";
            return window.inspur.invokeAndReturn("com.inspur.plugin.Plugin","setItemData",'{"key":"'+key+'","value":"'+value.replace(reg,'\\"')+'"}');
        } else if (os == 'PC') {
            window.localStorage[key] = value;
        }
    } catch (e) {
        console.log("Exception: " + arguments.callee.toString());
    }
}
/**
 *本地数据获取
 */
function MJGetItem(key) {
    try {
        if (os == "IOS") {

        } else if (os == "Android") {
           return window.inspur.invokeAndReturn("com.inspur.plugin.Plugin","getItemData",'{"key":"'+key+'"}');
        } else if (os == 'PC') {
            return window.localStorage[key];
        }
    } catch (e) {
        console.log("Exception: " + arguments.callee.toString());
    }
}
/**
 *下载数据到sqlite 
 */
function MJDownloadToSqlite(urlStr, hostStr) {
    try {
        var json = '{"url":"'+urlStr+'", "dbName":"", "host":"'+hostStr+'"}';
        if (os == "IOS") {

        } else if (os == "Android") {
            return window.inspur.invokeAndReturn("com.inspur.plugin.DownloadPlugin", "downloadDataBj", json);
        }
    } catch (e) {
        console.log("Exception: " + arguments.callee.toString());
    }
}
/**
 *
 * @param json
 */
function MJShowPhoneMsgWindow(json) {
    try {
        if (os == "IOS") {
        } else if (os == "Android") {
            window.inspur.invoke("com.inspur.plugin.Plugin","showMsgTelAct",json);
        }
    } catch (e) {
        console.log("Exception: " + arguments.callee.toString());
    }
}
/* 收集客户端数据*/
function MJCollectData(json) {
    try {
        if (os == "IOS") {

        } else if (os == "Android") {
           window.inspur.invoke("com.inspur.plugin.MailPlugin","collectData",json);
        }
    } catch (e) {
        console.log("Exception: " + arguments.callee.toString());
    }
}

/**
 *更新客户端html
 *{"url"："http://sj.inspursoft.com:8081/v6web/GSXT.zip","fileName":"aaa.zip","callBack":"functionname"}
 *压缩文件为aaa.zip
 *回调函数返回参数  -1:文件下载出错 0:文件下载成功 1:文件已经存在 -2:解压缩失败
 */
function MJUpdateHtml(json) {
    try {
        if (os == "IOS") {

        } else if (os == "Android") {
           window.inspur.invoke("com.inspur.plugin.Plugin","updateHtml",json);
        }
    } catch (e) {
        console.log("Exception: " + arguments.callee.toString());
    }
}
/**
 * 调用 指定tab页 的js方法  old 向下兼容 不在提供
 * tab tab 页id（auto.html id：tab1）   jsSrc js代码
 */
function MJJsCall(tab,jsSrc){
    var json ='{"url":"javascript:'+jsSrc+'","index":-2}'
    MJLoadUrl(json);
}
/**
 *指定tab页 开启url
 *{"url"："http：//www.xingshangmeng.com/st/skin/...","index"：0,}
 */
function MJLoadUrl(json) {
    try { 
        if (os == "IOS") {
            //objc(IOS平台):tabShowIndex（调用方法名称）: (成功回调方法名称、可不传):(失败回调方法名称、 可不传):(参数列表)
            window.location.href = "objc:tabShowIndex:::" + json + "";
        } else if (os == "Android") {
          window.inspur.invoke("com.inspur.plugin.TabMenuPlugin","loadUrl",json);
        } else if (os == 'PC') { 
        }
    } catch (e) {
        console.log("Exception: " + arguments.callee.toString());
    }
}
/**
 * 直接退出
 */
function MJExitSYSWithoutAlert() {
    try {
        if (os == "IOS") {

        } else if (os == "Android") {
            window.inspur.invoke("com.inspur.plugin.Plugin","exitSYSWithoutAlert");
        }
    } catch (e) {
        console.log("Exception: " + arguments.callee.toString());
    }
}

/**
 * 清除数据
 */
function MJCleanData() {
    try {
        if (os == "IOS") {

        } else if (os == "Android") {
        return window.inspur.invokeAndReturn("com.inspur.plugin.Plugin","cleanData");
        }
    } catch (e) {
        console.log("Exception: " + arguments.callee.toString());
    }
}
/**
 *
 * @param progress 每次传入的数值
 *      若只有一个参数 progre={"progress":1, "max":50}
 * @param max 最大进度
 * @returns 进度条 累加每次传入的数值
 */
function MJSetPdStatusSum(progress, max) {
    try {
        var OriginalArg = arguments.length;
        if (os == "IOS") {

        } else if (os == "Android") {
            if(OriginalArg == 1){
                window.inspur.invoke("com.inspur.plugin.ProgressPlugin","setPdStatusSum",progress);
            }else{
                var json = '{"progress":'+progress+', "max":'+max+'}';
                window.inspur.invoke("com.inspur.plugin.ProgressPlugin","setPdStatusSum",json);
            }
            
        }
    } catch (e) {
        console.log("Exception: " + arguments.callee.toString());
    }
}
/**
 * 开启录音功能
 * fileName 文件名 （不带后缀）
 * seconds 单位为秒，经过一段seconds秒后结束录音，为0时不结束。
 * or fileName = {"fileName":"0001","second":20}
 */
function MJStartRecord(fileName,seconds) {
    try {
        var OriginalArg = arguments.length;
        if (os == "IOS") {

        } else if (os == "Android") {
            if(OriginalArg == 1){
                window.inspur.invoke("com.inspur.plugin.RecordPlugin","startRecord",fileName);
            }else{
                var json = '{"fileName":"'+fileName+'","second":'+seconds+'}';
                window.inspur.invoke("com.inspur.plugin.RecordPlugin","startRecord",json);
            }
        }
    } catch (e) {
        console.log("Exception: " + arguments.callee.toString());
    }
}


/**
 * 结束录音功能
 */
function MJEndRecord() {
    try {
        if (os == "IOS") {

        } else if (os == "Android") {
            window.inspur.invoke("com.inspur.plugin.RecordPlugin","endRecord");
        }
    } catch (e) {
        console.log("Exception: " + arguments.callee.toString());
    }
}

/**
 * 获取录音列表
 * 返回json格式数据
 */
function MJGetRecordFiles() {
    try {
        if (os == "IOS") {

        } else if (os == "Android") {
            return window.inspur.invokeAndReturn("com.inspur.plugin.RecordPlugin","getRecordFiles");
        }
    } catch (e) {
        console.log("Exception: " + arguments.callee.toString());
    }
}

/**
 * 删除文件
 * fileName 文件名  完整路径 /a/d/c.akp
 */
function MJFileDel(fileName) {
    try {
        if (os == "IOS") {

        } else if (os == "Android") {
            return window.inspur.fileDel(fileName);
        }
    } catch (e) {
        console.log("Exception: " + arguments.callee.toString());
    }
}

/**
 * 百度自定义事件
 * event_id:不能超过30个字符 
 * label 各种事件添加的标签;事件的一些额外信息:功能名称或者按钮名称
 * aac 事件的发生次数,不指定时值为 1.
 */
function MJOnEvent(event_id, label, acc) { 
    try {
         if (arguments.length < 3) acc = 1;// 默认为1
        if (os == "IOS") {

        } else if (os == "Android") {
            window.inspur.invoke("com.inspur.plugin.BaiduTJPlugin","onEvent",'{"event_id":"'+event_id+'","label":"'+label+'","acc":'+acc+'}');
        }
    } catch (e) {
        console.log("Exception: " + arguments.callee.toString());
    }
}
/**
 * 判断当前是否有网络
 * 返回1时表示有网络，返回2时表示无网络
 */
function MJIsNetworkConnect(){
        try {
        if (os == "IOS") {

        } else if (os == "Android") {
            return window.inspur.invokeAndReturn("com.inspur.plugin.Plugin","isNetworkConnect");
        }
    } catch (e) {
        console.log("Exception: " + arguments.callee.toString());
    }
}
/**
 * 播放录音组件
 */
function MJShowVideoDialog(json){
    try {
        if (os == "IOS") {

        } else if (os == "Android") {
            window.inspur.invoke("com.inspur.plugin.RecordPlugin","showVideoDialog",json);
        }
    } catch (e) {
        console.log("Exception: " + arguments.callee.toString());
    }
}

function MJDownloadData(json){
    try {
        if (os == "IOS") {

        } else if (os == "Android") {
            return window.inspur.invokeAndReturn("com.inspur.plugin.DownloadPlugin", "downloadData", json);
        }
    } catch (e) {
        console.log("Exception: " + arguments.callee.toString());
    }
}

function MJDownloadDataBj(json){
    try {
        if (os == "IOS") {

        } else if (os == "Android") {
            return window.inspur.invokeAndReturn("com.inspur.plugin.DownloadPlugin", "downloadDataBj", json);
        }
    } catch (e) {
        console.log("Exception: " + arguments.callee.toString());
    }
}
/**
 * 使用第三方应用打开文件 
 * @param {Object} json
 */
function MJOpenSdFile(json){
    try {
        if (os == "IOS") {

        } else if (os == "Android") {
            window.inspur.invoke("com.inspur.plugin.DownloadPlugin", "openSdFile", json);
        }
    } catch (e) {
        console.log("Exception: " + arguments.callee.toString());
    }
}
/**
 * 下载文件到sd卡 
 * @param {Object} json
 */
function MJDownloadFile2Sdcard(json){
    try {
        if (os == "IOS") {

        } else if (os == "Android") {
            return window.inspur.invokeAndReturn("com.inspur.plugin.DownloadPlugin", "downloadFile2Sdcard", json);
        }
    } catch (e) {
        console.log("Exception: " + arguments.callee.toString());
    }
}

function MJIsHaveGpsData(){
    try {
        if (os == "IOS") {

        } else if (os == "Android") {
            return window.inspur.invokeAndReturn("com.inspur.plugin.GpsPlugin", "isHaveGpsData");
        }
    } catch (e) {
        console.log("Exception: " + arguments.callee.toString());
    }
}

/**
 * 设置屏幕方向
 * ORIENTATION_PORTRAIT 1：竖屏  ORIENTATION_LANDSCAPE 0：横屏
 *
 */
var ORIENTATION_PORTRAIT = '1';
var ORIENTATION_LANDSCAPE = '0';
function MJSetOrientation(Orientation) {
    try {
        if (os == "IOS") {

        } else if (os == "Android") {
            window.inspur.invoke("com.inspur.plugin.Plugin", "setOrientation", '{"orientation":"'+Orientation+'"}');
        }
    } catch (e) {
        console.log("Exception: " + arguments.callee.toString());
    }
}
/**
 * 消息提示框 ; param message:消息内容
 */
function MJShowToastMsg(message) {
    try {
        if (os == "ios") {
            // ios add js here
         } else if (os == "Android") {
            window.inspur.invoke("com.inspur.plugin.Plugin", "showToast", '{"message":"'+message+'"}');
        } else   {
            window.parent.BJJMobile(message);
        }

    } catch (e) {
        console.log("Exception: " + arguments.callee.toString());
    }
}

/**
 * 调用帅选框 ; param arrary:数据内容 ; param title:标题头
 */
function MJShowSingleChoiceDialog(arrary, title) {
    try {
        var OriginalArg = arguments.length;
        if (os == "ios") {
            // ios add js here
            window.location.href = "objc:showFilterDialog:::" + arrary + "|"
                + title + "";
        } else if (os == "Android") {
            initCheckPopView(checkArrayToJson(arrary));
        } else {
            initCheckPopView(checkArrayToJson(arrary));
        }
    } catch (e) {
        console.log("Exception: " + arguments.callee.toString());
    }
}

/**
 * 调用多选框 ; param json:数据内容 ; param title:标题头
 */
function MJShowMultiChoiceDialog(json, title) {
    try {
        var OriginalArg = arguments.length;
        if (os == "ios") {
            // ios add js here
            window.location.href = "objc:showFilterDialog:::" + json + "|"
                + title + "";
        } else if (os == "Android") {
            initMultiCheckPopView(json);
        } else {
            initMultiCheckPopView(json);
        }
    } catch (e) {
        console.log("Exception: " + arguments.callee.toString());
    }
}

function MJShowSingleChoiceDialogJson(json, title) {
    try {
        if (os == "ios") {
            // ios add js here
            window.inspur.showSingleChoiceDialogJson(json, title);
        } else if (os == "Android") {
            initCheckPopView(json);
        } else {
            initCheckPopView(json);
        }
    } catch (e) {
        console.log("Exception: " + arguments.callee.toString());
    }
}
/**
 * 文本编辑框; param callBackOK：回调方法名称 ; param callBackCancle：回调方法名称 ; param
 * message:消息内容 ; param title:标题内容
 */
function MJShowEditDialog(callBackOK, callBackCancle, title, message) {
    try {
        if (callBackOK == null || callBackOK == "") {
            callBackOK = "MCOnEditDialogOK";
        }
        if (callBackCancle == null || callBackCancle == "") {
            callBackCancle = "MCOnEditDialogCancle";
        }
        if (os == "ios") {
            // ios add js here
            window.location.href = "objc:showEditDialog:" + callBackOK + ":"
                + callBackCancle + ":" + title + "|" + message + "";
        } else if (os == "Android") {

            var OriginalArg = arguments.length;
            if (OriginalArg == 4) {
                window.inspur.showEditDialog(callBackOK, message, title,
                    callBackCancle);
            } else {
                window.inspur.showEditDialog(callBackOK, title, callBackCancle);
            }
        } else {
            //window.parent.BJShowEditDialog(callBackOK, "MCOnEditDialogCancle",
            //    title, message);
            initTextArea(callBackOK, callBackCancle, title, message);
        }
    } catch (e) {
        console.log("Exception: " + arguments.callee.toString());
    }
}
/**
 * 默认扫文本编辑框回调函数 ; param content:文本内容
 */
function MCOnEditDialogOK(content) {

    alert("文本编辑框   MCOnEditDialogOK(content)  content =" + content);

}
/**
 * 默认扫文本编辑框回调函数 ; param content:文本内容
 */
function MCOnEditDialogCancle(content) {
    alert("文本编辑框   MCOnEditDialogCancle(content)  content =" + content);
}
/**
*兼容旧版本方法
*/
MCSetUserInfo=function(json){MJInitParams(json)}
/**
 * 初始化参数，将成对的key-value保存到客户端缓存 
 * @param {Object} json
 */
function MJInitParams(json){
    try {
        if (os == "ios") {
            // ios add js here
        } else if (os == "Android") {
            return window.inspur.invokeAndReturn("com.inspur.plugin.Plugin", "initParams", json);
        }
    } catch (e) {
        console.log("Exception: " + arguments.callee.toString());
    }
}
/**
 * 调用日期选择框 ; param obj：input对象 ; param callback：回调函数名
 */
 var tempInput
function MJGetDate(obj, callBack, date) {
    tempInput = obj;
    try {
        if (os == "ios") {
            // ios add js here

            if (callBack) {
                window.location.href = "objc:getDate:" + callBack;
            } else {
                window.location.href = "objc:getDate:MCSetDate";
            }
        } else {
            if (!callBack) {callBack="MCSetDate";}
            var inJson = "{'callBack':'"+callBack+"','date':'"+date+"'}";
            webGetDate(inJson);
        }

    } catch (e) {
        tempInput.value = "today";
    }
}
function MCSetDate(date){
    tempInput.value=date;
}
/**
 * 暂时不可用 ; param obj：input对象 ; param callback：回调函数名
 */
function MJGetMonth(obj, callBack, month) {
    tempInput = obj;
    var OriginalArg = arguments.length;
    try {
        if (os == "ios") {
            if (callBack) {
                window.location.href = "objc:getMonth:" + callBack;
            } else {
                window.location.href = "objc:getMonth:MCSetMonth";
            }
        } else  {
            if (!callBack)  {
                callBack="MCSetMonth";
            } 
            var inJson = "{'callBack':'"+callBack+"','date':'"+month+"'}";
            webGetDate(inJson);
        }
    } catch (e) {
        tempInput.value = "month";
        console.log("Exception: " + arguments.callee.toString());

    }
}

function MCSetMonth(date){
    tempInput.value=date;
}
function MJShowSelectBeginEndDateDialog(json){
    try {
        if (os == "ios") {

        } else if (os == "Android") {
            webGetDateBE(json);
        } else{
            webGetDateBE(json);
        }
    } catch(e) {
        console.log("Exception: " + arguments.callee.toString());
    }

}

/**
 * 文本编辑框; param callBackOK：回调方法名称 ; param callBackCancle：回调方法名称 ; param
 * message:消息内容 ; param title:标题内容
 */
function MJShowEditDialog(callBackOK, callBackCancle, title, message) {
    try {
        if (callBackOK == null || callBackOK == "") {
            callBackOK = "MCOnEditDialogOK";
        }
        if (callBackCancle == null || callBackCancle == "") {
            callBackCancle = "MCOnEditDialogCancle";
        }
        if (os == "ios") {
            // ios add js here
            window.location.href = "objc:showEditDialog:" + callBackOK + ":"
                + callBackCancle + ":" + title + "|" + message + "";
        } else  {
            //window.parent.BJShowEditDialog(callBackOK, "MCOnEditDialogCancle",
            //    title, message);
            initTextArea(callBackOK, title, callBackCancle, message);
        }
    } catch (e) {
        console.log("Exception: " + arguments.callee.toString());
    }
}
/**
 * 多选框+数字输入框
 * @param json
 * @param title
 * @constructor
 */
function MJShowMultiCheckWithEditDialog(json, title){
    initCheckAndInput(json, title);
}

/**
 * 初始化suopin功能
 */
function MJSPInit(json) {
    try {
         if (os == "ios") {
            // ios add js here
         } else if (os == "Android") {
          window.inspur.invoke("com.inspur.plugin.SuoPinPlugin", "InitSDK", json);

        }
    } catch (e) {
        console.log("Exception: " + arguments.callee.toString());
    }
}

/**
 * suopin 登陆
 */
function MJSPLogin(json) {
    try {
         if (os == "ios") {
            // ios add js here
         } else if (os == "Android") {
          window.inspur.invoke("com.inspur.plugin.SuoPinPlugin", "Login", json);

        }
    } catch (e) {
        console.log("Exception: " + arguments.callee.toString());
    }
}
/**
 * suopin 获取群组列表
 */
function MJSPGetGroupList(json) {
    try {
         if (os == "ios") {
            // ios add js here
         } else if (os == "Android") {
          window.inspur.invoke("com.inspur.plugin.SuoPinPlugin", "GetGroupList", json);

        }
    } catch (e) {
        console.log("Exception: " + arguments.callee.toString());
    }
} 

/**
 * suopin 获取群组列表
 */
function MJSPJoinGroup(json) {
    try {
         if (os == "ios") {
            // ios add js here
         } else if (os == "Android") {
          window.inspur.invoke("com.inspur.plugin.SuoPinPlugin", "JoinGroup", json);

        }
    } catch (e) {
        console.log("Exception: " + arguments.callee.toString());
    }
}

function MJSendMessage(json){
    try {
         if (os == "ios") {
            // ios add js here
         } else if (os == "Android") {
          window.inspur.invoke("com.inspur.plugin.MsgPlugin", "sendMessage", json);
        }
    } catch (e) {
        console.log("Exception: " + arguments.callee.toString());
    }
}

function MJSendMessageDirectly(json){
    try {
         if (os == "ios") {
            // ios add js here
         } else if (os == "Android") {
          window.inspur.invoke("com.inspur.plugin.MsgPlugin", "sendMessageDirectly", json);
        }
    } catch (e) {
        console.log("Exception: " + arguments.callee.toString());
    }
}

function MJLog(content){
    try {
         if (os == "ios") {
            // ios add js here
         } else if (os == "Android") {
          window.inspur.invoke("com.inspur.plugin.LogPlugin", "iLog", "{\"content\":\""+content+"\"}");
        }
    } catch (e) {
        console.log("Exception: " + arguments.callee.toString());
    }
}

function MJCallSMS(json){
    try {
         if (os == "ios") {
            // ios add js here
         } else if (os == "Android") {
          window.inspur.invoke("com.inspur.plugin.Plugin", "callSMS", json);
        }
    } catch (e) {
        console.log("Exception: " + arguments.callee.toString());
    }
}

/**
 * 获取设备信息
 */
function MJGetDeviceInfo() {
      try {
        if (os == "IOS") {
            // IOS add js here
         } else if (os == "Android") {
           return window.inspur.invokeAndReturn("com.inspur.plugin.Plugin","getDeviceInfo");
        }
    } catch (e) {
        console.log("Exception: " + arguments.callee.toString());
    }
}

function MJShareTextWeichat(json) {
    try {
      if (os == "IOS") {
          // IOS add js here
       } else if (os == "Android") {
         window.inspur.invoke("com.inspur.plugin.Plugin","shareTextWeichat",json);
      }
  } catch (e) {
      console.log("Exception: " + arguments.callee.toString());
  }
}

function MJShareNewsWeichat(json) {
    try {
      if (os == "IOS") {
          // IOS add js here
       } else if (os == "Android") {
         window.inspur.invoke("com.inspur.plugin.Plugin","shareNewsWeichat",json);
      }
  } catch (e) {
      console.log("Exception: " + arguments.callee.toString());
  }
}

/**
 * 从相册获取图片
 */
function MJGetImgFromLib(callback) {
    if (!callback)
        callback = "MCSetImgFromLib";
    try {
        if (os == "ios") {
            // ios add js here
        	objcPlugin.openImgPicker(callback);
        } else if (os == "Android") {
            // Android add js here
        }
        return message;
    } catch (e) {
        console.log("Exception: MJGetImgFromLib ");
    }
}
/**
 * 调用摄像头获取图片
 */
function MJGetImgFromCamera(callback) {
    if (!callback)
        callback = "MCSetImgFromCamera";
    try {
        if (os == "ios") {
            // ios add js here
        	objcPlugin.openCamera(callback);
        } else if (os == "Android") {
            // Android add js here
        }
        return message;
    } catch (e) {
        console.log("Exception: MJGetImgFromCamera ");
    }
}


/**
 * 微信分享
 */
function MJWXShare(parm) {
    try {
        if (os == "ios") {
            // ios add js here
			objcPlugin.wxShare(parm);
        } else if (os == "Android") {
            // Android add js here
			window.inspur.invoke("com.inspur.plugin.Plugin","shareWX",parm);
        }
        return message;
    } catch (e) {
        console.log("Exception: MJWXShare");
    }
}
