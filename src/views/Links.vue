 
 

<template>

 <PrimaryLayout>
   
        
         <div  ref="contentPanel" class="border-4 border-black p-2  " style="">
         <div class="h-full p-4 text-xl font-bold   " style="background: #aad3d9ee;   ">
           
           <div class="block text-3xl font-bold  text-pink-500 p-4" style=" text-shadow: 2px 2px #ddddddcc;" >

              Links to my collections

            </div>

           <div class=" ">


              <div v-for="row in linksArray" :key="row.title" class=" my-2"> 
                
                <a :href="row.url" target="_blank" class="inline-block hover:bg-pink-200 p-4 border-4 border-white " > {{row.title}} </a> 
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
       
  linksArray: [
        {title:'Redbubble Store', url: 'https://www.redbubble.com/people/amforium'},
        {title:'Facebook Page', url: 'https://www.facebook.com/mackenzie.ohara.5'}


      ]

    }
  },
  mounted() {
 
  },
  methods: {

  }
}
</script>



