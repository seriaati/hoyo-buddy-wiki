# Account Security

## Disclaimer

It is entirely **YOUR** decision whether to provide your Cookies or not. While many features offered by the bot depend on the user's HoYoLAB cookies for functionality, Hoyo Buddy has never coerced users into providing their cookies against their will. The developer has implemented robust security measures to prevent the leakage of your Cookies. In the event of a data breach, the developer's utmost responsibility is to promptly inform users about the situation and strongly advise them to change their passwords. In summary, please use this tool at your own discretion and risk!

## Introduction

This section explains how your account data is used and stored. Remember that Hoyo Buddy is open-source, and you can confirm account processing procedures by yourself via reading the source code.

### What Are Cookies?

Cookies 🍪 are small pieces of data that websites store on your computer or device when you visit them. They're not programs, they can't carry viruses, and they're not spyware. Instead, they're more like a note that a website leaves for your browser to remember certain things about you or your visit.

Imagine you walk into a shop and the shopkeeper gives you a sticker. This sticker might have information like what items you looked at, how long you stayed in the shop, or even your preferences. Later, when you come back to the shop, the shopkeeper looks at your sticker and can tailor your experience based on the information on it.

Similarly, when you visit the HoYoLAB website, it gives your browser a "cookie." This cookie contains your login details, allowing the website to identify that it is you accessing the website.

### Ok, How Does Hoyo Buddy Use My Cookies?

Hoyo Buddy requests users to provide their Cookies. By obtaining your Cookies, Hoyo Buddy can simulate requests to HoYoLAB using your identity, thereby accessing information such as real-time notes, Spiral Abyss overviews, and more. In essence, HoYoLAB identifies the requester based on Cookies, and Hoyo Buddy utilizes your Cookies to inform HoYoLAB that the requester is you, consequently gaining access to the information stored in your account.

### Questions Related to Account Security

#### Do You Have Access to My Account?

For HoYoLAB accounts, yes ✅. However, for game accounts, no ❌. Hoyoverse employs stringent security protocols for game accounts, ensuring that game logins differ significantly from typical website logins. Consequently, using Cookies to mimic requests and gain access to games with your identity is not feasible. Put simply, my access is limited to the information visible on HoYoLAB; anything beyond that remains inaccessible.

#### Can You Change My Account's Password?

No, changing your account password involves additional layers of security measures beyond using your Cookies alone. It is impossible to modify any sensitive information on your account without the additional verification from your email or 2FA (if you have it enabled).

#### Can You Make Posts on HoYoLAB With My Identity?

Given that I have access to your HoYoLAB account, technically yes ✅. However, it's essential to emphasize that I won't engage in such malicious activities.

#### Do Cookies Expire?

Yes ✅, Cookies typically have an expiration period, commonly set to one year. Note that changing your account's password renders all previous Cookies immediately invalid.

### How Are My Cookies Stored?

Your Cookies are securely stored in a database hosted by [Hetzner](https://www.hetzner.com/). To access this database and obtain your Cookies, a hacker would need to acquire both my server's account password and the database's password. Such a scenario is typically associated with data breaches, although it's important to note that breaches involving hetzner, a reputable and widely-used server hosting provider, are relatively rare. However, in the unlikely event of a breach, I will immediately issue an announcement in the Discord server, urging all users to change their account passwords. This action ensures that any previously stored Cookies in the database become invalidated, thus safeguarding your privacy and security.

### How Does The Email and Password Login Method Work?

Firstly, it's important to emphasize that this method is not designed to compromise your account security. Instead, it's implemented to simplify the account setup process in Hoyo Buddy. Many users encounter difficulties locating their Cookies manually, prompting the introduction of an easier alternative. The method functions exactly to logging in via email and password on HoYoLAB, occasionally requiring CAPTCHA verification for security purposes. It's crucial to note that your email and password are never stored in the database. Instead, they are temporarily held in-memory and encrypted before being transmitted to Hoyoverse's server. This approach enhances security by minimizing the exposure of sensitive login credentials; you can verify this transparent process by examining the source code.
