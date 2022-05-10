document.addEventListener("DOMContentLoaded",e =>{

    



    let bd = document.querySelector(".border");
    document.querySelector(".card-l").addEventListener("click",()=>{
        
        bd.classList += " db-dev";
        bd.innerHTML = `
        <p class="exit"></p>
        <h4>Développement</h4>
        <ul class="dis-dev">
          <li>
            <figure>
              <img src="asset/js.png" alt="JavaScript" />
              <figcaption><h5>JavaScript</h5></figcaption>
              <ul>
                <li>Web</li>
                <li>Site</li>
              </ul>
            </figure>
          </li>
          <li>
            <figure>
              <img src="asset/c.svg" alt="C#" />
              <figcaption><h5>C#</h5></figcaption>
              <ul>
                <li>application</li>
                <li>Script</li>
              </ul>
            </figure>
          </li>
          <li>
            <figure>
              <img src="asset/java.png" alt="Java" />
              <figcaption><h5>Java</h5></figcaption>
              <ul>
                <li>Application</li>
                <li>Classe</li>
              </ul>
            </figure>
          </li>
          <li>
            <figure>
              <img src="asset/python.png" alt="Python" />
              <figcaption><h5>Python</h5></figcaption>
              <ul>
                <li>Application</li>
                <li>Classe</li>
              </ul>
            </figure>
          </li>
          <li>
            <figure>
              <img src="asset/js.png" alt="JavaScript" />
              <figcaption><h5>JavaScript</h5></figcaption>
              <ul>
                <li>Web</li>
                <li>Site</li>
              </ul>
            </figure>
          </li>
        </ul>`;
        let exit = document.querySelector(".exit");
        exit.addEventListener("click",()=>{
            bd.classList.remove("db-dev");
            bd.innerHTML = `<p class="exit"></p>`;
            exit.classList.remove("exit-active");
        });    
    });
    document.querySelector(".card-ur").addEventListener("click",()=>{
        bd.classList += " db-dev";
        bd.innerHTML =`
        <p class="exit"></p>
        <h4>Design</h4>
        <h5>Mes logiciels de graphisme </h5>
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
        exit.addEventListener("click",()=>{
            bd.classList.remove("db-dev");
            bd.innerHTML = `<p class="exit"></p>`;
            exit.classList.remove("exit-active");
        });
        
    });

    
    
})