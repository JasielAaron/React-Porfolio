export default function Porfolio() {
  const projects = [
    {
      title: 'Super Hero Blog',
      description: 'This website will allow you to create a blog describing your favorite super hero! You will be able to log in/out and read other users stories!',
      languges: 'bcrypt, connect-session-squelize,dotenv express express-handlebars escpress session handlebars mysql2 sequlize',
      repo: 'https://github.com/JasielAaron/techblog',
      deployed: 'https://super-hero-blogs-124bdcd70059.herokuapp.com/',
      image: '/assets/image/blog.png',
    },
    {
      title: 'Weather App',
      description: 'This website will let you view the weather in the city you choose to search for. You can enter the city you would like to see and it will tell you the details of the next 5 days as well.',
      languges: 'JavaScript, HTML and CSS',
      repo: 'https://github.com/JasielAaron/weather-app?tab=readme-ov-file',
      deployed: 'https://jasielaaron.github.io/weather-app/',
      image: '/assets/image/weather.png',
    },
    {
      title: 'Just Another Text App',
      description: 'Allows you to create notes with or without internet',
      languges: 'Express, if-env, Babel',
      repo: 'https://github.com/JasielAaron/Just-Another-Text-Editor',
      deployed: 'https://notetakerjs-2dafce32e3f5.herokuapp.com/',
      image: '/assets/image/justanother.png',
    },
    {
      title: 'Travel Guide',
      description: 'This website allows you to search any city in the world. It provides details of the specific country you search. It will also allow you to see the weather for the Capital of that city',
      languges: 'JavaScript',
      repo: 'https://github.com/JasielAaron/travel-guide?tab=readme-ov-file',
      deployed: 'https://jasielaaron.github.io/travel-guide/',
      image: '/assets/image/travel.png',
    },
    {
      title: 'Daily Planner',
      description: 'This website will allow you to plan out your days with out missing anything!',
      languges: 'JavaScript',
      repo: 'https://github.com/JasielAaron/daily-planer?tab=readme-ov-file',
      deployed: 'https://jasielaaron.github.io/daily-planer/',
      image: '/assets/image/workday.png',
    },
    {
      title: 'Social Network',
      description: 'This project is a data base for a social network platform that allows you to add update delete users and thoughts. It also allows you to add or delete friends and reaction',
      languges: 'Express, Mongoose and nodemon',
      repo: 'https://github.com/JasielAaron/socialnetwork',
      deployed: 'https://www.youtube.com/watch?v=R_E0u9Uh9O0',
      image: '/assets/image/socialnetwork.png',
    },

  ]
  return (
    <div className="container mb-5">
      <h1 className="mt-4">Porfolio</h1>
      <div className="row">

      
      {projects.map(project => (
        <div className="card col-sm-12 col-md-6 mb-3">
        <img className="card-img-top" 
        src={project.image}
        alt={project.image}/>
        <div className="card-body">
          <h2 className="card-title">{project.title}</h2>
          <p className="card-text">{project.description}</p>
          <p className="card-text">{project.languges}</p>
          <a className="card-link btn btn-outline-secondary" href= {project.repo} target="_blank" rel="noreferrer">GitHub Repo</a>
          <a className="card-link btn btn-outline-secondary " href={project.deployed} target="_blank" rel="noreferrer">Deployed Application</a>
          
        </div>
      </div>
      
      ))}
      </div>
    </div>
  );
}
