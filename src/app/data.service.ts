import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class DataService {

  constructor(public http:Http) { }

  cars = [
    'Ford','Chevrolet','Buick'
  ];


  getSchedule() {
	var schedule = {
            presentations: [{
                    "name": "sexta",
                    "label": "Sexta-feira",
                    "items": [
                        [
                            "08:00", [{
                                "title": "Credenciamento",
                                "room": "Hall de entrada",
                                "description": "Organização"
                            }]
                        ],
                        [
                            "09:00", [{
                                "title": "Abertura",
                                "room": "Hall de entrada",
                                "description": "Organização"
                            }]
                        ],
                        [
                            "09:40", [{
                                "title": "Bernardo Fontes",
                                "room": "Sala Ada Lovelace",
                                "description": "Keynote"
                            }]
                        ],
                        [
                            "09:50", [{
                                "title": "Marcelo Andriolli",
                                "room": "Sala Dorothy Vaughan",
                                "description": "Informação Salva: Python ajudando a entender um problema silencioso de saúde pública no Brasil e no mundo, o Suicídio"
                            }]
                        ],
                        [
                            "10:00", [{
                                "title": "Marcelo dos Santos Moraes Junior",
                                "room": "Sala Grace Hooper",
                                "description": "Como convencer a empresa que a tecnologia "legada" necessita ser migrada para Python"
                            }]
                        ],
                        [
                            "10:45", [{
                                "title": "Carlos André Santos Machado",
                                "room": "Sala Dorothy Vaughan",
                                "description": "Django Rest Framework - Criando APIs Rest com 3 linhas de código"
                            }]
                        ],
                        [
                            "10:50", [{
                                "title": "Eduardo Spanó, Vitor Hirota, Jessika Darambaris",
                                "room": "Sala Ada Lovelace",
                                "description": "Hackeando o setor público com Python"
                            }]
                        ],
                        [
                            "10:55", [{
                                "title": "Tonny Dourado",
                                "room": "Sala Grace Hooper",
                                "description": "Programação Assíncrona com Twisted"
                            }]
                        ],
                        [
                            "11:35", [{
                                "title": "Almoço",
                                "room": "Sala Mary Jackson",
                                "description": ""
                            }]
                        ],
                        [
                            "11:40", [{
                                "title": "Almoço",
                                "room": "Sala Dorothy Vaughan",
                                "description": ""
                            }]
                        ],
                        [
                            "11:45", [{
                                "title": "Almoço",
                                "room": "Sala Ada Lovelace",
                                "description": ""
                            }]
                        ],
                        [
                            "11:50", [{
                                "title": "Almoço",
                                "room": "Sala Grace Hooper",
                                "description": ""
                            }]
                        ],
                        [
                            "12:05", [{
                                "title": "Almoço",
                                "room": "Sala Katherine Johnson",
                                "description": ""
                            }]
                        ],
                        [
                            "12:15", [{
                                "title": "Almoço",
                                "room": "",
                                "description": ""
                            }]
                        ],
                        [
                            "13:10", [{
                                "title": "Palestrante a definir",
                                "room": "Sala Dorothy Vaughan",
                                "description": "Palestra a definir"
                            }]
                        ],
                        [
                            "13:15", [{
                                "title": "Bárbara Barbosa",
                                "room": "Sala Ada Lovelace",
                                "description": "Deep NLP - Redes neurais revolucionando o processamento de linguagem natural"
                            }]
                        ],
                        [
                            "13:20", [{
                                "title": "Paulo Henrique Rodrigues Pinheiro",
                                "room": "Sala Grace Hooper",
                                "description": "CherryPy - um framework simples, sólido e eficiente"
                            }]
                        ],
                        [
                            "14:05", [{
                                "title": "Luiz Lima",
                                "room": "Sala Dorothy Vaughan",
                                "description": "Python + FabLab - Programando objetos para fabricação digital"
                            }]
                        ],
                        [
                            "14:10", [{
                                "title": "Thais Viana",
                                "room": "Sala Ada Lovelace",
                                "description": "Design e Desenvolvimento (Comunicação e Integração)"
                            }]
                        ],
                        [
                            "14:15", [{
                                "title": "Lightining Talks",
                                "room": "Sala Grace Hooper",
                                "description": ""
                            }]
                        ],
                        [
                            "13:55", [{
                                "title": "Pausa",
                                "room": "Sala Mary Jackson",
                                "description": "Networking"
                            }]
                        ],
                        [
                            "14:35", [{
                                "title": "Pausa",
                                "room": "Sala Katherine Johnson",
                                "description": "Networking"
                            }]
                        ],
                        [
                            "14:50", [{
                                "title": "Pausa",
                                "room": "Sala Grace Hooper",
                                "description": "Networking"
                            }]
                        ],
                        [
                            "15:00", [{
                                "title": "Pausa",
                                "room": "Sala Dorothy Vaughan",
                                "description": "Networking"
                            }]
                        ],
                        [
                            "15:05", [{
                                "title": "Pausa",
                                "room": "Sala Ada Lovelace",
                                "description": "Networking"
                            }]
                        ],
                        [
                            "16:05", [{
                                "title": "Gabriel Marcondes",
                                "room": "Sala Ada Lovelace",
                                "description": "[Web] [Startups] De Startup a Enterprise: os problemas e as soluções do Python na trajetória de uma empresa"
                            }]
                        ],
                        [
                            "16:10", [{
                                "title": "Thaíssa Falbo",
                                "room": "Sala Dorothy Vaughan",
                                "description": "Pedagogia Tecnológica"
                            }]
                        ],
                        [
                            "17:00", [{
                                "title": "Palestrante a definir",
                                "room": "Sala Ada Lovelace",
                                "description": "Palestra a definir"
                            }]
                        ],
                        [
                            "17:05", [{
                                "title": "Lightining Talks",
                                "room": "Hall de entrada",
                                "description": ""
                            }]
                        ],
                        [
                            "17:55", [{
                                "title": "Encerramento",
                                "room": "Hall de entrada",
                                "description": ""
                            }]
                        ]
                    ]
                },
                {
                    "name": "sabado",
                    "label": "Sábado",
                    "items": [
                        [
                            "08:00", [{
                                "title": "Credenciamento",
                                "room": "Hall de entrada",
                                "description": "Organização"
                            }]
                        ],
                        [
                            "09:40", [{
                                "title": "Palestrante a definir",
                                "room": "Sala Dorothy Vaughan",
                                "description": "Palestra a definir"
                            }]
                        ],
                        [
                            "09:45", [{
                                "title": "Francisco Fernandes",
                                "room": "Sala Grace Hooper",
                                "description": "Jujubot: Implementando um twitter bot da Vovó Juju"
                            }]
                        ],
                        [
                            "09:50", [{
                                "title": "Mariana Bedran Lesche",
                                "room": "Sala Ada Lovelace",
                                "description": "Explorando QuerySets do Django"
                            }]
                        ],
                        [
                            "10:35", [{
                                "title": "Patrick da Silveira Porto",
                                "room": "Sala Dorothy Vaughan",
                                "description": "Event Sourcing em Python"
                            }]
                        ],
                        [
                            "10:40", [{
                                "title": "Michael Willian Trindade Coelho",
                                "room": "Sala Grace Hooper",
                                "description": "AWS - Uma visão ampla sobre a cloud da Amazon"
                            }]
                        ],
                        [
                            "10:45", [{
                                "title": "Cássio Botaro",
                                "room": "Sala Ada Lovelace",
                                "description": "Keynote"
                            }]
                        ],
                        [
                            "11:30", [{
                                "title": "Almoço",
                                "room": "Sala Dorothy Vaughan",
                                "description": ""
                            }]
                        ],
                        [
                            "11:35", [{
                                "title": "Almoço",
                                "room": "Sala Grace Hooper",
                                "description": ""
                            }]
                        ],
                        [
                            "11:55", [{
                                "title": "Almoço",
                                "room": "Sala Ada Lovelace",
                                "description": ""
                            }]
                        ],
                        [
                            "12:00", [{
                                "title": "Almoço",
                                "room": "Sala Mary Jackson",
                                "description": ""
                            }]
                        ],
                        [
                            "12:00", [{
                                "title": "Almoço",
                                "room": "Sala Katherine Johnson",
                                "description": ""
                            }]
                        ],
                        [
                            "13:10", [{
                                "title": "Diego (Dukão) Moreira Guimarães",
                                "room": "Sala Dorothy Vaughan",
                                "description": "Fazendo Música com Sonic Pi"
                            }]
                        ],
                        [
                            "13:15", [{
                                "title": "Paula Santos",
                                "room": "Sala Ada Lovelace",
                                "description": "[Rede Neural] [Científico] O que você precisa saber sobre o básico de uma rede neural"
                            }]
                        ],
                        [
                            "13:20", [{
                                "title": "Vinicius Mesel",
                                "room": "Sala Grace Hooper",
                                "description": "Mas cadê as oportunidades Python ?"
                            }]
                        ],
                        [
                            "14:05", [{
                                "title": "Guto Maia",
                                "room": "Sala Dorothy Vaughan",
                                "description": "NES Hacks 2 - The Mission"
                            }]
                        ],
                        [
                            "14:10", [{
                                "title": "Lucas Teixeira",
                                "room": "Sala Ada Lovelace",
                                "description": "De olho no Congresso com Python e Dados Abertos"
                            }]
                        ],
                        [
                            "14:15", [{
                                "title": "Lightining Talks",
                                "room": "Sala Grace Hooper",
                                "description": ""
                            }]
                        ],
                        [
                            "14:30", [{
                                "title": "Pausa",
                                "room": "Sala Mary Jackson",
                                "description": "Networking"
                            }]
                        ],
                        [
                            "14:30", [{
                                "title": "Pausa",
                                "room": "Sala Katherine Johnson",
                                "description": "Networking"
                            }]
                        ],
                        [
                            "14:50", [{
                                "title": "Pausa",
                                "room": "Sala Grace Hooper",
                                "description": "Networking"
                            }]
                        ],
                        [
                            "15:00", [{
                                "title": "Pausa",
                                "room": "Sala Dorothy Vaughan",
                                "description": "Networking"
                            }]
                        ],
                        [
                            "15:05", [{
                                "title": "Pausa",
                                "room": "Sala Ada Lovelace",
                                "description": "Networking"
                            }]
                        ],
                        [
                            "16:00", [{
                                "title": "Thiago Garcia da Silva",
                                "room": "Sala Grace Hooper",
                                "description": "[Web] Construindo uma visualização de sentimento real-time do Twitter usando emojis"
                            }]
                        ],
                        [
                            "16:05", [{
                                "title": "Celso Crivelaro",
                                "room": "Sala Ada Lovelace",
                                "description": "Padrões para testes de tela com Python + Selenium e como evitar testes instáveis"
                            }]
                        ],
                        [
                            "16:10", [{
                                "title": "Jean Carlo Ferreira de Oliveira",
                                "room": "Sala Dorothy Vaughan",
                                "description": "Arquitetura da Open edX"
                            }]
                        ],
                        [
                            "16:55", [{
                                "title": "Bianca Rosa de Mendonça",
                                "room": "Sala Grace Hooper",
                                "description": "Python Web Frameworks - Quais são e como escolher!"
                            }]
                        ],
                        [
                            "17:00", [{
                                "title": "Michel Lacerda",
                                "room": "Sala Ada Lovelace",
                                "description": "Python na Astronomia"
                            }]
                        ],
                        [
                            "17:05", [{
                                "title": "Lightining Talks",
                                "room": "Hall de entrada",
                                "description": ""
                            }]
                        ],
                        [
                            "17:55", [{
                                "title": "Encerramento",
                                "room": "Hall de entrada",
                                "description": ""
                            }]
                        ]
                    ]
                },
                {
                    "name": "domingo",
                    "label": "Domingo",
                    "items": [
                        [
                            "08:00", [{
                                "title": "Credenciamento",
                                "room": "Hall de entrada",
                                "description": "Organização"
                            }]
                        ],
                        [
                            "09:15", [{
                                "title": "Luciano Ratamero",
                                "room": "Sala Dorothy Vaughan",
                                "description": "API Star: novo framework REST do criador do DRF"
                            }]
                        ],
                        [
                            "09:20", [{
                                "title": "Laís Pessine do Carmo",
                                "room": "Sala Grace Hooper",
                                "description": "GUIs em Python para o seu acelerador de partículas (Projeto Sirius)"
                            }]
                        ],
                        [
                            "09:25", [{
                                "title": "Fabiula Moreno Arantes",
                                "room": "Sala Ada Lovelace",
                                "description": "Flora do Campus: Identificação e Mapeamento das Árvores do Campus da Unesp de Rio Claro/SP"
                            }]
                        ],
                        [
                            "10:10", [{
                                "title": "Yros Aguiar",
                                "room": "Sala Dorothy Vaughan",
                                "description": "CI/CD - Automatizando a entrega da sua aplicação"
                            }]
                        ],
                        [
                            "10:15", [{
                                "title": "Juliano Atanazio",
                                "room": "Sala Grace Hooper",
                                "description": "PL/Python - Programando em Python no PostgreSQL"
                            }]
                        ],
                        [
                            "10:20", [{
                                "title": "Paula Grangeiro",
                                "room": "Sala Ada Lovelace",
                                "description": "Keynote"
                            }]
                        ],
                        [
                            "11:05", [{
                                "title": "Almoço",
                                "room": "Sala Dorothy Vaughan",
                                "description": ""
                            }]
                        ],
                        [
                            "11:10", [{
                                "title": "Almoço",
                                "room": "Sala Grace Hooper",
                                "description": ""
                            }]
                        ],
                        [
                            "11:30", [{
                                "title": "Almoço",
                                "room": "Sala Ada Lovelace",
                                "description": ""
                            }]
                        ],
                        [
                            "11:30", [{
                                "title": "Almoço",
                                "room": "Sala Mary Jackson",
                                "description": ""
                            }]
                        ],
                        [
                            "12:00", [{
                                "title": "Almoço",
                                "room": "Sala Katherine Johnson",
                                "description": ""
                            }]
                        ],
                        [
                            "12:45", [{
                                "title": "Fernando Gomes de Macedo",
                                "room": "Sala Dorothy Vaughan",
                                "description": "Máquinas de estado em Python"
                            }]
                        ],
                        [
                            "12:55", [{
                                "title": "Regis da Silva Santos",
                                "room": "Sala Grace Hooper",
                                "description": "Weppy - O framework web para humanos"
                            }]
                        ],
                        [
                            "13:40", [{
                                "title": "Álvaro Justen [Turicas]",
                                "room": "Sala Dorothy Vaughan",
                                "description": "Jornalismo de Dados: Programando a Democracia no Brasil"
                            }]
                        ],
                        [
                            "13:45", [{
                                "title": "Rafael Galleani",
                                "room": "Sala Ada Lovelace",
                                "description": "[ChatBot] [Web] Bot Command - Automatizando tarefas utilizando Python + Django + Telegram!"
                            }]
                        ],
                        [
                            "13:50", [{
                                "title": "Lightning Talks",
                                "room": "Sala Grace Hooper",
                                "description": ""
                            }]
                        ],
                        [
                            "14:00", [{
                                "title": "Pausa",
                                "room": "Sala Mary Jackson",
                                "description": "Networking"
                            }]
                        ],
                        [
                            "14:25", [{
                                "title": "Pausa",
                                "room": "Sala Grace Hooper",
                                "description": "Networking"
                            }]
                        ],
                        [
                            "14:30", [{
                                "title": "Pausa",
                                "room": "Sala Katherine Johnson",
                                "description": "Networking"
                            }]
                        ],
                        [
                            "14:35", [{
                                "title": "Pausa",
                                "room": "Sala Dorothy Vaughan",
                                "description": "Networking"
                            }]
                        ],
                        [
                            "14:40", [{
                                "title": "Pausa",
                                "room": "Sala Ada Lovelace",
                                "description": "Networking"
                            }]
                        ],
                        [
                            "15:35", [{
                                "title": "Henrique Barbosa Coura",
                                "room": "Sala Grace Hooper",
                                "description": "Scrapy para usuários de bs4"
                            }]
                        ],
                        [
                            "15:40", [{
                                "title": "Bruno Ábia Souza",
                                "room": "Sala Ada Lovelace",
                                "description": "Machine Learning com Python - Da Teoria ao Primeiro Deploy em Produção"
                            }]
                        ],
                        [
                            "15:45", [{
                                "title": "Renzo Nuccitelli",
                                "room": "Sala Dorothy Vaughan",
                                "description": "Programando a Felicidade"
                            }]
                        ],
                        [
                            "16:30", [{
                                "title": "Luciano Ramalho",
                                "room": "Sala Grace Hooper",
                                "description": "Cadê o paradigma? Teoria a serviço de Python na prática"
                            }]
                        ],
                        [
                            "16:35", [{
                                "title": "Aron de Castro Coelho",
                                "room": "Sala Ada Lovelace",
                                "description": "[Blockchain] Criando aplicações descentralizadas com Python!"
                            }]
                        ],
                        [
                            "16:40", [{
                                "title": "Lightining Talks",
                                "room": "Hall de entrada",
                                "description": ""
                            }]
                        ],
                        [
                            "17:30", [{
                                "title": "Encerramento",
                                "room": "Hall de entrada",
                                "description": ""
                            }]
                        ]
                    ]
                }
            ],
            tutorials: [{
                    "name": "sexta",
                    "label": "Sexta-feira",
                    "items": [
                        [
                            "09:35", [{
                                    "title": "Libertando bases de dados públicas",
                                    "room": "Sala Mary Jackson",
                                    "description": "Duração: 3 horas e 20 minutos (+1 hora p/ almoço) - Álvaro Justen [Turicas]"
                                },
                                {
                                    "title": "Case Recommender: Utilizando Python para desenvolver sistemas de recomendação",
                                    "room": "Sala Katherine Johnson",
                                    "description": "Duração: 4 horas (+1 hora p/ almoço) - Arthur Fortes"
                                }
                            ]
                        ],
                        [
                            "14:55", [{
                                "title": "Muito mais que map, filter e reduce",
                                "room": "Sala Mary Jackson",
                                "description": "Duração: 3 horas - Eduardo Mendes"
                            }]
                        ],
                        [
                            "15:35", [{
                                "title": "Segurança da Informação e de Software",
                                "room": "Sala Katherine Johnson",
                                "description": "Duração: 2 horas e 20 minutos - Felipe Bidu"
                            }]
                        ],
                        [
                            "15:55", [{
                                "title": "Tutorial a definir",
                                "room": "Sala Katherine Johnson",
                                "description": "Duração: a definir - Palestrante: a definir"
                            }]
                        ]
                    ]
                },
                {
                    "name": "sabado",
                    "label": "Sábado",
                    "items": [
                        [
                            "09:00", [{
                                    "title": "Introdução ao Python",
                                    "room": "Sala Mary Jackson",
                                    "description": "Duração: 6 horas e 50 minutos (+1 hora p/ almoço e +1 hora p/ pausa/networking) - David Kwast"
                                },
                                {
                                    "title": "Machine Learning com scikit-learn",
                                    "room": "Sala Katherine Johnson",
                                    "description": "Duração: 6 horas e 50 minutos (+1 hora p/ almoço e +1 hora p/ pausa/networking) - Danilo J. S. Bellini"
                                }
                            ]
                        ]
                    ]
                },
                {
                    "name": "domingo",
                    "label": "Domingo",
                    "items": [
                        [
                            "09:35", [{
                                    "title": "Contas de Padeiro e Outros Hacks Mais",
                                    "room": "Sala Mary Jackson",
                                    "description": "Duração: 4 horas (+1 hora p/ almoço) - Henrique Bastos"
                                },
                                {
                                    "title": "CODENAMES API: Implementando um jogo de tabuleiro com Django Rest Framework",
                                    "room": "Sala Katherine Johnson",
                                    "description": "Duração: 6 horas (+1 hora p/ almoço e +1 hora p/ pausa/networking) - Gerardo Soares"
                                }
                            ]
                        ],
                        [
                            "15:00", [{
                                "title": "Tutorial a definir",
                                "room": "Sala Katherine Johnson",
                                "description": "Duração: a definir - Palestrante: a definir"
                            }]
                        ]
                    ]
                }
            ],
        }
    return schedule;
  }

}
