<template>
  <div
    :class="['shape-blob', `shape-blob--${index + 1}`]"
    v-for="index in 4"
  ></div>
</template>

<script>
export default {
  name: 'SvgAnimation'
};
</script>

<style lang="scss" scoped>
.shape-blob {
  background: var(--purple);
  height: 200px;
  width: 200px;
  border-radius: 30% 50% 20% 40%;
  animation: transform 20s ease-in-out infinite both alternate,
    movement_one 40s ease-in-out infinite both;
  opacity: 0.1;
  position: absolute;
  left: 70%;
  top: 50%;
  &--1 {
    height: 100px;
    width: 100px;
    left: 20%;
    top: 10%;
    transform: rotate(-180deg);
    animation: transform 30s ease-in-out infinite both alternate,
      movement_two 60s ease-in-out infinite both;
  }
  &--2 {
    height: 350px;
    width: 350px;
    left: 50%;
    top: 1%;
    transform: rotate(-180deg);
    animation: transform 30s ease-in-out infinite both alternate,
      movement_two 60s ease-in-out infinite both;
  }
  &--3 {
    height: 100px;
    width: 100px;
    left: 20%;
    top: 50%;
    transform: rotate(-180deg);
    animation: transform 30s ease-in-out infinite both alternate,
      movement_two 60s ease-in-out infinite both;
  }
  &--4 {
    height: 100px;
    width: 100px;
    left: 49%;
    top: 80%;
    transform: rotate(-180deg);
    animation: transform 30s ease-in-out infinite both alternate,
      movement_two 30s ease-in-out infinite both;
  }
}

@keyframes transform {
  0%,
  100% {
    border-radius: 33% 67% 70% 30% / 30% 30% 70% 70%;
  }
  20% {
    border-radius: 37% 63% 51% 49% / 37% 65% 35% 63%;
  }
  40% {
    border-radius: 36% 64% 64% 36% / 64% 48% 52% 36%;
  }
  60% {
    border-radius: 37% 63% 51% 49% / 30% 30% 70% 70%;
  }
  80% {
    border-radius: 40% 60% 42% 58% / 41% 51% 49% 59%;
  }
}

@keyframes movement_one {
  0%,
  100% {
    transform: none;
  }
  50% {
    transform: translate(50%, 20%) rotateY(10deg) scale(1.2);
  }
}

@keyframes movement_two {
  0%,
  500% {
    transform: none;
  }
  50% {
    transform: translate(50%, 20%) rotate(-200deg) scale(1.2);
  }
}
</style>
