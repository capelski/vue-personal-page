<template>
  <li :class="{'timeline-inverted': inverted}">
    <div class="timeline-image" style="display: flex; justify-content: center; align-items: center;">
      <a v-if="url" :href="url" style="color: white;" target="_blank">
        <i class="fa fa-external-link fa-2x"></i>
      </a>
    </div>
    <div class="timeline-panel">
      <div class="timeline-heading">
        <h4>{{date}}</h4>
        <h4 class="subheading">{{name}}</h4>
      </div>
      <div class="timeline-body">
        <p class="text-muted">{{description}}</p>
        <p v-if="githubUrl">
          <a :href="githubUrl" target="_blank">
            <i class="fa fa-github"></i>
            {{githubUrl}}
          </a>
        </p>
      </div>
    </div>
  </li>
</template>

<script>
export default {
  name: 'Project',
  props: {
      date: {
          type: String,
          default: "Current"
      },
      name: {
          type: String,
          default: "Some app"
      },
      description: {
          type: String,
          default: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!"
      },
      url: {
          type: String
      },
      githubUrl: {
          type: String
      },
      inverted: {
        type: Boolean,
        default: false
      }
  }
}
</script>
