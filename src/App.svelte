<script>
  let clicks = 0

  const handleClick = () => clicks++
</script>

<main>
  <button on:click={handleClick}>
    {clicks} {clicks === 1 ? 'Click' : 'Clicks'}
  </button>
</main>

<style>

</style>
