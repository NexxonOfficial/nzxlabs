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
                <DocumentMetadata readTime={'1 Min'} updated={'Sept 04, 2024'} />
                <h2>The Frustration</h2>
                <p>Imagine, you're in a hyper-competitive game that's about to rank you up to that new level. Sniping your way through the team, you're onto an Ace (team wipe). You can feel it in your body, the adrenaline is shaking your body, making it harder and harder to concentrate on the fundamentals you know you need to win. You see that enemy, scope in and BOOM! You've just aced the last round of the game to win, rank up, and hit a new high. You press that F8 button, you've just clipped that legendary round. The feeling is great, you're over the moon with what you've just done. That glistening medal shows on your screen, you've finally got to the next level of your gaming career. You go to view the best clip you've probably ever clipped, and... it's... laggy. It looks absolutely horrid. Suddenly, that excitement, feeling of pure joy, has gone. All in the space of 10 seconds.</p>
            </DocumentContent>
        </DocumentBase>
    )
}