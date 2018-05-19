<template>
  <article>
    <h1>{{title}}</h1>
    <div v-html="content">
    </div>
  </article>
</template>

<script>
export default {
  name: 'BlogPost',
  props: {
    title: String,
    content: String,
  }
}
</script>
