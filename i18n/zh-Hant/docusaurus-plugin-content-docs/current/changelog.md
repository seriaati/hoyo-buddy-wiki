# 更新日誌

## v1.16.8

### 新功能

- (`/challenge zzz shiyu`) 新增通關時間。
- (`/challenge hsr`) 隱藏快速通關。
- (`/challenge hsr`) 新增「顯示 UID」選項。
- (`/gacha-log`) 支援星穹鐵道聯動卡池。
- (`/profile zzz`) 新增對新角色的支援：Alice 和 Yuzuha。
- (`/profile zzz`) 新增對代理人服裝的支援。
- 機器人在程式碼更新期間不會再離線。

### 優化

- (`/profile hsr`) 改善樣式 2 的文字位置。
- (`/events`) 改善亮色模式的色彩對比度。
- (`/gacha-log view`) 當更改卡池類型時更改網頁應用程式連結。
- (`/search`) 星穹鐵道角色故事現在以更清晰的方式顯示。
- 透過更好的快取改善圖片生成效能。
- 儲存圖片為 webp 格式而非 png 以減少檔案大小。

### 錯誤修復

- (`/redeem`) 修復小寫兌換碼未計算為已兌換的問題。
- (`/characters genshin`) 修復文字位置問題。
- (`/characters genshin`) 修復某些角色圖片樣式不同的問題。
- (`/profile hsr`) 修復樣式 2 中光錐名稱的字體問題。

## v1.16.7

### 新功能

- 新增阿拉伯語支援。
- (`/challenge genshin`) 新增「幽境危戰」卡片生成。
- (`/profile zzz`) 為樣式 4 的「閃能自動累積」新增縮寫。

### 優化

- (`/accounts`) 擷取帳號時顯示一個頁面。
- (`/accounts`) 更新米遊社登入的 APK 檔案 URL。
- (`/accounts`) 新增用於新增米遊社帳號的 aaid 輸入欄位。
- 利用多個 CPU 核心加快圖片生成速度。
- 圖片中的文字位置更精確。

### 問題修復

- (`/profile zzz`) 修復儀玄在樣式 1 中的圖片位置。
- (`/profile zzz`) 修復樣式 4 中「穿透值」數值未被翻譯的問題。
- (`/search`) 停用深境螺旋分類。
- (`/search`) 修復驅動盤分類沒有自動完成選項的問題。

## v1.16.6

### 新功能

- (`/profile zzz`) 新增 ZZZ 2.0 新角色卡片資料。

- (`/profile zzz`) 新增對命破代理人和貫穿力數值的支援。

- (`/gacha-log import`) 處理 authkey 例外狀況。

- 新增可關閉的週年慶公告。

### 優化

- (`/profile zzz`) 移除背景代理人名稱中的空格。

### 問題修復

- (`/characters genshin`) 處理無屬性角色的問題。

- (`/challenge genshin theater`) 處理無效角色 ID 的問題。

## v1.16.5

### 新功能

- (`/profile hsr`) 新增 v3.3 新角色卡片資料。
- (`/profile hsr`) 新增對記憶命途角色使用 StarRailCard 卡片樣式的支援。
- (`/profile`) 處理 Enka Network API 請求逾時錯誤。
- (`/search`) 啟用「未釋出內容」搜尋分類。

### 問題修復

- (`/redeem`) 移除指令中的 'user' 參數。
- (`/mimo`) 移除 mimo 自動任務嵌入中的 UID 模糊處理。
- (`/upload`) 處理過大的圖片檔案。
- (`/search`) 修復角色和光錐屬性計算公式錯誤的問題。
- (`/accounts`) 修復當使用者擁有超過 25 個帳戶時「下一頁」選項無法正常運作的問題。

## v1.16.4

### 新功能

- (`/profile genshin`) 支援無元素旅行者。
- 新增印地語字體。

### 優化

- (`/profile`) 移除角色資料快取。
- 為抽卡紀錄篩選條件添加約束條件。

### 問題修復

