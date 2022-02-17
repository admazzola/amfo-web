<template>

<div class="relative bg-transparent w-full">



   <div class="   " style=" z-index:5"  >



         <LogoContainer />
            
        <div class="md:grid md:grid-flow-col " >
                
                <div class=" md:col-span-1 "  >
                 <SideNav /> 
                 </div>


                 <div class=" md:col-span-5">
       

                      <div class="mt-2 ml-2 overflow-y-auto" style="min-height:600px;">
                        <slot>   </slot>
                      </div>

                </div>

       </div>

   </div>



   <div class=" absolute   overflow-hidden " style="left:0;top:0 ;z-index:-22; width:100%" >


  <Decorations />
   

  <ColorBars />

  </div>

   
 <div style="height:140px;" class="block py-24">  </div>
 

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
  mounted() {

     const el = this.$refs.contentPanel;

    if (el) {
      // Use el.scrollIntoView() to instantly scroll to the element
      el.scrollIntoView({behavior: 'smooth'});
    }
 
  },
  methods: {

  }
}
</script>
