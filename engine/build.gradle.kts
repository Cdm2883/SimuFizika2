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

fun buildDir(path: String) = layout.buildDirectory.file(path).get().asFile
infix fun String.copyTo(dest: String) = buildDir(this)
    .copyRecursively(buildDir(dest), overwrite = true)
tasks.named("jsBrowserDevelopmentLibraryDistribution") {
    doLast { "dist/js/developmentLibrary" copyTo "dist/js/library" }
}
tasks.named("jsBrowserProductionLibraryDistribution") {
    doLast { "dist/js/productionLibrary" copyTo "dist/js/library" }
}
