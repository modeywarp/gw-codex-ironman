import { writable, type Writable } from "svelte/store";

/**
 * holds the last notification that was pushed to the buffer.
 * **Note**: it is not set back to null if the notification expired or was
 * closed.
 */
let last_notification: INotification | null = null;

export interface INotificationOptions {
  link: string;
}

export interface INotification {
  type: NotificationType;
  text: string;
  creation_date: number;
  options: INotificationOptions | {};
  id: number;
}

export const store_notifications: Writable<INotification[]> = writable([]);

export enum NotificationType {
  Info,
  Error,
  Warning,
}

export function notify(
  type: NotificationType,
  text: string,
  options: Partial<INotificationOptions> = {}
) {
  last_notification = {
    text,
    type,
    creation_date: Date.now(),
    id: Math.random(),
    options,
  };

  store_notifications.update((arr) => [...arr, last_notification]);

  setTimeout(() => refreshNotificationList(), 10010);
}

export function notify_info(
  text: string,
  options: Partial<INotificationOptions> = {}
) {
  return notify(NotificationType.Info, text, options);
}

export function close(id: number) {
  store_notifications.update((arr) =>
    arr.filter((notification) => notification.id !== id)
  );

  refreshNotificationList();
}

export function refreshNotificationList() {
  const now = Date.now();
  const delay = 1000 * 10;

  store_notifications.update((arr) =>
    arr.filter((notification) => now - notification.creation_date <= delay)
  );
}

document.addEventListener("keydown", (e) => {
  if (last_notification === null) {
    return;
  }

  if (e.key === "Escape") {
    e.preventDefault();
    close(last_notification.id);
  }

  if (e.ctrlKey && e.key === "d") {
    if ("link" in last_notification.options) {
      e.preventDefault();
      //@ts-ignore
      window.location = last_notification.options.link;
    }
  }
});