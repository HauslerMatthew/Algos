// Two robots are dropped from an airplane and land on a single line (with discrete positions) using a parachute which is left at the landing point. The robots are an unknown distance apart, and one has landed directly east of the other.

// The robots are now to be programmed such that they meet each other. They can be instructed to move left or right to a neighboring position and to check whether a parachute is present at the current location. If the other robot is met both robots stop there and live happily ever after.

// The parachute check might conditionally execute any number of instructions and any block of instructions may be repeated unconditionally. Write down a program that both robots can follow simultaneously and which guarantees that they meet.

// --------chute count-------------------------1-----------1--------------------------------------------//
// ------------------------------------------robot 1-----robot 2----------------------------------------//
// --------------------------------------------para---------para----------------------------------------//

// solution 1:

// bots move left (repeat this pattern indefintely)

// after each unit of movement, stop and run a chute check - continue this for as long as chute check = false.  

// When chute check = true, this bot continues left (no checks, no stoppages until it catches other bot).





