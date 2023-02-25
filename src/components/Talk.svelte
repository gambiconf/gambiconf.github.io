<script lang="ts">
	import { getGoogleCalendarLink } from '../utils/calendar';
	import SocialLinks from './SocialLinks.svelte';
	import type { SocialLink } from './SocialLinks.svelte';

	export let talkTitle: string;
	export let speakers: Array<{ name: string; bio?: string }>;
	export let speakerImage: string;
	export let socialLinks: SocialLink[];
	export let date: string;
	export let hours: string;
	export let duration: number;

	const googleCalendarLink = getGoogleCalendarLink({
		title: `[GambiConf Talk] ${talkTitle}`,
		start: `${date} ${hours}:00 +0100`,
		duration
	});
</script>

<article class="talk">
	<div class="speaker-image-column">
		<img class="speaker-image" src={speakerImage} alt="Speaker" />

		<SocialLinks links={socialLinks} />
	</div>

	<div class="description-column">
		<h6>
			{talkTitle}
		</h6>

		<p class="time">
			At <a href={googleCalendarLink} target="_blank" rel="noopener">{hours}</a>
		</p>

		<p>
			<slot />
		</p>

		{#each speakers as { name, bio }}
			<h6 class="talk-speaker">
				By
				{#if name[0] === '@'}
					<a href={`https://twitter.com/${name}`}>{name}</a>{#if bio}:{/if}
				{:else}
					{name}{#if bio}:{/if}
				{/if}
			</h6>

			<p>
				{@html bio ?? ''}
			</p>
		{/each}
	</div>
</article>

<style>
	h6 {
		margin-top: 0;
		margin-bottom: 0;
	}

	.time {
		margin: 0;
		font-weight: bold;
	}

	.speaker-image-column {
		display: flex;
		flex-direction: column;
	}
	.speaker-image-column > img {
		align-self: center;
	}

	.speaker-image {
		min-height: 200px;
		max-height: 200px;
		min-width: 200px;
		max-width: 200px;
		object-fit: contain;
		border-radius: 100px;
		border: solid 1px #f34b2122;
	}

	.description-column > *:first-child {
		margin-top: 0;
	}

	.description-column > *:last-child {
		margin-bottom: 0;
	}

	@media screen and (min-width: 768px) {
		.talk {
			display: flex;
			gap: 25px;
		}

		.speaker-image-column {
			display: unset;
		}
	}
</style>
