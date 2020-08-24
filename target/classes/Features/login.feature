Feature: Sathya Cucumber Automate Project

Background:
   Given users enter to crediantial
   
Scenario Outline: Register Test Scenario


When title of page
Then enter register details "<firstname>" and "<lastname>" and "<email>" and "<password>" and "<company>"
Then click and navigate to login page

Examples:
|firstname| |lastname| |email| |password| |company| |username| |password|
|venkat| |ram| |evenkatev7@gmail.com| |456879| |sertrg| |evenkatraman7@gmail.com| |Venk@2486|
|vewrfesft| |dsvfdg| |evenkatev7@gmail.com| |456879| |sertrg| |evenkatdsasdraman7@gmail.com| |Vendfk@2486|
|ouikijgfgvenkat| |dzfzgfdzd| |evenkatev7@gmail.com| |456879| |sertrg| |sdasdevenkatraman7@gmail.com| |Vedfdsfnk@2486|
|sdFafsdf| |dsfgfg| |evenkatev7@gmail.com| |456879| |sertrg| |edfdfvenkatraman7@gmail.com| |VedfDnk@2486|

Scenario: login test scenario

Then user enter "venkat" and "erwn7874"