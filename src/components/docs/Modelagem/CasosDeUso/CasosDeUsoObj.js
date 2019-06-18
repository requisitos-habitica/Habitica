const casos = {
    "Configuração": {
        "author": "Ésio Freitas",
        "images": [
            "Configuracao.png"
        ],
        "UCs": [
            {
                "id": "20",
                "name": "Comprar e enviar gemas",
                "description":"O usuário navega até comprar gemas e compra gemas e depois as envia",
                "actors": ["Usuário", "sistema bancário"],
                "basic-flux": [
                    "Usuário escolhe o tanto de gema que deseja",
                    "Usuário preenche os dados do cartão",
                    "Usuário confirma a compra",
                    "Usuário compra as gemas",
                    "Usuário busca outro usuário",
                    "Usuário seleciona outro usuário",
                    "Usuário escreve mensagem",
                    "Usuário envia mensagem"
                    ],
                "alternative-flux": [
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
                "exeption flux": [
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
                "pre-conditions": [
                    "O usuário deve estar logado, o usuário deve possuir alguma forma de pagamento"
                ],
                "pos-conditions": [
                    "Usuário recebe a quantidade de gemas que comprou."
                ]
            },
            {
                "id": "16",
                "name": "Comprar equipamentos na loja",
                "description":"O usuário navega até a loja da aplicação e adquire uma novo equipamento.",
                "actors": ["Usuário", "sistema"],
                "basic-flux": [
                    "Usuário faz login na aplicação",
                    "Usuário navega até a loja da aplicação",
                    "Usuário navega até a aba mercado, dentro da loja",
                    "Usuário avalia o custo do equipamento comparado a seu saldo atual",
                    "Usuário compra o equipamento"
                    ],
                "alternative-flux": [
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
                "exeption flux": [
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
                "pre-conditions": [
                    "O usuário deve estar logado, o usuário deve possuir alguma forma de pagamento"
                ],
                "pos-conditions": [
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
        "UCs": [
            {
                "id": "01",
                "name": "Criar Desafio",
                "description":"Criar um novo desafio público na comunidade do Habitica",
                "actors": ["Usuário{Criador do Desafio)", "Sistema"],
                "basic-flux": [
                    "Usuário acessa seção “Desafios”",
                    "Usuário clica em “criar desafio”",
                    "Usuário digita informações do desafio"          
                    ],
                "alternative-flux": [],
                "exeption flux": [
                    {
                        "name": "Usuário não possui gemas para usar como prêmio do desafio",
                        "flux": [
                            "Usuário não possui gemas suficientes", 
                            "Mensagem de alerta",
                            "Desafio não é criado"                    
                        ]
                    }
                ],
                "pre-conditions": [
                    "Usuário deve estar Logado no Sistema"
                ],
                "pos-conditions": [
                    "Usuário possui um novo desafio"
                ]
            },
            {
                "id": "02",
                "name": "Declarar vencedor do Desafio",
                "description":"Declarar o vencedor de um desafio e encerrá-lo",
                "actors": [
                    "Usuário (Criador do desafio)",
                    "Usuário (Participante do desafio)",
                    "Sistema" 
                    ],
                "basic-flux": [
                    "Usuário acessa seção “Desafios”",
                    "Usuário clica em “meus desafios”",
                    "Usuário seleciona participante do desafio",
                    "Usuário clica em “declarar vencedor do desafio”"                                
                    ],
                "alternative-flux": [],
                "exeption flux": [
                    {
                        "name": "Usuário não ser o criador do desafio",
                        "flux": [
                            "Usuário não é o criador do desafio",
                            "Mensagem de alerta",
                            "Vencedor não declarado"                                          
                        ]
                    }
                ],
                "pre-conditions": [
                    "Usuário deve estar Logado no Sistema",
                    "Usuário deve ser o criador do desafio (UC01)",
                    "Desafio deve ter participantes"
                ],
                "pos-conditions": [
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
                "basic-flux": [
                    "Usuário acessa seção “Desafios”",
                    "Usuário faz a busca"                                                   
                    ],
                "alternative-flux": [
                    {
                        "name": "Usuário busca desafio por nome",
                        "flux": ["(UC06)"]
                    },
                    {
                        "name": "Usuário busca desafio por categoria",
                        "flux": "(UC07)"
                    }
                ],
                "exeption flux": [
                ],
                "pre-conditions": [
                    "Usuário deve estar Logado no Sistema"
                ],
                "pos-conditions": [
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
                "basic-flux": [
                    "Usuário acessa seção “Desafios”",
                    "Usuário acessa desafio",
                    "Usuário seleciona participante do desafio"                                                                      
                    ],
                "alternative-flux": [
                    {
                        "name": "Usuário busca desafio",
                        "flux": [
                            "Usuário busca desafio (UC03)",
                            "Usuário acessa desafio",
                            "Usuário seleciona participante do desafio"
                        ]
                    }
                ],
                "exeption flux": [
                ],
                "pre-conditions": [
                    "Usuário deve estar Logado no Sistema",
                    "Desafio deve ter participantes"
                ],
                "pos-conditions": [
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
                "basic-flux": [
                    "Usuário acessa seção “Desafios”",
                    "Usuário acessa desafio",
                    "Usuário clica em “participar do desafio”"                                                                                      
                    ],
                "alternative-flux": [
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
                "exeption flux": [
                ],
                "pre-conditions": [
                    "Usuário deve estar Logado no Sistema"
                ],
                "pos-conditions": [
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
                "basic-flux": [
                    "Usuário acessa seção “Desafios”",
                    "Usuário digita texto em caixa de busca"                                                                                                       
                    ],
                "alternative-flux": [
                ],
                "exeption flux": [
                ],
                "pre-conditions": [
                    "Usuário deve estar Logado no Sistema"
                ],
                "pos-conditions": [
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
                "basic-flux": [
                    "Usuário acessa seção “Desafios”",
                    "Usuário seleciona categorias de filtro"                                                                                                                        
                    ],
                "alternative-flux": [
                ],
                "exeption flux": [
                ],
                "pre-conditions": [
                    "Usuário deve estar Logado no Sistema"
                ],
                "pos-conditions": [
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
        "UCs": [
            {
                "id": "01",
                "name": "Obter Tomo de Missão",
                "description":"Obter um Item do Tipo Tomo de Missão para que possa realizar missões",
                "actors": ["Usuário", "Sistema"],
                "basic-flux": [
                    "Usuário Passar de nível", 
                    "Usuário obtém Tomo de Missão"                     
                    ],
                "alternative-flux": [
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
                "exeption flux": [
                    {
                        "name": "Obter Tomo de Missão Global",
                        "flux": [
                            "Sistema inicia Evento Global",
                            "Usuário obtém Tomo de Missão Global"                                       
                        ]
                    }
                ],
                "pre-conditions": [
                    "Usuário deve estar Logado no Sistema"
                ],
                "pos-conditions": [
                    "Usuário apresenta item Tomo de Missão no seu inventário"
                ]
            },
            {
                "id": "02",
                "name": "Usar Tomo de Missão",
                "description":"Usuário utiliza ação do Item Tomo de Missão presente no seu inventário",
                "actors": ["Usuário"],
                "basic-flux": [
                    "Usuário acessa seu Inventário",
                    "Usuário acessa aba Missões",
                    "Usuário procura Tomo de Missão", 
                    "Usuário seleciona Tomo de Missão",
                    "Usuário convida seu grupo para participar da Missão"                                  
                    ],
                "alternative-flux": [
                    {
                        "name": "Usuário se encontra na tela de Missões",
                        "flux": [
                            "Usuário procura Tomo de Missão", 
                            "Usuário seleciona Tomo de Missão",
                            "Usuário convida seu grupo para participar da Missão"                                         
                        ]
                    }
                ],
                "exeption flux": [
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
                "pre-conditions": [
                    "Usuário deve estar Logado no Sistema",
                    "Usuário precisa estar em um Grupo",
                    "Usuário deve possuir um Tomo de Missão"
                ],
                "pos-conditions": [
                    "Usuário deverá convidar seu respectivo Grupo para realizar a Missão selecionada"
                ]
            },
            {
                "id": "03",
                "name": "Aceitar Convite de Missão",
                "description":"Membro do Grupo deve aceitar o convite de Missão enviado por outro membro do Grupo",
                "actors": ["Membros do Grupo"],
                "basic-flux": [
                    "Membro do Grupo recebe Notificação",
                    "Membro do Grupo acessa página grupo",
                    "Membro do Grupo Aceita convite"                               
                    ],
                "alternative-flux": [
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
                "exeption flux": [
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
                "pre-conditions": [
                    "Usuário deve estar logado no sistema",
                    "Usuário deve pertencer a um grupo",
                    "Usuário deve ter recebido um convite de Missão"
                ],
                "pos-conditions": [
                    "Usuário deverá ter aceito a sua participação na Missão"
                ]
            },
            {
                "id": "04",
                "name": "Começar Missão",
                "description":"Após os Membros do Grupo terem aceito os convites de Missão a Missão deverá iniciar",
                "actors": ["Usuário", "Membro do Grupo"],
                "basic-flux": [
                    "Usuário acessa a página do grupo",
                    "Usuário visualiza detalhes da Missão",
                    "Usuário inicia Missão"                                 
                    ],
                "alternative-flux": [
                    {
                        "name": "Missão é iniciada automaticamente",
                        "flux": [
                            "Todos os Membros do Grupo aceitam a Missão",
                            "Missão é iniciada automaticamente"                                        
                        ]
                    }
                ],
                "exeption flux": [
                    {
                        "name": "Usuário sozinho no grupo",
                        "flux": [
                            "Ao convidar membros do grupo Missão é iniciada automaticamente"                                      
                        ]
                    }
                ],
                "pre-conditions": [
                    "Usuário deve estar logado no sistema",
                    "Usuário deve estar em um grupo",
                    "Usuário deve ter enviado o convite de missão"
                ],
                "pos-conditions": [
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
                "basic-flux": [
                    "Batalha de Chefão é iniciada quando a Missão inicia",
                    "Chefão aparece",
                    "Membro do Grupo faz Tarefa",
                    "Chefão perde vida",
                    "Chefão morre"                                 
                    ],
                "alternative-flux": [
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
                "exeption flux": [
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
                "pre-conditions": [
                    "Membro do Grupo deve estar logado no sistema", 
                    "Missão deve ser do tipo Batalha de Chefão"
                ],
                "pos-conditions": [
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
                "basic-flux": [
                    "Coleta de Itens é iniciada quando a Missão inicia",
                    "Requisitos para completar a missão aparecem",
                    "Membro do Grupo faz Tarefa",
                    "Membro do grupo adquire item",
                    "Membros do Grupo coletam todos os itens"                                
                    ],
                "alternative-flux": [
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
                "exeption flux": [
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
                "pre-conditions": [
                    "Membro do Grupo deve estar logado no sistema", 
                    "Missão deve ser do tipo Missão de Coleta"
                ],
                "pos-conditions": [
                    "Membros do grupo finalizam Missão",
                    "Membros do grupo recebem Recompensas",
                    "Membros do grupo recebem Medalha"
                ]
            }
        ]
    }
}
export default casos