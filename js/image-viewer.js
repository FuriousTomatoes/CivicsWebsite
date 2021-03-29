var milliseconds = 10000;
var timeoutHandl = setInterval(displayNextImage, milliseconds);

function displayNextImage(fromButton) {
  x = x === images.length - 1 ? 0 : x + 1;

  document.getElementById("main-image").src = images[x];
  document.getElementById("img-href").href = path[x];
  document.getElementById("img-p").innerHTML = paragraph[x];
  document.getElementById("img-title").innerHTML = title[x];

  if (fromButton == true) {
    clearInterval(timeoutHandl);
    timeoutHandl = setInterval(displayNextImage, milliseconds);
  }
}

function displayPreviousImage(fromButton) {
  x = x <= 0 ? images.length - 1 : x - 1;

  document.getElementById("main-image").src = images[x];
  document.getElementById("img-href").href = path[x];
  document.getElementById("img-p").innerHTML = paragraph[x];
  document.getElementById("img-title").innerHTML = title[x];

  if (fromButton == true) {
    clearInterval(timeoutHandl);
    timeoutHandl = setInterval(displayNextImage, milliseconds);
  }
}

function startTimer() {
  timeoutHandl;
}

var images = [],
  x = 0;
images[0] = "../images/pale-eoliche.jpg";
images[1] = "../images/idro-home.jpg";
images[2] = "../images/solare-home.jpg";
images[3] = "../images/geo-home.jpg";
images[4] = "../images/nucleare-home.jpg";
images[5] = "../images/trivelle-petrolifere.jpg";

var path = [],
  x = 0;
path[0] = "energia-eolica.html";
path[1] = "energia-idroelettrica.html";
path[2] = "energia-solare.html";
path[3] = "energia-geotermica.html";
path[4] = "energia-nucleare.html";
path[5] = "combustione-fossile.html";

var paragraph = [],
  x = 0;
paragraph[0] =
  "L’energia eolica è una fonte energetica che sfrutta la forza cinetica del vento per produrre energia elettrica. Le apparecchiature che sfruttano la forza del vento sono gli aerogeneratori, composti da una turbina posta su una torre di sostegno e un generatore elettrico. Componente molto importante sono poi le pale eoliche, che sfruttano il meccanismo dei mulino a vento, ovvero usare la forza del vento per produrre energia elettrica; in particolare le pale trasferiscono l’energia cinetica ad un rotore, poi ad un albero e infine al generatore.Per sfruttare al meglio l’energia eolica vengono costruiti impianti eolici, che possono essere on-shore (installati sulla terra ferma),off-shore (installati in zone marine).";
paragraph[1] =
  "L’energia idroelettrica è l’energia che sfrutta grandi masse d’acqua mosse dalla gravità o convogliate in dighe, ponti e canali. L'acqua in caduta o in movimento produce energia cinetica, la quale a sua volta viene trasformata in energia elettrica grazie ad impianti muniti di turbine e alternatore; tali impianti sono le centrali idroelettriche.L&#39;acqua qui viene convogliata a grande velocità a valle dove è collocato un impianto contenente le turbine idroelettriche e un alternatore. È qui che l&#39;energia cinetica, generata dalla rotazione delle turbine, viene trasformata in energia elettrica dall&#39;alternatore. Le centrali idroelettrici possono essere ad acqua fluente (posizionati sul corso d'acqua), a bacino (l'acqua è raccolta in un bacino) oppure ad accumulo (l&#39;acqua viene portata in quota con l&#39;ausilio di pompe).";
paragraph[2] =
  "L’energia solare semplicemente è l’energia che proviene dal sole. Essa è un tipo di energia a flusso, ovvero il suo utilizzo non causa diminuzione di disponibilità. Inoltre, l’energia solare è la quale da cui derivano tutte le altre energie presenti nel mondo. L’energia solare è una fonte rinnovabile e  inesauribile, grazie all’energia sprigionata ogni giorno. I modi in cui l’energia proveniente dal sole può essere convertita sono tre: solare fotovoltaico, solare termico e solare termodinamico. Il solare fotovoltaico riesce a trasformare in maniera istantanea l’energia solare in elettrica, usando dei pannelli solari con una cella fotovoltaica fatta di silicio. Il solare termico trasforma direttamente i raggi solari in calore, sfruttando i collettori solari; lo scopo è quello di scaldare del liquido caloportatore presente in dei tubi, che verrà portato ai luoghi di utilizzo. Il solare termodinamico sfrutta dei pannelli solari a concentrazione, che sono una sorta di evoluzione dei normali pannelli solari, che possono produrre calore con qualsiasi condizione atmosferica. Questi pannelli sfruttano una turbina per convertire l’energia solare in energia elettrica.";
