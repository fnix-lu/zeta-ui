<template>
  <div id="app">
    <section class="demo-block">
      <div class="demo-row">
        <z-button>默认按钮</z-button>
        <z-button type="primary">主要按钮</z-button>
        <z-button type="success">成功按钮</z-button>
        <z-button type="warning">警告按钮</z-button>
        <z-button type="danger" disabled>危险按钮</z-button>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss" scoped>
.demo-block {
  border: 1px solid $border-color-light;
  padding: 16px;
  margin: 16px;

  .demo-row + .demo-row {
    margin-top: 12px;
  }

  .z-button {
    margin-right: 12px;
  }
}
</style>
