<template>
 

 <PrimaryLayout>


         <div ref="contentPanel" class=" border-4 border-black p-2  " style="  background-color:#eeeeeeaa">
     
         <div class="h-full p-4 text-xl font-bold  " style="background: #aad3d9ee;   ">
          
          <div class="grid md:grid-cols-1 p-4 ">
            

            <div class="border-4 border-white p-4  "  >
                  <div class=" " >
                    My works of art: 
                  </div>

                  <div class="p-4">
                    <div v-for="item in artworksArray" v-bind:key="item.name" style=" "  class="p-4  "> 
                    
                      <img v-bind:src="getImgUrl(item.src)" class=""/>
                    </div>     
                  
                  </div>
              </div> 

              </div> 

        </div>

       </div>

   
    </PrimaryLayout>


</template>


<script>
 



import PrimaryLayout from './PrimaryLayout.vue';
 


export default {
  name: 'Home',
  props: [],
 components: {PrimaryLayout},
  data() {
    return {
       artworksArray: [
          {name: 'strawberry', src: 'images/artworks/strawberry.jpg'},
          {name: 'eggplant', src: 'images/artworks/eggplant.jpg'},
          {name: 'table1', src: 'images/artworks/table1.jpg'},
          {name: 'table2', src: 'images/artworks/table2.jpg'},
          {name: 'table3', src: 'images/artworks/table3.jpg'}

       ]

    }
  },
  mounted() {

     
 
  },
  methods: {

     getImgUrl(pic) {
        return require('../assets/'+pic)
      }



  }
}
</script>
