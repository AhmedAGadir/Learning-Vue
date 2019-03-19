<template>
  <div>
    <h3>Some User Details</h3>
    <p>User loaded has ID: {{ $route.params.id }}</p>
    <!-- ***** without names ***** -->
    <!-- <router-link
      tag="button"
      :to="'/user/' + $route.params.id + '/edit'"
      class="btn btn-primary"
    >Edit User</router-link>-->
    <!-- ***** with names ***** -->
    <!-- <router-link
      tag="button"
      :to="{ name: 'userEdit', params: { id: $route.params.id } }"
      class="btn btn-primary"
    >Edit User</router-link>-->
    <!-- you can also add query params like this -->
    <!-- the query object uses key value pairs (you can name them anything you want e.g. query: {a: 100, b: 'hello'}) -->
    <router-link
      tag="button"
      :to="{ name: 'userEdit', params: { id: $route.params.id }, query: {locale: 'en', q: 100} }"
      class="btn btn-primary"
    >Edit User</router-link>
  </div>
</template>