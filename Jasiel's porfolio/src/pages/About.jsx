export default function About() {
const aboutme= [
  {
    information: 'Welcome, My name is Jasiel Soto Gonzalez, I am a student at Arizona State University. In this program I have had the opporutiny to delevop full stack applications. I have enjoyed the back end process mostly. I am currently in Phoenix, Az! ',
    langugesused: 'Express.Js, SQL, NoSQL, Node.Js, JavaScript, ReactJs, MERN, State,',
    hoobies: 'Hiking, Running, Working out ',
    image: "",


  },
]
  return (
    <div className="container mb-5">
      <h1 className="mt-4">About Me</h1>
      {aboutme.map(me => (
      <div className="card d-inline-flex p-2 container">
        <img className="rounded-circle portrait-pic" 
        src="/assets/image/profilepic.png" alt="" />
        <p className="card-tex">{me.information}</p>
        <p  className= "card-tex" > I have been exposed to {me.langugesused} and have been able to build full stack applications!</p>
        <p className="card-tex"> In my free time i enjoy {me.hoobies}!</p>

      </div>

      ))}
     
    </div>
  );
}
