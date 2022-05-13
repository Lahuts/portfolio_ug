document.addEventListener("DOMContentLoaded",e =>{

    


// template Dev - Graph
    let bd = document.querySelector(".border");
    document.querySelector(".card-l").addEventListener("click",()=>{
        
        bd.classList += " db-dev";
        bd.innerHTML = `
        <p class="exit"></p>
        <h4>Développement</h4>
        <h5>Ma Stack de langages : </h5>
        <ul class="dis-dev">
          <li>
            <figure>
              <img src="asset/js.png" alt="JavaScript" />
              <figcaption><h6>JavaScript</h6></figcaption>
              <ul>
                <li>Web</li>
                <li>Site</li>
              </ul>
            </figure>
          </li>
          <li>
            <figure>
              <img src="asset/c.svg" alt="C#" />
              <figcaption><h6>C#</h6></figcaption>
              <ul>
                <li>application</li>
                <li>Script</li>
              </ul>
            </figure>
          </li>
          <li>
            <figure>
              <img src="asset/java.png" alt="Java" />
              <figcaption><h6>Java</h6></figcaption>
              <ul>
                <li>Application</li>
                <li>Classe</li>
              </ul>
            </figure>
          </li>
          <li>
            <figure>
              <img src="asset/python.png" alt="Python" />
              <figcaption><h6>Python</h6></figcaption>
              <ul>
                <li>Application</li>
                <li>Classe</li>
              </ul>
            </figure>
          </li>
          <li>
            <figure>
              <img src="asset/css.png" alt="css" />
              <figcaption><h6>CSS</h6></figcaption>
              <ul>
                <li>Web</li>
                <li>Site</li>
              </ul>
            </figure>
          </li>
          <li>
            <figure>
              <img src="asset/sql.png" alt="Sql" />
              <figcaption><h6>Sql</h6></figcaption>
              <ul>
                <li>BDD</li>
                <li>serveur</li>
              </ul>
            </figure>
          </li>
          <li>
            <figure>
              <img src="asset/html.png" alt="Html" />
              <figcaption><h6>HTML</h6></figcaption>
              <ul>
                <li>Web</li>
                <li>Site</li>
              </ul>
            </figure>
          </li>
          <li>
            <figure>
              <img src="asset/C++.png" alt="c++" />
              <figcaption><h6>C++</h6></figcaption>
              <ul>
                <li>application</li>
                <li>Algo</li>
              </ul>
            </figure>
          </li>
        </ul>`;
        let exit = document.querySelector(".exit");
        exit.classList += " exit-active";
        exit.addEventListener("click",()=>{
            exit.classList.remove("exit-active");
            bd.classList.remove("db-dev");
            bd.innerHTML = `<p class="exit"></p>`;
        });    
    });
    document.querySelector(".card-ur").addEventListener("click",()=>{
        bd.classList += " db-dev";
        bd.innerHTML =`
        <p class="exit"></p>
        <h4>Design</h4>
        <h5>Mes logiciels de graphisme :</h5>
        <ul class="dis-graph">
            <li>
                <img src="asset/Adobe_Photoshop_CC.svg" alt="Photoshop">
                <h6> Photoshop</h6>
            </li>
            <li>
                <img src="asset/illu.svg" alt="Illustrator">
                <h6> Illustrator</h6>
            </li>
            <li>
                <img src="asset/indesign.svg" alt="Indesign">
                <h6> Indesign</h6>
            </li>
            <li>
                <img src="asset/figma.png" alt="Figma">
                <h6> figma</h6>
            </li>
        </ul>`;

        let exit = document.querySelector(".exit");
        exit.classList += " exit-active";
        exit.addEventListener("click",()=>{
            exit.classList.remove("exit-active");
            bd.classList.remove("db-dev");
            bd.innerHTML = `<p class="exit"></p>`;
            exit.classList.remove("exit-active");
        });
        // Controle Formulaire
        
    });

    // Email sending
    let send = document.getElementById("send").addEventListener("click",()=>{
      let name = document.getElementById("name").value;
      let mail = document.getElementById("email").value;
      let msg = document.getElementById("message").value;
      if(name != "" && mail != "" && msg != ""){
        //send
        Email.send({
          SecureToken : "1b3362c8-ced5-4722-9196-e34b9eadb3fc",
          To : 'alexis.huet.m@gmail.com',
          From : "lahuts.ptf@gmail.com",
          Subject : "MESSAGE PORTFOLIO - "+name+" - "+mail,
          Body :msg
      }).then(
        message => alert(message)
      );
      }else{
        alert("Veuillez remplir les champs")
      }
    })
    
    
    

   
})