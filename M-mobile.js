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
//	// Register the event listener
//	document.addEventListener("backbutton", MJOnBackKeyDown, false);
//}
/**
 * this method for web to excute callbackfunction
 */
function BJCallFun(methodName, data) {
    this.func = new Function(methodName + "('" + data + "');");
    this.func();
}

//document.addEventListener("DOMContentLoaded", getCurrentOS, false);// 新增
function validataOS() {
    if ((navigator.userAgent.match(/iPhone/i))
        || (navigator.userAgent.match(/iPod/i))
        || (navigator.userAgent.match(/iPad/i))) {
        return "ios";

    } else if (navigator.userAgent.match(/Android/i)) {
        return "Android";
    } else if (navigator.userAgent.match(/Mac/i)
        || navigator.userAgent.match(/Windows/i)
             || (navigator.userAgent.match(/Linux/i))) {
        return "PC";
    } else {
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
 * 调用日期选择框 ; param obj：input对象 ; param callback：回调函数名
 */
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
        } else if (os == "Android") {
            if (callBack) {
                window.inspur.getDate(callBack, date);
            } else {
                window.inspur.getDate("MCSetDate", date);
            }
        }

    } catch (e) {
        tempInput.value = "today";
    }
}
/**
 * 调用拨打电话 param telnum：telnum为传过来的要拨打的电话号码
 */
function MJCallTel(telnum) {
    try {
        if (os == "ios") {
            if (callBack) {
                window.location.href = "objc:getDate:" + callBack;
            } else {
                window.location.href = "objc:getDate:MCSetDate";
            }
        } else if (os == "Android") {
	        window.inspur.invoke("com.inspur.plugin.Plugin","callTel",'{"number":"'+telnum+'"}');
        }
    } catch (e) {
        tempInput.value = "today";
    }
}

/**
 * 删除指定目录下的文件 ; param pathfile ; pathfile：路径名加文件名
 */
function MJDelFile(pathfile) {
    try {
        if (os == "ios") {
            if (callBack) {
                window.location.href = "objc:getMonth:" + callBack;
            } else {
                window.location.href = "objc:getMonth:MCSetMonth";
            }
        } else if (os == "Android") {
   return window.inspur.invokeAndReturn("com.inspur.plugin.Plugin","fileDel",'{"pathfile":"'+pathfile+'"}');
}
    } catch (e) {
        tempInput.value = "month";
    }
}
/**
 * 对数据加密 ; param strMi; strMi：需要加密的数据
 */
function MJencryptStr(strMi) {
    try {
        if (os == "ios") {
            if (callBack) {
                window.location.href = "objc:getTime:" + callBack;
            } else {
                window.location.href = "objc:getTime:MCSetTime";
            }
        } else if (os == "Android") {
          alert(window.inspur.invokeAndReturn("com.inspur.plugin.Plugin","encryptStr",'{"strMi":"'+strMi+'"}'));
        }
    } catch (e) {
        tempInput.value = "time";
    }
}
/**
 * 对数据解密 ; param strMi; strMi：需要解密的数据
 */
function MJdecryptStr(strMi) {
    try {
        if (os == "ios") {
            if (callBack) {
                window.location.href = "objc:getTime:" + callBack;
            } else {
                window.location.href = "objc:getTime:MCSetTime";
            }
        } else if (os == "Android") {
         return window.inspur.invokeAndReturn("com.inspur.plugin.Plugin","decryptStr",'{"strMi":"'+strMi+'"}');
        }
    } catch (e) {
        tempInput.value = "time";
    }
}
var tempInput;
/**
 * 调用退出应用的组件（带提示）
 */
function MJexitSYSWithoutAlert() {
   window.inspur.invoke("com.inspur.plugin.Plugin","exitSYSWithoutAlert");
}
/**
 * 调用退出应用的组件（不带提示）
 */
function MJexitSYS() {
  window.inspur.invoke("com.inspur.plugin.Plugin","exitSYS");
}
/**
 * 获取程序名称
 */
function MJgetAppVersionName() {
   return window.inspur.invokeAndReturn("com.inspur.plugin.Plugin","getAppVersionName");
}
/**
 * 获取系统信息
 */
function MJgetOSType() {
   return window.inspur.invokeAndReturn("com.inspur.plugin.Plugin","getOSType");
}
/**
 * 获取当前屏幕大小
 */
