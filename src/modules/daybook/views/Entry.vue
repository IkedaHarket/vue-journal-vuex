<template>
  <div class="position-relative">
    <div class="entry-title d-flex justify-content-between p-2">
      <div class="d-block w-100">
        <span class="text-success fs-3 fw-bold">14</span>
        <span class="mx-1 fs-3">Julio</span>
        <span class="mx-2 fs-4 fw-light">2021, jueves</span>
      </div>
    </div>
    <div class="entry-title d-flex justify-content-end p-2 position-absolute top-0 end-0">
        <div>
            <button class="btn btn-danger mx-2">
              Borrar
              <i class="fa fa-trash-alt"></i>
            </button>
            <button class="btn btn-primary">
              Subir foto
              <i class="fa fa-upload"></i>
            </button>
        </div>
    </div>
  </div>
  <hr>
  <div class="d-flex flex-column px-3 h75">
      <textarea placeholder="¿Qué sucedió hoy?"></textarea>
  </div>
  <Fab 
    icon="fa-save"
  />
  <img 
    src="https://wallpapercrafter.com/th800/132232-swamp-landscape-mushroom-glowing-grass-moss-rain-wind-overcast-blue-water.jpg" 
    alt="entry-picture"
    class="img-thumbnail"
    >
</template>

<script>
import { defineAsyncComponent } from 'vue';
export default {
    name:'DaybookEntryView',
    components:{
      Fab: defineAsyncComponent(()=>
        import('@/modules/daybook/components/Fab.vue')
      )
    }
}
</script>

<style lang="scss" scoped>
textarea{
  font-style: 20px;
  border: none;
  height: 100%;
  &:focus{
    outline: none;
  }
}
img{
  width:200px;
  position: fixed;
  bottom:100px;
  right: 20px;
  box-shadow: 0 5px 10px rgba($color:#000, $alpha:0.2);
}
</style>