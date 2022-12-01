<template>
  <div class="container">
    <router-link class="logo" to="/">Logo</router-link>
    <div class="link-container">
      <router-link to="/">Updates</router-link>
      <router-link to="/">Blog</router-link>
      <router-link to="/">Community</router-link>
      <router-link to="/">The Game</router-link>
      <router-link class="cta" to="/">Start Your Journey</router-link>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="sass" scoped>
@import ../assets/global
.container
    width: 100%
    display: flex
    align-items: center
    justify-content: space-between

    .logo
        color: $text
        font-size: 2rem
        font-family: 'Poppins', sans-serif
        text-decoration: none

    .link-container
        gap: 2rem
        display: flex
        align-items: center
        justify-content: center

        a
            color: $text
            transition: 0.2s
            font-family: 'Poppins', sans-serif
            text-decoration: none

            &:hover
                color: $lightgreen

            &:last-of-type
                padding: 1rem
                box-sizing: border-box
                background: $lightgreen
                border-radius: 4px

                &:hover
                    color: $text
                    transform: scale(1.05)
</style>
