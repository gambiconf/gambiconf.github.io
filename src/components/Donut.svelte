<script>
	export let size = 100;
	export let percent = 0;
	export let bgColor = '#304BA5';
	export let fgColor = '#E5E5E5';

	$: viewBox = `0 0 ${size} ${size}`;

	$: radius = size / 2;
	$: halfCircumference = Math.PI * radius;
	$: pieSize = halfCircumference * (percent / 100);
	$: dashArray = `0 ${halfCircumference - pieSize} ${pieSize}`;
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
