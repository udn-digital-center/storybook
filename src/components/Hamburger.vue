<template>
  <button
    class="hamburger"
    :class="classes"
    :style="`--width: ${width}px; --height: ${height}px; --weight: ${weight}px`"
    @click="onClick"
  >
    <div class="hamburger-center" />
  </button>
</template>

<script>
import { computed, defineComponent, ref } from "vue";

export default defineComponent({
  props: {
    width: {
      type: Number,
      default: 32,
    },
    height: {
      type: Number,
      default: 24,
    },
    weight: {
      type: Number,
      default: 3,
    },
    color: {
      type: String,
      default: "#8B8B8B",
    },
    hoverColor: {
      type: String,
      default: "#1a1a1a",
    },
    activeColor: {
      type: String,
      default: "#8B8B8B",
    },
  },
  emits: ["click"],
  setup(props, { emit }) {
    const isActived = ref(false);
    const onClick = () => {
      isActived.value = !isActived.value;
      emit("click");
    };
    const classes = computed(() => ({
      active: isActived.value,
      [`hamburger--${props.size || "medium"}`]: true,
    }));
    return {
      classes,
      onClick,
    };
  },
});
</script>

<style lang="scss" scoped>
$color: v-bind("color");
$hoverColor: v-bind("hoverColor");
$activedColor: v-bind("activeColor");

button {
  border: none;
  background: none;
  padding: 0;

  &.hamburger {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    cursor: pointer;

    --w: var(--width, 32px);
    --h: var(--height, 24px);
    --btn_h: max(calc(var(--w) * 0.7283), var(--h));
    width: var(--w);
    height: var(--btn_h);
    padding: calc(var(--btn_h) / 2 - var(--h) / 2) 0;

    &::after,
    &::before {
      content: "";
      display: block;
    }

    &::after,
    &::before,
    .hamburger-center {
      width: 100%;
      height: var(--weight, 3px);
      border-radius: calc(var(--weight, 3px) * 2);
      background-color: $color;
      transition: all 0.3s ease-in-out;
    }

    @media (hover: hover) {
      &:hover {
        &::after,
        &::before,
        .hamburger-center {
          background-color: $hoverColor;
        }
      }
    }

    &.active {
      &::after {
        transform: translate(0%, calc(var(--h) / -2)) translateY(50%)
          rotate(45deg);
        background-color: $activedColor;
      }

      &::before {
        transform: translate(0%, calc(var(--h) / 2)) translateY(-50%)
          rotate(-45deg);
        background-color: $activedColor;
      }

      .hamburger-center {
        background-color: transparent;
      }

      @media (hover: hover) {
        &:hover {
          &::after,
          &::before {
            background-color: $hoverColor;
          }
        }
      }
    }
  }
}
</style>
