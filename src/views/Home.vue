<template>
  <div class="home">
    <div class="table">
      <el-table :data="users" style="width: 100%">
        <el-table-column prop="name" label="Name" width="180" />
        <el-table-column prop="username" label="Username" width="180" />
        <el-table-column prop="email" label="Email" />
        <el-table-column label="Operations" fixed="right" width="120">
          <template #default="scope">
            <el-button
              link
              type="primary"
              size="small"
              @click="detailUser(scope.$index)"
              >Detail</el-button
            >
            <el-button
              link
              type="primary"
              size="small"
              @click="deleteUser(scope.$index)"
              >Delete</el-button
            >
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div>
      <el-dialog
        v-model="dialogVisible"
        title="Details"
        width="30%"
      >
        <li>Name: {{ userData.name }}</li>
        <li>Username: {{ userData.username }}</li>
        <li>Email: {{ userData.email }}</li>
        <li>Adress: {{ userData.address['street'] }}, {{ userData.address['suite'] }}, {{ userData.address['city'] }}, {{ userData.address['zipcode'] }}, Latitud: {{ userData.address['geo']['lat'] }}, Longitud: {{ userData.address['geo']['lat'] }}</li>
        <li>Phone: {{ userData.phone }}</li>
        <li> Website: {{ userData.website }}</li>
        <li>Company: {{ userData.company['name']}}, {{ userData.company['catchPhrase'] }}, {{ userData.company['bs'] }}</li>
        <template #footer>
          <span class="dialog-footer">
            <el-button type="primary" @click="dialogVisible = false"
              >Ok</el-button
            >
          </span>
        </template>
      </el-dialog>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Home",
  components: {},
  data() {
    return {
      users: [],
      dialogVisible: false,
      userData: [],
    };
  },
  mounted() {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        this.users = response.data;
      })
      .catch((err) => {
        console.log(err);
      });
  },
  methods: {
    detailUser(index) {
      index += 1;
      axios
        .get(`https://jsonplaceholder.typicode.com/users/${index}`)
        .then((response) => {
          this.userData = response.data;
          this.dialogVisible = true;
        });
    },

    deleteUser(index) {
      axios
        .delete(`https://jsonplaceholder.typicode.com/users/${index}`)
        .then(() => {
          this.users.splice(index, 1);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style scoped>
.home {
  justify-content: center;
}
.table {
  width: 60em;
  margin-left: auto;
  margin-right: auto;
}
</style>