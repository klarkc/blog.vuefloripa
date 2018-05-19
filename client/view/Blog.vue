<template lang="html">
  <div class="dashboard-view">
    <HeaderContainer />
    <b-container>
      <template v-for="post in posts">
        <BlogPost
        :key="post.id"
        :title="post.title"
        :content="post.content" />
        <hr>
      </template>
    </b-container>
  </div>
</template>

<script>
import {mapState} from 'vuex';
import HeaderContainer from '@/view/containers/HeaderContainer.vue';
import BlogPost from '@/components/BlogPost/BlogPost.vue';

export default {
  name: 'Blog',
  components: {
    HeaderContainer,
    BlogPost,
  },
  computed: mapState('post', ['posts']),
  mounted() {
    this.$store.dispatch('post/loadPosts');
  },
}
</script>
