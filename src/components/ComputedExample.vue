<template>
  <div>
    <input v-model="searchQuery" type="text" placeholder="Search the name" />
    <div
      class="Chatroom__list__messages"
      v-for="result in resultQuery"
      :key="result.uid"
    >
      <div class="Chatroom__list__messages__img">
        <img :src="result.image" />
      </div>
      <div class="Chatroom__list__messages__message">
        <div class="Chatroom__list__messages__message__name">
          <div class="Chatroom__list__messages__message__name__indi">
            {{ result.name }}
          </div>
          <div class="Chatroom__list__messages__message__name__time">
            yesterday
          </div>
        </div>
        <div class="Chatroom__list__messages__message__details">
          message from supreme
        </div>
      </div>
    </div>
  </div>
</template>
<style>
img {
  height: 3rem;
}
</style>
<script>
export default {
  name: "ComputedExample",
  data() {
    return {
      userData: [
        {
          image:
            "https://i.pinimg.com/originals/6a/2f/67/6a2f67c1823fe82035f53db68fe27666.png",
          name: "Tunde",
          uid: "LfhxERlvyfh2auIY0HnpidjJg3L2",
        },
        {
          name: "bola",
          image:
            "https://i.pinimg.com/originals/6a/2f/67/6a2f67c1823fe82035f53db68fe27666.png",
          uid: "R6lyXuNwZfc9ztLDfIZBSZLg2QD2",
        },
        {
          uid: " k8ZVBdA9wfetiB8vJV3Qc07NZty1",
          image:
            "https://i.pinimg.com/originals/6a/2f/67/6a2f67c1823fe82035f53db68fe27666.png",
          name: "Supreme",
        },
      ],
      searchQuery: null,
    };
  },
  computed: {
    resultQuery() {
      if (this.searchQuery) {
        return this.userData.filter((item) => {
          return this.searchQuery
            .toLowerCase()
            .split(" ")
            .every((v) => item.name.toLowerCase().includes(v));
        });
      } else {
        console.log(this.userData);
        return this.userData;
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
