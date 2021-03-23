document.getElementById("header").innerHTML =
  '<nav id="header-nav" class="unselectable"> <div id="header-nav-left"> <ul> <li class="header-nav-item"> <a href="index.html" ><img src="../images/home-icon.svg" alt="home" class="icon"/></a ><a href="index.html">Home</a> </li><li class="header-nav-item" id="header-seemore" onclick="more();rotateArrow();" > <a>Vedi di più </a> <img id="img-menu-arrow" src="../images/seemore-arrow.svg" alt="v" class="icon"/> </li><li class="header-nav-item"> <a href="energia-eolica.html" ><img src="../images/wind-icon.svg" alt="Pala eolica" class="icon"/></a ><a href="energia-eolica.html">Eolica</a> </li><li class="header-nav-item"> <a href="energia-idroelettrica.html" ><img src="../images/water-icon.svg" alt="Goccia acqua" class="icon"/></a ><a href="energia-idroelettrica.html">Idroelettrica</a> </li><li class="header-nav-item"> <a href="energia-solare.html" ><img src="../images/sun-icon.svg" alt="Sole" class="icon"/></a ><a href="energia-solare.html">Solare</a> </li><li class="header-nav-item"> <a href="energia-geotermica.html" ><img src="../images/volcano-icon.svg" alt="Vulcano" class="icon"/></a ><a href="energia-geotermica.html">Geotermica</a> </li><li class="header-nav-item"> <a href="energia-nucleare.html" ><img src="../images/nuclear-icon.svg" class="icon" alt="Simbolo del nucleare"/></a ><a href="energia-nucleare.html">Nucleare</a> </li><li class="header-nav-item"> <a href="combustione-fossile.html" ><img src="../images/oil-icon.svg" alt="Trivella" class="icon"/></a ><a href="combustione-fossile.html">Combustione fossile</a> </li></ul> </div><div id="header-nav-right"> <div id="theme-changer"> <label class="toggle" for="Toggle"> <input class="toggle-input" type="checkbox" id="Toggle" onchange="themeChange();"/> <span class="toggle-fill"> <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" style="fill: #4ade80" > <path d="M10 15.586L6.707 12.293 5.293 13.707 10 18.414 19.707 8.707 18.293 7.293z" ></path> </svg> <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" style="fill: #f87171" > <path d="M16.192 6.344L11.949 10.586 7.707 6.344 6.293 7.758 10.535 12 6.293 16.242 7.707 17.656 11.949 13.414 16.192 17.656 17.606 16.242 13.364 12 17.606 7.758z" ></path> </svg> </span> </label> </div></div></nav> <div id="header-menu"> <ul> <li class="header-nav-item"> <a href="energia-eolica.html" ><img src="../images/wind-icon.svg" alt="Pala eolica" class="icon"/></a ><a href="energia-eolica.html">Eolica</a> <ul class="header-menu-link"> <li> <a href="energia-eolica.html#definizione">Definizione</a> </li><li> <a href="energia-eolica.html#storia">Storia</a> </li><li> <a href="energia-eolica.html#parchi">I parchi eolici</a> </li><li> <a href="energia-eolica.html#domestia">Uso domestico</a> </li><li> <a href="energia-eolica.html#ves">Vantaggi e Svantaggi</a> </li></ul> </li><li class="header-nav-item"> <a href="energia-idroelettrica.html" ><img src="../images/water-icon.svg" alt="Goccia acqua" class="icon"/></a ><a href="energia-idroelettrica.html">Idroelettrica</a> <ul class="header-menu-link"> <li> <a href="energia-idroelettrica.html#definizione">Definizione</a> </li><li> <a href="energia-idroelettrica.html#storia">Storia</a> </li><li> <a href="energia-idroelettrica.html#centrali" >Centrali idroelettriche</a > </li><li> <a href="energia-idroelettrica.html#ves" >Vantaggi e Svantaggi</a > </li></ul> </li><li class="header-nav-item"> <a href="energia-solare.html" ><img src="../images/sun-icon.svg" alt="Sole" class="icon"/></a ><a href="energia-solare.html">Solare</a> <ul class="header-menu-link"> <li> <a href="energia-solare.html#descrizione">Definizione</a> </li><li> <a href="energia-solare.html#storia">Storia</a> </li><li> <a href="energia-solare.html#tipologie">Tecnologie</a> </li><li> <a href="energia-solare.html#utilizzi">Utilizzi del solare</a> </li><li> <a href="energia-solare.html#ves">Vantaggi e Svantaggi</a> </li></ul> </li><li class="header-nav-item"> <a href="energia-geotermica.html" ><img src="../images/volcano-icon.svg" alt="Vulcano" class="icon"/></a ><a href="energia-geotermica.html">Geotermica</a> <br/> <ul class="header-menu-link"> <li> <a href="energia-geotermica.html#definizione">Definizione</a> </li><li> <a href="energia-geotermica.html#storia">Storia</a> </li><li> <a href="energia-geotermica.html#principio" >Principio geotermico</a > </li><li> <a href="energia-geotermica.html#tipologie">Tipologie</a> </li><li> <a href="energia-geotermica.html#centrali" >Centrali geotermiche</a > </li><li> <a href="energia-geotermica.html#ves">Vantaggi e Svantaggi</a> </li></ul> </li><li class="header-nav-item"> <a href="energia-nucleare.html" ><img src="../images/nuclear-icon.svg" class="icon" alt="Simbolo del nucleare"/></a ><a href="energia-nucleare.html">Nucleare</a> <ul class="header-menu-link"> <li> <a href="energia-nucleare.html#definizione">Definizione</a> </li><li> <a href="energia-nucleare.html#storia">Storia</a> </li><li> <a href="energia-nucleare.html#reazioni">Reazioni nucleari</a> </li><li> <a href="energia-nucleare.html#ves">Vantaggi e Svantaggi</a> </li></ul> </li><li class="header-nav-item"> <a href="combustione-fossile.html" ><img src="../images/oil-icon.svg" alt="Trivella" class="icon"/></a ><a href="combustione-fossile.html">Combustione fossile</a> <ul class="header-menu-link"> <li> <a href="combustione-fossile.html#definizione">Definizione</a> </li><li> <a href="combustione-fossile.html#storia">Storia</a> </li><li> <a href="combustione-fossile.html#categorie" >Categorie di combustibili</a > </li><li> <a href="combustione-fossile.html#ves">Vantaggi e Svantaggi</a> </li></ul> <br/><br/> </li></ul> </div>';
