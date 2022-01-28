<template>

<div class="relative bg-white w-full overflow-hidden">



   <div class=" absolute ghostly " style="left:0;top:0 ;z-index:5" id="borders">

       <div class="border-4 border-black p-2 pl-16 " style="width:60rem; height:240px">
             
       </div>

         <div class="border-r-4 border-b-4 border-black p-2 pl-16 " style="width:14rem; height:600px">
             
       </div>

   </div>




   <div class="   ghostly " style="left:0;top:0; z-index:0;overflow:hidden; " id="decorations">


    <div class="absolute bg-tree-1" style="overflow-hidden;left:6rem; top:14rem; width:600px; height:900px" > 
            
        </div>


    <div class="absolute bg-tree-2" style="overflow-hidden;left:26rem; top:8rem; width:700px; height:900px" > 
            
        </div>


 
       <img src="@/assets/images/amfo_weeds.png" width="200px" class="absolute" style="left:18rem;top:180px" > 

      
      
       <div class="absolute bg-shapes" style="overflow-hidden;left:6rem; width:800px; height:900px" > 
            
        </div>

   </div>



   <div class=" " style=" ">

       <div class=" pt-4 pl-24 " style="width:60rem; height:240px">
            <img src="@/assets/images/amfo_logo.png" width="140px" /> 
       </div>

   </div>


    
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
 
    <div class="section w-full border-t-4   border-black px-0 lg:px-1" style="background: #e5d6d9;min-height:80px;">

     </div>

      <div class="section  w-full border-t-4   border-black px-0 lg:px-1" style="background: #b3a8ca;min-height:80px;">

     </div>

      <div class="section  w-full border-t-4    border-black px-0 lg:px-1" style="background: #aad3d9;min-height:80px;">

     </div>


    <div class="section bg-white border-t-4 border-black px-0 lg:px-1" style="min-height:400px">

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
 

import sidenavConfig from './config/SideNav.js'


import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';

export default {
  name: 'Home',
  props: [],
  components: {Navbar,Footer},
  data() {
    return {
      sidenavConfig: sidenavConfig

    }
  },
  created() {

    this.sidenavConfig = sidenavConfig

    console.log('sidenavConfig.rows',sidenavConfig)

    
  },
  methods: {

  }
}
</script>
