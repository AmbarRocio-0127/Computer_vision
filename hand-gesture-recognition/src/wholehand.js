// Import dependencies
import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose'; 

// Define Gesture Description
export const wholehand_ = new GestureDescription('Whole_Hand_Showed'); 

// Thumb 
wholehand_.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0)
wholehand_.addDirection(Finger.Thumb, FingerDirection.HorizontalLeft, 0.25);
wholehand_.addDirection(Finger.Thumb, FingerDirection.HorizontalRight, 0.25);

// Indice
wholehand_.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0)
wholehand_.addDirection(Finger.Index, FingerDirection.VerticalUp, 0.25);

// meñique
wholehand_.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1.0)
wholehand_.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 0.25);

//mayor
wholehand_.addCurl(Finger.Middle, FingerCurl.NoCurl, 1.0)
wholehand_.addDirection(Finger.Middle, FingerDirection.VerticalUp, 0.25);

//anular
wholehand_.addCurl(Finger.Ring, FingerCurl.NoCurl, 1.0)
wholehand_.addDirection(Finger.Ring, FingerDirection.VerticalUp, 0.25);

/*
for(let finger of [Finger.Middle, Finger.Ring]){
    loveYouGesture.addCurl(finger, FingerCurl.FullCurl, .75); 
    loveYouGesture.addDirection(finger, FingerDirection.VerticalDown, 0.25);
}*/
