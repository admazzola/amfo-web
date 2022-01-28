<template>

    <div class="section bg-white border-black w-full" style=" ">


      <div >
        <a v-for="row of sidenavConfig.rows" :key="row.title"
         class="  border-l-4   border-black p-4 pr-16 block "
         :class="{
           'border-b-4':(row.index != 3 ), 
           'bg-pastel-orange':(row.index == 0),
           'bg-pastel-pink':(row.index == 1 ),
           'bg-pastel-green':(row.index == 2 ),
           'bg-pastel-blue':(row.index == 3 )

         }"
         
          style="width:14rem"
          :href="row.url"
           >
        
            {{row.title}}  

        </a>
     </div>
      


    </div>
   
</template>


<script>



import sidenavConfig from '../config/SideNav.js'

export default {
  name: 'SideNav',
  props: [],
  data() {
    return {
       sidenavConfig: sidenavConfig
    }
  },
  created(){
      this.sidenavConfig = sidenavConfig

  },
  methods: {

  }
}
</script>
