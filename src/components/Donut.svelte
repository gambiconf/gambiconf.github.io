<script lang="ts">
  interface Props {
    size?: number;
    percent?: number;
    bgColor?: string;
    fgColor?: string;
  }

  let {
    size = 100,
    percent = 0,
    bgColor = "#304BA5",
    fgColor = "#E5E5E5"
  }: Props = $props();

  let viewBox = $derived(`0 0 ${size} ${size}`)

  let radius = $derived(size / 2)
  let halfCircumference = $derived(Math.PI * radius)
  let pieSize = $derived(halfCircumference * (percent / 100))
  let dashArray = $derived(`0 ${halfCircumference - pieSize} ${pieSize}`)
</script>

<svg width={size} height={size} {viewBox}>
  <circle r={radius} cx={radius} cy={radius} fill={fgColor} />

  <circle
    class="rotate"
    r={radius / 2}
    cx={radius}
    cy={radius}
    stroke={bgColor}
    stroke-width={radius}
    stroke-dasharray={dashArray}
  />

  <svg x={size * 0.1} y={size * 0.1}>
    <circle r={radius * 0.8} cx={radius * 0.8} cy={radius * 0.8} fill="white" />
  </svg>
</svg>

<style>
  .rotate {
    transform-box: fill-box;
    transform-origin: center;
    transform: rotate(270deg) scaleY(-1);
  }
</style>
