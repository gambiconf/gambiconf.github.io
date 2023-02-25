<script lang="ts">
	export let title: string;
</script>

<div class="window">
	<div class="title-bar">
		<div class="title-buttons">
			<div class="button-close" />
			<div class="button-minimize" />
			<div class="button-expand" />
		</div>

		<div>
			{title}
		</div>
	</div>

	<slot />
</div>

<style>
	.window {
		border: 1px solid #222;
		border-radius: 10px;
		background-color: white;

		max-width: 1140px;

		margin-left: 2vw;
		margin-right: 2vw;
	}

	.title-bar {
		border-bottom: 1px solid #222;

		text-align: center;
		font-weight: bold;
	}

	.title-buttons {
		position: relative;
		top: 10px;

		display: flex;
		align-items: center;
		gap: 4px;

		height: 0;

		padding-left: 10px;
	}

	.title-buttons div {
		width: 10px;
		height: 10px;
		border-radius: 50%;
		opacity: 50%;
	}

	.button-close {
		background-color: red;
	}

	.button-minimize {
		background-color: #f2e617;
	}

	.button-expand {
		background-color: #bfff5a;
	}

	@media screen and (min-width: 768px) {
		.window {
			margin-right: auto;
			margin-left: auto;
		}
	}
</style>
