import DocumentBase from "../../components/DocumentBase";
import DocumentContent from "../../components/DocumentContent";
import DocumentMetadata from "../../components/DocumentMetadata";
import Navigation from "../../components/Navigation";

export default function LaggyClips() {
    return(
        <DocumentBase>
            <Navigation selected={2} />
            <DocumentContent>
                <h1>🤔 My Medal Application Is Returning Laggy/Stuttering Clips.</h1>
                <DocumentMetadata readTime={'1 Min'} updated={'Sept 05, 2024'} />
                <h2 id="quick-solutions">TLDR: Quick Solutions</h2>
                <ul>
                <li><b>Solution #1: Performance overload!</b> Start by changing your Medal encoder to the opposite of what it is now. So if it's GPU, set it to CPU. See if the lag/stutter is gone. If it is, it's likely you're either running the game on too high of quality, and need to reduce it a bit. Or, reduce the recording quality once you've put your encoder back to the one causing the trouble for you.</li>
                <li><b>Solution #2: Update those drivers!</b> If using GPU encoding, there is a high chance that your GPU is simply outdated on it's drivers, and is due that beefy update it needs to run those latest titles you are so craving to clip. Head over to your relevant software and check for any updates that could be in need of download. For CPU, it'll tend to do it for itself, so this shouldn't be too much of an issue. Still worth a shout, if you don't know how to update CPU drivers have a Google for it. There are plenty of tutorials out there!</li>
                <li><b>Solution #3: What's HAGS?</b> Chances are, you've never really heard of this abbreviation, or if you have, might not know what this is. This is, Windows Hardware-Accelerated GPU Scheduling. This may well be causing great issues for Medal, as it may re-direct some of that fire-power towards your game, instead of using it for Medal like it should be. Simply try turning this off in your Windows Settings, under <b>System - Display - Graphics - Change Default Graphics Settings - Hardware-Accelerated GPU Scheduling</b>.</li>
                </ul>
                
                <h2>The Frustration</h2>
                <p>Imagine, you're in a hyper-competitive game that's about to rank you up to that new level. Sniping your way through the team, you're onto an Ace (team wipe). You can feel it in your body, the adrenaline is shaking your body, making it harder and harder to concentrate on the fundamentals you know you need to win. You see that enemy, scope in and BOOM! You've just aced the last round of the game to win, rank up, and hit a new high. You press that F8 button, you've just clipped that legendary round. The feeling is great, you're over the moon with what you've just done. That glistening medal shows on your screen, you've finally got to the next level of your gaming career. You go to view the best clip you've probably ever clipped, and... it's... laggy. It looks absolutely horrid. Suddenly, that excitement, feeling of pure joy, has gone. All in the space of 10 seconds.</p>
                <p>We've established the frustration. It's not nice to know that you've just pulled off one of the best plays you've ever made just to find out your own clipping software can't even clip it. Before we hop into directly fixing the problem, it's nice to know the background to why this is happening.</p>
                <h2>The Problem Itself</h2>
                <p>Computers are simple, yet complicated bits of equipment. One day fixing a problem can be as simple as flipping a switch on and/or off, the other you can be head-first in the devices settings for 3 hours trying to figure out why your sound won't come out of your headphones. It gets the best of us, and it's simply one of those things that needs time.</p>
                <p>With Medal, laggy/stuttery clips are generally caused by the component you are using to encode with. So, if you're using either CPU or GPU, it'll likely be the component itself that's creating the issue at hand. No, I am not saying you need to throw your graphics card in the bin... I can sense your thoughts right now thinking "What, my 4080 isn't good enough to clip games? I'm done...". It's likely an issue with <span style={{fontStyle: "italic"}}>how</span> you're using said computer component. Lucky for you, I've compiled a neat little problem-solving treat below this to save you some time and effort in problem-solving such issues yourself.</p>
                <h2 id="solution-one">Solution #1: In-Game Settings Calibration</h2>
                <p>If you're like myself, you've probably looked at your fancy graphics card and thought to yourself "Eh, it's a big enough card, it runs at 60fps consistently and is smooth. It's doing fine!", you may well have been wrong this whole time. Sometimes we think our components are working without issues, when secretly, they can be screaming for mercy. This is the case for quite a few of the instances I get when helping people in Medal's support channels. Let's get deeper and understand what is happening.</p>
                <p>So it's likely that you're seeing your games running at a smooth FPS, probably on a higher quality setting, too. If that's the case, I'd like to invite you to a little practical test to see how your computer components are really holding up with that quality pressure. Let's navigate to our <b>Windows Task Manager</b>, and head towards the <b>Performance Tab</b>. Once you are there, press on the <b>GPU or CPU setting (depending on what encoder you're using, likely your using GPU though)</b>, and go boot up the game you're attempting to clip, and gaining laggy clips from. Play that game in the quality you desire, and see how your GPU/CPU performs, <b>while you have Medal open</b>. Is the graph quite high? Does it look like it's trying it's best to uphold that quality you're wanting while having Medal record it at the same time?</p>
                <p>If that was the case for you, and you're seeing your GPU/CPU screaming for mercy as you play your games and attempt to record them simultaneously, I'm going to give you what I claim to be the <b>most bulletproof method to fixing the issue for this specific solution.</b>Let's hop right into the method below.</p>
                <h3>Method To Fix Solution #1:</h3>
                <ul>
                    <li style={{listStyleType: 'decimal'}}><b>Change the encoder.</b> The first step I take to battling this issue in the application itself is changing the encoder. This'll tell you if it's the current encoding component causing the issue. Go to <b>Settings - Clips & Recording - General Recording / Quality - Video Encoder</b>. For better practice, you can also downgrade the quality to either Standard or Potato to see better results.</li>    
                    <li style={{listStyleType: 'decimal'}}><b>Make a test clip.</b> Once you've set that up, go into game, and attempt to clip the game and see if the clips come up laggy now. If you were using GPU encoding and switched to CPU, you might want to downgrade your in-game quality settings.</li>
                    <li style={{listStyleType: 'decimal'}}><b>Make that quality better!</b> Once done, if the clips come up smooth again, simply change back to the original encoder you was using, then slowly bring the quality of both your game and Medal application until it's at the best you're going to get for your component, without over-stressing it.</li>
                    <li style={{listStyleType: 'decimal'}}><b>Optional: Check component load.</b> At the same time as rising up that game/medal quality, keep an eye on how your component you're using for encoding is doing in terms of the stats we talked about previously, from Task Manager. You'll see that everytime you alter a graphics setting some sort of variation will occur, whether that be that it goes up in % of usage, or down. Play around with it until it's a sweet spot, and try to leave a bit of room for the component to have a bit of wiggle room.</li>
                </ul>
                <h2 id="solution-two">Solution #2: Updating Component Drivers</h2>
                <p>Here we are again, drivers. This is something that you've likely heard before, and let's be real, it gets a little annoying whenever someone replies to your question with "have you updated your drivers?". Well, as annoying as that question is, it can truly be the cause of the problem. Imagine you have a vehicle (not elecric, as awesome as they are). The vehicles's engine will need to be topped up with engine oil when it gets too low, otherwise, you'll start to experience problems with how the vehicle functions. It's the same with your computer components, funny enough. Eventually, something new will be released into the industry, whether that's a new shader, or simply something that your graphics card isn't capable with processing effectively yet, and a graphics card update will need to be applied to the component in order for it to process it in such way.</p>
                <p>With that being said, it's best to at least attempt this solution. Now, <b>I can't give you a concrete solution to this, </b>other then to tell you to search up what the component is and search for it's drivers. <b>So for example, if your using an Nvidia Graphics Card, search for "Nvidia ... graphics card drivers"</b>. This will give you a page where you can download the official drivers for that selected component. If you're not used to doing this, you can always go and watch a quick YouTube video on how to do this, spare those 10 minutes out of your day to learn this and you'll feel more confident with using your computer then you thought you'd be.</p>


                <footer>
                    <p>Built with ❤️ by nzxx</p>
                    <p>This page is not affiliated with any of the topics I cover</p>
                </footer>
            </DocumentContent>
        </DocumentBase>
    )
}