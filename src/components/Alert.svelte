<script lang="ts">
  interface Props {
    status: "success" | "error";
    message: string;
  }

  let { status, message }: Props = $props();
</script>

<div class={status}>
  {message}
</div>

<style>
  div {
    padding: 5px;
    border-radius: 5px;
    text-align: center;
  }

  .success {
    background-color: #a1ffab;
  }

  .error {
    background-color: #ffa1a1;
  }
</style>
