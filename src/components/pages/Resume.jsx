const skillsstyle = {
  margin: "20px"
}

export default function Resume() {
  return (
    <div style={skillsstyle}>
      <h1>Resume</h1>
      <h4><a href="https://drive.google.com/file/d/1weWgiDG53lFc1APFjC1xHj1LRHHSjYJW/view?usp=sharing" target="_blank">
        Download My Resume
      </a></h4>
      <br></br>
      <p>
       <h3>Skills:</h3>
        <ul>
          <li>Technical Skills</li>
          <ul>
            <li>
              JavaScript ES6+, CSS3, HTML5, SQL, NoSQL, GitHub, MongoDB, MySQL,
              Express, React, Node, Handlebars, jQuery, Bootstrap
              <li>
                Photoshop, Microsoft Office, Google Suite, Qlab, ETC Element &
                ETC Express lighting boards, Vectorworks
              </li>
            </li>
          </ul>
          <li>
            Detail-oriented team-player who is passionate about databases,
            javascript, and creating user-friendly solutions.
            <li>
              Strengths in explaining concepts to the non-technically-minded,
              building efficient systems, and breaking down big ideas into
              achievable goals.
            </li>
          </li>
        </ul>
      </p>
    </div>
  );
}