paragraph[3] =
  "La geotermia sfrutta il calore presente nella crosta e nel sottosuolo del pianeta per produrre energia elettrica.  Il calore della Terra è sfruttabile poiché ogni 100m la temperatura sale di 3°C; pertanto le acque sotterranee a contatto con le rocce evaporano, diventando vapore. La geotermia rispetto alle altre fonti rinnovabili occupa meno spazio del suolo e non provoca emissioni di CO2. Le centrali geotermiche sono i luoghi dove avviene la trasformazione dell’energia termica in energia elettrica. Esistono tre tipologie di centrali geotermiche: quelle a vapore secco (in cui il vapore è estratto dalle fratture presenti nel terreno ed utilizzato per azionare una turbina), quelle flash (trasformano l'acqua bollente ad alta pressione in acqua più fredda a bassa pressione) e quelle binarie(in cui un fluido con il punto di ebollizione inferiore rispetto a quello dell'acqua viene fatto scorrere a fianco dell'acqua bollente, la quale trasforma il fluido in vapore che andrà ad azionare una turbina).";
paragraph[4] =
  "L’energia nucleare deriva da reazioni che avvengono nel nucleo dell’atomo costituito da protoni (particelle a carica positiva ) e neutroni (particelle a carica neutra).Tali reazione permettono di ricavare una grandissima quantità di energia termica e possono essere di due tipi: la fissione o scissione nucleare e la fusione nucleare.Si ha una reazione di fissione quando,con opportuni sistemi , si riesce a dividere in due parti il nucleo atomico di un elemento pesante come l’uranio.Ciò può avvenire scagliando neutroni contro il nucleo ,che viene spaccato; come risultato si ha la creazione di due atomi più piccoli e l’emissione di una grandissima quantità di energia. Questo è dovuto al fatto che una parte della massa del nucleo diviso si trasforma in energia, cui quantità si può calcolare con la formula di Einstein E=mc2.La reazione di fusione nell'ambito dell'energia nucleare segue un procedimento inverso a quello di fissione : invece di dividere in due parti un atomo pesante, si uniscono due atomi leggeri per formarne uno più pesante. Questa reazione produce una quantità di energia molto più elevata della reazione di fissione e ,considerato che l’elemento necessario per realizzarla è l’idrogeno (H) ,che si trova sulla Terra in quantità teoricamente illimitate , costituisce un sistema che può rappresentare la soluzione di tutti i problemi energetici della Terra.Purtroppo la tecnologia non permette la fusione nucleare controllata a causa delle altissime temperature necessarie per avviare la reazione. Nelle centrali nucleari il calore prodotto serve a vaporizzare l’acqua che fa girare le turbine, per andare poi a trasformare l’energia meccanica di quest’ultima in energia elettrica.";
paragraph[5] =
  "I combustibili fossili sono fonti energetiche che si sono formate in seguito alla decomposizione  in assenza di ossigeno di materia vivente che contiene energia grazie a un processo antico di fotosintesi. Si possono trovare sotto forma di petrolio, carbone, gas naturale e altri combustibili composti da idrocarburi. Il petrolio e il gas naturale si sono formati in seguito alla decomposizione di organismi che hanno abitato la Terra, il carbone e il metano grazie alla decomposizione delle piante terrestri.Sono una delle maggiori fonti di inquinamento, infatti tra gli inquinanti generati dalla combustione di carbone e petrolio si possono includere anidride carbonica, monossido di carbonio, ossidi di azoto, biossido di zolfo, composti organici volatili e metalli pesanti, tutti associati a rischi di contrarre malattie, soprattutto respiratorie.Lo sfruttamento dei combustibili fossili da parte degli esseri umani è anche la più grande fonte di emissioni di biossido di carbonio, o CO2, (circa il 90%) in tutto il mondo. La CO2 è uno dei principali gas che causano l’effetto serra e, quindi, contribuisce al surriscaldamento globale. ";

var title = [],
  x = 0;
title[0] = "L'energia eolica";
title[1] = "L'energia idroelettrica";
title[2] = "L'energia solare";
title[3] = "L'energia geotermica";
title[4] = "L'energia nucleare";
title[5] = "I combustibili fossili";
