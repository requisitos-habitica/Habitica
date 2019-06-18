const casos = {
    "Configuração": {
        "author": "Ésio Freitas",
        "images": [
            "Configuracao.png"
        ],
        "x" : 500,
        "y" : 800,
        "UCs": [
            {
                "id": "20",
                "name": "Comprar e enviar gemas",
                "description":"O usuário navega até comprar gemas e compra gemas e depois as envia",
                "actors": ["Usuário", "sistema bancário"],
                "basic_flux": [
                    "Usuário escolhe o tanto de gema que deseja",
                    "Usuário preenche os dados do cartão",
                    "Usuário confirma a compra",
                    "Usuário compra as gemas",
                    "Usuário busca outro usuário",
                    "Usuário seleciona outro usuário",
                    "Usuário escreve mensagem",
                    "Usuário envia mensagem"
                    ],
                "alternative_flux": [
                    {
                        "name": "Escolher forma de pagamento",
                        "flux": [
                            "Usuário escolhe o tanto de gema que deseja",
                            "Usuário escolhe uma forma de pagamento",
                            "Usuário confirma a compra",
                            "Usuário compra as gemas",
                            "Usuário busca outro usuário",
                            "Usuário seleciona outro usuário",
                            "Usuário escreve mensagem",
                            "Usuário envia mensagem"
                            ]
                    }
                ],
                "exeption_flux": [
                    {
                        "name": "Não tem limite",
                        "flux": [
                            "Usuário escolhe o tanto de gema que deseja",
                            "Usuário escolhe uma forma de pagamento",
                            "Usuário não tem limite",
                            "Usuário é barrado de comprar as gemas"
                        ]
                    }
                ],
                "pre_conditions": [
                    "O usuário deve estar logado, o usuário deve possuir alguma forma de pagamento"
                ],
                "pos_conditions": [
                    "Usuário recebe a quantidade de gemas que comprou."
                ]
            },
            {
                "id": "16",
                "name": "Comprar equipamentos na loja",
                "description":"O usuário navega até a loja da aplicação e adquire uma novo equipamento.",
                "actors": ["Usuário", "sistema"],
                "basic_flux": [
                    "Usuário faz login na aplicação",
                    "Usuário navega até a loja da aplicação",
                    "Usuário navega até a aba mercado, dentro da loja",
                    "Usuário avalia o custo do equipamento comparado a seu saldo atual",
                    "Usuário compra o equipamento"
                    ],
                "alternative_flux": [
                    {
                        "name": "Comprar equipamento na Loja Sazonal",
                        "flux": [
                            "Usuário faz login na aplicação",
                            "Usuário navega até a loja da aplicação",
                            "Usuário navega até a aba Loja Sazonal, dentro da loja",
                            "Usuário avalia o custo do equipamento comparado a seu saldo atual",
                            "Usuário compra o equipamento"
                            ]
                    },
                    {
                        "name": "Comprar equipamento na Viajantes do tempo",
                        "flux": [
                            "Usuário faz login na aplicação",
                            "Usuário navega até a loja da aplicação",
                            "Usuário navega até a aba Viajantes do tempo, dentro da loja",
                            "Usuário avalia o custo do equipamento comparado a seu saldo atual",
                            "Usuário compra o equipamento"
                            ]
                    }
                ],
                "exeption_flux": [
                    {
                        "name": "O equipamento a ser comprado não pertencer a classe do usuário",
                        "flux": [
                            "Usuário escolhe o tanto de gema que deseja",
                            "Usuário escolhe uma forma de pagamento",
                            "Usuário confirma a compra",
                            "Usuário compra as gemas",
                            "Usuário busca outro usuário",
                            "Usuário seleciona outro usuário",
                            "Usuário escreve mensagem",
                            "Usuário envia mensagem"
                            ]
                    }
                ],
                "pre_conditions": [
                    "O usuário deve estar logado, o usuário deve possuir alguma forma de pagamento"
                ],
                "pos_conditions": [
                    "Usuário recebe a quantidade de gemas que comprou."
                ]
            }
        ]
    },
    "Desafios": {
        "author": "Kaique Borges",
        "images": [
            "Desafios.png"
        ],
        "x" : 800,
        "y" : 700,
        "UCs": [
            {
                "id": "01",
                "name": "Criar Desafio",
                "description":"Criar um novo desafio público na comunidade do Habitica",
                "actors": ["Usuário{Criador do Desafio)", "Sistema"],
                "basic_flux": [
                    "Usuário acessa seção “Desafios”",
                    "Usuário clica em “criar desafio”",
                    "Usuário digita informações do desafio"          
                    ],
                "alternative_flux": [],
                "exeption_flux": [
                    {
                        "name": "Usuário não possui gemas para usar como prêmio do desafio",
                        "flux": [
                            "Usuário não possui gemas suficientes", 
                            "Mensagem de alerta",
                            "Desafio não é criado"                    
                        ]
                    }
                ],
                "pre_conditions": [
                    "Usuário deve estar Logado no Sistema"
                ],
                "pos_conditions": [
                    "Usuário possui um novo desafio"
                ]
            },
            {
                "id": "02",
                "name": "Declarar vencedor do Desafio",
                "description":"Declarar o vencedor de um desafio e encerrá_lo",
                "actors": [
                    "Usuário (Criador do desafio)",
                    "Usuário (Participante do desafio)",
                    "Sistema" 
                    ],
                "basic_flux": [
                    "Usuário acessa seção “Desafios”",
                    "Usuário clica em “meus desafios”",
                    "Usuário seleciona participante do desafio",
                    "Usuário clica em “declarar vencedor do desafio”"                                
                    ],
                "alternative_flux": [],
                "exeption_flux": [
                    {
                        "name": "Usuário não ser o criador do desafio",
                        "flux": [
                            "Usuário não é o criador do desafio",
                            "Mensagem de alerta",
                            "Vencedor não declarado"                                          
                        ]
                    }
                ],
                "pre_conditions": [
                    "Usuário deve estar Logado no Sistema",
                    "Usuário deve ser o criador do desafio (UC01)",
                    "Desafio deve ter participantes"
                ],
                "pos_conditions": [
                    "Desafio possui um vencedor",
                    "Desafio é encerrado"
                ]
            },
            {
                "id": "03",
                "name": "Buscar desafio",
                "description":"Buscar desafio",
                "actors": [
                    "Usuário",
                    "Sistema"                     
                    ],
                "basic_flux": [
                    "Usuário acessa seção “Desafios”",
                    "Usuário faz a busca"                                                   
                    ],
                "alternative_flux": [
                    {
                        "name": "Usuário busca desafio por nome",
                        "flux": ["(UC06)"]
                    },
                    {
                        "name": "Usuário busca desafio por categoria",
                        "flux": ["(UC07)"]
                    }
                ],
                "exeption_flux": [
                ],
                "pre_conditions": [
                    "Usuário deve estar Logado no Sistema"
                ],
                "pos_conditions": [
                    "Desafios são encontrados"
                ]
            },
            {
                "id": "04",
                "name": "Ver progresso de um participante do desafio",
                "description":"Ver progresso de um participante de um desafio público",
                "actors": [
                    "Usuário",
                    "Sistema"                     
                    ],
                "basic_flux": [
                    "Usuário acessa seção “Desafios”",
                    "Usuário acessa desafio",
                    "Usuário seleciona participante do desafio"                                                                      
                    ],
                "alternative_flux": [
                    {
                        "name": "Usuário busca desafio",
                        "flux": [
                            "Usuário busca desafio (UC03)",
                            "Usuário acessa desafio",
                            "Usuário seleciona participante do desafio"
                        ]
                    }
                ],
                "exeption_flux": [
                ],
                "pre_conditions": [
                    "Usuário deve estar Logado no Sistema",
                    "Desafio deve ter participantes"
                ],
                "pos_conditions": [
                ]
            },
            {
                "id": "05",
                "name": "Entrar em um desafio",
                "description":"Entrar em um desafio público",
                "actors": [
                    "Usuário",
                    "Sistema"                     
                    ],
                "basic_flux": [
                    "Usuário acessa seção “Desafios”",
                    "Usuário acessa desafio",
                    "Usuário clica em “participar do desafio”"                                                                                      
                    ],
                "alternative_flux": [
                    {
                        "name": "Usuário busca desafio",
                        "flux": [
                            "Usuário acessa seção “Desafios”",
                            "Usuário busca desafio (UC03)",
                            "Usuário acessa desafio",
                            "Usuário clica em “participar do desafio”"                            
                        ]
                    }
                ],
                "exeption_flux": [
                ],
                "pre_conditions": [
                    "Usuário deve estar Logado no Sistema"
                ],
                "pos_conditions": [
                    "Usuário se torna participante do desafio"
                ]
            },
            {
                "id": "06",
                "name": "Buscar desafio por nome",
                "description":"Buscar desafios por nome do desafio",
                "actors": [
                    "Usuário",
                    "Sistema"                     
                    ],
                "basic_flux": [
                    "Usuário acessa seção “Desafios”",
                    "Usuário digita texto em caixa de busca"                                                                                                       
                    ],
                "alternative_flux": [
                ],
                "exeption_flux": [
                ],
                "pre_conditions": [
                    "Usuário deve estar Logado no Sistema"
                ],
                "pos_conditions": [
                    "Lista de resultados correspondentes é retornada"
                ]
            },
            {
                "id": "07",
                "name": "Buscar desafio por categorias",
                "description":"Buscar desafio por categorias cadastradas",
                "actors": [
                    "Usuário",
                    "Sistema"                     
                    ],
                "basic_flux": [
                    "Usuário acessa seção “Desafios”",
                    "Usuário seleciona categorias de filtro"                                                                                                                        
                    ],
                "alternative_flux": [
                ],
                "exeption_flux": [
                ],
                "pre_conditions": [
                    "Usuário deve estar Logado no Sistema"
                ],
                "pos_conditions": [
                    "Lista de resultados correspondentes é retornada"
                ]
            }
        ]
    },
    "Gamificação": {
        "author": "Pedro Féo",
        "images": [
            "GamificacaoV1.png",
            "GamificacaoV2.png"
        ],
        "x" : 1500,
        "y" : 1000,
        "UCs": [
            {
                "id": "01",
                "name": "Obter Tomo de Missão",
                "description":"Obter um Item do Tipo Tomo de Missão para que possa realizar missões",
                "actors": ["Usuário", "Sistema"],
                "basic_flux": [
                    "Usuário Passar de nível", 
                    "Usuário obtém Tomo de Missão"                     
                    ],
                "alternative_flux": [
                    {
                        "name": "Obter Tomo através da Loja",
                        "flux": [
                            "Usuário acessa a loja",
                            "Usuário procura por Tomos de Missão",
                            "Ou Usuário compra Tomo de Missão com Moedas",
                            "Ou Usuário compra Tomo de Missão com Gemas",
                            "Usuário obtém Tomo de Missão"                       
                        ]
                    }
                ],
                "exeption_flux": [
                    {
                        "name": "Obter Tomo de Missão Global",
                        "flux": [
                            "Sistema inicia Evento Global",
                            "Usuário obtém Tomo de Missão Global"                                       
                        ]
                    }
                ],
                "pre_conditions": [
                    "Usuário deve estar Logado no Sistema"
                ],
                "pos_conditions": [
                    "Usuário apresenta item Tomo de Missão no seu inventário"
                ]
            },
            {
                "id": "02",
                "name": "Usar Tomo de Missão",
                "description":"Usuário utiliza ação do Item Tomo de Missão presente no seu inventário",
                "actors": ["Usuário"],
                "basic_flux": [
                    "Usuário acessa seu Inventário",
                    "Usuário acessa aba Missões",
                    "Usuário procura Tomo de Missão", 
                    "Usuário seleciona Tomo de Missão",
                    "Usuário convida seu grupo para participar da Missão"                                  
                    ],
                "alternative_flux": [
                    {
                        "name": "Usuário se encontra na tela de Missões",
                        "flux": [
                            "Usuário procura Tomo de Missão", 
                            "Usuário seleciona Tomo de Missão",
                            "Usuário convida seu grupo para participar da Missão"                                         
                        ]
                    }
                ],
                "exeption_flux": [
                    {
                        "name": "Missão já está em andamento",
                        "flux": [
                            "Usuário acessa seu Inventário",
                            "Usuário acessa aba Missões",
                            "Usuário procura Tomo de Missão", 
                            "Usuário seleciona Tomo de Missão",
                            "Sistema notifica o Usuário de que seu Grupo já está em Missão"                                                          
                        ]
                    }
                ],
                "pre_conditions": [
                    "Usuário deve estar Logado no Sistema",
                    "Usuário precisa estar em um Grupo",
                    "Usuário deve possuir um Tomo de Missão"
                ],
                "pos_conditions": [
                    "Usuário deverá convidar seu respectivo Grupo para realizar a Missão selecionada"
                ]
            },
            {
                "id": "03",
                "name": "Aceitar Convite de Missão",
                "description":"Membro do Grupo deve aceitar o convite de Missão enviado por outro membro do Grupo",
                "actors": ["Membros do Grupo"],
                "basic_flux": [
                    "Membro do Grupo recebe Notificação",
                    "Membro do Grupo acessa página grupo",
                    "Membro do Grupo Aceita convite"                               
                    ],
                "alternative_flux": [
                    {
                        "name": "Usuário visualiza descrição da Missão",
                        "flux": [
                            "Membro do Grupo recebe Notificação",
                            "Membro do Grupo acessa página grupo",
                            "Membro do Grupo Seleciona Missão",
                            "Membro do Grupo visualiza descrição da Missão",
                            "Membro do Grupo aceita convite"
                                           
                        ]
                    }
                ],
                "exeption_flux": [
                    {
                        "name": "Membro do Grupo Rejeita Convite ",
                        "flux": [
                            "Membro do Grupo recebe Notificação",
                            "Membro do Grupo acessa página grupo",
                            "Membro do Grupo rejeita convite"                                                          
                        ]
                    },
                    {
                        "name": "Membro do Grupo Rejeita Convite após ler a descrição",
                        "flux": [
                            "Membro do Grupo recebe Notificação",
                            "Membro do Grupo acessa página grupo",
                            "Membro do Grupo Seleciona Missão",
                            "Membro do Grupo visualiza descrição da Missão",
                            "Membro do Grupo rejeita convite"                                                                              
                        ]
                    },
                    {
                        "name": "Membro do Grupo aceita convite duas vezes",
                        "flux": [
                            "Membro do Grupo recebe Notificação",
                            "Membro do Grupo acessa página grupo",
                            "Membro do Grupo aceita convite",
                            "Membro do Grupo aceita convite de novo",
                            "Sistema avisa o Membro do Grupo que já está participando da missão"                                                                            
                        ]
                    },
                    {
                        "name": "Membro do Grupo Rejeita Convite duas vezes",
                        "flux": [
                            "Membro do Grupo recebe Notificação",
                            "Membro do Grupo acessa página grupo",
                            "Membro do Grupo Seleciona Missão",
                            "Membro do Grupo visualiza descrição da Missão",
                            "Membro do Grupo rejeita convite",
                            "Membro do Grupo rejeita convite de novo",
                            "Sistema avisa o Membro do Grupo que já está participando da missão"                                                                                
                        ]
                    }
                ],
                "pre_conditions": [
                    "Usuário deve estar logado no sistema",
                    "Usuário deve pertencer a um grupo",
                    "Usuário deve ter recebido um convite de Missão"
                ],
                "pos_conditions": [
                    "Usuário deverá ter aceito a sua participação na Missão"
                ]
            },
            {
                "id": "04",
                "name": "Começar Missão",
                "description":"Após os Membros do Grupo terem aceito os convites de Missão a Missão deverá iniciar",
                "actors": ["Usuário", "Membro do Grupo"],
                "basic_flux": [
                    "Usuário acessa a página do grupo",
                    "Usuário visualiza detalhes da Missão",
                    "Usuário inicia Missão"                                 
                    ],
                "alternative_flux": [
                    {
                        "name": "Missão é iniciada automaticamente",
                        "flux": [
                            "Todos os Membros do Grupo aceitam a Missão",
                            "Missão é iniciada automaticamente"                                        
                        ]
                    }
                ],
                "exeption_flux": [
                    {
                        "name": "Usuário sozinho no grupo",
                        "flux": [
                            "Ao convidar membros do grupo Missão é iniciada automaticamente"                                      
                        ]
                    }
                ],
                "pre_conditions": [
                    "Usuário deve estar logado no sistema",
                    "Usuário deve estar em um grupo",
                    "Usuário deve ter enviado o convite de missão"
                ],
                "pos_conditions": [
                    "A missão terá iniciado", 
                    "Membros do Grupo estarão participando da Missão"
                ]
            },
            {
                "id": "05",
                "name": "Fazer Batalha de Chefão",
                "description":"Grupo deverá participar de uma missão do tipo Batalha de Chefão, onde enfrentarão um Chefão",
                "actors": [
                    "Membros do Grupo",
                    "Chefão"
                ],
                "basic_flux": [
                    "Batalha de Chefão é iniciada quando a Missão inicia",
                    "Chefão aparece",
                    "Membro do Grupo faz Tarefa",
                    "Chefão perde vida",
                    "Chefão morre"                                 
                    ],
                "alternative_flux": [
                    {
                        "name": "Membro do Grupo leva dano",
                        "flux": [
                            "Batalha de Chefão é iniciada quando a Missão inicia",
                            "Chefão aparece",
                            "Membro do Grupo não faz Tarefa Diária",
                            "Membro do Grupo perde vida",
                            "Membro do Grupo morre"                                           
                        ]
                    }
                ],
                "exeption_flux": [
                    {
                        "name": "Membros do Grupo não possuem Tarefas",
                        "flux": [
                            "Batalha de Chefão é iniciada quando a Missão inicia",
                            "Chefão aparece",
                            "Membro do Grupo não possui tarefa para realizar", 
                            "Nada acontece"                                                           
                        ]
                    }
                ],
                "pre_conditions": [
                    "Membro do Grupo deve estar logado no sistema", 
                    "Missão deve ser do tipo Batalha de Chefão"
                ],
                "pos_conditions": [
                    "Membros do grupo finalizam Missão",
                    "Membros do grupo recebem Recompensas",
                    "Membros do grupo recebem Medalha"
                ]
            },
            {
                "id": "06",
                "name": "Fazer Missão de Coleta",
                "description":"Membros do grupo realizarão missão do tipo Missão de Coleta, onde coletarão itens ",
                "actors": ["Membros do Grupo"],
                "basic_flux": [
                    "Coleta de Itens é iniciada quando a Missão inicia",
                    "Requisitos para completar a missão aparecem",
                    "Membro do Grupo faz Tarefa",
                    "Membro do grupo adquire item",
                    "Membros do Grupo coletam todos os itens"                                
                    ],
                "alternative_flux": [
                    {
                        "name": "Membro do grupo não consegue item",
                        "flux": [
                            "Coleta de Itens é iniciada quando a Missão inicia",
                            "Requisitos para completar a missão aparecem",
                            "Membro do Grupo faz Tarefa",
                            "Membro do grupo não adquire item"                                           
                        ]
                    }
                ],
                "exeption_flux": [
                    {
                        "name": "Membros do grupo não possuem tarefas",
                        "flux": [
                            "Coleta de Itens é iniciada quando a Missão inicia",
                            "Requisitos para completar a missão aparecem",
                            "Membro do Grupo não possui tarefa para realizar",
                            "Nada acontece"                                                         
                        ]
                    }
                ],
                "pre_conditions": [
                    "Membro do Grupo deve estar logado no sistema", 
                    "Missão deve ser do tipo Missão de Coleta"
                ],
                "pos_conditions": [
                    "Membros do grupo finalizam Missão",
                    "Membros do grupo recebem Recompensas",
                    "Membros do grupo recebem Medalha"
                ]
            }
        ]
    },
    "Guia de Contribuição": {
        "author": "Saleh Nazih",
        "images": [
            "GuiaContribuicaoV1.png",
            "GuiaContribuicaoV2.png"
        ],
        "x" : 1000,
        "y" : 800,
        "UCs": [
            {
                "id": "01",
                "name": "Contribuir para o código do Habitica",
                "description":"Algum contribuidor busca hotfix ou implementa novas funcionalidades dentro do Habitica.",
                "actors": ["Contribuidor", "Mantenedor"],
                "basic_flux": [
                    "Contribuidor busca uma nova funcionalidade ou corrigir um bug",
                    "Contribuidor forka o repositório do Habitica",
                    "Contribuidor desenvolve a nova funcionalidade",
                    "Contribuidor abre um Pull Request para a comunidade Habitica avaliar",
                    "Mantenedor Aprova o Pull Request"                        
                    ],
                "alternative_flux": [
                    {
                        "name": "Contribuidor corrige um bug",
                        "flux": [
                            "Contribuidor busca uma nova funcionalidade ou corrigir um bug",
                            "Contribuidor forka o repositório do Habitica",
                            "Contribuidor corrige um bug",
                            "Contribuidor abre um Pull Request para a comunidade Habitica avaliar",
                            "Mantenedor Aprova o Pull Request"                                                   
                        ]
                    }
                ],
                "exeption_flux": [
                    {
                        "name": "Contribuição não realizada por bug",
                        "flux": [
                            "Mantenedor identifica um bug no código",
                            "Mantenedor informa o bug para o Contribuidor"                                                                 
                        ]
                    },
                    {
                        "name": "Contribuição não realizada por código mal escrito",
                        "flux": [
                            "Mantenedor identifica um código ruim",
                            "Mantenedor solicita que o Contribuidor siga o Padrão do Projeto"                                    
                        ]
                    }
                ],
                "pre_conditions": [
                    "Contribuidor deve ter uma conta no Github",
"                   Contribuidor deve ter uma noção de programação"
                ],
                "pos_conditions": [
                    "Contribuidor deve ter uma contribuição feita no Habitica"
                ]
            },
            {
                "id": "02",
                "name": "Contribuir para a Wiki do Habitica",
                "description":"Contribuir para os textos da Wiki do Habitica, aumentando a quantidade de informações sobre a aplicação",
                "actors": ["Contribuidor"],
                "basic_flux": [
                    "Contribuidor lê a Wiki",
                    "Contribuidor checa se uma informação não possui dentro da Wiki",
                    "Contribuidor insere um novo tópico dentro da Wiki"                                               
                    ],
                "alternative_flux": [
                    {
                        "name": "Contribuidor corrige um tópico",
                        "flux": [
                            "Contribuidor lê a Wiki",
                            "Contribuidor corrige o tópico da Wiki"                                        
                        ]
                    }
                ],
                "exeption_flux": [
                    {
                        "name": "Contribuidor não conhece o idioma",
                        "flux": [
                            "Contribuidor não conhece o idioma do texto escrito na Wiki"                                                     
                        ]
                    }
                ],
                "pre_conditions": [
                    "Contribuidor deve ter uma conta no Wikia"
                ],
                "pos_conditions": [
                    "Uma nova contribuição foi realizada para o Habitica"
                ]
            },
            {
                "id": "03",
                "name": "Contribuindo para os Textos",
                "description":"Contribuindo para a construção de novas narrativas para o Habitica",
                "actors": ["Contribuidor"],
                "basic_flux": [
                    "Contribuidor lê o guia de permissões do Habitica",
                    "Contribuidor envia um email para o Habitica",
                    "Contribuidor redige a história",
                    "Contribuidor envia a história no Board do Trello do Habitica"                                            
                    ],
                "alternative_flux": [
                ],
                "exeption_flux": [
                    {
                        "name": "Contribuidor não atende pré-requisitos",
                        "flux": [
                            "Habitica envia um email para o Contribuidor informando que ele não atende os pré-requisitos de contribuição",
                            "Contribuidor não pode redigir História para o Habitica"                       
                        ]
                    },
                    {
                        "name": "História má avaliada",
                        "flux": [
                            "A História do Contribuidor não é aceita no Board do Trello do Habitica"                                                                            
                        ]
                    }
                ],
                "pre_conditions": [
                    "Ter acesso ao Board no Trello do Habitica"
                ],
                "pos_conditions": [
                    "História é publicada dentro das aplicações do Habitica"
                ]
            },
            {
                "id": "04",
                "name": "Contribuindo para as Artes",
                "description":"Contribuindo para a construção de novas artes para o Habitica",
                "actors": ["Contribuidor"],
                "basic_flux": [
                    "Contribuidor lê o guia de permissões do Habitica",
                    "Contribuidor envia um email para o Habitica",
                    "Contribuidor produz a nova arte",
                    "Contribuidor envia a arte no Board do Trello do Habitica"                                                
                    ],
                "alternative_flux": [
                ],
                "exeption_flux": [
                    {
                        "name": "Contribuidor não atende pré-requisitos",
                        "flux": [
                            "Habitica envia um email para o Contribuidor informando que ele não atende os pré-requisitos de contribuição",
                            "Contribuidor não pode produzir a arte para o Habitica"
                        ]
                    },
                    {
                        "name": "Arte má avaliada",
                        "flux": [
                            "A Arte do Contribuidor não é aceita no Board do Trello do Habitica"
                        ]
                    }
                ],
                "pre_conditions": [
                    "Ter acesso a ferramentas de construção de artes",
                    "Ter acesso ao Board do Trello do Habitica"                    
                ],
                "pos_conditions": [
                    "A Arte é publicada dentro das aplicações do Habitica"
                ]
            },
            {
                "id": "05",
                "name": "Contribuindo para a Tradução",
                "description":"Contribuindo para a tradução das funcionalidades do Habitica",
                "actors": [
                    "Contribuidor",
                    "Comunidade"
                ],
                "basic_flux": [
                    "Contribuidor verifica se o idioma desejado está na lista do projeto",
                    "Contribuidor solicita a tradução de seu idioma no Board no Trello do Habitica",
                    "Contribuidor traduz uma funcionalidade"	                              
                    ],
                "alternative_flux": [
                    {
                        "name": "Idioma já estar na lista do projeto",
                        "flux": [
                            "Contribuidor checa se o idioma desejado está na lista do projeto",
                            "Contribuidor traduz uma funcionalidade"                                         
                        ]
                    }
                ],
                "exeption_flux": [
                    {
                        "name": "Tradução errada",
                        "flux": [
                            "Comunidade identifica que uma tradução foi feita de maneira errada",
                            "Comunidade envia uma mensagem para o Contribuidor"                                                      
                        ]
                    },
                    {
                        "name": "Idioma rejeitado",
                        "flux": [
                            "Comunidade rejeita o idioma solicitado pelo Contribuidor",
                            "Comunidade envia uma mensagem para o Contribuidor"                                                     
                        ]
                    }
                ],
                "pre_conditions": [
                    "Contribuidor deve ter acesso ao Transifex",
                    "Contribuidor deve ter acesso ao Board no Trello do Habitica",
                    "Contribuidor deve ter acesso ao Webplate"                    
                ],
                "pos_conditions": [
                    "Uma nova funcionalidade é traduzida para o Habitica"
                ]
            }
        ]
    },
    "Inventário": {
        "author": "Rogério Júnior",
        "images": [
            "InventarioV1.png",
            "InventarioV2.png",
            "InventarioV3.png"
        ],
        "x" : 1000,
        "y" : 1000,
        "UCs": [
            {
                "id": "20",
                "name": "Chocar Ovos de Pet",
                "description":"Chocar ovos de pet com poção disponíveis no inventário para obter novo pet",
                "actors": ["Usuário", "Sistema"],
                "basic_flux": [
                    "Usuário aplica poção de eclosão no ovo",
                    "Obter novo pet"                                 
                    ],
                "alternative_flux": [
                    {
                        "name": "Realizar tarefa ou missão",
                        "flux": [
                            "Usuário realiza tarefa ou missão",
                            "Usuário pode obter ovo e/ou poção de eclosão"                                                                                          
                        ]
                    },
                    {
                        "name": "Comprar Ovo e/ou Poção Eclosão",
                        "flux": [
                            "Usuário acessa a loja", 
                            "Usuário procura por ovo e/ou poção de eclosão",
                            "Usuário compra ovo e/ou poção de eclosão com moedas",
                            "Usuário obtém ovo e/ou poção de eclosão"                                                                      
                        ]
                    }
                ],
                "exeption_flux": [
                    {
                        "name": "Usuário não possui gemas para adquirir ovos de pet e/ou poção de eclosão",
                        "flux": [
                            "Usuário não possui gemas suficientes",
                            "Usuário não obtém ovo e/ou poção de eclosão"                                                                                     
                        ]
                    }
                ],
                "pre_conditions": [
                    "Usuário deve estar Logado no Sistema",
                    "Usuário deve possui ovo de pet",
                    "Usuário deve possui poção de eclosão"            
                ],
                "pos_conditions": [
                    "Usuário possui um novo pet"
                ]
            },
            {
                "id": "21",
                "name": "Alimentar Pet",
                "description":"Contribuir para os textos da Wiki do Habitica, aumentando a quantidade de informações sobre a aplicação",
                "actors": ["Usuário", "Sistema", "Pet"],
                "basic_flux": [
                    "Usuário alimenta pet",
                    "Pet, dependendo do nível, pode evoluir"                                                           
                    ],
                "alternative_flux": [
                    {
                        "name": "Comprar Comida",
                        "flux": [
                            "Usuário acessa a loja", 
                            "Usuário procura comida",
                            "Usuário compra comida com gemas",
                            "Usuário obtém comida"                                                         
                        ]
                    },
                    {
                        "name": "Realizar tarefa ou missão",
                        "flux": [
                            "Usuário realiza tarefa ou missão",
                            "Usuário pode obter comida"                                                                             
                        ]
                    }
                ],
                "exeption_flux": [
                    {
                        "name": "Contribuidor não conhece o idioma",
                        "flux": [
                            "Usuário não possui gemas suficientes",
                            "Usuário não obtém comida"                                                    
                        ]
                    }
                ],
                "pre_conditions": [
                        "Usuário deve estar Logado no Sistema",
                        "Usuário deve possui comida"            
                ],
                "pos_conditions": [
                    "Pet pode ser evoluído, dependendo do seu nível"
                ]
            },
            {
                "id": "22",
                "name": "Propor desafios",
                "description":"Propor desafios para os grupos para poder obter recompensas",
                "actors": ["Usuário", "Sistema"],
                "basic_flux": [
                    "Usuário propõe desafio",
                    "Usuário obtém recompensas"                                         
                    ],
                "alternative_flux": [
                    {
                        "name": "Obter Pergaminho de Desafios",
                        "flux": [
                            "Usuário acessa a loja",
                            "Usuário procura por pergaminho de desafio",
                            "Usuário compra pergaminho de desafio com gemas",
                            "Usuário obtém pergaminho"                                          
                        ]
                    },
                    {
                        "name": "Realizar tarefa ou missãoa",
                        "flux": [
                            "Usuário realiza tarefa ou missão",
                            "Usuário pode obter pergaminho de desafio"                                                                         
                        ]
                    }
                ],
                "exeption_flux": [
                    {
                        "name": "Usuário não possui gemas",
                        "flux": [
                            "Usuário não possui gemas suficientes",
                            "Usuário não obtém pergaminho de desafio"                                                            
                        ]
                    }
                ],
                "pre_conditions": [
                    "Usuário deve estar Logado no Sistema",
                    "Usuário deve possuir pergaminho de desafio"
                ],
                "pos_conditions": [
                    "Usuário ganha recompensas"
                ]
            },
            {
                "id": "23",
                "name": "Equipar avatar",
                "description":"Personalizar avatar com os equipamentos e/ou montarias e/ou mascotes disponíveis no inventário",
                "actors": ["Usuário", "Sistema", "Avatar"],
                "basic_flux": [
                    "Usuário equipa o avatar"                                           
                    ],
                "alternative_flux": [
                    {
                        "name": "Obter equipamentos",
                        "flux": [
                            "Usuário acessa a loja",
                            "Usuário procura por equipamento",
                            "Usuário compra equipamento com moedas",
                            "Usuário obtém equipamento"                     
                        ]
                    },
                    {
                        "name": "Obter Mascote",
                        "flux": [
                            "UC01 - Chocar Ovo de Pet"
                        ]
                    },
                    {
                        "name": "Obter montaria",
                        "flux": [
                            "UC02 - Alimentar Pet"
                        ]
                    },
                    {
                        "name": "Realizar tarefa ou missão",
                        "flux": [
                            "Usuário realiza tarefa ou missão",
                            "Usuário pode obter equipamento"
                        ]
                    }
                ],
                "exeption_flux": [
                    {
                        "name": "Usuário não possui gemas",
                        "flux": [
                            "Usuário não possui gemas suficientes",
                            "Usuário não obtém equipamentos"                    
                        ]
                    },
                    {
                        "name": "Usuário não possui mascote",
                        "flux": [
                            "UC01 - Chocar Ovo de Pet"
                        ]
                    },
                    {
                        "name": "Usuário não possui montaria",
                        "flux": [
                            "UC02 - Alimentar Pet"
                        ]
                    }
                ],
                "pre_conditions": [
                    "Usuário deve estar Logado no Sistema",
                    "Usuário deve possuir pergaminho de desafio"                               
                ],
                "pos_conditions": [
                    "Avatar personalizado"
                ]
            }
        ]
    },
    "Loja": {
        "author": "Lucas Dutra",
        "images": [
        ],
        "x" : 1000,
        "y" : 1000,
        "UCs": [
            {
                "id": "15",
                "name": "Comprar missão na loja",
                "description":"O usuário navega até a loja da aplicação e adquire uma nova missão.",
                "actors": ["Usuário", "Sistema"],
                "basic_flux": [
                    "Usuário faz login na aplicação",
                    "Usuário navega até a loja da aplicação",
                    "Usuário navega até a aba missões, dentro da loja",
                    "Usuário avalia o custo da missão comparado a seu saldo atual",
                    "Usuário compra a missão"                                           
                    ],
                "alternative_flux": [
                    {
                        "name": "Comprar missão na Loja Sazonal",
                        "flux": [
                            "Usuário faz login na aplicação",
                            "Usuário navega até a loja da aplicação",
                            "Usuário navega até a aba Loja Sazonal, dentro da loja",
                            "Usuário avalia o custo da missão comparado a seu saldo atual",
                            "Usuário compra a missão"                                                                                                             
                        ]
                    }
                ],
                "exeption_flux": [
                    {
                        "name": "Missão a ser comprada é de um nível maior que a do usuário",
                        "flux": [
                            "Usuário faz login na aplicação",
                            "Usuário navega até a loja da aplicação",
                            "Usuário navega até a aba Missões, dentro da loja",
                            "Usuário avalia o custo da missão",
                            "Usuário é bloqueado por ser de um nível inferior ao requerido pela missão"                                                                                                       
                        ]
                    }
                ],
                "pre_conditions": [
                    "O usuário deve estar logado, o usuário deve possuir moedas ou gemas"         
                ],
                "pos_conditions": [
                    "Usuário recebe uma nova missão para poder completar."
                ]
            },
            {
                "id": "16",
                "name": "Comprar equipamentos na loja",
                "description":"O usuário navega até a loja da aplicação e adquire uma novo equipamento.",
                "actors": ["Usuário", "Sistema"],
                "basic_flux": [
                    "Usuário faz login na aplicação",
                    "Usuário navega até a loja da aplicação",
                    "Usuário navega até a aba mercado, dentro da loja",
                    "Usuário avalia o custo do equipamento comparado a seu saldo atual",
                    "Usuário compra o equipamento"                                                           
                    ],
                "alternative_flux": [
                    {
                        "name": "Comprar equipamento na Loja Sazonal",
                        "flux": [
                            "Usuário faz login na aplicação",
                            "Usuário navega até a loja da aplicação",
                            "Usuário navega até a aba Loja Sazonal, dentro da loja",
                            "Usuário avalia o custo do equipamento comparado a seu saldo atual",
                            "Usuário compra o equipamento"                                                                                              
                        ]
                    },
                    {
                        "name": "Comprar equipamento na Viajantes do tempo",
                        "flux": [
                            "Usuário faz login na aplicação",
                            "Usuário navega até a loja da aplicação",
                            "Usuário navega até a aba Viajantes do tempo, dentro da loja",
                            "Usuário avalia o custo do equipamento comparado a seu saldo atual",
                            "Usuário compra o equipamento"                                                                                                 
                        ]
                    }
                ],
                "exeption_flux": [
                    {
                        "name": "O equipamento a ser comprado não pertencer a classe do usuário",
                        "flux": [
                            "Usuário faz login na aplicação",
                            "Usuário navega até a loja da aplicação",
                            "Usuário navega até a aba mercado, dentro da loja",
                            "Usuário avalia o custo do equipamento comparado a seu saldo atual",
                            "Usuário é bloqueado de comprar o equipamento por não pertencer a sua classe"                                                                      
                        ]
                    }
                ],
                "pre_conditions": [
                        "O usuário deve estar logado"          
                ],
                "pos_conditions": [
                    "Usuário recebe um novo equipamento para poder equipar ao seu avatar."
                ]
            },
            {
                "id": "17",
                "name": "Adquirir Ampulhetas Místicas",
                "description":"O usuário recebe ampulhetas místicas ao completar uma certa ação",
                "actors": ["Usuário", "Sistema", "Bancos"],
                "basic_flux": [
                    "Usuário faz login na aplicação",
                    "Usuário navega até a aba usuário - assinatura",
                    "Usuário preenche as informações necessárias para efetuar a assinatura",
                    "O sistema executa a compra",
                    "O banco valida a compra",
                    "O usuário renova a assinatura por 3 meses",
                    "O sistema recompensa o usuário com uma certa quantia de ampulhetas místicas"                                                     
                    ],
                "alternative_flux": [
                ],
                "exeption_flux": [
                    {
                        "name": "O usuário não completa os 3 meses de assinatura",
                        "flux": [
                            "Usuário faz login na aplicação",
                            "Usuário navega até a aba usuário - assinatura",
                            "Usuário preenche as informações necessárias para efetuar a assinatura",
                            "O sistema executa a compra",
                            "O banco valida a compra",
                            "O usuário não renova a assinatura",
                            "O sistema não recompensa o usuário com uma certa quantia de ampulhetas místicas"                                                                               
                        ]
                    },
                    {
                        "name": " O usuário não completa a compra da assinatura",
                        "flux": [
                            "Usuário faz login na aplicação",
                            "Usuário navega até a aba usuário - assinatura",
                            "Usuário preenche as informações necessárias para efetuar a assinatura",
                            "O sistema executa a compra",
                            "O banco não valida a compra",
                            "O usuário não se torna assinante",
                            "O sistema não recompensa o usuário com uma certa quantia de ampulhetas místicas"                                                                                                  
                        ]
                    }
                ],
                "pre_conditions": [
                    "O usuário deve estar logado, o usuário deve possuir um cartão de crédito"
                ],
                "pos_conditions": [
                    "Usuário recebe ampulhetas místicas para poder utilizar in-app."
                ]
            },
            {
                "id": "18",
                "name": "Adquirir moedas",
                "description":"O usuário recebe moedas ao completar uma certa ação",
                "actors": ["Usuário", "Sistema"],
                "basic_flux": [
                    "Usuário faz login na aplicação",
                    "Usuário navega até a aba de tarefas",
                    "Usuário clica para concluir uma tarefa já realizada",
                    "O sistema recompensa o usuário com uma certa quantia de moedas"                                         
                    ],
                "alternative_flux": [
                    {
                        "name": "Adquirir moedas completando missões",
                        "flux": [
                            "Usuário faz login na aplicação",
                            "Usuário inicia uma nova missão",
                            "Usuário conclui a missão",
                            "Sistema recompensa o usuário com uma quantia de moedas"                                         
                        ]
                    },
                    {
                        "name": "Adquirir moedas vendendo itens",
                        "flux": [
                            "Usuário faz login na aplicação",
                            "Usuário navega até a aba loja",
                            "Usuário escolhe o item a ser vendido",
                            "Usuário escolhe a quantidade daquele item que será vendido",
                            "Usuário vende o item",
                            "Sistema recompensa o usuário com uma quantia de moedas"                     
                        ]
                    }
                ],
                "exeption_flux": [
                ],
                "pre_conditions": [
                    "O usuário deve estar logado"                               
                ],
                "pos_conditions": [
                    "Usuário recebe moedas para poder utilizar in-app."
                ]
            }
        ]
    }
}
export default casos