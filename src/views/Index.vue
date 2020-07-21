<template>
  <div>
    <div class="container">
      <div class="cc">
        <p class="first">{{ domain }} is owned by</p>
        <p class="link" @click="openLink('https://twitter.com/TwanLuttik')">
          Twan Luttik
        </p>
      </div>
      <!-- <div class="box">
        <p>Contact me at</p>
        <p class="link" @click="openLink('https://twitter.com/TwanLuttik')">
          twitter
        </p>
        <p>for further questions</p>
      </div> -->
    </div>
  </div>
</template>

<script>
export default {
  name: "Index",
  data() {
    return {
      domain: window.location.host,
    };
  },
  methods: {
    openLink(v) {
      window.open(v, "_blank");
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  .cc {
    margin-top: 100px;
    display: flex;
    flex-direction: row;
    font-size: 20px;
    font-weight: 600;
    justify-content: center;
  }

  

  .link {
    margin-left: 5px;
    cursor: pointer;
    color: #4176d0;
    transition: color 0.1s ease-in-out, transform 0.1s ease-in;
    &:hover {
      transform: scale(1.04);
    }

    /* &:hover {
      color: #477edf;
      transform: scale(1.04);
    } */
  }
}
</style>
