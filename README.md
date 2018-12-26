# cherrioCrawler
This is a part of a project using cherriojs to crawl data from the website of Thai Water (http://www.thaiwater.net/v3/), create an api to return data of water situation for each province.

To download and run the app
git clone https://github.com/agentfox/cherrioCrawler.git

Command : 
  npm install 
  npm start 

Examples APIs : 
  localhost:8081/trang4
  (http://www.thaiwater.net/DATA/REPORT/php/lampao_scada/lampao_scada.php?lang=en)
  localhost:8081/trang18
  (http://www.thaiwater.net/DATA/REPORT/php/chanthaburi_scada/chanthaburi_scada.php?lang=en)
Origin Data Source :
  http://www.thaiwater.net/DATA/site/content/fs_show_file.php?geo_code=02&type=province
  http://www.thaiwater.net/v3/telemetering/wl/warning
  http://www.thaiwater.net/DATA/REPORT/php/scada.php