<!-- markdownlint-disable MD026 MD040 MD047 -->
# Frequently Asked Questions

## Something is not working!1!1!!

If there is an issue with Hoyo Buddy, you can tag @seria_ati in the [Discord server](https://dsc.gg/hoyo-buddy) or [directly message](https://discord.com/users/410036441129943050) me about it.

## Is Hoyo Buddy safe to use?

It depends on what you mean by "safe", please read the account security page for more information.

## Some texts are still being shown as English, even though I've selected other languages through /settings

This is because the translation for the texts you're seeing are not ready yet, Hoyo Buddy only has a small group of volunteers to translate the texts, and we all have our personal life to enjoy with. So, if you want to speed up this process, you're very welcomed to join the translation team! If you're interested, read the [contribution guidelines](https://github.com/seriaati/hoyo-buddy/blob/main/CONTRIBUTING.md) for more information.

## How is my data being used?

Your data is never shared with third parties; for more information, please read the [privacy policy](https://github.com/seriaati/hoyo-buddy/blob/main/PRIVACY.md) page.

## Is Hoyo Buddy open source?

Yes, Hoyo Buddy is open source. You can find the source code on [GitHub](https://github.com/seriaati/hoyo-buddy/) , please comply with the [license](https://github.com/seriaati/hoyo-buddy/blob/main/LICENSE) when using the code.

### Can I self-host Hoyo Buddy?

I won't provide any assistance to self-hosting, but with enough technical skills, it's possible to set up your own instance of Hoyo Buddy. However, due to copyright purposes, I have locked the assets that Hoyo Buddy uses in a private repository, this means that all image generation features on your instance will not work (except the 3rd party card templates in /profile).

## Why are the buttons/selects disabled?

To save resources, UI (user interface) elements expire after 10 minutes. To avoid confusion, UI elements are disabled when they expire.

## I have 2 accounts, 1 using Third-party login, other using email. Can I use it?

Third-party login can use [DevTools](./FAQ.md#logging-in-with-devtools) to login but Certain Features will be limited. If you want to use the full feature set, please [Link an email from third-party login account](./Before-Start.md#linking-an-email-from-third-party-login-account), then log in using email/username and password to link to Hoyo Buddy.

## "Too many requests" error when trying to add accounts using email & password method

Most of the time, this issue is just temporary, wait for 30 minutes then try again. If the error still shows, you're account may be "soft-locked", please read the guide below closely (Note: A user reported that their account is automatically unlocked after waiting for 5 days.)

1. First, please DO NOT reset your account's password, this won't solve the issue and will only make it worse.

2. Second, please STOP trying to login on HoYoLAB/Hoyo Buddy/in-game with your email/username and password.

Are you still logged in in your games (Genshin, ZZZ, etc.)?

* Yes: First, [send an email to customer service](./FAQ#sending-an-email-to-the-customer-service). Then try [DevTools](./FAQ#logging-in-with-devtools) or [email instead of username](./FAQ#logging-in-with-email-instead-of-username) to login on Hoyo Buddy.

* No: See [trying to login into your games](./FAQ#trying-to-login-into-your-games).

### Logging in with email instead of username

A user discovered that if you have been logging in with your username, logging in with email can bypass the error message. Likewise, if you have been logging with your email, try logging in with your username.

### Logging in with DevTools

If you have a PC/laptop device, you can login using the DevTools method, the button is next to the email & password one. You won't be able to use code redemption features (like auto redeem) with this method.

### Trying to login into your games

Is your Hoyoverse account linked to any social medias (Google, X, etc.)?

* Yes: Login to your games with the social media linked. Then, [send an email to customer service](./FAQ#sending-an-email-to-the-customer-service). Next, try [DevTools](./FAQ#logging-in-with-devtools) or [email instead of username](./FAQ#logging-in-with-email-instead-of-username) to login on Hoyo Buddy.

* No: See below

Are you logged in at the [Hoyoverse Account Center](https://account.hoyoverse.com/)?

* Yes: Link your account to a social media and login to your games with it. Then, [send an email to customer service](./FAQ#sending-an-email-to-the-customer-service). Next, try [DevTools](./FAQ#logging-in-with-devtools) or [email instead of username](./FAQ#logging-in-with-email-instead-of-username) to login on Hoyo Buddy.

* No: Try [this](./FAQ#logging-in-with-email-instead-of-username), if it doesn't work,  [send an email to customer service](./FAQ#sending-an-email-to-the-customer-service) then wait patiently for their response. Sorry, but you can't access your game account for now.

### Sending an email to the customer service

Email address: [hoyolab@hoyoverse.com](mailto:hoyolab@hoyoverse.com)

Template:

```
I am unable to login to HoYoLAB with my email and password, it says "Too Many Requests, Please Refresh the Page and try Again Later" when I try to do so (as shown in the screenshot below). I have already waited for more than 8 hours and it still shows this error. Please help me unlock my account, I would greatly appreciate it.

My email is <your email>
(attach a screenshot showing the error)
```

## Why do I get "Cookie Token Expired" errors with code redemption related features, even though other features (like auto daily check-in) work just fine?

To put simply, Hoyoverse uses a special cookie (cookie token) for code redemption that expires very quickly (3 days to be exact). As far as I know, cookie token is only used in code redemption, so that's why other features still work. To refresh your cookie token, you need to re-add your accounts using /accounts, which gets a fresh cookie token from Hoyoverse. However, this cookie token will still expire after 3 days; therefore, to avoid the hassle, you can add your accounts through the email and password method, so Hoyo Buddy can refresh your cookie token automatically through the same technique used by Hoyoverse.

## Why do I see "interaction failed" error?

Most of the time this is caused by bot restarts (to apply code updates), and you just need to re-type the command again. However, if this keeps on happening, that means something is broken and you should notify the developer via /feedback.