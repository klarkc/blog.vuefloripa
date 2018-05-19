<template lang="html">
  <div class="dashboard-view">
    <HeaderContainer />
    <b-container fluid>
      <BlogAddPost @add-post="onAddPost"/>
    </b-container>
  </div>
</template>

<script>
// BlogAddPost
import BlogAddPost from '@/components/BlogAddPost/BlogAddPost.vue';
import HeaderContainer from './containers/HeaderContainer.vue';

export default {
  components: {
    HeaderContainer,
    BlogAddPost,
  },
  methods: {
    onAddPost(post) {
      this.$store.dispatch('post/addPost', post);
    }
  }
};
</script>

<style lang="scss" scoped>

</style>
