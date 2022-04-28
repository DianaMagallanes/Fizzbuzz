const Reader = require("../../lib/utils/Reader");
const ExplorerService = require("../../lib/services/ExplorerService");

describe("Test for ExplorerService",()=> {

    test("1. Obtain explorers on node mission",()=>{
        const explorers = Reader.readJsonFile("./explorers.json");
        const explorersFilter = ExplorerService.filterByMission(explorers, "node");
        expect(explorersFilter.length).toBe(10);        
    });
    

    test("2. Obtain qty of explorers on node mission",()=>{
        const explorers = Reader.readJsonFile("./explorers.json");
        const qtyExplorers = ExplorerService.getAmountOfExplorersByMission(explorers, "node");
        expect(qtyExplorers).toBe(10);        
    });

    test("3. Obtain username of explorers on node mission",()=>{
        const explorers = Reader.readJsonFile("./explorers.json");
        const nameExplorers = ExplorerService.getExplorersUsernamesByMission(explorers, "node");
        expect(nameExplorers[0]).toBe("ajolonauta1");        
    });
   
});


