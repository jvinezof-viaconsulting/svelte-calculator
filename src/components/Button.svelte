<script>
  export let text;
  export let onClick = () => {};

  export let isThird = false;
  export let isHalf = false;
  export let isOperation = false;
  export let isImportant = false;
</script>

<button
  on:click={() => onClick(text)}
  class="button"
  class:isHalf
  class:isThird
  class:isOperation
  class:isImportant
>
  {text}
</button>

<style>
  .button {
    flex-basis: 25%;
    border: 1px solid var(--bg-color);
    margin: 0;
    cursor: pointer;
  }

  .isHalf {
    flex-basis: 50%;
  }

  .isThird {
    flex-basis: 75%;
  }

  .isOperation {
    background-color: orange;
    color: #fff;
  }

  .isImportant {
    background-color: red;
    color: #fff;
  }
</style>
