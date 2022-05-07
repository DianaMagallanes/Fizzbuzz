const Reader = require("../../lib/utils/Reader");
const ExplorerService = require("../../lib/services/ExplorerService");
const FizzbuzzService = require("../../lib/services/FizzbuzzService");

class ExplorerController{
    
    static getExplorersByMission(mission){
        
        const explorers = Reader.readJsonFile("explorers.json");
        return ExplorerService.filterByMission(explorers, mission);
    }

    static getExplorersUsernamesByMission(mission){
        
        const explorers = Reader.readJsonFile("explorers.json");
        return ExplorerService.getExplorersUsernamesByMission(explorers, mission);
    }

    static getExplorersAmountByMission(mission){

        const explorers = Reader.readJsonFile("explorers.json");
        return ExplorerService.getAmountOfExplorersByMission(explorers, mission);
    }    

    static getFizzbuzzStatus(number){

        return FizzbuzzService.applyValidationInNumber(number);
    }   

    static getOnTextBot(msg, match){
        
        const chatId = msg.chat.id;
        const resp = match[1]; 
        return [chatId, resp];
    }

    static getonValidationBot(msg){        
    
        const chatId = msg.chat.id;
        const numberToApplyFb = parseInt(msg.text);   

        if(!isNaN(numberToApplyFb)){
            const fizzbuzzTrick = this.getFizzbuzzStatus(numberToApplyFb);
            const responseBot = `Tu número es: ${numberToApplyFb}. Validación: ${fizzbuzzTrick}`;
            return [chatId, responseBot];
        } 
        else {
        
            const text = msg.text;
            if(text ==="node" || text ==="java")
            {
                const explorersList = this.getExplorersUsernamesByMission(text);
                const responseBot = `Los siguientes explorers estan en la mission de ${text}: ${explorersList}`;
                return [chatId, responseBot];

            }
            else
            {
                return [chatId, "Envía un número/texto válido"];
            }
        }

    }

}
module.exports = ExplorerController;