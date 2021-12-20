<script>
  import { validate_store } from "svelte/internal";

  export let value;

  $: fontSize = value.length > 20 ? "small" : `s-${value.length}`;
</script>

<div class={`screen ${fontSize}`}>
  <span>{value}</span>
</div>

<style>
  .screen {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    flex: 1;
    font-size: 1.7rem;
    padding: 0 5px;
    margin-bottom: 2px;
    background-color: aliceblue;
    overflow: hidden;
  }

  .small {
    font-size: 0.6rem;
  }

  .s-10 {
    font-size: 1.4rem;
  }
  .s-11 {
    font-size: 1.35rem;
  }
  .s-12 {
    font-size: 1.25rem;
  }
  .s-13 {
    font-size: 1.15rem;
  }
  .s-14 {
    font-size: 1.07rem;
  }
  .s-15 {
    font-size: 1rem;
  }
  .s-16 {
    font-size: 0.93rem;
  }
  .s-17 {
    font-size: 0.87rem;
  }
  .s-18 {
    font-size: 0.83rem;
  }
  .s-19 {
    font-size: 0.78rem;
  }
  .s-20 {
    font-size: 0.74rem;
  }
</style>
