<template>
  <div id="Index">
    <div class="container">
      <h2 style="padding-top:50px;">This page is currently under construction</h2>
      <div class="box">
        <p>Contact me at</p>
        <p class="link" @click="openLink('https://twitter.com/TwanLuttik')">twitter</p>
        <p>for further questions</p>
      </div>
    </div>



    <!-- <div class="context">
      <p>Do you want to buy</p>
      <p class="domain">{{ domain }}</p>
    </div>

    <div class="form">
      <div class="box">
        <p>Email:</p>
        <p class="error">{{ error.email }}</p>
      </div>
      <input type="email" placeholder="Email" v-model="email">
      <br>

      <div class="box"> 
        <p>Name:</p>
        <p class="error">{{ error.name }}</p>
      </div>
      <input v-model="name">
      <br>
      <p>Message:</p>
      <textarea v-model="message"/>
      <br>
      <button @click="sendMail()">Send</button>
      
      <br>

      <p>{{ m }}</p>
    </div> -->

  </div>
</template>

<script>
export default {
  name: 'Index',
  data() {
    return {
      domain: window.location.hostname,
      email: null,
      name: null,
      message: '',
      error: {
        email: '',
        name: ''
      },
      m: ''

    }
  },
  methods: {
    sendMail() {
      var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      
      this.error.email = '';
      this.error.name = '';

      if (!this.email && !this.name) {
        if (!this.email) this.error.email = '*Required';
        if (!this.name) this.error.name = '*Required';
        return;
      }

      if (!regex.test(this.email)) {
        this.error.email = 'Use a valid email';
        return;
      }

      this.$base.sendEmail(this.domain, this.name, this.email)
      .then((r) => {
        this.m = r.message;
      })
      .catch((r) => {
        this.m = r;
      })
    },
    openLink(v) {
      window.open(v, '_blank');
    }
  },
  
}
</script>


<style lang="scss" scoped>
#Index {
  .context {
    width: fit-content;
    margin: 30px auto;
    display: flex;
    font-size: 28px;
    font-weight: bold;
    
    .domain {
      margin: 0 5px;
      color: rgb(87, 150, 231);
    }
  }
  .form {
    width: fit-content;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    p {
      text-align: left;
    }
    .box {
      display: flex;
      justify-content: space-between;
      .error {
        color: rgb(255, 67, 67);
      }
    }
  }

  input {
    height: 30px;
    width: 250px;
    outline: none;
    border: solid 1px black;
    padding: 0 5px;
  }

  button {
    height: 30px;
    // width: 250px;
    outline: none;
    border: solid 1px black;
    padding: 0 20px;
    cursor: pointer;

    transition: background .2s ease, color .2s ease;
    &:hover {
      background: black;
      color: white;
    }
  }

  textarea {
    border: solid 1px black;
    width: 250px;
    padding: 5px;
    height: 300px;
    outline: none;
    resize: none;
  }

  .container {

    .box {
      display: flex;
      width: fit-content;
      margin: 0 auto;
    }
    .link {
      margin: 0 5px;
      cursor: pointer;
      text-decoration: underline;
      &:hover {
        color: rgb(76, 119, 212);
      }
    }
  }


}
</style>
