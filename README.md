<b>PROJECT IS MOVING TO MOBILE ONLY React Native soon...</b>

This MERN stack web application is based off of https://github.com/burakorkmez/mern-chat-app

Currently modifying and adding features for personal production use.
The goal is to make this a private chat app strictly for friends.
This project was dockerized and hosted on AWS.

[Features]
- User registation, login, add friend requests, pending friend requests.
- Sign up requires existing user's userId
- PWA Support
- OneSignal Web Push Notifications for new and unread messages.
  (Each message has as bool to keep track of unread messages)
- Dockerized and hosted on AWS

Database:
- Free Tier of Atlas MongoDB

[Planned Updates]
- URL detection for clickable links in messages
- Attaching files
- Group Chat
