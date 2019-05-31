var quiztitle = "Social Security Quiz";

var quiz = 
[
       {
           "question" : "Q1: Qui inventa la théorie de la relativité ?",
           "image" : "http://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Albert_Einstein_Head.jpg/220px-Albert_Einstein_Head.jpg",
           "choices" : [
                                   "Sir Isaac Newton",
                                   "Nicolaus Copernicus",
                                   "Albert Einstein",
                                   "Ralph Waldo Emmerson"
                               ],
           "correct" : "Albert Einstein",
           "explanation" : "Albert Einstein présenta sa théorie de la relativité en 1905.",
       },            
       {
           "question" : "Q2: Qui est la personne sur le billet de 2$ ",
           "image" : "http://upload.wikimedia.org/wikipedia/commons/thumb/9/94/US_%242_obverse-high.jpg/320px-US_%242_obverse-high.jpg",
           "choices" : [
                                   "Thomas Jefferson",
                                   "Dwight D. Eisenhower",
                                   "Benjamin Franklin",
                                   "Abraham Lincoln"
                               ],
           "correct" : "Thomas Jefferson",
           "explanation" : "Bien que rare de nos jours, ce billet est encore en circulation aux états-unis",
       },
       {
           "question" : "Q3: Quel évenement historique débuta le 12 Avril 1861",
           "image" : "",
           "choices" : [
                                   "Premier vol habité",
                                   "La Californie est devenue un État ",
                                   "Guerre civile américaine",
                                   "Déclaration d'indépendance des USA"
                               ],
           "correct" : "Guerre civile américaine",
           "explanation" : "Attaque des troupes confédérée à Fort Sumter en Caroline du sud, signant le début de la guerre civile qui allait durer jusqu'en avril 1865.",
       },
       {
        "question" : "Q4: Quelle est l'année de création de l'Institut Français des Affaires ?",
        "image" : "https://www.ifa-formation.fr/wp-content/themes/refonte-ifa-2018/img/logo_ifa_full.png",
        "choices" : [
                                "1986",
                                "1996",
                                "2000",
                                "2006"
                            ],
        "correct" : "1986",
        "explanation" : "L'institut Français des Affaires à été fondé en l'an de grâce 1986. ",
        },
        {
            "question" : "Q5: Quelle est le nombre de formations disponibles à l'IFA ?",
            "image" : "https://www.ifa-formation.fr/wp-content/themes/refonte-ifa-2018/img/logo_ifa_full.png",
            "choices" : [
                                    "15",
                                    "20",
                                    "22",
                                    "25"
                                ],
            "correct" : "20",
            "explanation" : "Il y'a 20 formations en cours dans 5 domaines différents.",
        },   
        {
            "question" : "Q6: Qui est l'inventeur de LINUX ?",
            "image" : "https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/LinuxCon_Europe_Linus_Torvalds_03_(cropped).jpg/240px-LinuxCon_Europe_Linus_Torvalds_03_(cropped).jpg",
            "choices" : [
                                    "Linus Torvald",
                                    "Steve Jobs",
                                    "Bill Gates",
                                    "Steve Wosniak"
                                ],
            "correct" : "Linus Torvald",
            "explanation" : "Linus Torvald à crée le noyaux Linux en 1991 (à 22 ans)",
        },
        {
            "question" : "Q7: Quelle société est à l'origine du langage de programmation JAVA ?",
            "image" : "https://s2.qwant.com/thumbr/0x380/6/d/0a933a95c80643ff010c450805d62c82c8786a70f0d3643f76275e6fda3f31/226777.svg.jpg?u=https%3A%2F%2Fimage.flaticon.com%2Ficons%2Fsvg%2F226%2F226777.svg&q=0&b=1&p=0&a=1",
            "choices" : [
                                    "Microsoft",
                                    "Sun microsystems",
                                    "Oracle",
                                    "La fondation Ubuntu"
                                ],
            "correct" : "Sun microsystems",
            "explanation" : "Java est un langage de programmation orienté objet créé par James Gosling et Patrick Naughton, employés de Sun Microsystems",
        },
        {
            "question" : "Q8: Quelle est la signification d'AJAX ?",
            "image" : "https://s2.qwant.com/thumbr/700x0/5/6/a3c9ad1585dbc5fb9b631b1f3f9c7e14cd41d17d138cdf623c4a967453da86/1200px-AJAX_logo_by_gengns.svg.png?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2Fa%2Fa1%2FAJAX_logo_by_gengns.svg%2F1200px-AJAX_logo_by_gengns.svg.png&q=0&b=1&p=0&a=1",
            "choices" : [
                                    "asynchronous JavaScript and XML",
                                    "asynchronous Javascript and XHTTP"
                                ],
            "correct" : "asynchronous JavaScript and XML",
            "explanation" : "AJAX est utilisé pour faire des requêtes asynchrones en Javascript.",
        },
        {
            "question" : "Q9: Quelle est la prochaine ville à accueillir les jeux olympiques d'été ?",
            "image" : "https://s1.qwant.com/thumbr/0x380/b/7/691a60a78230de18304d0279d7cf43ec3cce519474f483f88dc0c139565138/maxresdefault.jpg?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2F2VdLreRWYcc%2Fmaxresdefault.jpg&q=0&b=1&p=0&a=1",
            "choices" : [
                                    "Paris",
                                    "Tokyo"
                                ],
            "correct" : "Tokyo",
            "explanation" : "Les prochains jeux olympiques d'été se dérouleront à Tokyo, au Japon.",
        },
        {
            "question" : "Q10: Qui est le dernier vainqueur du tournois de Roland Garros ? ",
            "image" : "https://s1.qwant.com/thumbr/0x380/a/4/29cbade5b7ac872f50f3fb521d2573734192a5d8a06557e939ca93ceff9805/french-open-roland-garros-032818-ftr-getty_qias7j6mcrx31qc100e3usuqo.jpg?u=http%3A%2F%2Fimages.performgroup.com%2Fdi%2Flibrary%2Fsporting_news%2F5b%2F10%2Ffrench-open-roland-garros-032818-ftr-getty_qias7j6mcrx31qc100e3usuqo.jpg%3Ft%3D1851193058&q=0&b=1&p=0&a=1",
            "choices" : [
                                    "Rafael Nadal",
                                    "Novak Djokovic"
                                ],
            "correct" : "Rafael Nadal",
            "explanation" : "Rafael Nadal à remporté l'édition 2018 du tournoi face à l'Autrichien Dominic Thiem.",
        },
        {
            "question" : "Q11 : Quel est le second astronaute à avoir marché sur la lune ? ",
            "image" : "https://s1.qwant.com/thumbr/0x380/3/7/0e638a70298e7c2cf6c13ea4658b1bbc9d7672b44e8364049669a6490e9852/1200px-Apollo_11_insignia.png?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F2%2F27%2FApollo_11_insignia.png%2F1200px-Apollo_11_insignia.png&q=0&b=1&p=0&a=1",
            "choices" : [
                                    "Buzz Aldrin",
                                    "Neil Armstrong"
                                ],
            "correct" : "Buzz Aldrin",
            "explanation" : "Il est le second à avoir posé le pied sur la lune, derrière Neil Armstrong.",
        },
        {
            "question" : "Q12 : Qui fût le dirigeant de l'URSS de 1920 à 1956 ?",
            "image" : "https://s2.qwant.com/thumbr/0x380/d/e/3a6564f18db95aa2915f0e5aa63d3ec2751e74406c01fe4c9ab928f59976d3/12740.png?u=https%3A%2F%2Fnode01.flagstat.net%2Fmedia%2Fcatalog%2Fproduct%2Fdetail%2F12740.png&q=0&b=1&p=0&a=1",
            "choices" : [
                                    "Staline",
                                    "Lénine",
                                    "Trotsky",
                                    "Poutine"
                                ],
            "correct" : "Staline",
            "explanation" : "Joseph Staline à été à la tête de l'URSS jusqu'en 1953, avant d'être remplacé par Nikita Khrouchtchev.",
        },
        {
            "question" : "Q13: En quelle année à été inventée le premier vaccin contre la rage ?",
            "image" : "https://s1.qwant.com/thumbr/0x380/1/c/9677e481d8f32e17c00650ec1d21b1f6f6837b3d793e516b4d59894cc3e901/Vaccin-contre-grippe_0_1400_931.jpg?u=http%3A%2F%2Fimg.aws.la-croix.com%2F2016%2F10%2F10%2F1200795117%2FVaccin-contre-grippe_0_1400_931.jpg&q=0&b=1&p=0&a=1",
            "choices" : [
                                    "1850",
                                    "1885",
                                    "1922",
                                    "1933"
                                ],
            "correct" : "1885",
            "explanation" : "Le vaccin contre la rage à été mis au point par le français Louis Pasteur.",
        },
        {
            "question" : "Q14: En quelle année fût découvert le Radium ? ",
            "image" : "https://s1.qwant.com/thumbr/0x380/b/e/7eba8c4ee0acdfff9b553b1840c4d07c202f1f4a60f5f68ec5b94d828a979b/1280-175971224-glow-sticks.jpg?u=https%3A%2F%2Fpixfeeds.com%2Fimages%2Fscience-projects%2F1280-175971224-glow-sticks.jpg&q=0&b=1&p=0&a=1",
            "choices" : [
                                    "1898",
                                    "1905",
                                    "1920",
                                    "1933"
                                ],
            "correct" : "1898",
            "explanation" : "Le Radium à été découvert par Pierre et Marie currie en 1898 dans un minerai d'uraninite.",
        },
        {
            "question" : "Q15: En quelle année la sonde Pathfinder s'est posée sur Mars ? ",
            "image" : "https://s2.qwant.com/thumbr/0x380/f/f/0b161fdbb98c9aeb1de60ae951a80a85bc7d99a2a4acb27e9283fdb667f9f4/un-modele-de-la-mission-mars-pathfinder-satellite-et-rover-sojourner-lors-de-la-cite-des-arts-et-des-sciences-valence-espagne-r20h6y.jpg?u=https%3A%2F%2Fc8.alamy.com%2Fcompfr%2Fr20h6y%2Fun-modele-de-la-mission-mars-pathfinder-satellite-et-rover-sojourner-lors-de-la-cite-des-arts-et-des-sciences-valence-espagne-r20h6y.jpg&q=0&b=1&p=0&a=1",
            "choices" : [
                                    "1980",
                                    "1997",
                                    "2000",
                                    "2005"
                                ],
            "correct" : "1997",
            "explanation" : "La sonde s'est posée sur le sol de la planète Mars le 4 juillet 1997 à Ares Vallis.",
        },
        {
            "question" : "Q16: Que signifie HTTP ?",
            "image" : "https://assets.pcmag.com/media/images/447567-the-best-web-hosting-services-for-2014.jpg?thumb=y&width=810&height=456",
            "choices" : [
                                    "Hyper Text Transfert Protocol",
                                    "Hyper Text Transfert Prototype"
                                ],
            "correct" : "Hyper Text Transfert Protocol",
            "explanation" : "HTTP signifie Hyper Text Transfert Protocol.",
        },
        {
            "question" : "Q17: En quelle année Internet a-t-il était inventé ? ",
            "image" : "http://besuccess.com/wp-content/uploads/2012/05/chrome-firefox-internet-explorer.jpg",
            "choices" : [
                                    "1969",
                                    "1967",
                                ],
            "correct" : "1969",
            "explanation" : "internet a été créé en 1969.", 
        },
        {
            "question" : "Q18: En quelle année a été envoyé le premier mail ?",
            "image" : "https://marketingland.com/wp-content/ml-loads/2016/08/email-keyboard-at-symbol-ss-1920.jpg",
            "choices" : [
                                    "1971",
                                    "1972",
                                    "1973",
                                    "1974"
                                ],
            "correct" : "1971",
            "explanation" : "Le premier mail a été envoyé en 1971.",
        },
        {
         "question" : "Q19: Quelle entreprise a créé UNIX ?",
         "image" : "https://thumb7.shutterstock.com/display_pic_with_logo/166705240/634316549/stock-photo--d-rendering-word-unix-with-bright-yellow-color-before-an-electric-current-background-means-634316549.jpg",
         "choices" : [
                                 "Sun Microsystems",
                                 "Apple",
                                 "Bell Laboratories",
                                 "nitntando"
                             ],
         "correct" : "Bell Laboratories",
         "explanation" : "Bell Laboratories créa UNIX en 1969",
         },
         {
            "question" : "Q20: Qu’est-ce qui a été inventé en 1959 ?",
            "image" : "http://www.auburn-hills.lib.mi.us/quickimage/calendar-icon-blue_sm.png",
            "choices" : [
                                    "Premier ordinateur à carte perforée",
                                    "Premier circuit integré",
                                    "Premier téléphone portable",
                                    "Premier MP3"
                                ],
            "correct" : "Premier circuit integré",
            "explanation" : "C'est le premier circuit integré.",
        },
        {
            "question" : "Q21: Quel pays accueillera l’euro 2024 ? ",
            "image" : "https://blog.oxforddictionaries.com/wp-content/uploads/football-1.jpg",
            "choices" : [
                                    "Espagne",
                                    "Allemagne",
                                    "Suède",
                                    "Danemark"
                                ],
            "correct" : "Allemagne",
            "explanation" : "L'Allemagne aété désignée en 2018 comme l'organisatrice de l'euro. ",
        },
        {
            "question" : "Q22: Combien de titre de champion de rallye Sébastien Loeb a-t-il remporté ?",
            "image" : "http://image.excite.fr/moteurs/guide/voiture-de-rallye-default-25688-0.jpg",
            "choices" : [
                                    "7",
                                    "8",
                                    "9",
                                    "10",
                                ],
            "correct" : "9",
            "explanation" : "Entre 2004 et 2012",
        },
        {
         "question" : "Q23: Quel pays a remporté les Jeux olympiques d’hiver 2018 ?",
         "image" : "https://i.ytimg.com/vi/qcF5vJQXwuQ/maxresdefault.jpg",
         "choices" : [
                                 "Norvège",
                                 "Finlande",
                                 "Islande",
                                 "Autriche"
                             ],
         "correct" : "Norvège",
         "explanation" : "La Norvège avec 14 médailles d'or.",
         },
         {
            "question" : "Q24: Quelle a été la première dynastie des rois de France ?",
            "image" : "http://image.noelshack.com/fichiers/2015/20/1431443464-drapeau-france-royal.png",
            "choices" : [
                                    "Valois",
                                    "Capétiens",
                                    "Carolingiens",
                                    "Mérovingiens"
                                ],
            "correct" : "Mérovingiens",
            "explanation" : "Les mérovingiens ont reignés entre l'an 496 et l'an 751.",
        },
        {
                "question" : "Q25: Combien de pays sont membres de l’Union Européenne ?",
                "image" : "http://www.europeword.com/blog/wp-content/uploads/europe-flag-1.jpg",
                "choices" : [
                                        "32",
                                        "28",
                                        "26",
                                        "24",
                                        
                                    ],
                "correct" : "28",
                "explanation" : "L'union Européenne compte actuellement 28 membres.",
        }, 
        {
            "question" : "Q26: Quel est la sonde la plus éloignée de la terre ?",
            "image" : "http://sondes-spatiales.e-monsite.com/medias/images/sonde.jpg",
            "choices" : [
                                    "Pioneer 10",
                                    "Voyager 1",
                                ],
            "correct" : "Voyager 1",
            "explanation" : "Voyager 1 se trouve actuellement à 21,7 milliards de kilomètres de la terre",
        },
        {
         "question" : "Q27: En quelle année a été inventé le premier appareil photo ?",
         "image" : "http://www.jsbg.me/wp-content/uploads/2013/12/1672430-slide-750-cam-1.jpg",
         "choices" : [
                                 "1839",
                                 "1849"
                             ],
         "correct" : "1839",
         "explanation" : "Le premier appareil a été créé en 1839.",
         },
         {
            "question" : "Q28: Quelle est la vitesse de le lumière ?",
            "image" : "http://footage.framepool.com/shotimg/qf/141736717-psychedelique-rayon-de-lumiere-or-couleur-fare-eclairage.jpg",
            "choices" : [
                                    "299 000 km/s",
                                    "279 000 km/s"
                                ],
            "correct" : "299 000 km/s",
            "explanation" : "La lumière se déplace à 299 000 km/s.",
        },
        {
            "question" : "Q29: Quel est l’année de création du MacIntosh ?",
            "image" : "https://vintagecomputer.ca/wp-content/uploads/2017/02/Macintosh-128k-SCSI-computer-system.jpg",
            "choices" : [
                                    "1986",
                                    "1984"
                                ],
            "correct" : "1984",
            "explanation" : "Le MacIntosh a été créé en 1984.",
        },
        {
            "question" : "Q30: Quel est le siècle des lumières ?",
            "image" : "http://www.education-et-numerique.org/wp-content/uploads/2015/03/Salon_de_Madame_Geoffrin.jpg",
            "choices" : [
                                    "Le 18ème",
                                    "Le 17ème"
                                ],
            "correct" : "Le 18ème",
            "explanation" : "Le siècle des 'Lumières' correspond au 18ème siècle.",
        }
        
        
    

   ];


