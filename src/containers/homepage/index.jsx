import { Link } from 'react-router-dom'
import { HeaderWithImage } from '../../components/header_with_image/index'
import { TextBox } from '../../components/textbox/index'
import Nine from '../../assets/fox/nine.png'

export function Home() {
    return (
        <>
            <HeaderWithImage src={Nine} border={false}>
                <h1 className='text-4xl text-green-600 font-bold'>Ha, ha, ha! You've been hacked by Nine...</h1>
                <h2 className='text-2xl text-green-200'>Oops, I ain't Nine lol, so... <span className='text-green-300'>you've been hacked by gusta the sewer fox</span></h2>
            </HeaderWithImage>
            <TextBox>
                <p>Hi, I'm Gusta, aka Gustanator or Sewer Fox (formerly CreamBR).<br />I'm a Brazilian player and developer of SuperTuxKart (making code mainly for mobile version), and also a <span className='line-through'>furry</span>.<br />I decided to create this site to talk about my events and my servers, and also I added a <Link className='text-green-200 hover:text-green-300' to="/links">link list</Link> for the players access various places with STK content.</p> <br />
                <p>This site is a EVEN BIGGER evolution of my old site (now it's a <a className='text-green-200 hover:text-green-300' href="https://gustanator.github.io/stk-yapira/">public archive</a>), using React + TailwindCSS and some vanilla JS code (used in the ranking tables, that is semi-automatic: I just need to update a <a className='text-green-200 hover:text-green-300' href="https://github.com/SewerFox/sewer-hideout/blob/sewer-site/results-assets/enduro/results/enduro-1st.csv">.csv file</a>). </p> <br />
                <p><i>I hope you like my site :3</i></p>
            </TextBox>
        </>
    )
}