<template>
  <button :class="['z-button', { [`z-button--${type}`]: type }]">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    type: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.z-button {
  border-radius: $border-radius-base;
  border: 1px solid $border-color-base;
  line-height: 1;
  padding: 12px 16px;
  outline: none;
  cursor: pointer;
  font-size: $font-size-base;
  color: $color-text-regular;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  &--primary {
    color: #fff;
    background-color: $color-primary;
    border-color: $color-primary;
  }

  &--success {
    color: #fff;
    background-color: $color-success;
    border-color: $color-success;
  }

  &--warning {
    color: #fff;
    background-color: $color-warning;
    border-color: $color-warning;
  }

  &--danger {
    color: #fff;
    background-color: $color-danger;
    border-color: $color-danger;
  }
}
</style>
