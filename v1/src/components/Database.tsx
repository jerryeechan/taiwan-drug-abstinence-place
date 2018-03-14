import * as React from "react";
import * as ReactDOM from "react-dom";
import * as firebase from "firebase";

const config = {
  apiKey: "AIzaSyAYfnhC1GbxA7q-HQYDWI_6fHWNArNQ-y0",
  authDomain: "taiwan-drug-abstinence-p-2edf5.firebaseapp.com",
  databaseURL: "https://taiwan-drug-abstinence-p-2edf5.firebaseio.com",
  projectId: "taiwan-drug-abstinence-p-2edf5",
  storageBucket: "taiwan-drug-abstinence-p-2edf5.appspot.com",
  messagingSenderId: "933584242007"
};
if (!firebase.apps.length) {
  firebase.initializeApp(config);
}
let db = firebase.firestore();
let storageRef = firebase.storage().ref();

const cities = [
  // 6直轄市
  "桃園市",
  "台北市",
  "新北市",
  "高雄市",
  "台中市",
  "台南市",
  // 11縣
  "新竹縣",
  "苗栗縣",
  "彰化縣",
  "南投縣",
  "雲林縣",
  "嘉義縣",
  "屏東縣",
  "宜蘭縣",
  "花蓮縣",
  "臺東縣",
  "澎湖縣",
  // 3市
  "基隆市",
  "新竹市",
  "嘉義市"
];

const typeNameMap = {
  livingService: "居住型藥癮服務機構",
  registerSocialService: "社區藥癮治療及社會工作等專業服務",
  otherSocialService: "非居住型也非醫事或社會工作專業機構"
};

