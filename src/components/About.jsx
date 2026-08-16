export default function About() {
  return (
    <section id="about" className="scroll-mt-(--nav-h)">
      <div className="mx-auto w-full max-w-6xl px-4 py-12">
        <h2 className="font-mono text-2xl font-semibold text-text mb-6">About</h2>
        
        <div className="flex flex-col md:flex-row items-stretch gap-8"> 
          
         
          <div className="w-full md:w-1/3 shrink-0">
            <img 
              src="/portrait.jpeg" 
              alt="A portrait picture of Alex Fu" 
              className="w-full h-full object-cover rounded-xl shadow-md"
            />
          </div>
           
          <div className="flex-1 flex flex-col justify-center gap-4 leading-relaxed text-text">
            <p>
              <strong><em><span className="text-accent">Hi, I'm Alex.</span></em></strong> I love exploring our world, whether through Physics, reading articles, or simply sight-seeing during morning jogs. 
            </p>
            <p>
              In my free time, I like to play violin and piano, mess around on the computer, and generally learn new games and skills (such as Poker!).
            </p>
            <p>
              <strong><span className="text-accent">Please</span></strong> don't hesitate to reach out through any of my contact methods!
            </p>
          </div>
          
        </div>
      </div>
    </section>
  );
}