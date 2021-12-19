<template>
  <section class="explanation-section">
    <h2 class="title-explanation">
      ABIreader -
      <span class="highlight">work faster</span>
      with tool for WebDevelopers 3.0
    </h2>
  </section>
</template>

<script>
export default {
  name: 'SectionExplanation'
};
</script>

<style lang="scss" scoped>
.explanation-section {
  margin: 90px 0;
}
.title-explanation {
  font-size: 1.725rem;
  text-align: center;
  font-weight: 300;
}

.highlight {
  position: relative;
  &::before {
    content: '';
    background-color: var(--purple);
    width: 100%;
    height: 2px;
    position: absolute;
    bottom: 0;
  }
}
</style>
