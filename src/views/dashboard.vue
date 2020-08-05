<template>
  <v-form>
    <v-container>
      <v-row>

        <v-col cols="12" sm="6" md="3">
          <v-text-field
            label="Regular"
          ></v-text-field>
        </v-col>

        <v-col cols="12" sm="6" md="3">
          <v-text-field
            label="Regular"
            placeholder="Placeholder"
          ></v-text-field>
        </v-col>

        <v-col cols="12" sm="6" md="3">
          <v-text-field
            label="Solo"
            solo
          ></v-text-field>
        </v-col>

        <v-col cols="12" sm="6" md="3">
          <v-text-field
            label="Solo"
            placeholder="Placeholder"
            solo
          ></v-text-field>
        </v-col>

        <v-col cols="12" sm="6" md="3">
          <v-text-field
            label="Filled"
            filled
          ></v-text-field>
        </v-col>

        <v-col cols="12" sm="6" md="3">
          <v-text-field
            label="Filled"
            placeholder="Placeholder"
            filled
          ></v-text-field>
        </v-col>

        <v-col cols="12" sm="6" md="3">
          <v-text-field
            label="Outlined"
            outlined
          ></v-text-field>
        </v-col>

        <v-col cols="12" sm="6" md="3">
          <v-text-field
            label="Outlined"
            placeholder="Placeholder"
            outlined
          ></v-text-field>
        </v-col>

      </v-row>
    </v-container>
  </v-form>
</template>

<script>
// @ is an alias to /src


export default {
  data(){
    return{
      projects: [
        { title: 'Design a new website', person: 'The Net Ninja', due: '1st Jan 2019', status: 'ongoing', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
        { title: 'Code up the homepage', person: 'Chun Li', due: '10th Jan 2019', status: 'complete', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
        { title: 'Design video thumbnails', person: 'Ryu', due: '20th Dec 2018', status: 'complete', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
        { title: 'Create a community forum', person: 'Gouken', due: '20th Oct 2018', status: 'overdue', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
      ]
    }
  },
  methods:{
    sortBy(prop){
      this.projects.sort((a,b)=>a[prop]<b[prop]?-1:1)
    }
  }
}
</script>
<style scoped>
  .project.complete{
    border-left:4px solid #3cd1c2;
  }
  .project.ongoing{
    border-left:4px solid orange;
  }
  .project.overdue{
    border-left:4px solid tomato;
  }
  .v-chip.ongoing {
    background: #fed330 !important;
  }
  .v-chip.complete {
    background: #26de81 !important;
  }
  .v-chip.overdue {
    background: #fc5c65 !important;
  }
</style>