const exportConfig = {
  livingService: {
    name: "機構名稱",
    phone: "電話",
    city: "縣市",
    address: "機構地址",
    settleAddress: "安置單位地址",
    email: "電子信箱",
    url: "網站",
    _drugs: {
      _title: "成癮物質",
      _type: "dbMap", // 從map找出db是否有值
      _map: {
        alchohol: "酒精",
        opium: "鴉片類",
        stimulant: "中樞神經興奮劑",
        otherDrug: "其他"
      }
    },
    isMale: "性別(男性)",
    isFemale: "性別(男性)",
    isAdult: "年齡(成人)",
    isChild: "年齡(未成年)",
    isIgnoreServere: "是否排除重大身體疾病或精神疾病個案",
    servereDisease: "排除疾病",
    isWithdral: "是否有生理戒斷處遇",
    isCourtTransfer: "是否接受法院裁定或地檢署轉介之個案",
    specialService: "其他特殊服務",
    maleAdultBed: "男性成年床數",
    maleTeenBed: "男性未成年床數",
    femaleAdultBed: "女性成年床數",
    femaleTeenBed: "女性未成年床數",
    isSettle: "是否安置時間限制",
    settleTime: "安置時間限制",
    feeType: {
      _title: "服務費用收取方式",
      _type: "keyMap", // 拿db的值對應map
      _map: {
        total: "完全自費",
        part: "部分補助",
        free: "全部免費",
        other: "其他"
      }
    },
    feeTypeDescription: "費用來源",
    adminPro: "行政人員(專任)",
    adminPart: "行政人員(兼任)",
    doctorPro: "醫師(專任)",
    doctorProType: "科別(專任)",
    doctorPart: "醫師(兼任)",
    doctorPartType: "科別(兼任)",
    clinicalPsyPro: "臨床心理師(專任)",
    clinicalPsyPart: "臨床心理師(兼任)",
    conselorPro: "諮商心理師(專任)",
    conselorPart: "諮商心理師(兼任)",
    socialWorkerPro: "社會工作師/社工員(專任)",
    socialWorkerPart: "社會工作師/社工員(兼任)",
    functionalTherapistPro: "職能治療師(專任)",
    functionalTherapistPart: "職能治療師(兼任)",
    nursePro: "護理師/護士(專任)",
    nursePart: "護理師/護士(兼任)",
    pastPro: "過來人(專任)",
    pastPart: "過來人(兼任)",
    securityPro: "保全人員(專任)",
    securityPart: "保全人員(兼任)",
    otherPeople: {
      _title: "其他專業人士",
      _type: "multi",
      _map: {
        name: "職位",
        pro: "專任",
        part: "兼任"
      },
      _template: "%name(專任:%pro, 兼任:%part)"
    },
    settlePeopleAmount: "安置狀況(每年/人次)",
    resources: {
      _title: "外部合作",
      _type: "multi",
      _map: null
    },
    isSelfRaise: "自籌",
    selfRaisaAmount: "自籌金額",
    isSupplementory: "向公部門申請",
    money: {
      _title: "申請項目",
      _type: "multi",
      _map: {
        agency: "輔助單位",
        subject: "輔助項目",
        four: "104年",
        five: "105年",
        six: "106年"
      },
      _template:
        "輔助單位:%agency\n輔助項目:%subject\n104:%four\n105:%five\n106:%six\n"
    }
  },
  registerSocialService: {
    name: "機構或民間組織名稱",
    city: "縣市",
    phone: "電話",
    address: "機構地址",
    settleAddress: "治療所或事務所地址",
    email: "電子信箱",
    url: "網站",
    _drugs: {
      _title: "成癮物質",
      _type: "dbMap", // 從map找出db是否有值
      _map: {
        alchohol: "酒精",
        opium: "鴉片類",
        stimulant: "中樞神經興奮劑",
        otherDrug: "其他"
      }
    },
    isMale: "性別(男性)",
    isFemale: "性別(男性)",
    isAdult: "年齡(成人)",
    isChild: "年齡(未成年)",
    isIgnoreServere: "是否排除重大身體疾病或精神疾病個案",
    servereDisease: "排除疾病",
    isWithdral: "是否有生理戒斷處遇",
    isCourtTransfer: "是否接受法院裁定或地檢署轉介之個案",
    specialService: "其他特殊服務",
    // 服務項目
    isGroupConsult: "團體心理治療",
    _groupConsult: {
      _title: "團體心理治療(量能)",
      _type: "doString", // 從db的值塞入樣板
      _map: {
        groupConsultGroupPerYear: null,
        groupConsultGroupTimes: null,
        groupConsultGroupNum: null,
        groupConsultPeoplePerYear: null,
        groupConsultPeoplePerGroup: null
      },
      _template:
        "每年約可提供%groupConsultGroupPerYear個團體，每個團體療程約%groupConsultGroupTimes次，每個團體約%groupConsultGroupNum人，一年約服務%groupConsultPeoplePerYear人次或%groupConsultPeoplePerGroup團次"
    },
    groupConsultDescription: "團體心理治療(說明)",
    isPersonConsult: "個別心理治療",
    _personConsult: {
      _title: "個別心理治療(量能)",
      _type: "doString", // 從db的值塞入樣板
      _map: {
        personConsultPeopleNum: null,
        personConsultPeoplePerYear: null,
        personConsultPeopleTimes: null
      },
      _template:
        "每年約可服務%personConsultPeopleNum，人，每人每次療程約%personConsultPeopleTimes次，一年約服務%personConsultPeoplePerYear人次"
    },
    personConsultDescription: "個別心理治療(說明)",
    isFamilyConsult: "家庭或家庭治療",
    _familyConsult: {
      _title: "家庭或家庭治療(量能)",
      _type: "doString", // 從db的值塞入樣板
      _map: {
        familyConsultFamilyNum: null,
        familyConsultFamilytimes: null
      },
      _template:
        "每年約可服務%familyConsultFamilyNum個家庭，一年約服務%familyConsultFamilytimes家庭次"
    },
    familyConsultDescription: "家庭或家庭治療(說明)",
    isCaseManage: "個案管理服務",
    _caseManage: {
      _title: "個案管理服務(量能)",
      _type: "doString", // 從db的值塞入樣板
      _map: {
        caseManageNum: null
      },
      _template: "可提供之個管案量比為１：%caseManageNum"
    },
    caseManageDescription: "個案管理服務(說明)",
    isFamilyCase: "個案家屬自助團體",
    _familyCase: {
      _title: "個案家屬自助團體(量能)",
      _type: "doString", // 從db的值塞入樣板
      _map: {
        familyCaseGroupNum: null,
        familyCaseGroupPerYear: null,
        familyCasePeoplePerGroup: null,
        familyCasePeoplePerYear: null
      },
      _template:
        "每年約可提供%familyCaseGroupNum個團體，每個團體%familyCasePeoplePerGroup人，一年約服務%familyCasePeoplePerYear人次或%familyCaseGroupPerYear團次"
    },
    familyCaseGDescription: "個案家屬自助團體(說明)",
    isDrugCase: "毒品個案自助團體",
    _drugCase: {
      _title: "毒品個案自助團體(量能)",
      _type: "doString", // 從db的值塞入樣板
      _map: {
        drugCaseGroupNum: null,
        drugCaseGroupPerYear: null,
        drugCasePeoplePerGroup: null,
        drugCasePeoplePerYear: null
      },
      _template:
        "每年約可提供%drugCaseGroupNum個團體，每個團體%drugCasePeoplePerGroup人，一年約服務%drugCasePeoplePerYear人次或%drugCaseGroupPerYear團次"
    },
    drugCaseDescription: "毒品個案自助團體(說明)",
    otherService: {
      _title: "其他服務",
      _type: "multi",
      _map: {
        name: "服務名稱",
        description: "說明",
        people: "人數"
      },
      _template: "服務名稱:%name\n人數:%people\n說明:%description\n"
    },
    feeType: {
      _title: "服務費用收取方式",
      _type: "keyMap", // 拿db的值對應map
      _map: {
        total: "完全自費",
        part: "部分補助",
        free: "全部免費",
        other: "其他"
      }
    },
    feeTypeDescription: "費用來源",
    clinicalPsyPro: "臨床心理師(專任)",
    clinicalPsyPart: "臨床心理師(兼任)",
    conselorPro: "諮商心理師(專任)",
    conselorPart: "諮商心理師(兼任)",
    socialWorkerPart: "社會工作師/社工員(專任)",
    socialWorkerPro: "社會工作師/社工員(兼任)",
    otherPeople: {
      _title: "其他專業人士",
      _type: "multi",
      _map: {
        name: "職位",
        pro: "專任",
        part: "兼任"
      },
      _template: "%name(專任:%pro, 兼任:%part)"
    },
    resources: {
      _title: "外部合作",
      _type: "multi",
      _map: null
    }
  },
  otherSocialService: {
    name: "機構或組織名稱",
    phone: "電話",
    city: "縣市",
    address: "地址",
    email: "電子信箱",
    url: "網站",
    _drugs: {
      _title: "成癮物質",
      _type: "dbMap", // 從map找出db是否有值
      _map: {
        alchohol: "酒精",
        opium: "鴉片類",
        stimulant: "中樞神經興奮劑",
        otherDrug: "其他"
      }
    },
    isMale: "性別(男性)",
    isFemale: "性別(男性)",
    isAdult: "年齡(成人)",
    isChild: "年齡(未成年)",
    isIgnoreServere: "是否排除重大身體疾病或精神疾病個案",
    servereDisease: "排除疾病",
    isWithdral: "是否有生理戒斷處遇",
    isCourtTransfer: "是否接受法院裁定或地檢署轉介之個案",
    specialService: "其他特殊服務",
    // 服務項目
    isAfterClassSupport: "課後輔導方案",
    _afterClassSupport: {
      _title: "課後輔導方案(量能)",
      _type: "doString", // 從db的值塞入樣板
      _map: {
        afterClassSupportPeoplePerYear: null
      },
      _template: "每年約可服務%afterClassSupportPeoplePerYear人"
    },
    afterClassSupportDescription: "課後輔導方案(說明)",

    isFamilySupport: "家屬支持服務方案",
    _familySupport: {
      _title: "家屬支持服務方案(量能)",
      _type: "doString", // 從db的值塞入樣板
      _map: {
        familySupportFamilyNum: null,
        familySupportFamilyTimes: null,
        familySupportPeoplePerYear: null
      },
      _template:
        "每年約可服務%familySupportFamilyNum個家庭，一年共約服務%familySupportFamilyTimes家庭次、%familySupportPeoplePerYear人次"
    },
    familySupportDescription: "家屬支持服務方案(說明)",

    isHouseSupport: "居家關懷服務方案",
    _houseSupport: {
      _title: "居家關懷服務方案(量能)",
      _type: "doString", // 從db的值塞入樣板
      _map: {
        houseSupportPeopleNum: null,
        houseSupportPeoplePerYear: null
      },
      _template:
        "每年約可服務%houseSupportPeopleNum人，一年共約服務%houseSupportPeoplePerYear人次"
    },
    houseSupportDescription: "居家關懷服務方案(說明)",

    isFamilyCase: "個案家屬自助團體",
    _familyCase: {
      _title: "個案家屬自助團體(量能)",
      _type: "doString", // 從db的值塞入樣板
      _map: {
        familyCaseGroupNum: null,
        familyCaseGroupPerYear: null,
        familyCasePeoplePerGroup: null,
        familyCasePeoplePerYear: null
      },
      _template:
        "每年約可提供%familyCaseGroupNum個團體，每個團體%familyCasePeoplePerGroup人，一年約服務%familyCasePeoplePerYear人次或%familyCaseGroupPerYear團次"
    },
    familyCaseDescription: "個案家屬自助團體(說明)",

    isDrugCase: "毒品個案自助團體",
    _drugCase: {
      _title: "毒品個案自助團體(量能)",
      _type: "doString", // 從db的值塞入樣板
      _map: {
        drugCaseGroupNum: null,
        drugCaseGroupPerYear: null,
        drugCasePeoplePerGroup: null,
        drugCasePeoplePerYear: null
      },
      _template:
        "每年約可提供%drugCaseGroupNum個團體，每個團體%drugCasePeoplePerGroup人，一年約服務%drugCasePeoplePerYear人次或%drugCaseGroupPerYear團次"
    },
    drugCaseDescription: "毒品個案自助團體(說明)",

    isLifeServiceCase: "個案自立生活服務及租屋津貼方案",
    _lifeServiceCase: {
      _title: "個案自立生活服務及租屋津貼方案(量能)",
      _type: "doString", // 從db的值塞入樣板
      _map: {
        lifeServiceCasePeoplePerYear: null,
        lifeServiceCaseMoneySupport: null,
        lifeServiceCaseMoneySupportMonth: null
      },
      _template:
        "每年約可服務%lifeServiceCasePeoplePerYear人，每名個案每月補助%lifeServiceCaseMoneySupport元，補助%lifeServiceCaseMoneySupportMonth個月"
    },
    lifeServiceCaseDescription: "個案自立生活服務及租屋津貼方案(說明)",

    isCareerTrain: "職業訓練方案",
    _careerTrain: {
      _title: "職業訓練方案(量能)",
      _type: "doString", // 從db的值塞入樣板
      _map: {
        careerTrainPeoplePerYear: null
      },
      _template: "每年約可培訓%careerTrainPeoplePerYear人"
    },
    careerTrainDescription: "職業訓練方案(說明)",

    isCareerSupport: "支持或陪伴就業服務方案",
    _careerSupport: {
      _title: "支持或陪伴就業服務方案(量能)",
      _type: "doString", // 從db的值塞入樣板
      _map: {
        careerSupportPeoplePerYear: null
      },
      _template: "每年約可服務%careerSupportPeoplePerYear人"
    },
    careerSupportDescription: "支持或陪伴就業服務方案(說明)",

    isWorkSelf: "就業培力方案",
    _workSelf: {
      _title: "就業培力方案(量能)",
      _type: "doString", // 從db的值塞入樣板
      _map: {
        workSelfPeoplePerYear: null
      },
      _template: "每年約可協助%workSelfPeoplePerYear人 穩定就業"
    },
    workSelfDescription: "就業培力方案(說明)",

    isFoundSupport: "創業輔導方案",
    _foundSupport: {
      _title: "創業輔導方案(量能)",
      _type: "doString", // 從db的值塞入樣板
      _map: {
        foundSupportPeoplePerYear: null
      },
      _template: "每年約可協助%foundSupportPeoplePerYear人 順利創業"
    },
    foundSupportDescription: "創業輔導方案(說明)",

    isEconomyService: "福利服務、經濟扶助或急難救助",
    _economyService: {
      _title: "福利服務、經濟扶助或急難救助(量能)",
      _type: "doString", // 從db的值塞入樣板
      _map: {
        economyServiceMoneyPerPerson: null,
        economyServicePersonPerYear: null
      },
      _template:
        "扶助額度%economyServiceMoneyPerPerson元/人，約%economyServicePersonPerYear人/年"
    },
    economyServiceDescription: "福利服務、經濟扶助或急難救助(說明)",

    isCaseManage: "個案管理服務",
    _caseManag: {
      _title: "個案管理服務(量能)",
      _type: "doString", // 從db的值塞入樣板
      _map: {
        caseManageNum: null
      },
      _template: "可提供之個管案量比為１：%caseManageNum"
    },
    caseManageDescription: "個案管理服務(說明)",

    otherService: {
      _title: "其他服務",
      _type: "multi",
      _map: {
        name: "服務名稱",
        description: "說明",
        people: "人數"
      },
      _template: "服務名稱:%name\n人數:%people\n說明:%description\n"
    },
    clinicalPsyPro: "臨床心理師(專任)",
    clinicalPsyPart: "臨床心理師(兼任)",
    conselorPro: "諮商心理師(專任)",
    conselorPart: "諮商心理師(兼任)",
    doctorPro: "醫師(專任)",
    doctorProType: "科別(專任)",
    doctorPart: "醫師(兼任)",
    doctorPartType: "科別(兼任)",
    functionalTherapistPro: "職能治療師(專任)",
    functionalTherapistPart: "職能治療師(兼任)",
    socialWorkerPro: "社會工作師/社工員(專任)",
    socialWorkerPart: "社會工作師/社工員(兼任)",
    nursePro: "護理師/護士(專任)",
    nursePart: "護理師/護士(兼任)",
    pastPro: "過來人(專任)",
    pastPart: "過來人(兼任)",
    securityPro: "保全人員(專任)",
    securityPart: "保全人員(兼任)",
    otherPeople: {
      _title: "其他專業人士",
      _type: "multi",
      _map: {
        name: "職位",
        pro: "專任",
        part: "兼任"
      },
      _template: "%name(專任:%pro,兼任:%part)"
    },
    resources: {
      _title: "外部合作",
      _type: "multi",
      _map: null
    },
    feeType: {
      _title: "服務費用收取方式",
      _type: "keyMap", // 拿db的值對應map
      _map: {
        total: "完全自費",
        part: "部分補助",
        free: "全部免費",
        other: "其他"
      }
    },
    feeTypeDescription: "費用來源",
    isSelfRaise: "自籌",
    selfRaisaAmount: "自籌金額",
    isSupplementory: "向公部門申請",
    money: {
      _title: "申請項目",
      _type: "multi",
      _map: {
        agency: "輔助單位",
        subject: "輔助項目",
        four: "104年",
        five: "105年",
        six: "106年"
      },
      _template:
        "輔助單位:%agency\n輔助項目:%subject\n104:%four\n105:%five\n106:%six\n"
    }
  }
};

