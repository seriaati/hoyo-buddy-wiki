# Changelogs

## v1.16.7

### 新功能

- 新增阿拉伯語支援。
- (`/challenge genshin`) 新增「幽境危戰」卡片生成。
- (`/profile zzz`) Add acronym for "Automatic Adrenaline Accumulation" for template 4.

### 優化

- (`/accounts`) Show a page while fetching accounts.
- (`/accounts`) 更新米遊社登入的 APK 檔案 URL。
- (`/accounts`) 新增用於新增米遊社帳號的 aaid 輸入欄位。
- 利用多個 CPU 核心加快圖片生成速度。
- 圖片中的文字位置更精確。

### 問題修復

- (`/profile zzz`) Fix Yixuan's image position in template 1.
- (`/profile zzz`) Fix PEN stat not being translated in template 4.
- (`/search`) 停用深境螺旋分類。
- (`/search`) 修復驅動盤分類沒有自動完成選項的問題。

## v1.16.6

### 新功能

- (`/profile zzz`) 新增 ZZZ 2.0 新角色卡片資料。
- (`/profile zzz`) 新增對命破代理人和貫穿力數值的支援。
- (`/gacha-log import`) 處理 authkey 例外狀況。
- Add anniversary dismissible.

### 優化

- (`/profile zzz`) 移除背景代理人名稱中的空格。

### 問題修復

- (`/characters genshin`) Handle no-element characters.
- (`/challenge genshin theater`) 處理無效角色 ID 的問題。

## v1.16.5

### 新功能

- (`/profile hsr`) 新增 v3.3 新角色卡片資料。
- (`/profile hsr`) 新增對記憶命途角色使用 StarRailCard 卡片樣式的支援。
- (`/profile`) Handle Enka Network API request timeout error.
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
- Added constraints to gacha-log filters.

### 問題修復

- (`/events`) Fixed not finding banner announcements
- (`/challenge genshin theater`) Fixed Imaginarium Theater data not showing.
- (`/profile`) 修復與 Enka Network 面板的相容性問題。
- (`/mimo`) Fixed Miyoushe users being able to access the command.
- (`/notes`) Ignore game maintenance errors when doing real-time notes check.
- (`/lb view`) 移除崩壞3的成就排行榜。
- (`/farm reminder`) 修復物品名稱顯示為"..."的問題。

## v1.16.3

### 新功能

- (`/profile zzz`) Added Vivian & Hugo's card data.
- 新增葡萄牙語 (巴西) 翻譯。
- 新增日語翻譯。

### 優化

- (`/profile zzz`) 調整了部分角色的圖片位置。
- (`/profile zzz`) 改善了卡片模板的圖片層級。

### 問題修復

- (`/notes`) Fixed parametric transformer notifier not working.
- (`/gacha-log upload`) 修復了某些 ZZZ 匯入方法導致的錯誤物品稀有度。

## v1.16.2

### 新功能

- (`/profile hsr`) Added Castorice & Anaxa's card data.

### 問題修復

- (`/profile zzz`) Fixed Pulchra's image position in card template 2.
- (`/build genshin`) 修復用戶應用中聖遺物位置表情符號顯示錯誤的問題。

## v1.16.1

### 新功能

