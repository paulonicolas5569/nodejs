/**
 * conversor de velocidade (milhas - km/h)
 */

const read = require('readline-sync')

let milhas,km 

console.clear ()
console.log("---------------------------------------------------------")
console.log("#    # # #      #    #   ##    ####        #    # #    # ")
console.log("##  ## # #      #    #  #  #  #            #   #  ##  ## ")
console.log("# ## # # #      ###### #    #  ####  ##### ####   # ## # ")
console.log("#    # # #      #    # ######      #       #  #   #    # ")
console.log("#    # # #      #    # #    # #    #       #   #  #    # ")
console.log("#    # # ###### #    # #    #  ####        #    # #    # ")
console.log("---------------------------------------------------------")

//entrada 
milhas = Number(read.question("digite a velocidade em milhas:").replace(",","."))

//processamento 
km = milhas * 1.60934

//saida
console.log(`velocidade: ${km} km/h`)

