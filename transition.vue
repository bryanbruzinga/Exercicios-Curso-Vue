<template>
<div>
    <button @click="ativo= !ativo">Ativar</button>
    <transition name="fade">
        <h1 v-if="ativo">Serviços</h1>
    </transition>
    <transition appear name="fade">
         <h2>Atividades</h2>
    </transition>
</div>
</template>

<script>
export default {
    data() {
        return {
            ativo: false
        }
    }
}
</script>

<style>
.fade-enter-active,
.fade-leave-active {
    transition: opacity .8s;
}
.fade-enter,
.fade-leave-to {
    opacity: 0;
}

</style>