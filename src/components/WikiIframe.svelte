<script>
  import { closeIframe, store_wiki_iframe } from "../stores/wiki-iframe";

  function clickOutside(element, callbackFunction) {
    function onClick(event) {
      // check for the node name because of shadow-dom
      if (event.target.nodeName !== "APP-MENU") {
        callbackFunction();
      }
    }

    document.body.addEventListener("click", onClick);

    return {
      update(newCallbackFunction) {
        callbackFunction = newCallbackFunction;
      },
      destroy() {
        document.body.removeEventListener("click", onClick);
      },
    };
  }
</script>

{#if $store_wiki_iframe}
  <iframe
    use:clickOutside={closeIframe}
    title=""
    loading="lazy"
    src={`https://wiki.guildwars.com/?search=${$store_wiki_iframe}`}
    frameborder="0" />
{/if}

<style>
  iframe {
    position: fixed;
    bottom: 0;
    left: 50%;

    transform: translate(-50%, 0);
    min-height: 70vh;
    min-width: 100vw;
    z-index: 100;
    box-shadow: 0px -12px 12px rgba(20, 20, 20, 0.1);
    border-top: solid 6px black;
  }
</style>
