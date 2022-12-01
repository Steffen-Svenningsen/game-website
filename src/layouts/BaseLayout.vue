<script setup lang="ts">
import NavHeader from "@/components/NavHeader.vue";
</script>

<template>
  <div class="layout">
    <div class="layout-body">
      <div class="layout-main">
        <NavHeader />
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<style lang="sass" scoped>
@import ../assets/global
.layout
    height: 100%
    background: $background

    .layout-body
        height: 100%
        display: flex
        align-items: center
        justify-content: center

        .layout-main
            width: 100%
            height: 100%
            padding: 1rem
</style>
