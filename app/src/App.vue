<template>
  <div id="app">  
    <div class="container mt-5">
      <form @submit.prevent="save">
        <div class="form-group">
          <label>From</label>
          <input
            type="number"
            placeholder="From"
            v-model="chat.from"
            required
            class="form-control"
          />
        </div>
        <div class="form-group mt-2">
          <label>ID Target</label>
          <input
            type="number"
            required
            placeholder="ID Target"
            v-model="chat.target_id"
            class="form-control"
          />          
        </div>
        <div class="form-group mt-2">          
          <label>Media</label>
          <select name="media" id="media" v-model="chat.media" class="form-control" required>
            <option value="1">Yes</option>
            <option value="0" selected>No</option>
          </select>
        </div>
        <div class="form-group mt-2">
          <label>Message</label>
          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            v-model="chat.message"            
            placeholder="Message"
          ></textarea>
        </div>

        <button class="btn btn-primary mt-5">
          <i class="material-icons left">Insert</i>
        </button>
      </form>
      <br />
      <br />

      <table class="table">
        <thead>
          <tr>
            <th scope="col">From</th>
            <th scope="col">Target_id</th>
            <th scope="col">Media</th>
            <th scope="col">Message</th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="message of messages" :key="message._id">
            <td>{{ message.from }}</td>
            <td>{{ message.target_id }}</td>
            <td>{{ message.media }}</td>
            <td>{{ message.message }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import Chat from "./services/chat";

export default {
  data() {
    return {
      chat: {
        from: "",
        target_id: "",
        media: "",
        message: "",
      },
      messages: [],
    };
  },
  mounted() {
    Chat.list().then((res) => {
      console.log(res.data);
      this.messages = res.data;
    });
  },

  methods: {
    save() {
      Chat.insert(this.chat).then((res) => {        
        alert(JSON.stringify(res.data))
      //  alert("Cadastrado com sucesso");
      });
    },
  },
};
</script>
<style>
</style>