- (`/events`) 修復無法找到卡池公告的問題。
- (`/challenge genshin theater`) 修復幻想真境劇詩資料不顯示的問題。
- (`/profile`) 修復與 Enka Network 面板的相容性問題。
- (`/mimo`) 修復米遊社用戶能夠訪問該指令的問題。
- (`/notes`) 進行即時便籤檢查時忽略遊戲維護錯誤。
- (`/lb view`) 移除崩壞3的成就排行榜。
- (`/farm reminder`) 修復物品名稱顯示為"..."的問題。

## v1.16.3

### 新功能

- (`/profile zzz`) 新增薇薇安和雨果的卡片資料。
- 新增葡萄牙語 (巴西) 翻譯。
- 新增日語翻譯。

### 優化

- (`/profile zzz`) 調整了部分角色的圖片位置。
- (`/profile zzz`) 改善了卡片模板的圖片層級。

### 問題修復

- (`/notes`) 修復了質變儀通知無法正常運作的問題。
- (`/gacha-log upload`) 修復了某些 ZZZ 匯入方法導致的錯誤物品稀有度。

## v1.16.2

### 新功能

- (`/profile hsr`) 新增遐蝶和那刻夏的卡片資料。

### 問題修復

- (`/profile zzz`) 修復波可娜的圖片在卡片樣式 2 中位置錯誤的問題。
- (`/build genshin`) 修復用戶應用中聖遺物位置表情符號顯示錯誤的問題。

## v1.16.1

### 新功能

