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
  created() {
 
  },
  methods: {

  }
}
</script>
