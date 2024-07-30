<template>
  <li class="profile-nav onhover-dropdown pe-0 py-0">
    <div class="media profile-media">
      <img
        class="b-r-10"
        src="@/assets/images/dashboard/no-user.jpg"
        alt=""
      />
      <div class="media-body" style="margin-top: 6px;">
        <span>User<i class="middle fa fa-angle-down"></i></span>
        <!-- <p class="mb-0 font-roboto">
          Admin <i class="middle fa fa-angle-down"></i>
        </p> -->
      </div>
    </div>
    <ul class="profile-dropdown onhover-show-div" style="width: 400px;">
     
      <!-- <li>
        <i class="fa fa-gear"></i> <router-link :to="{ name: 'settings' }">Settings</router-link>
      </li> -->
      <li>
        <a @click="logout"
          ><vue-feather type="log-in"></vue-feather><span>Log out</span></a
        >
      </li>
    </ul>
  </li>
</template>

<script>

  export default {
    name: 'Profile',
    methods: {
      logout: function() {
            this.$router.replace('/auth/login');
            localStorage.removeItem('user_token')
          }
    },
  };
</script>
