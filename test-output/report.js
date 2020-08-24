$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/VENKATRAMAN/workspace/CucumberCricbuzzProject/src/main/java/Features/login.feature");
formatter.feature({
  "line": 1,
  "name": "Sathya Cucumber Automate Project",
  "description": "",
  "id": "sathya-cucumber-automate-project",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 6,
  "name": "Register Test Scenario",
  "description": "",
  "id": "sathya-cucumber-automate-project;register-test-scenario",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 9,
  "name": "title of page",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "enter register details \"\u003cfirstname\u003e\" and \"\u003clastname\u003e\" and \"\u003cemail\u003e\" and \"\u003cpassword\u003e\" and \"\u003ccompany\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "click and navigate to login page",
  "keyword": "Then "
});
formatter.examples({
  "line": 13,
  "name": "",
  "description": "",
  "id": "sathya-cucumber-automate-project;register-test-scenario;",
  "rows": [
    {
      "cells": [
        "firstname",
        "",
        "lastname",
        "",
        "email",
        "",
        "password",
        "",
        "company",
        "",
        "username",
        "",
        "password"
      ],
      "line": 14,
      "id": "sathya-cucumber-automate-project;register-test-scenario;;1"
    },
    {
      "cells": [
        "venkat",
        "",
        "ram",
        "",
        "evenkatev7@gmail.com",
        "",
        "456879",
        "",
        "sertrg",
        "",
        "evenkatraman7@gmail.com",
        "",
        "Venk@2486"
      ],
      "line": 15,
      "id": "sathya-cucumber-automate-project;register-test-scenario;;2"
    },
    {
      "cells": [
        "vewrfesft",
        "",
        "dsvfdg",
        "",
        "evenkatev7@gmail.com",
        "",
        "456879",
        "",
        "sertrg",
        "",
        "evenkatdsasdraman7@gmail.com",
        "",
        "Vendfk@2486"
      ],
      "line": 16,
      "id": "sathya-cucumber-automate-project;register-test-scenario;;3"
    },
    {
      "cells": [
        "ouikijgfgvenkat",
        "",
        "dzfzgfdzd",
        "",
        "evenkatev7@gmail.com",
        "",
        "456879",
        "",
        "sertrg",
        "",
        "sdasdevenkatraman7@gmail.com",
        "",
        "Vedfdsfnk@2486"
      ],
      "line": 17,
      "id": "sathya-cucumber-automate-project;register-test-scenario;;4"
    },
    {
      "cells": [
        "sdFafsdf",
        "",
        "dsfgfg",
        "",
        "evenkatev7@gmail.com",
        "",
        "456879",
        "",
        "sertrg",
        "",
        "edfdfvenkatraman7@gmail.com",
        "",
        "VedfDnk@2486"
      ],
      "line": 18,
      "id": "sathya-cucumber-automate-project;register-test-scenario;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "users enter to crediantial",
  "keyword": "Given "
});
formatter.match({
  "location": "SathyaLoginStepDef.users_enter_to_crediantial()"
});
formatter.result({
  "duration": 18734712709,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Register Test Scenario",
  "description": "",
  "id": "sathya-cucumber-automate-project;register-test-scenario;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 9,
  "name": "title of page",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "enter register details \"venkat\" and \"ram\" and \"evenkatev7@gmail.com\" and \"456879\" and \"sertrg\"",
  "matchedColumns": [
    0,
    2,
    4,
    6,
    8
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "click and navigate to login page",
  "keyword": "Then "
});
formatter.match({
  "location": "SathyaLoginStepDef.title_of_page()"
});
formatter.result({
  "duration": 1420988580,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "venkat",
      "offset": 24
    },
    {
      "val": "ram",
      "offset": 37
    },
    {
      "val": "evenkatev7@gmail.com",
      "offset": 47
    },
    {
      "val": "456879",
      "offset": 74
    },
    {
      "val": "sertrg",
      "offset": 87
    }
  ],
  "location": "SathyaLoginStepDef.enter_register_details_and_and_and_and(String,String,String,String,String)"
});
formatter.result({
  "duration": 1410300159,
  "status": "passed"
});
formatter.match({
  "location": "SathyaLoginStepDef.move_to_login_page()"
});
formatter.result({
  "duration": 10005151,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "users enter to crediantial",
  "keyword": "Given "
});
formatter.match({
  "location": "SathyaLoginStepDef.users_enter_to_crediantial()"
});
formatter.result({
  "duration": 27610004369,
  "error_message": "org.openqa.selenium.TimeoutException: timeout: Timed out receiving message from renderer: 18.982\n  (Session info: chrome\u003d84.0.4147.135)\nBuild info: version: \u00273.7.0\u0027, revision: \u00272321c73\u0027, time: \u00272017-11-02T22:22:35.584Z\u0027\nSystem info: host: \u0027DESKTOP-KNODTNC\u0027, ip: \u0027192.168.43.110\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_211\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 84.0.4147.135, chrome: {chromedriverVersion: 83.0.4103.39 (ccbf011cb2d2b..., userDataDir: C:\\Users\\VENKAT~1\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:58208}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: a5af8bda30524a78b82c5f264a6f2570\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:600)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:324)\r\n\tat StepDefination.SathyaLoginStepDef.users_enter_to_crediantial(SathyaLoginStepDef.java:28)\r\n\tat ✽.Given users enter to crediantial(C:/Users/VENKATRAMAN/workspace/CucumberCricbuzzProject/src/main/java/Features/login.feature:4)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 16,
  "name": "Register Test Scenario",
  "description": "",
  "id": "sathya-cucumber-automate-project;register-test-scenario;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 9,
  "name": "title of page",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "enter register details \"vewrfesft\" and \"dsvfdg\" and \"evenkatev7@gmail.com\" and \"456879\" and \"sertrg\"",
  "matchedColumns": [
    0,
    2,
    4,
    6,
    8
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "click and navigate to login page",
  "keyword": "Then "
});
formatter.match({
  "location": "SathyaLoginStepDef.title_of_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "vewrfesft",
      "offset": 24
    },
    {
      "val": "dsvfdg",
      "offset": 40
    },
    {
      "val": "evenkatev7@gmail.com",
      "offset": 53
    },
    {
      "val": "456879",
      "offset": 80
    },
    {
      "val": "sertrg",
      "offset": 93
    }
  ],
  "location": "SathyaLoginStepDef.enter_register_details_and_and_and_and(String,String,String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SathyaLoginStepDef.move_to_login_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "users enter to crediantial",
  "keyword": "Given "
});
formatter.match({
  "location": "SathyaLoginStepDef.users_enter_to_crediantial()"
});
formatter.result({
  "duration": 26159058986,
  "error_message": "org.openqa.selenium.TimeoutException: timeout: Timed out receiving message from renderer: 19.182\n  (Session info: chrome\u003d84.0.4147.135)\nBuild info: version: \u00273.7.0\u0027, revision: \u00272321c73\u0027, time: \u00272017-11-02T22:22:35.584Z\u0027\nSystem info: host: \u0027DESKTOP-KNODTNC\u0027, ip: \u0027192.168.43.110\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_211\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 84.0.4147.135, chrome: {chromedriverVersion: 83.0.4103.39 (ccbf011cb2d2b..., userDataDir: C:\\Users\\VENKAT~1\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:58260}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: ef11fe022be1a537cd28139d058a592f\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:600)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:324)\r\n\tat StepDefination.SathyaLoginStepDef.users_enter_to_crediantial(SathyaLoginStepDef.java:28)\r\n\tat ✽.Given users enter to crediantial(C:/Users/VENKATRAMAN/workspace/CucumberCricbuzzProject/src/main/java/Features/login.feature:4)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 17,
  "name": "Register Test Scenario",
  "description": "",
  "id": "sathya-cucumber-automate-project;register-test-scenario;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 9,
  "name": "title of page",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "enter register details \"ouikijgfgvenkat\" and \"dzfzgfdzd\" and \"evenkatev7@gmail.com\" and \"456879\" and \"sertrg\"",
  "matchedColumns": [
    0,
    2,
    4,
    6,
    8
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "click and navigate to login page",
  "keyword": "Then "
});
formatter.match({
  "location": "SathyaLoginStepDef.title_of_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "ouikijgfgvenkat",
      "offset": 24
    },
    {
      "val": "dzfzgfdzd",
      "offset": 46
    },
    {
      "val": "evenkatev7@gmail.com",
      "offset": 62
    },
    {
      "val": "456879",
      "offset": 89
    },
    {
      "val": "sertrg",
      "offset": 102
    }
  ],
  "location": "SathyaLoginStepDef.enter_register_details_and_and_and_and(String,String,String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SathyaLoginStepDef.move_to_login_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "users enter to crediantial",
  "keyword": "Given "
});
formatter.match({
  "location": "SathyaLoginStepDef.users_enter_to_crediantial()"
});
formatter.result({
  "duration": 19421323860,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Register Test Scenario",
  "description": "",
  "id": "sathya-cucumber-automate-project;register-test-scenario;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 9,
  "name": "title of page",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "enter register details \"sdFafsdf\" and \"dsfgfg\" and \"evenkatev7@gmail.com\" and \"456879\" and \"sertrg\"",
  "matchedColumns": [
    0,
    2,
    4,
    6,
    8
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "click and navigate to login page",
  "keyword": "Then "
});
formatter.match({
  "location": "SathyaLoginStepDef.title_of_page()"
});
formatter.result({
  "duration": 1637542362,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "sdFafsdf",
      "offset": 24
    },
    {
      "val": "dsfgfg",
      "offset": 39
    },
    {
      "val": "evenkatev7@gmail.com",
      "offset": 52
    },
    {
      "val": "456879",
      "offset": 79
    },
    {
      "val": "sertrg",
      "offset": 92
    }
  ],
  "location": "SathyaLoginStepDef.enter_register_details_and_and_and_and(String,String,String,String,String)"
});
formatter.result({
  "duration": 1385329558,
  "status": "passed"
});
formatter.match({
  "location": "SathyaLoginStepDef.move_to_login_page()"
});
formatter.result({
  "duration": 10980203,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "users enter to crediantial",
  "keyword": "Given "
});
formatter.match({
  "location": "SathyaLoginStepDef.users_enter_to_crediantial()"
});
formatter.result({
  "duration": 15018016213,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "login test scenario",
  "description": "",
  "id": "sathya-cucumber-automate-project;login-test-scenario",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 22,
  "name": "user enter \"venkat\" and \"erwn7874\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "venkat",
      "offset": 12
    },
    {
      "val": "erwn7874",
      "offset": 25
    }
  ],
  "location": "SathyaLoginStepDef.user_enter_and(String,String)"
});
formatter.result({
  "duration": 296956178,
  "status": "passed"
});
});