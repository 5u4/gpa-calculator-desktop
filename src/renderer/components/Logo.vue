<template>
    <img :src="logo" style="maxWidth: 200px;">
</template>

<script>
import LogoBlockDarkStandard from '../assets/Logo/logo-block-dark-standard.png';
import LogoBlockDark from '../assets/Logo/logo-block-dark.png';
import LogoBlockLightStandard from '../assets/Logo/logo-block-light-standard.png';
import LogoBlockLight from '../assets/Logo/logo-block-light.png';
import LogoInlineDarkStandard from '../assets/Logo/logo-inline-dark-standard.png';
import LogoInlineDark from '../assets/Logo/logo-inline-dark.png';
import LogoInlineLightStandard from '../assets/Logo/logo-inline-light-standard.png';
import LogoInlineLight from '../assets/Logo/logo-inline-light.png';

export default {
    props: {
        block: Boolean, /* {true: block, false: inline} */
        dark: Boolean, /* {true: dark, false: light} */
        standard: Boolean /* {true: standard, false: extended} */
    },
    data() {
        return {
            LogoBlockDarkStandard,
            LogoBlockDark,
            LogoBlockLightStandard,
            LogoBlockLight,
            LogoInlineDarkStandard,
            LogoInlineDark,
            LogoInlineLightStandard,
            LogoInlineLight
        }
    },
    computed: {
        logo() {
            /* Block */
            if (this.block) {
                /* Dark */
                if (this.dark) {
                    /* Standard */
                    if (this.standard) {
                        return this.LogoBlockDarkStandard;
                    }
                    
                    /* Extended */
                    else {
                        return this.LogoBlockDark;
                    }
                }

                /* Light */
                else {
                    /* Standard */
                    if (this.standard) {
                        return this.LogoBlockLightStandard;
                    }
                    
                    /* Extended */
                    else {
                        return this.LogoBlockLight;
                    }
                }
            } 
            
            /* Inline */
            else {
                /* Dark */
                if (this.dark) {
                    /* Standard */
                    if (this.standard) {
                        return this.LogoInlineDarkStandard;
                    }
                    
                    /* Extended */
                    else {
                        return this.LogoInlineDark;
                    }
                }

                /* Light */
                else {
                    /* Standard */
                    if (this.standard) {
                        return this.LogoInlineLightStandard;
                    }
                    
                    /* Extended */
                    else {
                        return this.LogoInlineLight;
                    }
                }
            }
        }
    }
}
</script>

<style>

</style>
