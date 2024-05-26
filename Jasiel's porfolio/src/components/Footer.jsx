export default function Footer() {
const footertabs = [
  {
    github: 'https://github.com/JasielAaron?tab=repositories',
    linkedin: 'https://www.linkedin.com/in/jasiel-soto-gonzalez-3a51762b7/',

  }
]

  return (
    <footer className="sticky-bottom">
    
    {footertabs.map(footerlink => (
      <div className="container">
        <div className="footer-content">
        <a className="card-link btn btn-outline-secondary" target="_blank" rel="noreferrer" href= {footerlink.github} >GitHub </a>
      <a className="card-link btn btn-outline-secondary" target="_blank" rel="noreferrer" href= {footerlink.linkedin}>LinkedIn</a>

        </div>
      
      </div>

      
    ))}
       
    
    </footer>
  );
}
