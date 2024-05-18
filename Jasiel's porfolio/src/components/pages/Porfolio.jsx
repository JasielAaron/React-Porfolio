export default function Porfolio() {
  const projects = [
    {
      title: 'Project 1',
      description: '',
      languges: '',
      repo: '',
      deployed: '',
      image: '',
    },
    {
      title: 'Project 2',
      description: '',
      languges: '',
      repo: '',
      deployed: '',
      image: '',
    },
    {
      title: 'Project 3',
      description: '',
      languges: '',
      repo: '',
      deployed: '',
      image: '',
    },
    {
      title: 'Project 4',
      description: '',
      languges: '',
      repo: '',
      deployed: '',
      image: '',
    },
    {
      title: 'Project 4',
      description: '',
      languges: '',
      repo: '',
      deployed: '',
      image: '',
    },
    {
      title: 'Project 6',
      description: '',
      languges: '',
      repo: '',
      deployed: '',
      image: '',
    },

  ]
  return (
    <div>
      <h1>Porfolio Page</h1>
      {projects.map(project => (
        <div class="card">
        <img src="..." class="card-img-top" alt="..."/>
        <div class="card-body">
          <h2 className="card-header">{project.title}</h2>
          <p class="card-text">{project.description}</p>
        </div>
      </div>
      
      ))}
    </div>
  );
}
