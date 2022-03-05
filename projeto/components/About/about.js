import Image from 'next/image';

function About() {
  return (
    <div className='hero min-h-screen bg-base-200 mb-2'>
      <div className='hero-content flex-col'>
        <Image
          src={'/images/vercel.png'}
          width={100}
          height={100}
          alt='hello world'
        />
        <div>
          <h1 className='text-5xl font-bold text-center'>About me</h1>
          <p className='py-6'>
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
