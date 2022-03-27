<template>
    <div>
        <div class="cv">
            cv
        </div>
        
        <div class="footer">
            <Footer/>
        </div>
    </div>
</template>

<script>
import Footer from '@/components/Footer.vue'

export default ({
    name: 'cv-component',
    components:{ Footer },
    setup() {
        
    },
})
</script>

<style scoped>
    .footer{
        position:fixed;
        left:0px;
        bottom:0px;
        height:115px;
        width:100%;
    }
</style>