function MJgetScreenSize() {
 return window.inspur.invokeAndReturn("com.inspur.plugin.Plugin","getScreenSize");
}
/**
 * 获取sd卡根目录
 */
function MJgetSdcardPath() {
 return window.inspur.invokeAndReturn("com.inspur.plugin.Plugin","getSdcardPath");
}
/**
 * 检测网络环境
 */
function MJisNetworkConnect() {
 return window.inspur.invokeAndReturn("com.inspur.plugin.Plugin","isNetworkConnect");
}
/**
 * 对数据进行本地存储 param key，value; key：存储名称，value：存储值
 */
function MJsetItem(key,value) {
return window.inspur.invokeAndReturn("com.inspur.plugin.Plugin","setItemData",'{"key":"'+key+'","value":"'+value+'"}');
}
/**
 * 获取本地数据param key，key:名称
 */
function MJgetItem(key) {
return window.inspur.invokeAndReturn("com.inspur.plugin.Plugin","getItemData",'{"key":"'+key+'"}');
}
/**
 * 清除程序缓存
 */
function MJcleanData() {
return window.inspur.invokeAndReturn("com.inspur.plugin.Plugin","cleanData");
}
/**
 * 日期选择插件
 */
function MJDatepicker() {
	window.inspur.invoke("com.inspur.pluginpick.DatePickerPlugin","Datepicker",'{"callBack":"callback"}');
}
/**
 * 文件下载
 */
function MJDownload(url,filePath,filename){
window.inspur.invoke("com.inspur.plugindownload.PluginDownlaod","downloadfile",'{"url":"'+url+'","filePath":"'+filePath+'","filename":"'+filename+'"}');
}
/**
 * 默认时间选择框回调函数 ; param time：时间
 */
function MCSetTime(time) {
    tempInput.value = time;
}
/**
 * 弹出等待提示框
 */
function MJStartProgress(message) {
    try {
        if (os == "ios") {
            // ios add js here
            window.location.href = "objc:showWaitView:::" + message + "";
        } else if (os == "Android") {
            window.inspur.startProgressDialog(message);
        }
    } catch (e) {
        console.log("Exception: MJStartProgress " + message);
    }
}
/**
 * 消失 等待提示框
 */
function MJStopProgress() {
    try {
        if (os == "ios") {
            // ios add js here
            window.location.href = "objc:hiddenShowWaitView:中文测试：第二次测试中文";
        } else if (os == "Android") {
            window.inspur.stopProgressDialog();
        }
    } catch (e) {
        console.log("Exception: MJStopProgress ");
    }
}
/**
 * 日期选择回调函数
 * @param {} data
 */
function callback(data){
			 var divNode = document.createElement("div");  
        		divNode.innerText=data;
   			document.getElementById("contentdate").appendChild(divNode)
		}
/**
 * 登陆成功主页调用
 */
function MJLoginOK(js) {
         window.inspur.invoke("com.inspur.plugintab.TabMenuPlugin","tabshow",js);
}
// /**
// * 登陆页面调用
// */
// function MJLoginNotOK() {
// try {
// window.inspur.loginNotOK();
// } catch (e) {
// console.log("Exception: MJLoginNotOK ");
// }
// }
/**
 * 显示 footer
 */
function MJTabShow() {
    try {
        if (os == "ios") {
            // ios add js here
            window.location.href = "objc:setUIParm:::" + +"";
        } else if (os == "Android") {
            window.inspur.tabShow();
        }
    } catch (e) {
        console.log("Exception: MJTabShow ");
    }
}
/**
 * 调用电话 ; param tel:电话号码 多个号码用英文逗号间隔; param message:消息内容
 */
function MJSendMS(tel, message) {
    try {
        if (os == "ios") {
            // ios add js here
            window.location.href = "objc:sendMS:::" + tel + "|"
            + message + "";
        } else if (os == "Android") {
            window.inspur.sendMS(tel, message);
        }
    } catch (e) {
        console.log("Exception: MJSendMS ");
    }
}

/**
 * 发送系统消息
 * @param json
 */
