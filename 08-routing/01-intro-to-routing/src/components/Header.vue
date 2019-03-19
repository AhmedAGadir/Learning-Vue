<template>
  <ul class="nav nav-pills">
    <!-- router-link is a built in component shipped with vue-router -->
    <!-- 'to' attribute can be statically or dynamically bound -->
    <!-- it can use relative or absolute paths -->
    <!-- <li role="presentation"><router-link to="/">Home</router-link></li>
    <li role="presentation"><router-link to="/User">User</router-link></li>-->
    <!-- setting the tag attribute will change our router-link to the specified HTML tag as opposed to the default (<a> element)
    note: if you do this then make sure to nest <a> tags inside of the router-link element-->
    <router-link to="/" tag="li" active-class="active" exact>
      <a>Home</a>
    </router-link>
    <!-- OPTION A -->
    <!-- <router-link to="/user/1" tag="li" active-class="active">
      <a>User 1</a>
    </router-link>
    <router-link to="/user/2" tag="li" active-class="active">
      <a>User 2</a>
    </router-link>-->
    <!-- OPTION B -->
    <router-link to="/user" tag="li" active-class="active">
      <a>User</a>
    </router-link>
    <!-- if you wanted to you could set up query params in the 'to' property e.g. -->
    <!-- <router-link to="/user?a=100&b='hello'" tag="li" active-class="active"><a>User</a></router-link> -->
  </ul>
</template>
