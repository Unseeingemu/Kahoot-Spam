const api = require('kahoot.js-updated')

/*
async function sleep(m) {
    return new Promise(resolve => setTimeout(resolve, m));
}
*/

var i;
var id = 0;
class KahootSpam {
    static async spam(pin, name, amout){
        for(i = 0; i < amout; i++){

            id = id + 1
            var bot = new api;
            bot.join(pin, `${name}${id}`)
            bot.on("joined", () => {
                console.log(`Bot ${name}${id} has successfully joined game ${pin}`)
            })
        }
        
    }

    

    
}



module.exports = KahootSpam;