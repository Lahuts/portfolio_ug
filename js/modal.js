document.addEventListener("DOMContentLoaded",e =>{
    let bd = document.querySelector(".border");
    document.querySelector(".card-l").addEventListener("click",()=>{
        
        bd.classList += " bd-dev";
        bd.innerHTML = `
        <p href="" class="exit"></p>
        <h4>Développement</h4>
            <h5>Mes languages de programmation</h5>
            <ul class="comp-dis">
                <li>
                    <img src="asset/js.png" alt="JavaScript">
                    <h6>JAVASCRIPT</h6>
                </li>
                <li>
                    <img src="asset/java.png" alt="Java">
                    <h6>JAVA</h6>
                </li>
                <li>
                    <img src="asset/html.png" alt="html">
                    <h6>HTML</h6>
                </li>
                <li>
                    <img src="asset/css.png" alt="css">
                    <h6>CSS</h6>
                </li>
                <li>
                    <img src="asset/C++.png" alt="c++">
                    <h6>C++</h6>
                </li>
                <li>
                    <img src="asset/sql.png" alt="sql">
                    <h6>SQL</h6>
                </li>
                <li>
                    <img src="asset/python.png" alt="python">
                    <h6>PYTHON</h6>
                </li>
                <li>
                    <img src="asset/c.svg" alt="c#">
                    <h6>C#</h6>
                </li>
            </ul>`;
            let exit = document.querySelector(".exit");
        exit.addEventListener("click",()=>{
            bd.classList.remove("bd-dev");
            bd.innerHTML = "";
            exit.style.display = "none";
        });            
    });
    document.querySelector(".card-ur").addEventListener("click",()=>{
        
        bd.classList += " bd-dev";
        bd.innerHTML =`
        <p href="" class="exit"></p>
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
            bd.classList.remove("bd-dev");
            bd.innerHTML = "";
            exit.style.display = "none";
        });
    });
    
})