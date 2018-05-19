import lb from '@/services/loopback'; // Axios

export default {
  namespaced: true,
  state: {
    posts: [],
  },
  mutations: {
    setPosts(state, posts) {
      state.posts = posts;
    },
  },
  actions: {
    addPost(context, post) {
      lb.post('/Posts', post);
    },
    loadPosts({commit}) {
      lb
        .get('/Posts')
        .then(posts => commit('setPosts', posts));
    },
  },
};
