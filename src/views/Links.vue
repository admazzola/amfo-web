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


    <div ref="aboutPanel"  class=" md:absolute ghostly   " style="left: 250px;top: 250px ;z-index:10" id="borders">

       <div class="border-4 border-black p-2 p " style="width:90%;  ">
         <div class="h-full p-4 text-xl font-bold grid md:grid-cols-2 " style="background: #aad3d9ee;   ">
           
           <div class="inline-block  " >

                <div class="p-2 border-4 border-white inline-block  margin-center" style="width:70%"  >
                   <img src="@/assets/images/Mackenzie.jpg" class=" " width="100%" /> 
                </div>


            </div>

           <div class="inline-block p-4 border-4 border-white">
           Mackenzie O'Hara is an artist with high-functioning autism.  She graduated from art college with honors.  She currently works full time but in her free time she falls into her creative space where retro-tropical design comes to light!  Please stop in and take a peek at what fabulous things you might find.  Welcome to my art world! Please invite friends! 

           
          </div>


        </div>

         <div class="h-full p-4 text-xl font-bold  " style="background: #aad3d9ee;   ">
          
          <div class="grid md:grid-cols-2 p-4 ">
            <div></div> 

            <div class="border-4 border-white p-4 ">
                  <div class=" " >
                    I specialize in: 
                  </div>

                  <ul class="p-4">
                    <li> Abstract </li>
                    <li> Acrylics </li>
                    <li> Watercolor </li>
                    <li> Furniture Painting </li>
                    <li> Canvases </li>
                    <li> Mixed Media (Fabric, etc.) </li>
                    <li> Digital Art </li>
                    <li> Autodesk Sketchbook </li>          
                  
                  </ul>
              </div> 

              </div> 

        </div>


       </div>

        

   </div>

   

  <Footer/>

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
       

    }
  },
  mounted() {

     const el = this.$refs.aboutPanel;

    if (el) {
      // Use el.scrollIntoView() to instantly scroll to the element
      el.scrollIntoView({behavior: 'smooth'});
    }
 
  },
  methods: {

  }
}
</script>
