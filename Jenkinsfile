@Library('libpipelines@master') _

hose {
    EMAIL = 'front'
    MODULE = 'egeo'
    DEVTIMEOUT = 30
    RELEASETIMEOUT = 30
    REPOSITORY = 'github.com/egeo-elements'
    LANG = 'typescript'
    FOSS = true

    DEV = { config ->

        doCompile(config)
        doUT(config)
        doPackage(config)

        parallel(QC: {
            doStaticAnalysis(config)
            doCoverallsAnalysis(config)
        }, DEPLOY: {
            doDeploy(config)
        }, failFast: config.FAILFAST)
    }
}