function MCSendMessageDirectly(json) {
    try {
        window.inspur.sendMessageDirectly(json);
    } catch (e) {
        console.log("Exception: MCSendMessageDirectly");
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
            if (OriginalArg == 2) {
                window.inspur.showSingleChoiceDialog(arrary, title);
            } else {
                window.inspur.showSingleChoiceDialog(arrary);
            }
        } else if (os == "PC") {
            window.parent.BJShowSingleChoiceDialog(arrary, title);
        }
    } catch (e) {
        console.log("Exception: MJShowSingleChoiceDialog ");
    }
}
/**
 * 消息提示框 ; param message:消息内容
 */
function MJShowToastMsg(message) {
    try {
        if (os == "ios") {
            // ios add js here
            window.location.href = "objc:showAlertView:::" + message + "";
        } else if (os == "Android") {
            window.inspur.showToastMsg(message);
        } else if (os == "PC") {
            window.parent.BJJMobile(message);
        }

    } catch (e) {
        console.log("Exception: MJShowToastMsg ");
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
        } else if (os == "PC") {
            window.parent.BJShowEditDialog(callBackOK, "MCOnEditDialogCancle",
                title, message);
        }
    } catch (e) {
        console.log("Exception: MJShowEditDialog ");
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
 * 扫描条码二维码 ; param callBack：回调方法名称
 */
function MJScanCode(callBack) {
    try {
        var OriginalArg = arguments.length;
        if (os == "ios") {
            // ios add js here
            if (OriginalArg == 1) {
                window.location.href = "objc:scanCode:" + callBack;
            } else {
                window.location.href = "objc:scanCode:MCScanCode";
            }
        } else if (os == "Android") {
            if (OriginalArg == 1) {
                window.inspur.scanCode(callBack);
            } else {
                window.inspur.scanCode("MCScanCode");
            }
        }
    } catch (e) {
        console.log("Exception: MJScanCode ");
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
        if (os == "ios") {
            // ios add js here
            window.location.href = "objc:exitSYS";
        } else if (os == "Android") {
            window.inspur.exitSYS();
        }
    } catch (e) {
        console.log("Exception: MJExitSYS ");
    }
}

/**
 * 获取系统类型
 */
function MJGetOSType() {
    try {
        if (os == "ios") {
            return 'IOS';
        } else if (os == "Android") {
            return window.inspur.getOSType();
        } else {
            return 'PC';
        }
        return message;
    } catch (e) {
        console.log("Exception: MJGetOSType ");
    }
}
/**
 * 获取程序版本信息
 */
function MJGetAppVersionName(callback) {
    if (!callback)
        callback = "MCSetAppVersionName";
    try {
        if (os == "ios") {
            // ios add js here
            window.location.href = "objc:getAppVersionName:" + callback;
        } else if (os == "Android") {
            return window.inspur.getAppVersionName();
        }
        return message;
    } catch (e) {
        console.log("Exception: MJGetAppVersionName ");
    }
}
/**
 * 启动自动更新 param url：更新程序下载地址
 */
function MJUpdateApp(url) {
    try {
        if (os == "ios") {
            window.location.href = "objc:updateApp:::" + url + "";
        } else if (os == "Android") {
           window.inspur.invoke("com.inspur.plugin.Plugin","updateDialog",'{"url":"'+url+'"}');
        }
        return message;
    } catch (e) {
        console.log("Exception: MJUpdateApp ");
    }
}

/**
 * 打开地图 param json :坐标数据
 */
function MJUpdateMapData(json) {
    try {
        if (os == "ios") {
            // ios add js here

        } else if (os == "Android") {
            return window.inspur.upDateMapData(json);
        }
        return message;
    } catch (e) {
        console.log("Exception: MJUpdataMapData ");
    }
}
/**
 * 打开地图 param json :坐标数据
 */
function MJOpenMap(json) {
    try {
        if (os == "ios") {
            // ios add js here
            window.location.href = "objc:openMap:::" + json + "";
        } else if (os == "Android") {
            return window.inspur.openMap(json);
        }
        return message;
    } catch (e) {
        console.log("Exception: MJOpenMap ");
    }
}
/**
 * 隐藏tab页
 */

function MJTabHidden() {
    try {
        if (os == "ios") {
            // ios add js here

        } else if (os == "Android") {
            return window.inspur.tabHidden();
        }
        return message;
    } catch (e) {
        console.log("Exception: MJTabHidden ");
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
        if (os == "ios") {
            // ios add js here
            window.location.href = "objc:openGps:::" + upLoadUrl + "|"
            + comCode + "|" + visitorCode + "|" + visitorType + "|" + gpsFrequency + "|" + upLoadFrequency + "";
        } else if (os == "Android") {
            if (OriginalArg == 1) {

                return window.inspur.openGps(upLoadUrl);
            } else {

                return window.inspur.openGps(upLoadUrl, comCode, visitorCode,
                    visitorType, gpsFrequency, upLoadFrequency);
            }
        }
        return message;
    } catch (e) {
        console.log("Exception: MJOpenGps ");
    }
}


/**
 * 关闭gps
 */
function MJCloseGps() {
    try {
        if (os == "ios") {
            // ios add js here
            window.location.href = "objc:closeGps";
        } else if (os == "Android") {
            return window.inspur.closeGps();

        }
        return message;
    } catch (e) {
        console.log("Exception: MJCloseGps ");
    }
}

/**
 * 获取地理坐标 单词错误不要使用
 */
function MJGetLcoation(callback) {
    if (!callback)
        callback = "MCSetLocation";
    try {
        if (os == "ios") {
            // ios add js here
            window.location.href = "objc:getLocation:" + callback;
        } else if (os == "Android") {
            return window.inspur.getLocation(callback);
        }
        return message;
    } catch (e) {
        console.log("Exception: MJGetLcoation ");
    }
}
/**
 * 获取地理坐标
 */
function MJGetLocation(callback) {
    if (!callback)
        callback = "MCSetLocation";
    try {
        if (os == "ios") {
            // ios add js here
            window.location.href = "objc:getLocation:::" + callback;
        } else if (os == "Android") {
            return window.inspur.getLocation(callback);
        }
        return message;
    } catch (e) {
        console.log("Exception: MJGetLcoation ");
    }
}

/**
 * location默认回调函数
 */
function MCSetLocation(lat, lng) {
    console.log("默认方法MCSetlocation( lat,lng) 当前坐标：lat=" + lat + " lng=" + lng);
}

/**
 * openNewWebView 打开一个新的webview
 *
 * url：新窗口网页地址
 */
function MJOpenNewWebView(url) {

    try {
        if (os == "ios") {
            // ios add js here
            //M 6.20
            window.location.href = "objc:openNewWebView:::" + url + "";

        } else if (os == "Android") {
//			return window.inspur.openNewWebView(url);
        }
        return message;
    } catch (e) {
        console.log("Exception: MJOpenNewWebView ");
    }
}
/**
 * 展示图片 param json :图片url
 */
function MJShowImag(json) {
    try {
        if (os == "ios") {
            // ios add js here

            //M 6.20
            window.location.href = "objc:showImag:::" + json + "";

        } else if (os == "Android") {
            return window.inspur.imageShow(json);
        }
        return message;
    } catch (e) {
        console.log("Exception: MJOpenMap ");
    }
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
 * 调用多选框 ; param arrary:数据内容 ; param title:标题头
 */
function MJShowMultiChoiceDialog(arrary, title) {
    try {
        var OriginalArg = arguments.length;
        if (os == "ios") {
            // ios add js here
            window.location.href = "objc:showFilterDialog:::" + arrary + "|"
            + title + "";
        } else if (os == "Android") {
            if (OriginalArg == 2) {
                window.inspur.showMultiChoiceDialog(arrary, title);
            } else {
                window.inspur.showMultiChoiceDialog(arrary);
            }
        } else if (os == "PC") {
            window.parent.BJShowSingleChoiceDialog(arrary, title);
        }
    } catch (e) {
        console.log("Exception: MJShowSingleChoiceDialog ");
    }
}

function MJShowSingleChoiceDialogJson(json, title) {
    try {
        window.inspur.showSingleChoiceDialogJson(json, title);
    } catch (e) {
        console.log("Exception: MJShowSingleChoiceDialog ");
    }
}


/**
 * 获取设备屏幕大小 A5 A8  A10
 */
function MJGetScreenSize() {
    try {
        if (os == "ios") {
            // ios add js here

        } else if (os == "Android") {
            return window.inspur.getScreenSize();
        }
        return message;
    } catch (e) {
        console.log("Exception: MJGetScreenSize ");
    }
}

/**
 * 进入网盘
 */
function MCGotoWp() {
    try {
        window.inspur.gotoWp();
    } catch (e) {
        console.log("Exception: MCGotoWp Call ");
    }
}
/**
 * 获取gps状态 0：未开启 1：已开启
 */
function MJCheckGps() {
    try {
        if (os == "ios") {
            // ios add js here

        } else if (os == "Android") {
            return window.inspur.checkGps();
        }
        return message;
    } catch (e) {
        console.log("Exception: MJCheckGps ");
    }
}
/**
 * 通过@发消息
 */
function MCSendMessage(json) {
    try {
        window.inspur.sendMessage(json);
    } catch (e) {
        console.log("Exception: MCSendMessage Call ");
    }
}
/**
 * 展示数据（图片、doc等）
 */
function MCShowData(url) {
    try {
        window.inspur.showDataByOtherApp(url);
    } catch (e) {
        console.log("Exception: MCShowData Call ");
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

}
//存储用户登录信息
function MCSetUserInfo(json) {
    try {
        window.inspur.setUserInfo(json);
    } catch (e) {
        console.log("Exception: MCSetUserInfo Call ");
    }
}

//调用自动填充组件
function MJShowAutoText(json, title) {
    var OriginalArg = arguments.length;
    try {
        if (OriginalArg == 2) {
            window.inspur.showAutoText(json, title);
        } else {
            window.inspur.showAutoText(json);
        }
    } catch (e) {
        console.log("Exception: MJShowAutoText Call ");
    }
}

//获取地理坐标 返回json   
function MJGetLocationJson() {
    try {
        if (os == "ios") {
            // ios add js here
//			 window.location.href = "objc:getLocation:" ;
        } else if (os == "Android") {
            return window.inspur.getLocation();
        }
        return message;
    } catch (e) {
        console.log("Exception: MJGetLcoation ");
    }
}
function MJuploadGpsManually() {
    try {
        if (os == "ios") {

        } else if (os == "Android") {
            window.inspur.uploadGpsManually();
        }
    } catch (e) {
        console.log("Exception: MJuploadGpsManually ");
    }
}
function MJIsFirstCall() {
    try {
        if (os == "ios") {

        } else if (os == "Android") {
            return window.inspur.isFirstCall();
        }
    } catch (e) {
        console.log("Exception: MJIsFirstCall ");
    }
}
function MJProgressDialog(progress) {
    try {
        if (os == "ios") {

        } else if (os == "Android") {
            return window.inspur.setPdStatus(progress);
        }
    } catch (e) {
        console.log("Exception: MJProgressDialog ");
    }
}
/**
 * 开启第三方 程序
 * @param json   {"name":"test3","passWord":"12345","serverAddress":"61.164.108.142","jsonData":"data","packgeName":"com.spestream","className":"com.spestream.DlgLogin"}
 * @returns
 * com.spelive  com.spelive.DlgLogin
 */

function MJStarActivity(json) {
    try {
        if (os == "ios") {

        } else if (os == "Android") {
            return window.inspur.startActivity(json);
        }
    } catch (e) {
        console.log("Exception: MJProgressDialog ");
    }
}

/**
 *开启蓝牙读卡功能
 */
function MJOpenBlueTooth() {
    try {
        if (os == "ios") {

        } else if (os == "Android") {
            return window.inspur.openBlueTooth();
        }
    } catch (e) {
        console.log("Exception: MJOpenBlueTooth ");
    }
}

//申明离线数据库变量
var db;
/**
 *客户经理
 */
function MJOpenDB() {
    try {
        if (os == 'PC') {
            db = window.openDatabase("Database", "1.0", "PhoneGap Demo", 30 * 1024 * 1024);
        } else {
            // db = window.sqlitePlugin.openDatabase("Database", "1.0","PhoneGap Demo", 30 * 1024 * 1024);
            db = window.sqlitePlugin.openDatabase({name: "slsDatabase", bgType: 1});
        }
    } catch (e) {
        console.log("Exception: MJOpenDB. " + e);
    }
}

/**
 * 稽查员
 */
function MJOpenInspDB() {
    try {
        if (os == 'PC') {
            db = window.openDatabase("inspDatabase", "1.0", "PhoneGap Demo", 30 * 1024 * 1024);
        } else {
            db = window.sqlitePlugin.openDatabase({name: "inspDatabase", bgType: 1});
        }
    } catch (e) {
        console.log("Exception: MJOpenInspDB. " + e);
    }
}

/**
 *本地数据保存(主要针对离线登录跨域问题)
 */
function MJSetItem(key, value) {
    try {
        if (os == "ios") {

        } else if (os == "Android") {
            return window.inspur.setItemData(key, value);
        } else if (os == 'PC') {
            window.localStorage[key] = value;
        }
    } catch (e) {
        console.log("Exception: MJSetItem ");
    }
}
/**
 *本地数据获取(主要针对离线登录跨域问题)
 */
function MJGetItem(key) {
    try {
        if (os == "ios") {

        } else if (os == "Android") {
            return window.inspur.getItemData(key);
        } else if (os == 'PC') {
            return window.localStorage[key];
        }
    } catch (e) {
        console.log("Exception: MJGetItem ");
    }
}
/**
 *下载数据到sqlite(月汇总下载跨域问题)
 */
function MJDownloadToSqlite(urlStr, hostStr) {
    try {
        if (os == "ios") {

        } else if (os == "Android") {
            return window.inspur.downLoadIntoSqlite(urlStr, hostStr);
        }
    } catch (e) {
        console.log("Exception: MJDownloadToSqlite ");
    }
}
/**
 *
 * @param json
 */
function MJShowPhoneMsgWindow(json) {
    try {
        if (os == "ios") {
        } else if (os == "Android") {
            window.inspur.showPhoneMsgWindow(json);
        }
    } catch (e) {
        console.log("Exception: MJShowPhoneMsgWindow ");
    }
}
/**
 * print log
 * @param string
 */
function log() {

    var args = Array.prototype.slice.call(arguments);

    args.unshift('crm--->');

    console.log.apply(console, args);

}
/**
 * print log
 * @param string
 */
function ilog(parm) {

    //var args = Array.prototype.slice.call(arguments);

    //args.unshift('crm--->');

    //console.log.apply(console, args);

    console.log('crm--->' + parm);
}
/* 收集客户端数据*/
function MJCollectData(json) {
    try {
        if (os == "ios") {

        } else if (os == "Android") {
            window.inspur.collectData(json);
        }
    } catch (e) {
        log("Exception: MJCollectData ");
    }
}

/**
 *更新客户端html
 *{"url"："http：//www.xingshangmeng.com/st/skin/aaa.zip","fileName":"aaa.zip","callBack":"functionname"}
 *压缩文件为aaa.zip
 *回调函数返回参数  -1:文件下载出错 0:文件下载成功 1:文件已经存在 -2:解压缩失败
 */
function MJUpdateHtml(json) {
    try {
        if (os == "ios") {

        } else if (os == "Android") {
            window.inspur.updateHtml(json);
        }
    } catch (e) {
        console.log("Exception: MJUpdateHtml ");
    }
}
/**
 *制定tab页 开启url
 *{"url"："http：//www.xingshangmeng.com/st/skin/...","index"：0,}
 */
function MJLoadUrl(json) {
    try {
        if (os == "ios") {
            //objc(ios平台):tabShowIndex（调用方法名称）: (成功回调方法名称、可不传):(失败回调方法名称、 可不传):(参数列表)
            window.location.href = "objc:tabShowIndex:::" + json + "";
        } else if (os == "Android") {
            window.inspur.loadUrl(json);
        } else if (os == 'PC') {
            var theArray = JSON.parse(json).url.split("/");
            window.location.href = theArray[theArray.length - 1];
        }
    } catch (e) {
        console.log("Exception: MJLoadUrl ");
    }
}
/**
 * 直接退出
 */
function MJExitSYSWithoutAlert() {
    try {
        if (os == "ios") {

        } else if (os == "Android") {
            window.inspur.exitSYSWithoutAlert();
        }
    } catch (e) {
        console.log("Exception: MJExitSYSWithoutAlert ");
    }
}

/**
 * 清除数据
 */
function MJCleanData() {
    try {
        if (os == "ios") {

        } else if (os == "Android") {
            if (window.inspur.cleanData() == '1')
                MJShowToastMsg("清除数据成功！");
            else
                MJShowToastMsg("清除数据失败！");
        }
    } catch (e) {
        console.log("Exception: MJCleanData ");
    }
}
/**
 *
 * @param progress 每次传入的数值
 * @param max 最大进度
 * @returns 进度条 累加每次传入的数值
 */
function MJSetPdStatusSum(progress, max) {
    try {
        if (os == "ios") {

        } else if (os == "Android") {
            return window.inspur.setPdStatusSum(progress, max);
        }
    } catch (e) {
        console.log("Exception: MJSetPdStatusSum ");
    }
}
/**
 * 开启录音功能
 * fileName 文件名 （不带后缀）
 * seconds 单位为秒，经过一段seconds秒后结束录音，为0时不结束。
 */
function MJStartRecord(fileName,seconds) {
    try {
        if (os == "ios") {

        } else if (os == "Android") {
            window.inspur.startRecord(fileName,seconds);
        }
    } catch (e) {
        console.log("Exception: MJStartRecord ");
    }
}


/**
 * 结束录音功能
 */
function MJEndRecord() {
    try {
        if (os == "ios") {

        } else if (os == "Android") {
            window.inspur.endRecord();
        }
    } catch (e) {
        console.log("Exception: MJEndRecord ");
    }
}

/**
 * 获取录音列表
 * 返回json格式数据
 */
function MJGetRecordFiles() {
    try {
        if (os == "ios") {

        } else if (os == "Android") {
            return window.inspur.getRecordFiles();
        }
    } catch (e) {
        console.log("Exception: MJGetRecordFiles ");
    }
}

/**
 * 删除文件
 * fileName 文件名  完整路径 /a/d/c.akp
 */
function MJFileDel(fileName) {
    try {
        if (os == "ios") {

        } else if (os == "Android") {
            return window.inspur.fileDel(fileName);
        }
    } catch (e) {
        console.log("Exception: MJStartRecord ");
    }
}

/**
 * String加密
 * strMing 明文
 * return 密文
 */
function MJEncryptStr(strMing) {
    try {
        if (os == "ios") {

        } else if (os == "Android") {
            return window.inspur.encryptStr(strMing);
        }
    } catch (e) {
        console.log("Exception: MJEncryptStr ");
    }
}
/**
 * String加密
 * strMing 密文
 * return  明文
 */
function MJDecryptStr(strMi) {
    try {
        if (os == "ios") {

        } else if (os == "Android") {
            return window.inspur.decryptStr(strMi);
        }
    } catch (e) {
        console.log("Exception: MJDecryptStr ");
    }
}
/**
 * 百度自定义事件
 * event_id 业务端注册的事件 id:不能超过30个字符,建议保存对应的图片,xxx.png
 * label 各种事件添加的标签;事件的一些额外信息:功能名称或者按钮名称
 * aac 事件的发生次数,不指定时值为 1.
 * signal 带有/的全地址路径或者相对路径,使用客服和工具箱功能路径
 */
function MJOnEvent(id, label, signal, acc) {
    if (id && id !== '' && signal === '1') { 
        var idArray = id.split('/');
        id = idArray[idArray.length - 1];
        id = id.split('.')[0];
    }
    if (arguments.length === 1) label = 'other';// 非工具箱和客服功能点击
    if (arguments.length < 4) acc = 1;// 默认为1
    ilog("MJOnEvent-issss-id = " +  id);
    try {
        if (os == "ios") {

        } else if (os == "Android") {
            window.inspur.onEvent(id, label, acc);
        }
    } catch (e) {
        console.log("Exception: MJShowHtmlData ");
    }
}
/**
 * 判断当前是否有网络
 * 返回1时表示有网络，返回2时表示无网络
 */
function MJIsNetworkConnect(){
		try {
        if (os == "ios") {

        } else if (os == "Android") {
            return window.inspur.isNetworkConnect();
        }
    } catch (e) {
        console.log("Exception: MJIsNetworkConnect ");
    }
}
/**
 * 播放录音组件
 */
function MJShowVideoDialog(json){
		try {
        if (os == "ios") {

        } else if (os == "Android") {
            window.inspur.showVideoDialog(json);
        }
    } catch (e) {
        console.log("Exception: MJShowVideoDialog ");
    }
}