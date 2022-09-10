<script lang="ts">
    import Window from './Window.svelte'
  </script>
  
  <style>
    .content {
      padding: 25px;
      display: grid;
    }

    iframe {
        margin: auto;
    }
  </style>
  
  <div id="schedule">
    <Window title="Live Streaming">
      <article class="content">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/qAiqKHG6uYM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </article>
    </Window>
  </div>
  