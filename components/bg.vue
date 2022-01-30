<template>
    <div id="bg">
        <svg width="100%" height="100%">
            <!-- Definition for the SVG -->
            <defs>
                <pattern id="bg-pattern-1" patternUnits="userSpaceOnUse" width="16" height="16">
                    <circle
                        cx="0"
                        cy="8"
                        r="3"
                        style="stroke: var(--pattern-channel-1, currentcolor)"
                        fill="none"
                    />
                    <circle
                        cx="16"
                        cy="8"
                        r="3"
                        style="stroke: var(--pattern-channel-1, currentcolor)"
                        fill="none"
                    />
                    <circle
                        cx="8"
                        cy="0"
                        r="3"
                        style="stroke: var(--pattern-channel-1, currentcolor)"
                        fill="none"
                    />
                    <circle
                        cx="8"
                        cy="16"
                        r="3"
                        style="stroke: var(--pattern-channel-1, currentcolor)"
                        fill="none"
                    />
                </pattern>
            </defs>
            <rect x="0" y="0" width="100%" height="100%" fill="url(#bg-pattern-1)" />
        </svg>
    </div>
</template>
<style>
:root {
    --pattern-channel-1: #f75c0396;
}
#bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: var(--bgDark);
    z-index: -3;
}
</style>