export class Exporter {
  static generateDataLinkAndClick(typeName: string) {
    let fileName = typeNameMap[typeName];
    if (!fileName) {
      throw "no such typeName";
    }
    let rows = [];

    rows.push(this._generateHead(typeName));
    this._getContent(rows, typeName);
  }

  static _generateAndClickLink(rows, typeName) {
    let fileName = typeNameMap[typeName];
    let csvContent = "data:text/csv;charset=utf-8,";
    rows.forEach(function (rowArray) {
      let row = rowArray.join(",");
      csvContent += row + "\r\n";
    });

    var encodedUri = encodeURI(csvContent);
    var link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", fileName + ".csv");
    document.body.appendChild(link);
    link.click();
  }

  // 產生csv的標題檔案
  static _generateHead(agencyType: string) {
    let config = exportConfig[agencyType];
    if (!config) {
      throw "no such agencyType";
    }
    var head = [];
    Object.keys(config).map(function (objectKey, index) {
      var value = config[objectKey];
      if (typeof value == "string") {
        head.push(value);
      } else if (typeof value == "object") {
        head.push(value._title);
      }
    });
    return head;
  }

  static _getContent(rows: Array<any>, agencyType: string) {
    let config = exportConfig[agencyType];
    if (!config) {
      throw "no such agencyType";
    }

    let dbTypeMap = {
      livingService: "LivingServices",
      registerSocialService: "RegisterSocialServices",
      otherSocialService: "OtherSocialServices"
    };
    db
      .collection(dbTypeMap[agencyType])
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          let data = doc.data();
          if (!data.name) {
            return;
          }
          let content = [];

          Object.keys(config).map((key, index) => {
            var value = config[key];
            if (typeof value === "string") {
              content.push(this._toShowValue(data[key]));
            } else if (typeof value === "object") {
              var dbValue = null;
              switch (value._type) {
                case "dbMap":
                  dbValue = this._dbMap(value._map, data);
                  content.push(this._toShowValue(dbValue));
                  break;
                case "keyMap":
                  dbValue = this._keyMap(value._map, data[key]);
                  content.push(this._toShowValue(dbValue));
                  break;
                case "multi":
                  dbValue = this._doMulti(value, data[key]);
                  content.push(this._toShowValue(dbValue));
                  break;
                case "doString":
                  dbValue = this._doString(value, data);
                  content.push(this._toShowValue(dbValue));
                  break;
              }
            }
          });
          rows.push(content);
        });
      })
      .then(() => {
        this._generateAndClickLink(rows, agencyType)
      });
  }

  static _keyMap(map: object, dbValue) {
    if (!dbValue) {
      return "";
    }
    return map[dbValue];
  }

  static _doMulti(config: object, data) {
    if (!data) return;
    var out = [];
    // map 為null
    if (config["_map"] == null) {
      Object.keys(data).map(function (key, index) {
        var value = data[key] == null ? "" : data[key];
        out.push(value);
      });
    } else {
      // object類型
      Object.keys(data).map(function (key, index) {
        var value = data[key];
        var temString = config["_template"];
        Object.keys(config["_map"]).map(function (subKey, index) {
          var rowValue = value[subKey] == null ? "" : value[subKey];
          temString = temString.replace(("%" + subKey), value[subKey]);
        });
        out.push(temString);
      });
    }

    return out.join("\n");
  }

  static _doString(config: object, data) {
    var finalString = config["_template"];
    var outString = "";
    Object.keys(config["_map"]).map(function (key, index) {
      var dataString = data[key] == null ? "" : data[key];
      finalString = finalString.replace(("%" + key), dataString);
    });
    return finalString;
  }

  static _dbMap(map: object, data) {
    var tem = [];
    Object.keys(map).map(function (key, index) {
      var chineseName = map[key];
      if (data[key]) {
        tem.push(chineseName);
      }
    });
    return tem.join(",");
  }

  static _toShowValue(input) {
    if (input === true || input === "true") {
      return "是";
    } else if (input === false || input === "false") {
      return "否";
    } else if (input === undefined || input === null) {
      return "";
    }
    return '"' + input + '"';
  }
}

