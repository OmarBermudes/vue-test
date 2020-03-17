<template>
  <div id="searchBar" class="search-bar">
    <b-field grouped>
      <b-input placeholder="Search..." expanded></b-input>
      <p class="control">
        <b-button type="is-info" outlined>Buscar</b-button>
      </p>
    </b-field>
  </div>
</template>

<script>
export default {
  name: "SearchBar"
};
</script>

<style>
.search-bar {
  margin: 10px 0px;
}
</style>
