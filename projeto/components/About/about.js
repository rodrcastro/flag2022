import Image from 'next/image';
import vercel from '/public/images/vercel.png';

function About() {
  return (
    <div className='hero min-h-screen bg-primary mb-2'>
      <div className='hero-content flex-col'>
        {/* <Image src={vercel} placeholder='blur' alt='hello world' /> */}
        <div>
          <h1 className='text-5xl font-bold text-center text-base-100'>
            About me
          </h1>
          <p className='py-6 text-neutral'>
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
