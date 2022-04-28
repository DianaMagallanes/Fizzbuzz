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
   
});