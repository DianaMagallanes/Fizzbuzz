const ExplorerController = require("../../lib/controllers/ExplorerController");

describe("Test for ExplorerController",()=> {

    test("1. Filter list of explorers by mission",()=>{
        const explorers = ExplorerController.getExplorersByMission("node");
        expect(explorers.length).toBe(10);        
    });

    test("2. Filter list of explorers, just username",()=>{
        const explorers = ExplorerController.getExplorersUsernamesByMission("node");
        expect(explorers[0]).toBe("ajolonauta1");        
    });    

    test("3. Filter list of explorers, amount",()=>{
        const explorers = ExplorerController.getExplorersAmountByMission("node");
        expect(explorers).toBe(10);        
    });

    test("4. Fizzbuzz status",()=>{
        const result = ExplorerController.getFizzbuzzStatus(15);
        expect(result).toBe("FIZZBUZZ");        
    });    

    test("5. TelegramBot ON",()=>{
        const result = ExplorerController.getOnTextBot( {
            "message_id": 40,
            "id": 1234567890,
            "is_bot": false,
            "first_name": "Diana",
            "username": "Diana0",
            "language_code": "es",
            "chat": {
                "id": 1234567890,
                "first_name": "Diana",
                "type": "private"
            },
            "date": 1651895384,
            "text": "15"
        }, [ "A", "B"] );
        expect(result[0]).toBe(1234567890);        
    }); 

  
    test("6. TelegramBot status number",()=>{
        const result = ExplorerController.getonValidationBot(
            {
                "message_id": 40,
                "id": 1234567890,
                "is_bot": false,
                "first_name": "Diana",
                "username": "Diana0",
                "language_code": "es",
                "chat": {
                    "id": 1234567890,
                    "first_name": "Diana",
                    "type": "private"
                },
                "date": 1651895384,
                "text": "15"
            }
        );
        expect(result[1]).toBe("Tu número es: 15. Validación: FIZZBUZZ");        
    });

    test("7. TelegramBot status mission",()=>{
        const result = ExplorerController.getonValidationBot(
            {
                "message_id": 40,
                "id": 1234567890,
                "is_bot": false,
                "first_name": "Diana",
                "username": "Diana0",
                "language_code": "es",
                "chat": {
                    "id": 1700414804,
                    "first_name": "Diana",
                    "type": "private"
                },
                "date": 1234567890,
                "text": "java"
            }
        );
        expect(result[1]).toBe("Los siguientes explorers estan en la mission de java: ajolonauta6,ajolonauta7,ajolonauta8,ajolonauta9,ajolonauta10");        
    });
   
});