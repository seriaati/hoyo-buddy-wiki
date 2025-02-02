# Account Security

This section explains how your account data is used and stored. Remember that Hoyo Buddy is open-source, and everyone can confirm account processing procedures via reading the source code.

## Disclaimer

It is entirely **YOUR** decision whether to provide your Cookies or not. While many features offered by the bot depend on the user's HoYoLAB cookies for functionality, Hoyo Buddy has never coerced users into providing their cookies against their will. The developer has implemented robust security measures to prevent the leakage of your Cookies. In the event of a data breach, the developer's utmost responsibility is to promptly inform users about the situation and strongly advise them to change their passwords. In summary, please use this tool at your own discretion and risk!

## How does Hoyo Buddy work?

Hoyo Buddy uses your HoYoLAB cookies to access your account information. By obtaining your cookies, Hoyo Buddy can simulate requests to HoYoLAB using your identity, thereby accessing information such as real-time notes and more. HoYoLAB identifies the requester based on cookies, and Hoyo Buddy utilizes your cookies to inform HoYoLAB that the requester is you.

## What are Cookies?

Cookies 🍪 are small pieces of data that websites store on your computer or device when you visit them. They're not programs, they can't carry viruses, and they're not spyware. Instead, they're more like a note that a website leaves for your browser to remember certain things about you or your visit.

Imagine you walk into a shop and the shopkeeper gives you a sticker. This sticker might have information like what items you looked at, how long you stayed in the shop, or even your preferences. Later, when you come back to the shop, the shopkeeper looks at your sticker and can tailor your experience based on the information on it.

Similarly, when you visit HoYoLAB, it gives your browser a "cookie." This cookie allows the website to identify that it is you accessing the website.

## Frequently Asked Questions

| Question | Answer | Notes |
|---|---|---|
| Is my email and password being stored? | ❌ | [See code](https://github.com/seriaati/hoyo-buddy/blob/main/hoyo_buddy/web_app/pages/finish.py) |
| Can you login to my game account? | ❌ | Not possible |
| Can you change my account's password? | ❌ | Not possible |
| Can you steal my account? | ❌ | Not possible |
| Can you sell my account? | ❌ | Not possible |
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

:::info

Your email and password were never stored.

:::

This method isn't designed to compromise your account security, it's made to simplify the account set up process. Many users encounter difficulties locating their Cookies manually, prompting the introduction of an easier alternative. The method functions exactly to logging in via email and password on HoYoLAB, occasionally requiring CAPTCHA verification for security purposes. Your email and password were never stored in the database. They are temporarily held in-memory and encrypted before being sent to Hoyoverse's server. Internally, this method functions the same as the DevTools method, both only saves your Cookies in the database, but some might feel that the DevTools method is safer.
