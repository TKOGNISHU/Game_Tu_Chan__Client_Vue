<template>
    <section data-board-body-show="roll" class="mt-1 mb-5 pt-1 text-start border-top border-1 row gx-2 d-none" style="border-color: #05ffe0 !important; width: 900px;">
        <!-- Left -->
        <ListCharacter :immortalities="immortalities"/>
    </section>
</template>

<script>
import { ListCharacter } from '@/components/index.js'
import { useAppStore } from '@/stores/useAppStore'
export default {
    components: { ListCharacter, },
    props: {
        immortalities: { type: Array, default: [] },
    },
    setup() {
        const appStore = useAppStore()
        return {
            getShowCharacter: appStore.getShowCharacter,
        }
    },
}
</script>
