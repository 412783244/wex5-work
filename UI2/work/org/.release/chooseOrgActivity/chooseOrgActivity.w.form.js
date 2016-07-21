define(function(require){
require('$model/UI2/system/components/justep/model/model');
require('$model/UI2/system/components/justep/loadingBar/loadingBar');
require('$model/UI2/system/components/justep/row/row');
require('$model/UI2/system/components/bootstrap/row/row');
require('$model/UI2/system/components/justep/titleBar/titleBar');
require('$model/UI2/system/components/justep/panel/child');
require('$model/UI2/system/components/justep/windowDialog/windowDialog');
require('$model/UI2/system/components/justep/window/window');
require('$model/UI2/system/components/justep/data/baasData');
require('$model/UI2/system/components/justep/panel/panel');
var __parent1=require('$model/UI2/system/lib/base/modelBase'); 
var __parent0=require('$model/UI2/work/org/chooseOrgActivity'); 
var __result = __parent1._extend(__parent0).extend({
	constructor:function(contextUrl){
	this.__sysParam='true';
	this.__contextUrl=contextUrl;
	this.__id='';
	this.__cid='cENvYve';
	this._flag_='dbbd24655f21a34e771e440dc74d7358';
	this.callParent(contextUrl);
 var __BaasData__ = require("$UI/system/components/justep/data/baasData");new __BaasData__(this,{"autoLoad":false,"autoNew":false,"confirmDelete":true,"confirmRefresh":true,"defCols":{"sAddress":{"define":"sAddress","label":"sAddress","name":"sAddress","relation":"sAddress","type":"String"},"sCode":{"define":"sCode","label":"sCode","name":"sCode","relation":"sCode","type":"String"},"sDescription":{"define":"sDescription","label":"sDescription","name":"sDescription","relation":"sDescription","type":"String"},"sFCode":{"define":"sFCode","label":"sFCode","name":"sFCode","relation":"sFCode","type":"String"},"sFID":{"define":"sFID","label":"sFID","name":"sFID","relation":"sFID","type":"String"},"sFName":{"define":"sFName","label":"sFName","name":"sFName","relation":"sFName","type":"String"},"sFax":{"define":"sFax","label":"sFax","name":"sFax","relation":"sFax","type":"String"},"sID":{"define":"sID","label":"sID","name":"sID","relation":"sID","type":"String"},"sLevel":{"define":"sLevel","label":"sLevel","name":"sLevel","relation":"sLevel","rules":{"integer":true},"type":"Integer"},"sLongName":{"define":"sLongName","label":"sLongName","name":"sLongName","relation":"sLongName","type":"String"},"sName":{"define":"sName","label":"sName","name":"sName","relation":"sName","type":"String"},"sNodeKind":{"define":"sNodeKind","label":"sNodeKind","name":"sNodeKind","relation":"sNodeKind","type":"String"},"sOrgKindID":{"define":"sOrgKindID","label":"sOrgKindID","name":"sOrgKindID","relation":"sOrgKindID","type":"String"},"sParent":{"define":"sParent","label":"sParent","name":"sParent","relation":"sParent","type":"String"},"sPersonID":{"define":"sPersonID","label":"sPersonID","name":"sPersonID","relation":"sPersonID","type":"String"},"sPhone":{"define":"sPhone","label":"sPhone","name":"sPhone","relation":"sPhone","type":"String"},"sSequence":{"define":"sSequence","label":"sSequence","name":"sSequence","relation":"sSequence","type":"String"},"sValidState":{"define":"sValidState","label":"sValidState","name":"sValidState","relation":"sValidState","rules":{"integer":true},"type":"Integer"},"sWxDeptID":{"define":"sWxDeptID","label":"sWxDeptID","name":"sWxDeptID","relation":"sWxDeptID","rules":{"integer":true},"type":"Integer"},"sZip":{"define":"sZip","label":"sZip","name":"sZip","relation":"sZip","type":"String"},"version":{"define":"version","label":"version","name":"version","relation":"version","rules":{"integer":true},"type":"Integer"}},"directDelete":false,"events":{},"idColumn":"sID","limit":1,"queryAction":"querySa_oporg","saveAction":"saveSa_oporg","tableName":"sa_oporg","url":"/work/org","xid":"orgData"});
 new __BaasData__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"SPOSITIONS":{"define":"SPOSITIONS","label":"SPOSITIONS","name":"SPOSITIONS","relation":"SPOSITIONS","type":"String"},"SSCHOOL":{"define":"SSCHOOL","label":"SSCHOOL","name":"SSCHOOL","relation":"SSCHOOL","type":"String"},"SSTUDY":{"define":"SSTUDY","label":"SSTUDY","name":"SSTUDY","relation":"SSTUDY","type":"String"},"sBirthday":{"define":"sBirthday","label":"sBirthday","name":"sBirthday","relation":"sBirthday","rules":{"datetime":true},"type":"DateTime"},"sCardKind":{"define":"sCardKind","label":"sCardKind","name":"sCardKind","relation":"sCardKind","type":"String"},"sCardNO":{"define":"sCardNO","label":"sCardNO","name":"sCardNO","relation":"sCardNO","type":"String"},"sCity":{"define":"sCity","label":"sCity","name":"sCity","relation":"sCity","type":"String"},"sCode":{"define":"sCode","label":"sCode","name":"sCode","relation":"sCode","type":"String"},"sCountry":{"define":"sCountry","label":"sCountry","name":"sCountry","relation":"sCountry","type":"String"},"sDegree":{"define":"sDegree","label":"sDegree","name":"sDegree","relation":"sDegree","type":"String"},"sDescription":{"define":"sDescription","label":"sDescription","name":"sDescription","relation":"sDescription","type":"String"},"sEnglishName":{"define":"sEnglishName","label":"sEnglishName","name":"sEnglishName","relation":"sEnglishName","type":"String"},"sFamilyAddress":{"define":"sFamilyAddress","label":"sFamilyAddress","name":"sFamilyAddress","relation":"sFamilyAddress","type":"String"},"sFamilyPhone":{"define":"sFamilyPhone","label":"sFamilyPhone","name":"sFamilyPhone","relation":"sFamilyPhone","type":"String"},"sFunRole":{"define":"sFunRole","label":"sFunRole","name":"sFunRole","relation":"sFunRole","rules":{"integer":true},"type":"Integer"},"sGraduateSchool":{"define":"sGraduateSchool","label":"sGraduateSchool","name":"sGraduateSchool","relation":"sGraduateSchool","type":"String"},"sHomePlace":{"define":"sHomePlace","label":"sHomePlace","name":"sHomePlace","relation":"sHomePlace","type":"String"},"sID":{"define":"sID","label":"sID","name":"sID","relation":"sID","type":"String"},"sIDCard":{"define":"sIDCard","label":"sIDCard","name":"sIDCard","relation":"sIDCard","type":"String"},"sJoinDate":{"define":"sJoinDate","label":"sJoinDate","name":"sJoinDate","relation":"sJoinDate","rules":{"datetime":true},"type":"DateTime"},"sLoginName":{"define":"sLoginName","label":"sLoginName","name":"sLoginName","relation":"sLoginName","type":"String"},"sMail":{"define":"sMail","label":"sMail","name":"sMail","relation":"sMail","type":"String"},"sMainOrgID":{"define":"sMainOrgID","label":"sMainOrgID","name":"sMainOrgID","relation":"sMainOrgID","type":"String"},"sMarriage":{"define":"sMarriage","label":"sMarriage","name":"sMarriage","relation":"sMarriage","type":"String"},"sMobilePhone":{"define":"sMobilePhone","label":"sMobilePhone","name":"sMobilePhone","relation":"sMobilePhone","type":"String"},"sMsn":{"define":"sMsn","label":"sMsn","name":"sMsn","relation":"sMsn","type":"String"},"sName":{"define":"sName","label":"sName","name":"sName","relation":"sName","type":"String"},"sNumb":{"define":"sNumb","label":"sNumb","name":"sNumb","relation":"sNumb","rules":{"integer":true},"type":"Integer"},"sOfficePhone":{"define":"sOfficePhone","label":"sOfficePhone","name":"sOfficePhone","relation":"sOfficePhone","type":"String"},"sPassword":{"define":"sPassword","label":"sPassword","name":"sPassword","relation":"sPassword","type":"String"},"sPasswordModifyTime":{"define":"sPasswordModifyTime","label":"sPasswordModifyTime","name":"sPasswordModifyTime","relation":"sPasswordModifyTime","rules":{"datetime":true},"type":"DateTime"},"sPasswordTimeLimit":{"define":"sPasswordTimeLimit","label":"sPasswordTimeLimit","name":"sPasswordTimeLimit","relation":"sPasswordTimeLimit","rules":{"integer":true},"type":"Integer"},"sPhotoLastModified":{"define":"sPhotoLastModified","label":"sPhotoLastModified","name":"sPhotoLastModified","relation":"sPhotoLastModified","rules":{"datetime":true},"type":"DateTime"},"sProvince":{"define":"sProvince","label":"sProvince","name":"sProvince","relation":"sProvince","type":"String"},"sQQ":{"define":"sQQ","label":"sQQ","name":"sQQ","relation":"sQQ","type":"String"},"sSafeLevelID":{"define":"sSafeLevelID","label":"sSafeLevelID","name":"sSafeLevelID","relation":"sSafeLevelID","type":"String"},"sSchoolLength":{"define":"sSchoolLength","label":"sSchoolLength","name":"sSchoolLength","relation":"sSchoolLength","type":"String"},"sSequence":{"define":"sSequence","label":"sSequence","name":"sSequence","relation":"sSequence","rules":{"integer":true},"type":"Integer"},"sSex":{"define":"sSex","label":"sSex","name":"sSex","relation":"sSex","type":"String"},"sSpeciality":{"define":"sSpeciality","label":"sSpeciality","name":"sSpeciality","relation":"sSpeciality","type":"String"},"sTitle":{"define":"sTitle","label":"sTitle","name":"sTitle","relation":"sTitle","type":"String"},"sValidState":{"define":"sValidState","label":"sValidState","name":"sValidState","relation":"sValidState","rules":{"integer":true},"type":"Integer"},"sZip":{"define":"sZip","label":"sZip","name":"sZip","relation":"sZip","type":"String"},"version":{"define":"version","label":"version","name":"version","relation":"version","rules":{"integer":true},"type":"Integer"}},"directDelete":false,"events":{},"idColumn":"sID","limit":20,"queryAction":"querySa_opperson","saveAction":"saveSa_opperson","tableName":"sa_opperson","url":"/work/org","xid":"regData"});
}}); 
return __result;});