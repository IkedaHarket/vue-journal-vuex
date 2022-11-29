<template>
  <div 
    class="entry-container mb-3 pointer p-2" 
    @click="$router.push({name:'daybook-entry', params:{id:1}})"
  >
    <div class="entry-title d-flex">
        <span class="text-success fs-5 fw-bold">15</span>
        <span class="mx-1 fs-5">Julio</span>
        <span class="mx-2 fw-light fs-4">2021</span>
    </div>
    <div class="entry-description fw-light fs-6">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati recusandae quibusdam architecto ab, sit tenetur non quia similique blanditiis vitae dolor eius eos earum consectetur illo nam aspernatur minima provident!
    </div>
  </div>
</template>

<script>
export default {
    name:'DaybookEntryNavbarComponent'
}
</script>

<style lang="scss" scoped>
.entry-container{
    border-bottom: 1px solid #2c3e50;
    transition: .2s all ease-in;
    &:hover{
        background-color: lighten($color: grey, $amount: 45);
        transition: .2s all ease-in-out;
    }
}
.entry-description{
    font-size: 11px;
}
</style>