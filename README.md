This MERN stack web application is based off of https://github.com/burakorkmez/mern-chat-app

Currently modifying and adding features for personal production use.
The goal is to make this a private chat app for strictly friends.

[Modifications]

Plans / WIP:
- Invite only signup (An existing user's uniqueId must be shared to signup)
- PWA Support
- Web Notifications
- Attaching and sharing images
- URL detection for clickable links in messages


backend/controllers/user.controller.js
- Added API controls for:  Friend add requests, Get pending friend requests, Accept friend requests, Remove friend.

frontend/components/Message.jsx

- Added a State to check if Messages scrollIntoView has been completed.
  (If the conversations became long, watching the scroll animation everytime could be painful)
  
