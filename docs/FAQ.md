<!-- markdownlint-disable MD026 MD040 MD047 -->
# Frequently Asked Questions

## Something is not working!

If there is an issue with Hoyo Buddy, you can tag @seria_ati in the [Discord server](https://link.seria.moe/hb-dc) or [directly message](https://discord.com/users/410036441129943050) me about it.

## Is Hoyo Buddy safe to use?

Please read the [Account Security](./Account-Security.md) page.

## Which login method should I use?

| Method | Login with mobile | Login with PC | Login with console | Auto & manual code redemption | Notes
|---|---|---|---|---|---
| Email & password | ✅ | ✅ | ✅[*](./Before-Start.md) | ✅ | Easier
| DevTools | ❌ | ✅ | ❌ | ❌ | ...

:::note

Email & password refer to **Hoyoverse account's** email and password, not Google, Apple, etc. accounts.

:::

Read more:

- [Is Hoyo Buddy safe?](./Account-Security.md)
- [How does the email & password login method work?](./Account-Security.md#how-does-the-email-and-password-login-method-work)
- [Why are code redemption features exclusive to users logged in with email & password?](#why-are-code-redemption-features-exclusive-to-users-logged-in-with-email--password)

## Some texts are still being shown as English, even though I've selected other languages in /settings

This is because the translation for the texts you're seeing are not ready yet, Hoyo Buddy only has a small group of volunteers to translate the texts, and we all have our personal life to enjoy with. So, if you want to speed up this process, you're very welcomed to join the translation team! If you're interested, read the [contribution guidelines](https://github.com/seriaati/hoyo-buddy/blob/main/CONTRIBUTING.md) for more information.

## How is my data being used?

Your data is never shared with third parties; for more information, please read the [privacy policy](https://github.com/seriaati/hoyo-buddy/blob/main/PRIVACY.md) page.

## Is Hoyo Buddy open source?

Yes, Hoyo Buddy is open source. You can find the source code on [GitHub](https://github.com/seriaati/hoyo-buddy/) , please comply with the [license](https://github.com/seriaati/hoyo-buddy/blob/main/LICENSE) when using the code.

### Can I self-host Hoyo Buddy?

I won't provide any assistance to self-hosting, but with enough technical skills, it's possible to set up your own instance of Hoyo Buddy. However, due to copyright purposes, I have locked the assets that Hoyo Buddy uses in a private repository, this means that all image generation features on your instance will not work (except the 3rd party card templates in /profile).

## Why are the buttons/selects disabled?

To save resources, UI (user interface) elements expire after 10 minutes. To avoid confusion, UI elements are disabled when they expire.

## "Too Many Requests" Error When Adding Accounts

See [this page](./too-many-requests.md) for more information.

## Why are code redemption features exclusive to users logged in with email & password?

Hoyoverse uses a special cookie called `cookie_token` for code redemption that expires very quickly. `cookie_token` is only used in code redemption, so that's why other features still work. When users login with their email & password, a special cookie called `stoken` is received, which can be used to refresh `cookie_token`, hence why the feature exclusiveness.

## I don't see my game accounts after logging in

### Email & password method

Make sure you're logged in with the same credentials you used in-game.

- [I use 3rd-party login methods (Google, Facebook, etc.)](./Before-Start.md#i-login-with-3rd-party-services)
- [I am a console player](./Before-Start.md#i-am-a-console-player)

### DevTools method

Make sure you're logged in with the same credentials you used in-game on HoYoLAB. For example, if you use a Google account [a@gmail.com](mailto:a@gmail.com) to login Genshin Impact, then use the [a@gmail.com](mailto:a@gmail.com) Google account to login HoYoLAB.

If you see duplicated Cookie entries, try using an incognito window to login.

## Why do I see "Interaction Failed" error?

Most of the time this is caused by bot restarts (to apply code updates), and you just need to re-type the command again. However, if this keeps on happening, that means something is broken and you should report it in the [Discord server](https://link.seria.moe/hb-dc).

## My Account Was Hacked After I Added It to Hoyo Buddy

See [this page](./account-hacked.md) for more information.
