export enum ThingStatus {
    READY,  // this thing is working!
    DAMAGED, // this thing needs repairs to work again, can't loan now
    LOST, // this thing was lost
    DESTROYED ,// this thing was FUBAR
    CURRENTLY_BORROWED,
    RESERVED //item is held for someone
}