var currentquestion = 0,
    score = 0,
    submt = true,
    picked;

jQuery(document).ready(function ($) {


    function htmlEncode(value) {
        return $(document.createElement('div')).text(value).html();
    }


    function addChoices(choices) {
        if (typeof choices !== "undefined" && $.type(choices) == "array") {
            $('#choice-block').empty();
            for (var i = 0; i < choices.length; i++) {
                $(document.createElement('li')).addClass('choice choice-box').attr('data-index', i).text(choices[i]).appendTo('#choice-block');
            }
        }
    }


    function processQuestion(choice) {
        if (quiz[currentquestion]['choices'][choice] == quiz[currentquestion]['correct']) {
            $('.choice').eq(choice).css({
                'background-color': '#50D943'
            });
            $('#explanation').html('<strong>Correct!</strong> ' + htmlEncode(quiz[currentquestion]['explanation']));
            score++;
        } else {
            $('.choice').eq(choice).css({
                'background-color': '#D92623'
            });
            $('#explanation').html('<strong>Incorrect.</strong> ' + htmlEncode(quiz[currentquestion]['explanation']));
        }
        currentquestion++;
        $('#submitbutton').html('NEXT QUESTION &raquo;').on('click', function () {
            if (currentquestion == quiz.length) {
                endQuiz();
            } else {
                $(this).text('Check Answer').css({
                    'color': '#222'
                }).off('click');
                
            }
        })
    }


    function setupButtons() {
        $('.choice').on('mouseover', function () {
            $(this).css({
                'background-color': '#e1e1e1'
            });
        });
        $('.choice').on('mouseout', function () {
            $(this).css({
                'background-color': '#fff'
            });
        })
        $('.choice').on('click', function () {
            picked = $(this).attr('data-index');
            $('.choice').removeAttr('style').off('mouseout mouseover');
            $(this).css({
                'border-color': '#222',
                'font-weight': 700,
                'background-color': '#c1c1c1'
            });
            if (submt) {
                submt = false;
                $('#submitbutton').css({
                    'color': '#000'
                }).on('click', function () {
                    $('.choice').off('click');
                    $(this).off('click');
                    processQuestion(picked);
                });
            }
        })
    }


    function init() { 
        ObjetRandom();
 
    }
    

    function ObjetRandom() // Selectionne un objet random dans la liste, 10 objets par fourchettes de 3
    {
        var min = 0;
        var max = 3;
        var nbDeTours = 0;
    
        console.log(min);
        console.log(max);
    
        function getRandomFloat(min, max) {
            return Math.round(Math.random() * (max - min) + min);
          }
    
        var random = getRandomFloat(min,max);

          for (let index = min; index < 1; index++) 
          {
            console.log(quiz[random]);
            // Affichage de l'objet dans le DOM :

            $('.question').text(quiz[random]['question']).appendTo('#frame');

            //Ajoute une image si elle est présente

            if (quiz[0].hasOwnProperty('image') && quiz[0]['image'] != "") 
            {
                $(document.createElement('img')).addClass('question-image').attr('id', 'question-image').attr('src', quiz[random]['image']).attr('alt', htmlEncode(quiz[random]['question'])).appendTo('#frame');
            }
            //conteneur des réponses possibles : ul

            $(document.createElement('ul')).attr('id', 'choice-block').appendTo('#frame');

            //Ajoute les réponses possible (fonction qui génére les li)

            addChoices(quiz[random]['choices']);

            //Ajout du bouton submit

            $(document.createElement('div')).addClass('choice-box').attr('id', 'submitbutton').text('Check Answer').css({
                'font-weight': 700,
                'color': '#222',
                'padding': '30px 0'
            }).appendTo('#frame');

            setupButtons();
              random+=3;
              // Ajouter de la récursivité ? 
          }
    }





    init();
});