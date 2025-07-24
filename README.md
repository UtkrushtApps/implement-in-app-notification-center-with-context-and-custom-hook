# Task Overview

A project management dashboard needs a global in-app notification center. The goal is to provide a seamless, instantly updating notification experience using React's Context API and hooks. Notifications can be added, marked as read, or dismissed, and there will be UI components for displaying the current unread notification count and the full notification list with controls.

## Guidance
- Use React Context and `useReducer` to manage notification state globally.
- Create a custom hook to expose notification state and actions.
- Build components responsible for displaying unread counts and managing notification actions.
- Ensure components re-render efficiently and only when necessary.
- Reflect state changes across the UI instantly and globally.

## Objectives
- Set up global notification state using Context and `useReducer`.
- Create a custom hook to provide notification state and actions for adding, reading, and dismissing.
- Implement a memoized NotificationBadge component to display unread counts and toggle visibility of the notification list.
- Build a NotificationList component to list notifications, allow marking as read, dismissing, and display an empty state message when appropriate.
- Connect the notification system to the main app UI to demonstrate global updates and interaction.

## How to Verify
- Check that the application can successfully track multiple notifications and update their status (unread, read, dismissed) across the entire UI.
- Verify that the unread notification count on the badge is instantly updated when actions are taken.
- Ensure that adding, reading, and dismissing notifications cause the corresponding UI elements to update immediately and globally.
- Confirm that memoization is applied and that the NotificationBadge only re-renders when relevant state changes.
- Test that the NotificationList displays all current notifications and includes controls for marking as read and dismissing, with an appropriate message when empty.
