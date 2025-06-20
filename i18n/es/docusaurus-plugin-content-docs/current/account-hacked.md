# Response to Account Being Hacked and Why it's Not Through Hoyo Buddy

## How Hoyo Buddy Works

When you link your account using email & password:

1. You enter your email & password
2. The bot encrypts both values (making them unreadable)
3. It sends these encrypted credentials to Hoyoverse servers through HTTPS (secure connection)
4. Hoyoverse server returns cookies (login data)
5. These cookies are encrypted and stored in the database

## Security Features

- **Server Protection**: The server uses a password that would take centuries to crack. Login logs show no suspicious successful logins.

- **Memory Protection**: Your email & password are only held in memory temporarily, which makes them nearly impossible to steal from an online server.

- **Strong Encryption**: Your credentials are encrypted with RSA before being sent to Hoyoverse. This creates different encryption results each time, making it impossible to reverse.

- **Secure Connections**: All data transfers happen via HTTPS, meaning everything is encrypted. Even if someone intercepts the request, they can't see what's inside.

- **No Permanent Storage**: Your email & password are NOT stored in the database. They are deleted after getting your cookies. Only the encrypted cookies are stored.

- **Database Security**: The database is protected by a password that would take centuries to crack.

- **Limited Cookie Usage**: Cookies alone are not enough to steal your account. They can only be used for HoYoLAB, not the account center where changes to your account can be made.

## How Accounts Actually Get Stolen

To steal a Hoyoverse account, someone needs to:

1. Have your Hoyoverse email & password to log into the account center (cookies are NOT enough)
2. Request to change your email address (which requires verification from your original email)
3. Access your email account to get the verification code
4. Change your account email to their own
5. After this, they control your account because password resets go to their email

## What Probably Happened Instead

1. Your Hoyoverse account had a weak password that was easy to guess or crack
2. Your email account also had a weak password (or worse, used the same password)
3. You're using an email service with limited security features (unlike services like Google that require additional verification)
4. Your device might be infected with malware that stole your login information

## What You Should Do Now

1. Change all your passwords immediately
2. Check your email account for suspicious login activity
3. Use unique and strong passwords for different services
4. Enable two-factor authentication (2FA) wherever possible
5. Scan your devices for malware
