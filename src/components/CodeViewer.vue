<template>
    <codemirror v-model="value" :style="{ height: '300px' }" :extensions="extensions" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Codemirror } from 'vue-codemirror'
import { html } from '@codemirror/lang-html'

export default defineComponent({
    components: {
        Codemirror
    },
    props: {
        value: {
            type: String,
            required: true
        }
    },
    setup(props) {
        const extensions = [html()]
        return {
            extensions
        }
    }
})
</script>
<style scoped>
</style>