export class Database extends React.Component<any, any> {
  constructor(props) {
    super(props);

    this.state = {
      id: null
    };
  }

  componentDidMount() {
    // var user = firebase.auth().currentUser;
    firebase
      .auth()
      .signInWithEmailAndPassword("a4027971@gmail.com", "88888888")
      .then(user => {
        this.setState({
          id: user.uid
        });
      });
  }

  exportDatabase = () => {
    db
      // .collection("LivingServices")
      // .collection("RegisterSocialServices")
      .collection("OtherSocialServices")
      .get()
      .then(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
          let address = doc.data().address;
          // let ref = db.collection("LivingServices").doc(doc.id);
          // let ref = db.collection("RegisterSocialServices").doc(doc.id);
          let ref = db.collection("OtherSocialServices").doc(doc.id);
          console.log(address);

          for (var i = 0; i < cities.length; i++) {
            let cityNow = cities[i];
            if (address && address.indexOf(cityNow) !== -1) {
              ref
                .update({
                  city: cityNow
                })
                .then(function () {
                  console.log("successful");
                });
              return;
            }
          }
          // 沒有找到，標示其他
          ref
            .update({
              city: "其他"
            })
            .then(function () {
              console.log("successful 其他");
            });
        });
      });
  };

  render() {
    // if (this.state.id && false) {
    //   // TODO :
    //   // 1 livingServices
    //   // 2 RegisterSocialServices
    //   // 3 OtherSocialServices
    //   db
    //     // .collection("LivingServices")
    //     // .collection("RegisterSocialServices")
    //     .collection("OtherSocialServices")
    //     .get()
    //     .then(function(querySnapshot) {
    //       querySnapshot.forEach(function(doc) {
    //         let address = doc.data().address;
    //         // let ref = db.collection("LivingServices").doc(doc.id);
    //         // let ref = db.collection("RegisterSocialServices").doc(doc.id);
    //         let ref = db.collection("OtherSocialServices").doc(doc.id);
    //         console.log(address);

    //         for (var i = 0; i < cities.length; i++) {
    //           let cityNow = cities[i];
    //           if (address && address.indexOf(cityNow) !== -1) {
    //             ref
    //               .update({
    //                 city: cityNow
    //               })
    //               .then(function() {
    //                 console.log("successful");
    //               });
    //             return;
    //           }
    //         }
    //         // 沒有找到，標示其他
    //         ref
    //           .update({
    //             city: "其他"
    //           })
    //           .then(function() {
    //             console.log("successful 其他");
    //           });
    //       });
    //     });
    // }
    return <h1>Hello World</h1>;
  }
}
