import Image from "next/image";

function Personalities() {
    return (
        <section>
            <h1>Get to know the real me</h1>
            <h2>Personality tests are fun</h2>
            <p>Here are some of the results from the personality tests I've taken:</p>
            <Image src="/images/personalities/enegram.jpg" alt="My enegram personality test results" width={500} height={300} />
            <Image src="/images/personalities/myersbriggs.png" alt="My myers briggs personality test results" width={500} height={300} />
            <Image src="/images/personalities/enegram.jpg" alt="Personalities" width={500} height={300} />
            <Image src="/images/personalities/cake.jpg" alt="My cake personality test results" width={500} height={300} />
            <Image src="/images/personalities/space.png" alt="My space personality test results" width={500} height={300} />
        </section>
    )
}

export default Personalities;