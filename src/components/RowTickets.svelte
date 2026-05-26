<script lang="ts">
  import { t } from "../store/locale.svelte"
  import Window from "./Window.svelte"

  const WIDGET_URL =
    "https://www.tickettailor.com/all-tickets/gambiconf/?ref=website_widget&show_search_filter=true&show_date_filter=true&show_sort=true"

  let container: HTMLDivElement | undefined = $state()

  $effect(() => {
    if (!container) return

    // Build the .tt-widget markup imperatively so Svelte doesn't add a scope
    // class to it. The Ticket Tailor widget script does a strict equality check
    // (`parentNode.className === 'tt-widget'`) and silently does nothing if any
    // extra class is present.
    // eslint-disable-next-line svelte/no-dom-manipulating
    container.innerHTML =
      '<div class="tt-widget">' +
      '<div class="tt-widget-fallback">' +
      "<p>" +
      `<a href="${WIDGET_URL}" target="_blank" rel="noopener noreferrer">Click here to buy tickets</a>` +
      "<br />" +
      '<small><a href="https://www.tickettailor.com?rf=wdg_313633" class="tt-widget-powered" target="_blank" rel="noopener noreferrer">Sell tickets online with Ticket Tailor</a></small>' +
      "</p>" +
      "</div>" +
      "</div>"

    const ttWidget = container.querySelector(".tt-widget")
    if (!ttWidget) return

    const script = document.createElement("script")
    script.src = "https://cdn.tickettailor.com/js/widgets/min/widget.js"
    script.setAttribute("data-url", WIDGET_URL)
    script.setAttribute("data-type", "inline")
    script.setAttribute("data-inline-minimal", "true")
    script.setAttribute("data-inline-show-logo", "false")
    script.setAttribute("data-inline-bg-fill", "false")
    script.setAttribute("data-inline-inherit-ref-from-url-param", "")
    script.setAttribute("data-inline-ref", "website_widget")
    ttWidget.appendChild(script)

    return () => {
      if (container) {
        // eslint-disable-next-line svelte/no-dom-manipulating
        container.innerHTML = ""
      }
    }
  })
</script>

<Window title={t("tickets--title")}>
  <div class="content">
    <div bind:this={container}></div>
  </div>
</Window>

<style>
  .content {
    padding: 25px;
  }
</style>
