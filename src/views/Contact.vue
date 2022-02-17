<template>

 <PrimaryLayout>
   
          <div ref="contentPanel" class=" border-4 border-black p-2  " style="  background-color:#eeeeeeaa">
         <div class="h-full p-4 text-xl font-bold grid md:grid-cols-2 " style="background: #aad3d9ee;   ">
           
           <div class="inline-block  " >

                <div class="p-2 border-4 border-white inline-block  margin-center" style="width:49%"  >
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
       

    }
  },
  mounted() {
 
  },
  methods: {

  }
}
</script>
