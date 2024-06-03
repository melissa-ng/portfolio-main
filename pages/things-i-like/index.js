import Image from 'next/image';
import classes from './likes.module.css'

function Likes() {
    return (
        <section>
            <h1>The Things I Like</h1>
            <ul>
                <li>Scratchers
                    <p>A guilty pleasure</p>
                </li>
                <li>Eating
                    <p>I'm a big foodie!</p>
                    <a href='https://www.instagram.com/melussymunchin?igsh=MWVnNmZpcDI4dms4cw%3D%3D&utm_source=qr' target="_blank">Check out my food page!</a>
                </li>
                <li>Legos
                    <p>Who doesn't?!</p>
                </li>
            </ul>
            <a href="https://www.buymeacoffee.com/melissang" target="_blank"><Image src="/images/hypnosis.gif" alt="Hypnosis" unoptimized width={300} height={300} />Click here and buy me a scratcher, meal, or a lego set</a>
        </section>
    );
}

export default Likes;