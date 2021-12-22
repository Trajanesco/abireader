<template>
  <div
    :class="['shape-blob', `shape-blob--${index + 1}`]"
    v-for="index in 8"
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
    mv_one 30s ease-in-out infinite both;
  opacity: 0.1;
  position: absolute;
  left: 70%;
  top: 50%;
  overflow: hidden;
  z-index: -1;

  &--1 {
    height: 100px;
    width: 100px;
    left: 20%;
    top: 10%;
    transform: rotate(-180deg);
    animation: transform 30s ease-in-out infinite both alternate,
      mv_two 50s ease-in-out infinite both;
  }
  &--2 {
    height: 310px;
    width: 350px;
    left: 50%;
    top: 1%;
    transform: rotate(-180deg);
    animation: transform 30s ease-in-out infinite both alternate,
      mv_one 30s ease-in-out infinite both;
  }
  &--3 {
    height: 200px;
    width: 180px;
    left: 20%;
    top: 50%;
    transform: rotate(-180deg);
    animation: transform 30s ease-in-out infinite both alternate,
      mv_three 20s ease-in-out infinite both;
  }
  &--4 {
    height: 70px;
    width: 70px;
    left: 49%;
    top: 80%;
    transform: rotate(-180deg);
    animation: transform 30s ease-in-out infinite both alternate,
      mv_two 30s ease-in-out infinite both;
  }
  &--5 {
    height: 440px;
    width: 450px;
    left: -20%;
    top: 10%;
    transform: rotate(-180deg);
    animation: transform 30s ease-in-out infinite both alternate,
      mv_three 40s ease-in-out infinite both;
  }
  &--6 {
    height: 200px;
    width: 181px;
    left: 21%;
    top: 50%;
    transform: rotate(-10deg);
    animation: transform 30s ease-in-out infinite both alternate,
      mv_one 40s ease-in-out infinite both;
    opacity: 0.03;
  }

  &--7 {
    height: 140px;
    width: 140px;
    left: 50%;
    top: 50%;
    transform: rotate(-180deg);
    animation: transform 30s ease-in-out infinite both alternate,
      mv_two 30s ease-in-out infinite both;
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

@keyframes mv_one {
  0%,
  100% {
    transform: none;
  }
  50% {
    transform: translate(
        percentage(random(100) / 100),
        percentage(random(100) / 100)
      )
      rotateY(percentage(random(100) / 100) deg) scale(1.2);
  }
}

@keyframes mv_two {
  0%,
  500% {
    transform: none;
  }
  50% {
    transform: translate(
        percentage(random(100) / 100),
        percentage(random(100) / 100)
      )
      rotate(percentage(random(100) / 100) deg) scale(1.2);
  }
}

@keyframes mv_three {
  0%,
  200% {
    transform: none;
  }
  40% {
    transform: translate(
        percentage(random(100) / 100),
        percentage(random(100) / 100)
      )
      rotateY(percentage(random(100) / 100) deg) scale(1.2);
  }
}
</style>
