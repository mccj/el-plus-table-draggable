<template>
    <codemirror v-model="code" :style="{ height: '300px' }" :extensions="extensions" />
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { Codemirror } from 'vue-codemirror'
import { json } from '@codemirror/lang-json'

export default defineComponent({
    components: {
        Codemirror
    },
    props: {
        value: {
            type: Array,
            required: true
        }
    },
    setup(props) {
        const code = computed(() => JSON.stringify(props.value, null, 4))
        const extensions = [json()]

        return {
            code,
            extensions
        }
    }
})
</script>
<style scoped>
</style>