- (`/gacha-log upload`) 新增對 [Starward 啟動器](https://github.com/Scighost/Starward) 的絕區零部份匯入抽卡紀錄的支援。
- (`/redeem`) 新增通知設定。
- (`/accounts`) Added instructions for gettings aaid for adding Miyoushe accounts.
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
- (`/notes`) Increased trailblaze power limit to 300.
- (`/notes`) 新增「打開遊戲」按鈕。
- (`/search zzz`) 新增核心技能等級選擇器。
- (`/gacha-log import`) Compare UID of incoming logs with the UID of the account being imported to.
- 自動根據 Discord 客戶端的語言設置新用戶的語言。

### 優化

- (`/redeem`) Improved UX by fixing no response when redeeming a redeemed code.
- (`/gacha-log`) 設置帳號參數為必填，避免混淆。
- 為「缺少權限」和「訊息被 AutoMod 阻擋」的錯誤提供更明確的提示。
- Simplified texts shown in account set up process.

### 問題修復

Various bug fixes and improvements.

## v1.15.7

### 新增功能

- (`/web-events`) 新增命令來查看正在進行中的網頁活動，並設置通知器以提醒您有新活動。
- (`/notes`) 為《絕區零》（ZZZ）新增懸賞委託和 Ridu 每週點數通知器。
- (`/about`) Added changelog button.

### 優化

- (`/gacha-log view`) 修復緩存問題，提升祈願記錄頁面的性能。
- (`/about`) 移除最新 Git 變更的顯示。
- (`/mimo`) 在自動購買時，將旅行夥伴 Mimo 商店物品按照價格從高到低排序。
- 改進其他語言的本地化。

### 問題修復

- (`/characters genshin`) 修復因無屬性旅行者導致的 `KeyError` 問題。
- (`/characters genshin`) Fixed incorrect talent level for Kamisato Ayaka.
- (`/stats`) 修復 ZZZ 中「未找到記錄卡片」的錯誤。
- (`/build genshin`) 修復「沒有可繪製的阻止列表」的錯誤。
- (`/gacha-log view`) 修復錯誤的 50/50 勝率計算。
- (`/gacha-log view`) 修復 Web 應用中的 422 驗證錯誤。
- (`/gacha-log view`) 處理無效的大小輸入。
- (`/gacha-log import`) Handle invalid banner types when importing gacha logs.
- (`/gacha-log import`) 修復 UIGF 匯入功能。
- (`/mimo`) 在發送通知前確認任務完成狀態。
- (`/mimo`) 在完成任務之間新增休眠間隔以避免觸發限速。
- (`/mimo`) 移除任務名稱中的 HTML 標籤。
- (`/mimo`) 修復購買物品後的錯誤。
- (`/profile`) 修復不同遊戲的卡片設置混合的問題。
- (`/profile genshin`) Fixed extra talents being shown in team cards.
- (`/profile genshin`) 修復與 Mavuika 相關的驗證錯誤。
- (`/search`) 修復 W-engine 精煉選擇器未更新所選值的問題。
- (`/notes`) Fixed validation error for Honkai Impact 3rd.
- (`/challenge zzz assault`) 修復增益圖標未顯示的問題。

## v1.15.6

### 新增功能

- (`/mimo`) Added support for Genshin's Traveling Mimo (event has already ended by the time of writing).
- (`/mimo`) 新增自動抽獎功能。
- (`/challenge zzz`) 新增對於「危局強襲戰」遊戲模式的支持。
- (`/profile hsr`) 新增卡片樣式 2。
- (`/notes`) Added bounty commission and Ridu weekly points information for ZZZ.

## 優化

- (`/check-in`) 減少重複的簽到 API 請求。

## 問題修復

- (`/mimo`) Fixed notifications being sent when no tasks are completed and no points are claimed.
- (`/mimo`) 修復有價值物品判斷方式的問題。
- (`/mimo`) 處理 -510001 錯誤。
- (`/mimo`) Fixed an issue where valuable items are being counted as decorations for HSR.
- (`/mimo`) 當達到上限時禁用抽獎按鈕。
- (`/challenge zzz`) 修復卡片中錯誤的邦布圖片。
- (`/events`) 修復螺旋深淵進度錯誤的問題。
- (`/gacha-log view`) 修復錯誤的「距離上一稀有度的抽取次數」。
- Fixed static image folder creation logic.

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
- Unset item loading state upon error.
- Added on/off labels to toggle buttons.
- 改進代理 API 請求邏輯。
- 改善自動任務的錯誤處理邏輯。

### 問題修復

- (`/mimo`) 在兌換 Mimo 獎勵禮品碼後新增休眠間隔。
- (`/mimo`) Fixed tasks missing in task list.
- (`/mimo`) 修復留言任務未被完成的問題。
- (`/mimo`) 修復當沒有完成任何任務時仍發送通知的問題。
- (`/mimo`) 自動完成中僅顯示 HoYoLAB 賬號。
- (`/mimo`) 修復自動任務中的 `QuerySetError` 問題。
- (`/mimo`) 修復帖子留言未被刪除的問題。
- (`/mimo`) 處理旅行夥伴 Mimo 不可用於某些遊戲的情況。
- (`/profile zzz`) Fixed substat highlights not being added to the card.
- (`/profile zzz`) Fixed agents being identified as cached when they are not.
- (`/characters zzz`) 修復代理人總數顯示錯誤的問題。
- (`/gacha-log upload`) 修復 zzz.rng.moe 導入時的問題。
- (`/redeem`) Fixed Miyoushe accounts being shown in account autocomplete.
- (`/build genshin`) 處理某些角色缺失使用率的情況。
- (`/events`) 修復 HSR 未來卡池未顯示為「尚未釋出」的問題。
- 適配新的 ZenlessData 鍵值。
- 修復 Hakushin API 的相關問題。
- 捕獲 `dm_user` 方法中的一般異常情況。

## v1.15.4

### 新增功能

- (`/build genshin`) Show information about the synergies of a character.
- (`/mimo`) 新增指令來管理旅行 Mimo。

### 優化

- (`/build genshin`) 改善卡片設計。
- (`/notes`) 使用事件日曆 API 檢查位面分裂事件。

### 問題修復

- (`/build genshin`) 修復一些 UI 問題。
- (`/events`) Fixed some issues causing the command to be inaccessible.
- (`/gacha-log upload`) 修復使用 UIGF 數據時的 `ValidationError` 問題。
- (`/gacha-log upload`) 修復 UIGF 版本低於 3.0 時的 `KeyError` 問題。
- (`/search`) 修復重複的自動完成選項問題。

## v1.15.3

先前版本中的錯誤程式碼導致部分使用者在登入時看到「請求次數過多」錯誤，請參閱[本文](./FAQ.md#嘗試使用電子郵件和密碼方法新增帳戶時出現「請求過多」錯誤) 以了解更多資訊。

### 新增功能

- (`/profile zzz`) Added a selector to select substats that you want to highlight.
- (`/profile hsr`) 新增 Fugue 和 Sunday 卡片數據。

### 優化

- (`/redeem`) Mask redeem code links with the code itself.
- (`/challenge genshin theater`, `/challenge genshin abyss`) 在卡片中顯示旅行者的元素屬性。
- (`/accounts`) Show custom error message for "Too many requests" error.

### 問題修復

- Fixed an issue where commands are not being translated to other languages.
- Fixed an issue where timed out modals are not being closed properly.
- 修復 API 重試邏輯與錯誤處理邏輯。
- 修復某些指令的 `ValueError` 問題。
- Fixed modal timeout time being too short.
- 處理 Web 服務器重定向端點的 `KeyError` 問題。
- (`/profile`) 處理從 Enka Network API 獲取數據時的 `EnkaAPIError` 問題。
- (`/profile`) 更優雅地處理 Enka Network API 網關超時錯誤。
- (`/profile`) 修復生成 AI 圖像時的 `BadRequestError` 問題。
- (`/upload`) 修復上傳圖片時的 `BadRequestError` 問題。

## v1.15.2 及以下

先前版本的更新日誌寫在 [Discord 伺服器](https://link.seria.moe/hb-dc) 內的 #更新 頻道中。
