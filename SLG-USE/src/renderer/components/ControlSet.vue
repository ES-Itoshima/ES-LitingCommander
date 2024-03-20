<template lang="pug">
  div.control-set
    div.container
      .group
        .group__title PAR

</template>

<script>
export default {}
</script>

<style lang="sass" scoped>
.control-set
  .container
    .group
      &__title, &__button
        $height: 25px
        display: inline-block
        height: $height
        padding: 0 7px
        background-color: #111
        font-size: 15px
        line-height: $height

      &__title
        font-weight: bold
</style>
