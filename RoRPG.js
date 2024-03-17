// https://twitter.com/haus_dad/status/1769141289541415055
// The Rite of Replication (https://gatherer.wizards.com/Pages/Card/Details.aspx?multiverseid=519163) 
// and Precursor Golem (https://gatherer.wizards.com/Pages/Card/Details.aspx?multiverseid=587285)
// Challenge: You control 1 Precursor Golem and 2 Golem Tokens (Vanilla tokens that would be generated by a Precursor Golem entering the battlefield)
// You cast Rite of Replication (kicked) targeting a Precursor Golem, 
// find the total number of Golem subtypes in play after the nth consecutive Rite of Replication (kicked) has been cast and (original and copies) are fully resolved

// the MTG rules in action.
// Precursor Golem is going to make the single Rite that we cast get copied targeting all other golems.  All copies of Rite will also be "kicked".
// When NEW Precursor Golems get created (they will be token copies but that is irrelevant), they will each trigger to create 2 new golem tokens.
// Multiple Precursor Golems ARE NOT REDUNDANT, each triggers as you cast Rite
// Remember that every Precursor Golem has the exact same trigger based on how its worded, so the Precursor Golem that is TARGETED by the CAST Rite of Replication
// will never get copies of Rite pointed at it, just the initial cast Rite that makes 5 token copies of it. 
// i.e. if you control 6 Precursor Golems, then cast Rite, you will get 6 triggers telling you to Copy rite on ALL other golems.

function ritesResolved(n, iPG = 1, iG = 2, t = 0, fiG = 0, fnPG = 0, riPG = 0, fiPG = 0) {
    var RoR = 5 //(multiplier per RoR copy)
    //var iPG = precursor golems (PG) in play
    //var iG = golem tokens (G) in play
    //var i = ipG; //iterations of Rite of Replication (RoR) being copied on all other golems in play (based on precursor golems triggering)
    //var fiG = the number of G created from ROR copies targeting initial G in play
    //var fnPG = the number of G created from new PG entering the battlefield (PG * 2)
    //var riPG = the number of PG remaining after initial target (iPG - 1)
    //var fiPG = the number of PG created from ROR copies targeting riPG

    if (n < 0) {
        return "Error: you cannot cast a spell a negative number of times";
    } else if (n == 0) {
        return (`${iPG + iG} golem creatures are in play`);
    } else if (n > 0) {
        t = 6
        if (iPG == 1) {
            iPG = t;
            fiG = iG * RoR;
            fnPG = (iPG - 1) * 2;
            iG += fiG + fnPG;
        }
        if (n > 1) {
            for (let i = 0; i < n-1; i++) {
                riPG = iPG - 1;
                fiPG = riPG * RoR * iPG;
                fiG = iG * RoR * iPG;
                iPG = t + riPG + fiPG;
                fnPG = (fiPG + 5) * 2;
                iG += fiG + fnPG;
                //console.log(`riPG = ${riPG},  \nfiPG = ${fiPG}, \nfiG = ${fiG}, \niPG = ${iPG}, \nfnPG = ${fnPG}, \niG = ${iG}`);
            }
        }
        return ritesResolved(n = 0, iPG, iG);
    }
}


console.log(ritesResolved(0)); //3 golem creatures are in play
console.log(ritesResolved(1)); //28 golem creatures are in play
console.log(ritesResolved(2)); //1153 golem creatures are in play
console.log(ritesResolved(3)); //1186128 golem creatures are in play
console.log(ritesResolved(4)); //931172461453 golem creatures are in play
