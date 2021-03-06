
module.exports={
	debug:false,
	fileExtension:'svg',
	killTimeout:3000,
	maxBlockCount:1,
	inputDirectory:process.env.HOME+'/samples/samples-svg/',
	resultDirectory:process.env.HOME+'/results/',
	target:'rsvg-convert',
	commandLine:process.env.HOME+'/projects/librsvg/.libs/rsvg-convert @@ -o /dev/null',
	tempDirectory:'/run/shm/tmp/'
}

var testCaseGenerators=require('./testCaseGeneratorFunctions.js')
module.exports.generatorFunction=[testCaseGenerators.radamsa,testCaseGenerators.surku]
