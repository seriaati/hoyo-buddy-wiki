# Changelogs

## v1.16.13

### New Features

- (`/profile`) Add support for new HSR and ZZZ characters.
- (`/challenge genshin theater`) Add support for Arcana Challenges.
- (`/profile hsr`) Add light cone stats for HoYoLAB/Miyoushe characters.
- (`/challenge hsr anomaly`) Add support for Anomaly Arbitration.
- (`/profile genshin`) Add support for Manekin and Manekina.
- (`/gacha-log`) Add support for Miliastra Wonderland.
- (`/settings`) Revamped settings command UI.

### Improvements

- (`/gacha-log view`) Improve performance of gacha log viewer.
- Improve performance of auto check-in, auto redeem, and auto Traveling Mimo tasks.
- Improve overall performance of the bot.

### Bug Fixes

Too many to list, see the [full changelog](https://github.com/seriaati/hoyo-buddy/releases/tag/v1.16.13).

## v1.16.12

Note: This version disables Traveling Mimo for Genshin Impact due to removal from HoYoLAB. The feature will be re-enabled once it is back.

### New Features

- (`/profile`) Add support for new HSR and ZZZ characters.
- (`/gacha-log import`) Use our [own script](https://github.com/studiobutter/gacha-stuff) for importing gacha logs.
- (`/challenge zzz shiyu`) Replace fastest clear time with total clear time.
- (`/challenge genshin stygian`) Add enemy weakness and strength info.
- Add support for Nod-Krai city.

### Improvements

- (`/profile`) Add more robust error handling for Enka Network API requests.
- (`/profile`) Add error handling for Enka Network build API requests.
- (`/profile`) Add error handling for third party card generation APIs.
- (`/accounts`) Handle Discord OAuth2 API errors.
- (`/notes`) Add descriptions for different inputs in the reminder settings modal.
- Due to a Discord bug, WEBP images can't be copied, so we now send infographics as PNGs instead.

### Bug Fixes

- (`/gacha-log view`) Fix Custom Celestial Invitation characters not being counted as 50/50 losses.
- (`/gacha-log view`) Fix wrong item rarity for some ZZZ items.
- (`/search`) Fix unreleased ZZZ characters sometimes shown in autocomplete.
- (`/challenge zzz shiyu`) Handle cases where there are no total clear time.
- (`/upload`) Fix image upload issues.
- (`/challenge genshin stygian`) Fix text overflow for some enemies.
- (`/challenge zzz assault`) Fix issues with accessing bangboo icons for past challenges.
- (`/gacha-log view`) Handle invalid banner type input.
- (`/challenge`) Fix issues with challenge phase dropdown when there are more than 25 phases.

## v1.16.11

### New Features

- (`/search`) Add Ice Trailblazer.
- (`/accounts`) Add device identifier for email logins, so you can see Hoyo Buddy's device on Hoyoverse account center.

### Bug Fixes

- (`/profile zzz`) Update enka.py to match new API format.
- (`/profile`) Fix Enka results always returned in English.
- (`/exploration`) Fix tribe level text overflow.
- Fix translations issues with en-GB locale.

## v1.16.10

### New Features

- (`/profile hsr`) Support new characters: Hysilens & Cerydra.
- (`/gacha-log upload`) Show error when account game and imported game are different.

### Improvements

- (`/gacha-log import`) Improve import performance.
- Cache frequently used data like settings and card settings to improve performance.
- Blur 5 digits of UID instead of 3.

### Bug Fixes

- (`/profile zzz`) Fix missing costume images for team cards.
- (`/profile zzz`) Fix missing data for Alice's summer costume.
- (`/profile zzz`) Fix error caused by costume data.
- (`/profile zzz`) Fix Enka Network builds not being shown sometimes.
- (`/search`) Fix unreleased content being shown in normal search autocomplete.

## v1.16.9

### New Features

- (`/profile zzz`) Add support for Enka Network.
- (`/about`) Add more links to the command.
- Add `/changelog`, `/invite`, and `/help` commands.
- Add documentation support for Simplified Chinese and Spanish.
- Add [status page](https://status.seria.moe/?category=Hoyo%20Buddy) to check the bot's status.

### Improvements

- (`/settings`) This command now responds with ephemeral messages.

### Bug Fixes

- (`/accounts`) Fix account login issues.
- (`/gacha-log manage`) Fix wrong item rarity for ZZZ export.
- (`/gacha-log view`) Fix item name being "???" for HSR collaboration banner characters and light cones.
- (`/profile genshin`) Fix no player embed being shown when data source is HoYoLAB.

## v1.16.8

### New Features

- (`/challenge zzz shiyu`) Add clear time.
- (`/challenge hsr`) Hide quick clears.
- (`/challenge hsr`) Add "Show UID" option.
- (`/gacha-log`) Support HSR collaboration banners.
- (`/profile zzz`) Add support for new characters: Alice and Yuzuha.
- (`/profile zzz`) Add support for agent outfits.
- The bot won't be offline during code updates now.

### Improvements

- (`/profile hsr`) Improve text position for template 2.
- (`/events`) Improve color contrast in light mode.
- (`/gacha-log view`) Change web app link when banner type is changed.
- (`/search`) HSR character story is now shown in a clearer way.
- Improve image generation performance with better caching.
- Save images as webp instead of png to reduce file size.

### Bug Fixes

- (`/redeem`) Fix lowercase codes not counting as redeemed.
- (`/characters genshin`) Fix text position issues.
- (`/characters genshin`) Fix images of some characters being in different styles.
- (`/profile hsr`) Fix font issues in light cone names in template 2.

## v1.16.7

### New Features

- Add Arabic support.
- (`/challenge genshin`) Add Stygian Onslaught card generation.
- (`/profile zzz`) Add acronym for "Automatic Adrenaline Accumulation" for template 4.

### Improvements

- (`/accounts`) Show a page while fetching accounts.
- (`/accounts`) Update APK file URL for Miyoushe logins.
- (`/accounts`) Add input field for aaid when adding Miyoushe accounts.
- Faster image generation by utilizing multiple CPU cores.
- More precise text positions in images.

### Bug Fixes

- (`/profile zzz`) Fix Yixuan's image position in template 1.
- (`/profile zzz`) Fix PEN stat not being translated in template 4.
- (`/search`) Disable spiral abyss category.
- (`/search`) Fix no autocomplete choices for drive disc category.

## v1.16.6

### New Features

- (`/profile zzz`) Add ZZZ 2.0 new characters card data.
- (`/profile zzz`) Add support for Rupture agents and Sheer Force stat.
- (`/gacha-log import`) Handle authkey exceptions.
- Add anniversary dismissible.

### Improvements

- (`/profile zzz`) Remove spaces in background agent names.

### Bug Fixes

- (`/characters genshin`) Handle no-element characters.
- (`/challenge genshin theater`) Handle invalid character IDs.

## v1.16.5

### New Features

- (`/profile hsr`) Add v3.3 new characters card data.
- (`/profile hsr`) Add support for Remembrance path characters to use StarRailCard templates.
- (`/profile`) Handle Enka Network API request timeout error.
- (`/search`) Enable unreleased content category.

### Bug Fixes

- (`/redeem`) Remove 'user' parameter from the command.
- (`/mimo`) Remove UID blur in auto mimo task embeds.
- (`/upload`) Handle image files that are too large.
- (`/search`) Fix incorrect calculation formula for character & light cone stats.
- (`/accounts`) Fix 'next page' option not working when user has more than 25 accounts.

## v1.16.4

### New Features

- (`/profile genshin`) Support no element traveler.
- Add Hindi fonts.

### Improvements

- (`/profile`) Removed character data cache
- Added constraints to gacha-log filters.

### Bug Fixes

- (`/events`) Fixed not finding banner announcements
- (`/challenge genshin theater`) Fixed Imaginarium Theater data not showing.
- (`/profile`) Fixed compatibility issues with Enka Network builds.
- (`/mimo`) Fixed Miyoushe users being able to access the command.
- (`/notes`) Ignore game maintenance errors when doing real-time notes check.
- (`/lb view`) Removed Honkai Impact 3rd achievement leaderboard.
- (`/farm reminder`) Fixed item names being "..."

## v1.16.3

### New Features

- (`/profile zzz`) Added Vivian & Hugo's card data.
- Added Portuguese (Brazil) translation.
- Added Japanese translation.

### Improvements

- (`/profile zzz`) Adjusted the image positions of some characters.
- (`/profile zzz`) Improved image layers for card templates.

### Bug Fixes

- (`/notes`) Fixed parametric transformer notifier not working.
- (`/gacha-log upload`) Fixed wrong item rarity for some ZZZ import methods.

## v1.16.2

### New Features

- (`/profile hsr`) Added Castorice & Anaxa's card data.

### Bug Fixes

- (`/profile zzz`) Fixed Pulchra's image position in card template 2.
- (`/build genshin`) Fixed artifact position emojis not being shown properly for user apps.

## v1.16.1

### New Features

- (`/gacha-log upload`) Added support for importing from [Starward](https://github.com/Scighost/Starward) for ZZZ.
- (`/redeem`) Added notification settings.
- (`/accounts`) Added instructions for gettings aaid for adding Miyoushe accounts.
- Added "Hide UI" button for commands that have many buttons.

### Improvements

- (`/search`) Removed "unreleased content" category, see [this message](https://discord.com/channels/1000727526194298910/1042428379120545873/1346411349999357973) for why.
- (`/characters`) Allow selecting nothing for the filters.
- Increased performance for auto tasks.

### Bug Fixes

Various bug fixes, see the [full changelog](https://github.com/seriaati/hoyo-buddy/releases/tag/v1.16.1) for more details.

## v1.16.0

[For the nerds](https://github.com/seriaati/hoyo-buddy/releases/tag/v1.16.0)

### New Features

- (`/profile`) Added template previews in card settings.
- (`/profile`) Show custom image availability in card template dropdown.
- (`/notes`) Increased trailblaze power limit to 300.
- (`/notes`) Added open game buttons.
- (`/search zzz`) Added core skill level dropdown.
- (`/gacha-log import`) Compare UID of incoming logs with the UID of the account being imported to.
- Automatically set new user's language based on their Discord client's language.

### Improvements

- (`/redeem`) Improved UX by fixing no response when redeeming a redeemed code.
- (`/gacha-log`) Made account parameter required to avoid confusion.
- Show better error messages for "Missing Permissions" and "Message Blocked by AutoMod" errors.
- Simplified texts shown in account set up process.

### Bug Fixes

Various bug fixes and improvements.

## v1.15.7

### New Features

- (`/web-events`) Added a new command to view on-going web events and set notifier to remind you when there is a new event.
- (`/notes`) Added bounty commission and Ridu weekly points notifiers for ZZZ.
- (`/about`) Added changelog button.

### Improvements

- (`/gacha-log view`) Improved gacha log page performance by fixing cache issues.
- (`/about`) Removed latest git changes.
- (`/mimo`) Sort Traveling Mimo shop items from most expensive to least expensive when auto buying.
- Improves localization for other languages.
  
### Bug Fixes

- (`/characters genshin`) Fixed KeyError caused by no-element travelers.
- (`/characters genshin`) Fixed incorrect talent level for Kamisato Ayaka.
- (`/stats`) Fixed "Record card not found for ..." error for ZZZ.
- (`/build genshin`) Fixed "No block lists to draw" error.
- (`/gacha-log view`) Fixed incorrect 50/50 win rate.
- (`/gacha-log view`) Fixed 422 validation error on web app.
- (`/gacha-log view`) Handle invalid size input.
- (`/gacha-log import`) Handle invalid banner types when importing gacha logs.
- (`/gacha-log import`) Fixed UIGF import.
- (`/mimo`) Confirm task finish status before sending notifications.
- (`/mimo`) Added sleep intervals between task completions to avoid being rate limited.
- (`/mimo`) Remove HTML tags from task names.
- (`/mimo`) Fixed error after buying an item.
- (`/profile`) Fixed card settings from different games being mixed up.
- (`/profile genshin`) Fixed extra talents being shown in team cards.
- (`/profile genshin`) Fixed validation error with Mavuika.
- (`/search`) Fixed W-engine refinement selector not updating selected value.
- (`/notes`) Fixed validation error for Honkai Impact 3rd.
- (`/challenge zzz assault`) Fixed buff icons not being shown.

## v1.15.6

### New Features

- (`/mimo`) Added support for Genshin's Traveling Mimo (event has already ended by the time of writing).
- (`/mimo`) Added auto prize draw feature.
- (`/challenge zzz`) Added support for the Deadly Assault game mode.
- (`/profile hsr`) Added template 2.
- (`/notes`) Added bounty commission and Ridu weekly points information for ZZZ.

## Improvements

- (`/check-in`) Reduce duplicate check-in API requests.

## Bug Fixes

- (`/mimo`) Fixed notifications being sent when no tasks are completed and no points are claimed.
- (`/mimo`) Fixed how valuable items are being determined.
- (`/mimo`) Handle -510001 error.
- (`/mimo`) Fixed an issue where valuable items are being counted as decorations for HSR.
- (`/mimo`) Disable lottery draw button when the limit is reached.
- (`/challenge zzz`) Fixed wrong bangboo icons in cards.
- (`/events`) Fixed wrong Spiral Abyss progress.
- (`/gacha-log view`) Fixed wrong number of pulls from last rarity.
- Fixed static image folder creation logic.

## v1.15.5

### New Features

- (`/mimo`) Automatically finish tasks that require commenting on a post.
- (`/mimo`) Automatically finish tasks that require following a topic.
- (`/mimo`) Added lottery feature.
- (`/mimo`) Added notification settings.
- (`/profile zzz`) Added an image setting to use Mindscape 3 arts for build cards.
- (`/profile zzz`) Added Harumasa and Miyabi card data.
- (`/search`) Hide "unreleased content" category in certain guilds.

### Improvements

- (`/mimo`) Show task progress for certain tasks.
- (`/mimo`) Show names of completed tasks in the notification.
- (`/mimo`) Improved performance of auto tasks.
- (`/challenge zzz shiyu`) Updated card layout.
- (`/challenge zzz shiyu`) Avoid fetching agent data twice.
- Show Discord server invite link in error embed footers.
- Unset item loading state upon error.
- Added on/off labels to toggle buttons.
- Improved proxy API request logic.
- Improved auto tasks error handling logic.

### Bug Fixes

- (`/mimo`) Added a sleep interval after redeeming a mimo reward gift code.
- (`/mimo`) Fixed tasks missing in task list.
- (`/mimo`) Fixed comment tasks not being completed.
- (`/mimo`) Fixed notifications being sent when no tasks are completed.
- (`/mimo`) Only show HoYoLAB accounts in the account autocomplete.
- (`/mimo`) Fixed `QuerySetError` in auto tasks.
- (`/mimo`) Fixed post comments not being deleted.
- (`/mimo`) Handle cases where Traveling Mimo is not available for a game.
- (`/profile zzz`) Fixed substat highlights not being added to the card.
- (`/profile zzz`) Fixed agents being identified as cached when they are not.
- (`/characters zzz`) Fixed wrong total agent count.
- (`/gacha-log upload`) Fixed issues with zzz.rng.moe imports.
- (`/redeem`) Fixed Miyoushe accounts being shown in account autocomplete.
- (`/build genshin`) Handle missing usage rates for some characters.
- (`/events`) Fixed future HSR warps not being shown as "not available yet".
- Adapt to new ZenlessData keys.
- Fixed issues with Hakushin API.
- Capture general exceptions in `dm_user` method.

## v1.15.4

### New Features

- (`/build genshin`) Show information about the synergies of a character.
- (`/mimo`) Added a new command to manage Traveling Mimo.

### Improvements

- (`/build genshin`) Improved the card designs.
- (`/notes`) Use the event calendar API to check for planar fissure events.

### Bug Fixes

- (`/build genshin`) Fixed some UI issues.
- (`/events`) Fixed some issues causing the command to be inaccessible.
- (`/gacha-log upload`) Fixed `ValidationError` with UIGF data.
- (`/gacha-log upload`) Fixed `KeyError` with UIGF versions older than 3.0.
- (`/search`) Fixed duplicated autocomplete choices.

## v1.15.3

Bad code in the previous versions caused some users to see the "too many requests" error while logging in, please see
[this article](./too-many-requests.md) for more information.

### New Features

- (`/profile zzz`) Added a selector to select substats that you want to highlight.
- (`/profile hsr`) Added Fugue and Sunday card data.

### Improvements

- (`/redeem`) Mask redeem code links with the code itself.
- (`/challenge genshin theater`, `/challenge genshin abyss`) Show traveler's element in the cards.
- (`/accounts`) Show custom error message for "Too many requests" error.

### Bug Fixes

- Fixed an issue where commands are not being translated to other languages.
- Fixed an issue where timed out modals are not being closed properly.
- Fixed API retry logic and error handling logic.
- Fixed `ValueError` in some commands.
- Fixed modal timeout time being too short.
- Handle `KeyError` in web server redirect endpoint.
- (`/profile`) Handle `EnkaAPIError` when fetching data from Enka Network API.
- (`/profile`) Handle Enka Network API gateway timeout errors gracefully.
- (`/profile`) Fixed `BadRequestError` when generating AI images.
- (`/upload`) Fixed `BadRequestError` when uploading images.

## v1.15.2 and below

Previous changelogs were written in the #updates channel in our [Discord server](https://link.seria.moe/hb-dc).
