<script>
  import {
    NotificationType,
    store_notifications,
    notify,
    close,
  } from "../stores/notifications";

  let notifications = [];

  store_notifications.subscribe((arr) => {
    notifications = arr;
  });
</script>

<div id="notifications">
  {#each notifications as notification}
    <div
      class="notification"
      class:warning={notification.type === NotificationType.Warning}
      class:error={notification.type === NotificationType.Error}
      class:info={notification.type === NotificationType.Info}>
      <div class="left">{notification.text}</div>

      <div class="right">
        {#if notification.options.link}
          <a
            href={notification.options.link}
            title="You can use the CTRL+D shortcut to quickly follow the link"
            >view</a>
        {/if}
        <button
          on:click={() => close(notification.id)}
          title="You can also use the Escape key to close notifications"
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            class="w-5 h-5">
            <path
              d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
          </svg>
        </button>
      </div>
    </div>
  {/each}
</div>

<style>
  :root {
    display: inline-block;
  }

  #notifications {
    position: fixed;
    bottom: 24px;
    right: 24px;
    z-index: 1000;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }

  .notification {
    overflow: hidden;
    display: inline-flex;
    justify-content: space-between;
    background: white;
    box-shadow: 0px 2px 0px 0px rgba(20, 20, 20, 0.1);
    border-radius: 6px;
    animation-name: popup;
    animation-duration: 0.25s;
    animation-timing-function: cubic-bezier(0.62, 0.37, 0.05, 1.41);
  }

  .notification.info {
    background: #04d068;
    color: white;
  }

  .notification.error {
    background: #f15253;
    color: white;
  }

  .notification.warning {
    background: #ffba00;
    color: white;
  }

  .notification .left {
    padding: 1em;
    white-space: pre-wrap;
  }

  .notification .left,
  .notification .right {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .notification + .notification {
    margin-top: 1em;
  }

  .notification .right {
    border-left: solid 1px rgba(245, 245, 245, 0.2);
  }

  .right > * {
    padding: 0.5em;
    display: flex;
    justify-content: center;
    color: inherit;
  }

  .right > *:not(button) {
    padding: 0.5em 0.5em;
  }

  button {
    display: flex;
    align-items: center;
    background: transparent !important;
    border: none !important;
    outline: none;
    cursor: pointer;
    flex-grow: 1;
    width: 100%;
  }

  .right > * + * {
    border-top: solid 1px rgba(245, 245, 245, 0.2) !important;
  }

  button:hover {
    filter: brightness(25%);
    text-decoration: underline;
  }

  svg {
    font-size: 1.2em;
    color: currentColor;
  }

  @keyframes popup {
    from {
      transform: scale(0);
    }

    to {
      transform: scale(1);
    }
  }
</style>
