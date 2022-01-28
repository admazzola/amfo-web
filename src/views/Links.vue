<template>

<div class="relative bg-white w-full overflow-hidden">



   <div class=" absolute ghostly " style="left:0;top:0 ;z-index:5" id="borders">

       <div class="border-4 border-black p-2 pl-16 " style="width:60rem; height:240px">
             
       </div>

         <div class="border-r-4 border-b-4 border-black p-2 pl-16 " style="width:14rem; height:600px">
             
       </div>

   </div>





  
  <Decorations />
  
 
  <LogoContainer />
 
    
  <SideNav />


  <ColorBars />


    <div ref="panel"  class=" md:absolute   " style="left: 250px;top: 250px ;z-index:10; width:75%" id="borders">

       <div class="border-4 border-black p-2 p " style="width:90%;  ">
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

        

   </div>


   <div style="height:300px;" class="block py-24">  </div>
 
  <Footer />


</div>
</template>


<script>
 


import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';

import Decorations from './components/Decorations.vue'
import LogoContainer from './components/LogoContainer.vue'
import SideNav from './components/SideNav.vue'
import ColorBars from './components/ColorBars.vue'

export default {
  name: 'Home',
  props: [],
  components: {Navbar,Decorations,LogoContainer,SideNav,ColorBars,Footer},
  data() {
    return {
      linksArray: [
        {title:'Redbubble Store', url: 'https://www.redbubble.com/people/amforium'},
        {title:'Facebook Page', url: 'https://www.facebook.com/mackenzie.ohara.5'}


      ]

    }
  },
  mounted() {

     const el = this.$refs.panel;

    if (el) {
      // Use el.scrollIntoView() to instantly scroll to the element
      el.scrollIntoView({behavior: 'smooth'});
    }
 
  },
  methods: {

  }
}
</script>
