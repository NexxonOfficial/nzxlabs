import DocumentBase from "../../components/DocumentBase";
import DocumentContent from "../../components/DocumentContent";
import Layout from "../../components/Layout";
import Navigation from "../../components/Navigation";

export default function WhatToExpect() {
    return(
        <DocumentBase>
            <Navigation selected={1} />
            <DocumentContent>
                <h1>👋 Welcome To Nzxx's Research Page.</h1>
                <p>Here, you can find anything in relation to what I have been researching. I attempt to document everything to the best of my ability, and may well link you to one of my pages to save time and energy for myself, considering I've already documented it here.</p>
            
                <p>Overtime, this will be built on and improved upon. UI/Layout of the whole website could change in an instant, so don't panic if things look a little different. I will make sure you are given the run-around if I change something dramatically. For now, enjoy the site and see if you can learn anything new from my discoveries! Some things on here may well be common knowledge, but for my own understanding, I may well write it down for the archive!</p>

                <p>If you have any questions in relation to any topics/information that I cover on this site, please feel free to get in contact with me. I primarily use Discord for communication, so feel free to add me @itsnzx.</p>
                <footer>
                    <p>Built with ❤️ by nzxx</p>
                    <p>This page is not affiliated with any of the topics I cover</p>
                </footer>
            </DocumentContent>
        </DocumentBase>
    )
}