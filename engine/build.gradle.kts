plugins {
    alias(libs.plugins.kotlin.multiplatform)
}

kotlin {
    js {
        moduleName = "simu-fizika2-engine"
        browser()
        useEsModules()
        generateTypeScriptDefinitions()
        binaries.library()
    }
}
