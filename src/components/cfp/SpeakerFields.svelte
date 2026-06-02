<script lang="ts">
  import { Localized } from "@nubolab-ffwd/svelte-fluent"
  import { form, addSpeaker, removeSpeaker } from "../../store/cfp-submission.svelte"
</script>

<h4 class="section-small"><Localized id="cfp--section-about-you" /></h4>

{#each form.speakerBios as _, index (index)}
  <div class="field">
    <div class="bio-header">
      <label for="bio-{index}">
        <Localized id="cfp--field-bio" />
        {#if form.speakerBios.length > 1}
          (Palestrante {index + 1})
        {/if}
      </label>
      <div class="bio-buttons">
        {#if form.speakerBios.length > 1}
          <button type="button" class="remove-speaker" onclick={() => removeSpeaker(index)}>
            &#x2212;
          </button>
        {/if}
        {#if index === form.speakerBios.length - 1}
          <button type="button" class="add-speaker" onclick={addSpeaker}>
            <Localized id="cfp--add-speaker" />
          </button>
        {/if}
      </div>
    </div>
    <textarea
      name="bio-{index}"
      rows="4"
      maxlength="800"
      required={index === 0}
      bind:value={form.speakerBios[index]}
    ></textarea>
  </div>
{/each}
