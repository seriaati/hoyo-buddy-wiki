# Account Security

This section explains how your account data is used and stored. Remember that Hoyo Buddy is open-source, and everyone can confirm account processing procedures via reading the source code.

## Disclaimer

It is entirely **YOUR** decision whether to provide your Cookies or not. While many features offered by the bot depend on the user's HoYoLAB cookies for functionality, Hoyo Buddy has never coerced users into providing their cookies against their will. The developer has implemented robust security measures to prevent the leakage of your Cookies. In the event of a data breach, the developer's utmost responsibility is to promptly inform users about the situation and strongly advise them to change their passwords. In summary, please use this tool at your own discretion and risk!

## How does Hoyo Buddy work?

HoYoLAB identifies the requester based on cookies, and Hoyo Buddy utilizes your cookies to inform HoYoLAB that the requester is you. By obtaining your cookies, Hoyo Buddy can simulate requests to HoYoLAB using your identity, thereby accessing information such as real-time notes and more.

## What Permissions do Cookies Have?

| Permission | Have? |
|---|---|
| Login to your game account | ❌ |
| Change your account's password | ❌ |
| Access sensitive information (email, mobile number, etc.) | ❌ |
| Make posts/comments/replies on HoYoLAB with your identity | ✅ |
| Access real-time notes, character stats, and other non-sensitive information in the battle chronicle | ✅ |

## Security Features

- **Server Protection**: The server uses a password that would take centuries to crack.

- **Memory Protection**: Your email & password are only held in memory temporarily, which makes them nearly impossible to steal from an online server.

- **Strong Encryption**: Your credentials are encrypted with RSA before being sent to Hoyoverse. This creates different encryption results each time, making it impossible to reverse.

- **Secure Connections**: All data transfers happen via HTTPS, meaning everything is encrypted. Even if someone intercepts the request, they can't see what's inside.

- **No Permanent Storage**: Your email & password are NOT stored in the database. They are deleted after getting your cookies. Only the encrypted cookies are stored.

- **Database Security**: The database is protected by a password that would take centuries to crack.

- **Limited Cookie Usage**: Cookies alone are not enough to steal your account. They can only be used for HoYoLAB, not the account center where changes to your account can be made.

## Frequently Asked Questions

| Question | Answer | Notes |
|---|---|---|
| Is my email and password being stored? | ❌ | [See code](https://github.com/seriaati/hoyo-buddy/blob/main/hoyo_buddy/web_app/pages/finish.py) |
| Can you login to my game account? | ❌ | [Not possible](#can-you-login-to-my-game-account) |
| Can you change my account's password? | ❌ | [Not possible](#can-you-change-my-accounts-password) |
| Can you steal my account? | ❌ | [Not possible](#can-you-stealsell-my-account) |
| Can you sell my account? | ❌ | [Not possible](#can-you-stealsell-my-account) |
| Can I get banned for using Hoyo Buddy? | ❔ | [Read more](#can-i-get-banned-for-using-hoyo-buddy) |
| Do Cookies expire? | ✅ | After 1 year |
| Is Cookies invalidated after I change my password? | ✅ | Immediately |
| Can you make posts on HoYoLAB with my identity? | ✅ | [Read more](#accessing-hoyolab-community-features-with-cookies) |

### Can I get banned for using Hoyo Buddy?

The short answer is I don't know.

I haven't been notified from my users of any bans resulting from the use of Hoyo Buddy. However, you should note that using any third-party tool to access your account data is against the TOS. While the risk of being banned is low, it is not zero, I cannot make any guarantees. If you are concerned about the possibility of being banned, you should avoid using Hoyo Buddy.

Technically, if a ban actually happens, it will be a ban from HoYoLAB, not from the game itself. This means you can still play the game, but you won't be able to access HoYoLAB anymore.

### Accessing HoYoLAB Community Features With Cookies

It's possible to make posts, comments, replis, and join topics on HoYoLAB using your cookies.

In the bot, community features are strictly being used for completing Traveling Mimo tasks. If there is a comment task, the bot will make a comment on your behalf then delete it.

If Traveling Mimo auto task completion is disabled on your account, the bot doesn't access any community features at all.

### How is my Cookies Being Stored?

Your Cookies are securely stored in a database hosted by [Hetzner](https://www.hetzner.com/). To access this database and obtain your Cookies, a hacker would need to acquire both my server's account password and the database's password. Such a scenario is typically associated with data breaches, although it's important to note that breaches involving Hetzner, a reputable and widely-used server hosting provider, are relatively rare. However, in the unlikely event of a breach, I will immediately issue an announcement in the Discord server, urging all users to change their account passwords. This action ensures that any previously stored Cookies in the database become invalidated, thus safeguarding your privacy and security.

### How Does The Email and Password Login Method Work?

1. You enter your email & password
2. The bot encrypts both values (making them unreadable)
3. It sends these encrypted credentials to Hoyoverse servers through HTTPS (secure connection)
4. Hoyoverse server returns cookies (login data)
5. These cookies are encrypted and stored in the database

### Can you Login to my Game Account?

No, I can't.

Cookies don't have enough permissions to login to your game account, username and password login is needed for that. Your username and password were never stored; even if they were, logging in on an unknown device requires email verification, and I don't have access to your email.

### Can you Change my Account's Password?

No, I can't.

Cookies don't have enough permissions to change your account's password, username and password login is needed for that. Your username and password were never stored; even if they were, changing password requires email verification, and I don't have access to your email.

### Can you Steal/Sell my Account?

No, I can't.

Stealing or selling your account requires changing your password, which is [not possible](#can-you-change-my-accounts-password). Even if I share your Cookies to others, it's not possible to [login to your game account](#can-you-login-to-my-game-account).
