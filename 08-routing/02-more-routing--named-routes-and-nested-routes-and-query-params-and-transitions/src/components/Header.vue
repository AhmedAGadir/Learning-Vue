<template>
  <ul class="nav nav-pills">
    <router-link to="/" tag="li" active-class="active" exact>
      <a>Home</a>
    </router-link>
    <router-link to="/user" tag="li" active-class="active">
      <a>User</a>
    </router-link>
    <!-- if you wanted to you could set up query params in the 'to' property e.g. -->
    <!-- <router-link to="/user?a=100&b='hello'" tag="li" active-class="active"><a>User</a></router-link> -->
  </ul>
</template>
