# Github Pages的SPA(Single Page Apps)路徑問題

透過Create React App 建立的一個簡單示範。

示範關於在Github Pages上路由切換及重新整理出現404 not found的解決方案。

## 專案內容
[Demo](https://james-lee-01.github.io/gh-page-router-test/ "link")

利用 [spa-github-pages](https://github.com/rafgraph/spa-github-pages/ "link")
來撰寫在Github Pages上部署SPA網頁時，在重新整理時不影響URL及網頁導向的示範repo。

[Article 在此](https://medium.com/@JammsL/%E5%BE%9E%E5%81%9A%E4%B8%AD%E5%AD%B8-github-pages%E9%87%8D%E6%95%B4%E6%80%8E%E6%9C%83404-%E8%B7%AF%E7%94%B1%E5%91%A2-%E4%B8%8B-05d91f4b68b7 "link")






## 環境建置

1. 請先確認有安裝 node.js 與 npm。
2. Clone此專案後，進入存放此專案的資料夾，透過終端機輸入：

   ```bash
   npm install
   ```

3. 安裝完畢後，執行程式：
    ```
    npm start
    ```

4. 打開瀏覽器進入到以下網址：`http://localhost:3000` 執行，終端機出現以下訊息則代表成功執行：

   ```bash
    Compiled successfully!
   ```
    
5. 若欲暫停使用請執行以下：

   ```bash
   ctrl + c
   ```

## 開發工具

- React: v18.2.0
- React-Router-Dom: v6.20.0
- Styled-Component: v6.1.1

