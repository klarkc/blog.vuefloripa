<template>
    <b-row class="blog-add">
      <b-col md="12" lg="6">
        <label>Title</label>
        <b-input v-model="title"></b-input>
        <label>Content</label>
        <wysiwyg v-model="content"></wysiwyg>
        <div class="d-flex justify-content-end p-1">
          <b-button variant="success" @click="$emit('add-post', {content, title})">+ Add Post</b-button>
        </div>
      </b-col>
      <b-col md="12" lg="6">
        <label>Preview</label>
        <div v-html="content"></div>
      </b-col>
    </b-row>
</template>

<script>
export default {
  name: 'BlogAddPost',
  data: () => ({
    title: '',
    content: ''
  })
}
</script>

<style lang="scss">

</style>