- (`/gacha-log upload`) 新增對 [Starward 啟動器](https://github.com/Scighost/Starward) 的絕區零部份匯入抽卡紀錄的支援。
- (`/redeem`) 新增通知設定。
- (`/accounts`) 新增獲取 aaid 的說明，方便用戶新增米遊社帳號。
- 新增「隱藏 UI」按鈕，適用於按鈕數量較多的指令。

### 優化

- (`/search`) 移除「未釋出內容」分類，詳情請參見[這則訊息](https://discord.com/channels/1000727526194298910/1042428379120545873/1346411349999357973)。
- (`/characters`) 允許在篩選器中不選擇任何項目。
- 提升自動任務的性能。

### 問題修復

修復了多個問題，詳情請查閱[完整更新日誌](https://github.com/seriaati/hoyo-buddy/releases/tag/v1.16.1)。

## v1.16.0  

[給技術宅們](https://github.com/seriaati/hoyo-buddy/releases/tag/v1.16.0)  

### 新增功能  

- (`/profile`) 在卡片設置中新增模板預覽。  
- (`/profile`) 在卡片模板下拉選單中顯示自訂圖片的可用性。  
- (`/notes`) 將《星穹鐵道》開拓力上限提升至 300。  
- (`/notes`) 新增「打開遊戲」按鈕。  
- (`/search zzz`) 新增核心技能等級選擇器。  
- (`/gacha-log import`) 匯入祈願記錄時，對比輸入的 UID 與當前帳號的 UID。  
- 自動根據 Discord 客戶端的語言設置新用戶的語言。  

### 優化  

- (`/redeem`) 改進使用者體驗，修復兌換已兌換禮包碼時無回應的問題。  
- (`/gacha-log`) 設置帳號參數為必填，避免混淆。  
- 為「缺少權限」和「訊息被 AutoMod 阻擋」的錯誤提供更明確的提示。  
- 簡化帳號設置過程中的提示文字。  

### 問題修復  

修復了多個錯誤並進行了一些改進。  

## v1.15.7  

### 新增功能  

- (`/web-events`) 新增命令來查看正在進行中的網頁活動，並設置通知器以提醒您有新活動。  
- (`/notes`) 為《絕區零》（ZZZ）新增懸賞委託和 Ridu 每週點數通知器。  
- (`/about`) 新增更新日誌按鈕。  

### 優化  

- (`/gacha-log view`) 修復緩存問題，提升祈願記錄頁面的性能。  
- (`/about`) 移除最新 Git 變更的顯示。  
- (`/mimo`) 在自動購買時，將旅行夥伴 Mimo 商店物品按照價格從高到低排序。  
- 改進其他語言的本地化。

### 問題修復  

- (`/characters genshin`) 修復因無屬性旅行者導致的 `KeyError` 問題。  
- (`/characters genshin`) 修復神里綾華天賦等級顯示錯誤的問題。  
- (`/stats`) 修復 ZZZ 中「未找到記錄卡片」的錯誤。  
- (`/build genshin`) 修復「沒有可繪製的阻止列表」的錯誤。  
- (`/gacha-log view`) 修復錯誤的 50/50 勝率計算。  
- (`/gacha-log view`) 修復 Web 應用中的 422 驗證錯誤。  
- (`/gacha-log view`) 處理無效的大小輸入。  
- (`/gacha-log import`) 處理匯入祈願記錄時的無效卡池類型問題。  
- (`/gacha-log import`) 修復 UIGF 匯入功能。  
- (`/mimo`) 在發送通知前確認任務完成狀態。  
- (`/mimo`) 在完成任務之間新增休眠間隔以避免觸發限速。  
- (`/mimo`) 移除任務名稱中的 HTML 標籤。  
- (`/mimo`) 修復購買物品後的錯誤。  
- (`/profile`) 修復不同遊戲的卡片設置混合的問題。  
- (`/profile genshin`) 修復隊伍卡片中顯示多餘天賦的問題。  
- (`/profile genshin`) 修復與 Mavuika 相關的驗證錯誤。  
- (`/search`) 修復 W-engine 精煉選擇器未更新所選值的問題。  
- (`/notes`) 修復《崩壞3》中的驗證錯誤。  
- (`/challenge zzz assault`) 修復增益圖標未顯示的問題。  

## v1.15.6

### 新增功能

- (`/mimo`) 新增旅行 Mimo 對於原神的支持（活動在撰寫時已經結束）。
- (`/mimo`) 新增自動抽獎功能。
- (`/challenge zzz`) 新增對於「危局強襲戰」遊戲模式的支持。
- (`/profile hsr`) 新增卡片樣式 2。
- (`/notes`) 新增對於絕區零懸賞委託及麗都週記任務資訊的顯示。

## 優化

- (`/check-in`) 減少重複的簽到 API 請求。

## 問題修復

- (`/mimo`) 修復當沒有完成任何任務或獲取任何積分時仍發送通知的問題。
- (`/mimo`) 修復有價值物品判斷方式的問題。
- (`/mimo`) 處理 -510001 錯誤。
- (`/mimo`) 修復在星穹鐵道中，有價值物品被誤認為裝飾品的問題。
- (`/mimo`) 當達到上限時禁用抽獎按鈕。
- (`/challenge zzz`) 修復卡片中錯誤的邦布圖片。
- (`/events`) 修復螺旋深淵進度錯誤的問題。
- (`/gacha-log view`) 修復錯誤的「距離上一稀有度的抽取次數」。
- 修復靜態圖片文件夾創建邏輯。

## v1.15.5  

### 新增功能  

- (`/mimo`) 自動完成需要在帖子下留言的任務。  
- (`/mimo`) 自動完成需要關注主題的任務。  
- (`/mimo`) 新增抽獎功能。  
- (`/mimo`) 新增通知設置。  
- (`/profile zzz`) 新增圖片設置，允許在構建卡中使用「Mindscape 3」的美術圖。  
- (`/profile zzz`) 新增春政 (Harumasa) 和雅 (Miyabi) 卡片數據。  
- (`/search`) 在某些公會中隱藏「未釋出內容」分類。  

### 優化  

- (`/mimo`) 在某些任務中顯示任務進度。  
- (`/mimo`) 在通知中顯示已完成任務的名稱。  
- (`/mimo`) 提升自動任務執行性能。  
- (`/challenge zzz shiyu`) 更新卡片佈局。  
- (`/challenge zzz shiyu`) 避免重複抓取代理人數據。  
- 在錯誤嵌入的頁腳顯示 Discord 伺服器邀請鏈接。  
- 在錯誤情況下解除項目加載狀態。  
- 在切換按鈕上新增開/關標籤。  
- 改進代理 API 請求邏輯。  
- 改善自動任務的錯誤處理邏輯。  

### 問題修復  

- (`/mimo`) 在兌換 Mimo 獎勵禮品碼後新增休眠間隔。  
- (`/mimo`) 修復任務清單中遺漏的任務。  
- (`/mimo`) 修復留言任務未被完成的問題。  
- (`/mimo`) 修復當沒有完成任何任務時仍發送通知的問題。  
- (`/mimo`) 自動完成中僅顯示 HoYoLAB 賬號。  
- (`/mimo`) 修復自動任務中的 `QuerySetError` 問題。  
- (`/mimo`) 修復帖子留言未被刪除的問題。  
- (`/mimo`) 處理旅行夥伴 Mimo 不可用於某些遊戲的情況。  
- (`/profile zzz`) 修復副屬性高亮未顯示在卡片上的問題。  
- (`/profile zzz`) 修復代理人被誤認為已緩存的問題。  
- (`/characters zzz`) 修復代理人總數顯示錯誤的問題。  
- (`/gacha-log upload`) 修復 zzz.rng.moe 導入時的問題。  
- (`/redeem`) 修復 Miyoushe 賬號出現在賬號自動完成選項中的問題。  
- (`/build genshin`) 處理某些角色缺失使用率的情況。  
- (`/events`) 修復 HSR 未來卡池未顯示為「尚未釋出」的問題。  
- 適配新的 ZenlessData 鍵值。  
- 修復 Hakushin API 的相關問題。  
- 捕獲 `dm_user` 方法中的一般異常情況。  

## v1.15.4  

### 新增功能  

- (`/build genshin`) 顯示角色隊伍配置的相關信息。  
- (`/mimo`) 新增指令來管理旅行 Mimo。  

### 優化  

- (`/build genshin`) 改善卡片設計。  
- (`/notes`) 使用事件日曆 API 檢查位面分裂事件。  

### 問題修復  

- (`/build genshin`) 修復一些 UI 問題。  
- (`/events`) 修復導致指令無法使用的問題。  
- (`/gacha-log upload`) 修復使用 UIGF 數據時的 `ValidationError` 問題。  
- (`/gacha-log upload`) 修復 UIGF 版本低於 3.0 時的 `KeyError` 問題。  
- (`/search`) 修復重複的自動完成選項問題。  

## v1.15.3  

先前版本中的錯誤程式碼導致部分使用者在登入時看到「請求次數過多」錯誤，請參閱[本文](./too-many-requests.md) 以了解更多資訊。

### 新增功能  

- (`/profile zzz`) 新增選擇器，可選擇想要突出的副屬性。  
- (`/profile hsr`) 新增 Fugue 和 Sunday 卡片數據。  

### 優化  

- (`/redeem`) 使用禮品碼本身掩蓋兌換鏈接。  
- (`/challenge genshin theater`, `/challenge genshin abyss`) 在卡片中顯示旅行者的元素屬性。  
- (`/accounts`) 對「請求過多」錯誤顯示自定義錯誤信息。  

### 問題修復  

- 修復指令未被翻譯為其他語言的問題。  
- 修復超時的模態未正確關閉的問題。  
- 修復 API 重試邏輯與錯誤處理邏輯。  
- 修復某些指令的 `ValueError` 問題。  
- 修復模態超時時間過短的問題。  
- 處理 Web 服務器重定向端點的 `KeyError` 問題。  
- (`/profile`) 處理從 Enka Network API 獲取數據時的 `EnkaAPIError` 問題。  
- (`/profile`) 更優雅地處理 Enka Network API 網關超時錯誤。  
- (`/profile`) 修復生成 AI 圖像時的 `BadRequestError` 問題。  
- (`/upload`) 修復上傳圖片時的 `BadRequestError` 問題。  

## v1.15.2 及以下

先前版本的更新日誌寫在 [Discord 伺服器](https://link.seria.moe/hb-dc) 內的 #更新 頻道中。  
