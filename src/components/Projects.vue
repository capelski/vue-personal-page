<template>
    <div class="navbar-spacer container">
        <div class="row">
          <div class="col-lg-12">
            <ul class="timeline">
              <project 
                date="2009-2011"
                name="Our Humble Beginnings"
                description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!"
              />
              <project 
                inverted="true"
                date="March 2011"
                name="Phase Two Expansion"
                description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!"
              />
              <project 
                date="December 2012"
                name="An Agency is Born"
                description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!"
              />
              <project 
                inverted="true"
                date="July 2014"
                name="Phase Two Expansion"
                description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!"
              />
              <li>
                <div class="timeline-image">
                  <h4>Be Part
                    <br>Of Our
                    <br>Story!</h4>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
</template>

<script>
import Project from './Project.vue';
export default {
  name: 'Projects',
  components: {
    Project
  }
}
</script>

<style scoped>
.navbar-spacer {
  padding-top: 90px;
}
</style>
