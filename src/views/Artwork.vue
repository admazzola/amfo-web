<template>

<div class="relative">

    
    <div class="section bg-white border-b-4 border-black px-0 lg:px-1">

     </div>



 
    <div class="section  border-b-4 border-black px-0 lg:px-1" style="background: #aad3d9">

     </div>




   <div class="hidden section bg-primary border-b-4 border-black px-0 lg:px-1">
 
     


     <div class="container margin-center bg-gray-100" style="">
       <div class="hero-text w-row relative" style="min-height:300px;" >

         

       </div>
       <div class="pb-2">

         <div class=" grid grid-cols-2 px-8 md:px-24">

            

        </div>

       </div>



        <div class="pb-16">

            <div class=" grid grid-flow-col px-8 md:px-24">

              <div>
                
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

export default {
  name: 'Home',
  props: [],
  components: {Navbar,Footer},
  data() {
    return {

    }
  },
  methods: {

  }
}
</script>
