# Changelogs

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
