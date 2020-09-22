const api = require('kahoot.js-updated')

//test
//const api = require('../t/node_modules/kahoot.js-updated')



async function sleep(m) {
    return new Promise(resolve => setTimeout(resolve, m));
}


var i;
var id = 0;
var errnum = 0;
class KahootSpam {
    static async spam(pin, name, amout){
        if(!pin) throw new TypeError('Please Give Me A Pin')
        if(!name) throw new TypeError('Please Give Me A Name')
        if(!amout) throw new TypeError('Please Give Me An Amout')
        console.log('Ok Joining...')
        try{
            for(i = 0; i < amout; i++){

                id = id + 1
                var bot = new api;
                bot.join(pin, `${name}${id}`)
                bot.on("joined", () => {
                    console.log(`Bot ${name}${id} has successfully joined game ${pin}`)
                })
            }
        } catch (err){
            errnum = errnum + 1
            throw new TypeError(`Um Something Went Wrong With This Bot\n err num ${errnum}`)
        }
        //console.log(`Joined`)
    }

    static async spamWithAnswers(pin, name, amout, slee){
        if(!pin) throw new TypeError('Please Give Me A Pin')
        if(!name) throw new TypeError('Please Give Me A Name')
        if(!amout) throw new TypeError('Please Give Me An Amout')
        if(!slee) throw new TypeError('Please Give Me "true" or "false" if you want to sleep or not')
        console.log('Ok Joining...')
        try{
            for(i = 0; i < amout; i++){

                id = id + 1
                var bot = new api;
                bot.join(pin, `${name}${id}`)
                bot.on("joined", () => {
                    console.log(`Bot ${name}${id} has successfully joined game ${pin}`)
                })
                bot.on("QuestionStart", question => {
                    if(slee == true){
                        let time = Math.floor(Math.random() * 10000);
                        setTimeout(() => {
                            let answer = Math.floor(Math.random() * 4);
                            question.answer(answer);
                        }, time);
                    }else if(slee == false){
                        let answer = Math.floor(Math.random() * 4);
                        question.answer(answer);
                    }else{
                        throw new TypeError ('You need to have "true" or "false" for if you want to sleep')
                    }
                });
            }
        } catch(err){
            errnum = errnum + 1
            throw new TypeError (`Um Something Went Wrong With This Bot\n err num ${errnum}`)
        }
        //console.log(`Joined`)
    }

    

}



module.exports = KahootSpam;