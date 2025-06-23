import Image from 'next/image';

export default function AboutSection() {
  return (
    <section id="about" className="bg-transparent py-8">
      <div className="container mx-auto px-8 flex flex-col md:flex-row items-center gap-16">
        {/* Left Column */}
        <div className="flex-1">
          <p className="text-gray-400 uppercase tracking-widest mb-2">About</p>
          <p className="text-white uppercase font-semibold text-lg mb-4">Code Meets Creativity</p>
          <h2
            className="text-white font-anton text-[clamp(2rem,6vw,4rem)] leading-tight uppercase font-extrabold mb-6"
            style={{ fontFamily: 'Anton, sans-serif' }}
          >
            A Developer Who <br />
            Designs With Vision.
          </h2>
          <p className="text-gray-400 max-w-md">
            I'm a developer who thrives on coding and problem-solving. There's nothing more
            fulfilling than creating software—it's where I feel truly alive. So, what made me take
            on the unexpected challenge of learning design? We've all heard it before—developers
            can't design. Or can they? And more importantly, should they?
          </p>
        </div>

        {/* Right Column */}
        <div className="flex-1 flex flex-col gap-12 items-center">
          <Image
            src="/about-image1.png"
            alt={'code-image'}
            width={400}
            height={100}
            objectFit="contain"
          />
          <Image
            src="/about-image2.png"
            alt={'code-image'}
            width={400}
            height={100}
            objectFit="contain"
          />
        </div>
      </div>
    </section>
  );
}
