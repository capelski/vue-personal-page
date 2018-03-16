<template>
    <div class="navbar-spacer container">
        <div class="row">
          <div class="col-lg-12">
            <ul class="timeline">
              <project
                date="Feburary 2018"
                name="Vue personal page"
                description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!"
                inverted="true"
              />
              <project
                date="June 2017"
                name="Jokify"
                description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!"
              />
              <project
                date="April 2017"
                name="Fractal Generator"
                description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!"
                inverted="true"
              />
              <project
                date="September 2016"
                name="Dragon Pong"
                description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!"
              />
              <project
                date="March 2016"
                name="Carniques Ausa"
                description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!"
                inverted="true"
              />
              <project
                date="July 2015"
                name="Vrokil"
                description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!"
              />
              <project
                date="May 2015"
                name="Angular personal page"
                description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!"
                inverted="true"
              />
              <project
                date="March 2014"
                name="Poliester Pelegrina"
                description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!"
              />
              <project
                date="January 2014"
                name="PHP personal page"
                description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!"
                inverted="true"
              />
              <project
                date="September 2013"
                name="D.O. Vic Responsive"
                description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!"
              />
              <project
                date="April 2013"
                name="D.O. Vic"
                description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!"
                inverted="true"
              />
              <project
                date="2012-2013"
                name="Desdecasa"
                description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!"
              />
              <li>
                <div class="timeline-image">
                  <h4>Beginning <br /> of the <br /> times</h4>
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
