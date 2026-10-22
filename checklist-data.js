// Conteúdo dos entregáveis finais; sem dados pessoais ou registros operacionais.
export const checklistContent = {
  "fonte": "Protótipo de Auditabilidade e Anexo de Checklist - SUSPeritos.docx",
  "versao_fonte": "20/10/2026",
  "fases": [
    {
      "id": 1,
      "titulo": "Fase 1: Preparação e Análise Preliminar (Off-site / Diagnóstico de Entrada)",
      "source_paragraph_id": 95
    },
    {
      "id": 2,
      "titulo": "Fase 2: Auditoria de Ingestão e Cobertura Efetiva (Qualidade da Carga na BNBO)",
      "source_paragraph_id": 130
    },
    {
      "id": 3,
      "titulo": "Fase 3: Auditoria de Acesso, Uso Operacional e Rastreabilidade (Sinesp Infoseg / LGPD)",
      "source_paragraph_id": 166
    },
    {
      "id": 4,
      "titulo": "Fase 4: Auditoria de Infraestrutura, Suporte e Interoperabilidade Externa",
      "source_paragraph_id": 201
    },
    {
      "id": 5,
      "titulo": "Fase 5: Consolidação dos Achados, Notificação e Enquadramento em Incentivos/PAI",
      "source_paragraph_id": 223
    }
  ],
  "itens": [
    {
      "id": "1.1",
      "fase": 1,
      "titulo": "Extração de Logs no Sinesp-Auditoria",
      "acao": "Gerar o relatório histórico de remessa, latência de transmissão e registro de acessos da UF no período auditado.",
      "criterio": "Relatório gerado sem lacunas de dados.",
      "titulo_literal": "1.1 - Extração de Logs no Sinesp-Auditoria",
      "acao_literal": "• Ação de Verificação: Gerar o relatório histórico de remessa, latência de transmissão e registro de acessos da UF no período auditado.",
      "criterio_literal": "• Critério / Métrica de Conformidade: Relatório gerado sem lacunas de dados.",
      "source_paragraph_ids": [
        96,
        97,
        98
      ]
    },
    {
      "id": "1.2",
      "fase": 1,
      "titulo": "Mapeamento de Instrumentos Vigentes",
      "acao": "Verificar a vigência do Termo de Adesão e Acordos de Cooperação Técnica (ACTs) celebrados com o MJSP.",
      "criterio": "ACTs e Termos vigentes e publicados.",
      "titulo_literal": "1.2 - Mapeamento de Instrumentos Vigentes",
      "acao_literal": "• Ação de Verificação: Verificar a vigência do Termo de Adesão e Acordos de Cooperação Técnica (ACTs) celebrados com o MJSP.",
      "criterio_literal": "• Critério / Métrica de Conformidade: ACTs e Termos vigentes e publicados.",
      "source_paragraph_ids": [
        103,
        104,
        105
      ]
    },
    {
      "id": "1.3",
      "fase": 1,
      "titulo": "Coleta da Declaração Diária de BOs",
      "acao": "Obter o relatório oficial com o quantitativo total de BOs lavrados informado diariamente pelo gestor da UF.",
      "criterio": "Declarações diárias enviadas regularmente.",
      "titulo_literal": "1.3 - Coleta da Declaração Diária de BOs",
      "acao_literal": "• Ação de Verificação: Obter o relatório oficial com o quantitativo total de BOs lavrados informado diariamente pelo gestor da UF.",
      "criterio_literal": "• Critério / Métrica de Conformidade: Declarações diárias enviadas regularmente.",
      "source_paragraph_ids": [
        110,
        111,
        112
      ]
    },
    {
      "id": "1.4",
      "fase": 1,
      "titulo": "Consulta ao Histórico do IQD",
      "acao": "Verificar a nota da UF nos últimos dois quadrimestres no Painel Público da Qualidade dos Dados.",
      "criterio": "Identificação da faixa (Ouro, Prata, Bronze, Crítico).",
      "titulo_literal": "1.4 - Consulta ao Histórico do IQD",
      "acao_literal": "• Ação de Verificação: Verificar a nota da UF nos últimos dois quadrimestres no Painel Público da Qualidade dos Dados.",
      "criterio_literal": "• Critério / Métrica de Conformidade: Identificação da faixa (Ouro, Prata, Bronze, Crítico).",
      "source_paragraph_ids": [
        117,
        118,
        119
      ]
    },
    {
      "id": "1.5",
      "fase": 1,
      "titulo": "Inventário de Credenciais Ativas",
      "acao": "Extrair a listagem de usuários cadastrados no Sinesp-Segurança por órgão, cargo e perfil atribuído.",
      "criterio": "Listagem atualizada e compatível com o quadro.",
      "titulo_literal": "1.5 - Inventário de Credenciais Ativas",
      "acao_literal": "• Ação de Verificação: Extrair a listagem de usuários cadastrados no Sinesp-Segurança por órgão, cargo e perfil atribuído.",
      "criterio_literal": "• Critério / Métrica de Conformidade: Listagem atualizada e compatível com o quadro.",
      "source_paragraph_ids": [
        124,
        125,
        126
      ]
    },
    {
      "id": "2.1",
      "fase": 2,
      "titulo": "Teste de Cobertura Territorial Integral",
      "acao": "Confrontar a lista de delegacias/unidades ativas da UF com as que transmitiram BOs.",
      "criterio": "100% das unidades policiais ativas transmitindo de modo diário e automatizado.",
      "titulo_literal": "2.1 - Teste de Cobertura Territorial Integral",
      "acao_literal": "Ação de Verificação: Confrontar a lista de delegacias/unidades ativas da UF com as que transmitiram BOs.",
      "criterio_literal": "Critério / Métrica de Conformidade: 100% das unidades policiais ativas transmitindo de modo diário e automatizado.",
      "source_paragraph_ids": [
        131,
        132,
        133
      ]
    },
    {
      "id": "2.2",
      "fase": 2,
      "titulo": "Confronto de Volumetria (Cobertura Efetiva)",
      "acao": "Calcular: Cobertura Efetiva = (BOs Recebidos / BOs Declarados) x 100. Checar se há salteamento na numeração sequencial dos BOs.",
      "criterio": "Índice de Cobertura Efetiva >= 98% e ausência de lacunas numéricas.",
      "titulo_literal": "2.2 - Confronto de Volumetria (Cobertura Efetiva)",
      "acao_literal": "• Ação de Verificação: Calcular: Cobertura Efetiva = (BOs Recebidos / BOs Declarados) x 100. Checar se há salteamento na numeração sequencial dos BOs.",
      "criterio_literal": "• Critério / Métrica de Conformidade: Índice de Cobertura Efetiva >= 98% e ausência de lacunas numéricas.",
      "source_paragraph_ids": [
        138,
        139,
        140
      ]
    },
    {
      "id": "2.3",
      "fase": 2,
      "titulo": "Amostragem de Completude de Campos Críticos",
      "acao": "Verificar amostra de registros para identificar valores nulos ou preenchidos genericamente como “não informado” em campos obrigatórios.",
      "criterio": ">= 90% dos campos obrigatórios preenchidos com dados válidos.",
      "titulo_literal": "2.3 - Amostragem de Completude de Campos Críticos",
      "acao_literal": "• Ação de Verificação: Verificar amostra de registros para identificar valores nulos ou preenchidos genericamente como “não informado” em campos obrigatórios.",
      "criterio_literal": "• Critério / Métrica de Conformidade: >= 90% dos campos obrigatórios preenchidos com dados válidos.",
      "source_paragraph_ids": [
        145,
        146,
        147
      ]
    },
    {
      "id": "2.4",
      "fase": 2,
      "titulo": "Auditabilidade do Mapeamento De/Para",
      "acao": "Testar a aderência das tabelas estaduais ao Dicionário Corporativo do Consinesp e checar o relatório de erros sintáticos do barramento.",
      "criterio": "Taxa de rejeição por falha sintática < 5% dos registros.",
      "titulo_literal": "2.4 - Auditabilidade do Mapeamento De/Para",
      "acao_literal": "• Ação de Verificação: Testar a aderência das tabelas estaduais ao Dicionário Corporativo do Consinesp e checar o relatório de erros sintáticos do barramento.",
      "criterio_literal": "• Critério / Métrica de Conformidade: Taxa de rejeição por falha sintática < 5% dos registros.",
      "source_paragraph_ids": [
        152,
        153,
        154
      ]
    },
    {
      "id": "2.5",
      "fase": 2,
      "titulo": "Inspeção de Texto Livre e Uso de IA",
      "acao": "Checar se dados vitais estão retidos na narrativa em texto livre e verificar se a IA opera com prompts conservadores e dados segregados.",
      "criterio": "Dados inferidos por IA segregados até validação amostral humana.",
      "titulo_literal": "2.5 - Inspeção de Texto Livre e Uso de IA",
      "acao_literal": "• Ação de Verificação: Checar se dados vitais estão retidos na narrativa em texto livre e verificar se a IA opera com prompts conservadores e dados segregados.",
      "criterio_literal": "• Critério / Métrica de Conformidade: Dados inferidos por IA segregados até validação amostral humana.",
      "source_paragraph_ids": [
        159,
        160,
        161
      ]
    },
    {
      "id": "3.1",
      "fase": 3,
      "titulo": "Verificação de Controle RBAC",
      "acao": "Confirmar se os perfis de acesso atribuídos aos usuários em campo atendem à atribuição legal do cargo (princípio da necessidade de conhecer).",
      "criterio": "Perfis estritamente compatíveis com as funções legais.",
      "titulo_literal": "3.1 - Verificação de Controle RBAC",
      "acao_literal": "• Ação de Verificação: Confirmar se os perfis de acesso atribuídos aos usuários em campo atendem à atribuição legal do cargo (princípio da necessidade de conhecer).",
      "criterio_literal": "• Critério / Métrica de Conformidade: Perfis estritamente compatíveis com as funções legais.",
      "source_paragraph_ids": [
        167,
        168,
        169
      ]
    },
    {
      "id": "3.2",
      "fase": 3,
      "titulo": "Exame da Trilha de Auditoria Individualizada",
      "acao": "Verificar se 100% dos logs contêm: CPF, órgão, data/hora, módulo, procedimento vinculado e a finalidade declarada expressa.",
      "criterio": "100% dos registros de logs com metadados obrigatórios.",
      "titulo_literal": "3.2 - Exame da Trilha de Auditoria Individualizada",
      "acao_literal": "• Ação de Verificação: Verificar se 100% dos logs contêm: CPF, órgão, data/hora, módulo, procedimento vinculado e a finalidade declarada expressa.",
      "criterio_literal": "• Critério / Métrica de Conformidade: 100% dos registros de logs com metadados obrigatórios.",
      "source_paragraph_ids": [
        174,
        175,
        176
      ]
    },
    {
      "id": "3.3",
      "fase": 3,
      "titulo": "Teste de Pertinência da Finalidade Declarada",
      "acao": "Solicitar amostragem documental que comprove a existência do procedimento ou ordem de serviço que motivou as consultas.",
      "criterio": "Comprovação documental válida para todas as consultas da amostra.",
      "titulo_literal": "3.3 - Teste de Pertinência da Finalidade Declarada",
      "acao_literal": "• Ação de Verificação: Solicitar amostragem documental que comprove a existência do procedimento ou ordem de serviço que motivou as consultas.",
      "criterio_literal": "• Critério / Métrica de Conformidade: Comprovação documental válida para todas as consultas da amostra.",
      "source_paragraph_ids": [
        181,
        182,
        183
      ]
    },
    {
      "id": "3.4",
      "fase": 3,
      "titulo": "Rastreamento de Anomalias e Extração Massiva",
      "acao": "Varrer logs em busca de padrões de robôs (crawlers), pesquisas em lote não autorizadas ou consultas fora do horário de serviço sem justificativa.",
      "criterio": "Ausência de padrões de extração massiva ou consultas atípicas.",
      "titulo_literal": "3.4 - Rastreamento de Anomalias e Extração Massiva",
      "acao_literal": "• Ação de Verificação: Varrer logs em busca de padrões de robôs (crawlers), pesquisas em lote não autorizadas ou consultas fora do horário de serviço sem justificativa.",
      "criterio_literal": "• Critério / Métrica de Conformidade: Ausência de padrões de extração massiva ou consultas atípicas.",
      "source_paragraph_ids": [
        188,
        189,
        190
      ]
    },
    {
      "id": "3.5",
      "fase": 3,
      "titulo": "Conformidade com as Normas da LGPD",
      "acao": "Confirmar se o tratamento de dados atende às finalidades exclusivas de segurança pública (art. 4º, III da LGPD) e se há RIPD elaborado.",
      "criterio": "RIPD aprovado para operações de alto impacto.",
      "titulo_literal": "3.5 - Conformidade com as Normas da LGPD",
      "acao_literal": "• Ação de Verificação: Confirmar se o tratamento de dados atende às finalidades exclusivas de segurança pública (art. 4º, III da LGPD) e se há RIPD elaborado.",
      "criterio_literal": "• Critério / Métrica de Conformidade: RIPD aprovado para operações de alto impacto.",
      "source_paragraph_ids": [
        195,
        196,
        197
      ]
    },
    {
      "id": "4.1",
      "fase": 4,
      "titulo": "Avaliação de Cotas e Desempenho no Sinesp-DaaS",
      "acao": "Medir o tempo de resposta das consultas na infraestrutura do Serpro e verificar se a UF atingiu o teto contratual de cotas.",
      "criterio": "SLA de resposta adequado e cota não estourada.",
      "titulo_literal": "4.1 - Avaliação de Cotas e Desempenho no Sinesp-DaaS",
      "acao_literal": "• Ação de Verificação: Medir o tempo de resposta das consultas na infraestrutura do Serpro e verificar se a UF atingiu o teto contratual de cotas.",
      "criterio_literal": "• Critério / Métrica de Conformidade: SLA de resposta adequado e cota não estourada.",
      "source_paragraph_ids": [
        202,
        203,
        204
      ]
    },
    {
      "id": "4.2",
      "fase": 4,
      "titulo": "Interoperabilidade com Bases Estruturantes",
      "acao": "Testar o funcionamento das APIs com ABIS (biometria/PF), Sinarm/Sigma (armas), BNMP 3.0 (CNJ), Córtex e bases cívicas (TSE/Senatran).",
      "criterio": "APIs federais ativas e com troca automatizada em tempo real.",
      "titulo_literal": "4.2 - Interoperabilidade com Bases Estruturantes",
      "acao_literal": "• Ação de Verificação: Testar o funcionamento das APIs com ABIS (biometria/PF), Sinarm/Sigma (armas), BNMP 3.0 (CNJ), Córtex e bases cívicas (TSE/Senatran).",
      "criterio_literal": "• Critério / Métrica de Conformidade: APIs federais ativas e com troca automatizada em tempo real.",
      "source_paragraph_ids": [
        209,
        210,
        211
      ]
    },
    {
      "id": "4.3",
      "fase": 4,
      "titulo": "Retorno em Reciprocidade de Valor",
      "acao": "Confirmar se a UF adimplente recebe regularmente a réplica/espelho de sua base local, relatórios do Sinesp-DW e suporte técnico.",
      "criterio": "Entregas não financeiras realizadas à UF.",
      "titulo_literal": "4.3 - Retorno em Reciprocidade de Valor",
      "acao_literal": "• Ação de Verificação: Confirmar se a UF adimplente recebe regularmente a réplica/espelho de sua base local, relatórios do Sinesp-DW e suporte técnico.",
      "criterio_literal": "• Critério / Métrica de Conformidade: Entregas não financeiras realizadas à UF.",
      "source_paragraph_ids": [
        216,
        217,
        218
      ]
    },
    {
      "id": "5.1",
      "fase": 5,
      "titulo": "Cálculo e Apuração da Nota do IQD",
      "acao": "Aplicar a fórmula: IQD = (0,35 x CT) + (0,30 x CC) + (0,20 x TM) + (0,15 x CN) e enquadrar a UF em Selo Ouro, Prata, Bronze ou Crítico.",
      "criterio": "Nota do IQD calculada e registrada formalmente.",
      "titulo_literal": "5.1 - Cálculo e Apuração da Nota do IQD",
      "acao_literal": "• Ação de Verificação: Aplicar a fórmula: IQD = (0,35 x CT) + (0,30 x CC) + (0,20 x TM) + (0,15 x CN) e enquadrar a UF em Selo Ouro, Prata, Bronze ou Crítico.",
      "criterio_literal": "• Critério / Métrica de Conformidade: Nota do IQD calculada e registrada formalmente.",
      "source_paragraph_ids": [
        224,
        225,
        226
      ]
    },
    {
      "id": "5.2",
      "fase": 5,
      "titulo": "Verificação dos Gatilhos do PAI",
      "acao": "Checar ocorrência dos gatilhos:  ☐  IQD < 60 por 2 quadrimestres   ☐  Cobertura < 80%   ☐  Nulos > 30%   ☐  Latência > 72h   ☐  Rejeição De/Para > 15%.  ",
      "criterio": "Identificação de gatilhos para abertura de PAI.",
      "titulo_literal": "5.2 - Verificação dos Gatilhos do PAI",
      "acao_literal": "• Ação de Verificação: Checar ocorrência dos gatilhos:  ☐  IQD < 60 por 2 quadrimestres   ☐  Cobertura < 80%   ☐  Nulos > 30%   ☐  Latência > 72h   ☐  Rejeição De/Para > 15%.  ",
      "criterio_literal": "• Critério / Métrica de Conformidade: Identificação de gatilhos para abertura de PAI.",
      "source_paragraph_ids": [
        231,
        232,
        233
      ]
    },
    {
      "id": "5.3",
      "fase": 5,
      "titulo": "Emissão do Relatório e Encaminhamentos",
      "acao": "Elaborar o Relatório Final de Auditoria, notificar o gestor para PAI ou, em caso de recusa deliberada, acionar a suspensão do FNSP.",
      "criterio": "Relatório conclusivo emitido com os devidos encaminhamentos.",
      "titulo_literal": "5.3 - Emissão do Relatório e Encaminhamentos",
      "acao_literal": "• Ação de Verificação: Elaborar o Relatório Final de Auditoria, notificar o gestor para PAI ou, em caso de recusa deliberada, acionar a suspensão do FNSP.",
      "criterio_literal": "• Critério / Métrica de Conformidade: Relatório conclusivo emitido com os devidos encaminhamentos.",
      "source_paragraph_ids": [
        238,
        239,
        240
      ]
    }
  ],
  "processo": [
    {
      "id": 1,
      "titulo": "Registro e Logs na Origem",
      "acao": "Geração e gravação obrigatória de logs de criação, alteração ou exclusão de registros com identificação do autor.",
      "responsaveis": "Serpro e Unidades Federativas (UFs), por meio de órgãos como Secretarias de Segurança Pública, Polícias",
      "fundamento": "Art. 4º, V e Art. 19 da Portaria MJSP 1.248/2026",
      "titulo_literal": "Etapa do Processo: 1. Registro e Logs na Origem",
      "source_paragraph_ids": [
        24,
        25,
        26,
        27
      ]
    },
    {
      "id": 2,
      "titulo": "Validação e Travas de Ingestão",
      "acao": "Execução de filtros automatizados no barramento que notificam ou rejeitam dados com falhas sintáticas ou nulos.",
      "responsaveis": "CG Sinesp / DGI / SENASP e Serpro",
      "fundamento": "Art. 11, I e Art. 25, §1º da Portaria 1.248/2026",
      "titulo_literal": "Etapa do Processo: 2. Validação e Travas de Ingestão",
      "source_paragraph_ids": [
        29,
        30,
        31,
        32
      ]
    },
    {
      "id": 3,
      "titulo": "Aferição de Cobertura Efetiva",
      "acao": "Confronto diário entre a Declaração de BOs Lavrados na UF e o volume recepcionado na Base Nacional (BNBO).",
      "responsaveis": "DGI / SENASP e Pontos Focais Estaduais",
      "fundamento": "Acórdão TCU 999/2026 e Art. 36 da Lei 13.675/2018",
      "titulo_literal": "Etapa do Processo: 3. Aferição de Cobertura Efetiva",
      "source_paragraph_ids": [
        34,
        35,
        36,
        37
      ]
    },
    {
      "id": 4,
      "titulo": "Extração de Texto Livre por IA",
      "acao": "Aplicação de IA, com supervisão humana, nas narrativas policiais para auditar e recuperar dados vitais não estruturados.",
      "responsaveis": "CGGI / DGI / SENASP e Serpro",
      "fundamento": "Item 9.1.3 do Acórdão TCU 999/2026",
      "titulo_literal": "Etapa do Processo: 4. Extração de Texto Livre por IA",
      "source_paragraph_ids": [
        39,
        40,
        41,
        42
      ]
    },
    {
      "id": 5,
      "titulo": "Transparência Ativa e Painel Público",
      "acao": "Publicação contínua de painel aberto com indicadores de completude e tempestividade por UF.",
      "responsaveis": "DGI / SENASP",
      "fundamento": "Art. 8º da LAI e Item 9.1.1 do Acórdão TCU 999/2026",
      "titulo_literal": "Etapa do Processo: 5. Transparência Ativa e Painel Público",
      "source_paragraph_ids": [
        44,
        45,
        46,
        47
      ]
    },
    {
      "id": 6,
      "titulo": "Inspeção Ordinária e Extraordinária",
      "acao": "Auditoria nos logs de consultas (Infoseg) para verificar a pertinência e a finalidade declarada do acesso.",
      "responsaveis": "DGI / SENASP e DPO / MJSP",
      "fundamento": "Art. 25 da Portaria 1.248/2026 e Res. Consinesp 1/2021",
      "titulo_literal": "Etapa do Processo: 6. Inspeção Ordinária e Extraordinária",
      "source_paragraph_ids": [
        49,
        50,
        51,
        52
      ]
    },
    {
      "id": 7,
      "titulo": "Fiscalização Externa e Integridade",
      "acao": "Auditoria independente sobre a aplicação dos recursos do FNSP e regularidade do banco nacional.",
      "responsaveis": "TCU, TCEs (Rede Integrar) e ANPD",
      "fundamento": "Lei 13.756/2018, LGPD e Acórdão TCU 999/2026",
      "titulo_literal": "Etapa do Processo: 7. Fiscalização Externa e Integridade",
      "source_paragraph_ids": [
        54,
        55,
        56,
        57
      ]
    }
  ],
  "protocolo": [
    {
      "id": 1,
      "titulo": "Planejamento e Delimitação do Escopo",
      "descricao": "Definir o objeto da auditoria (Ingestão/BNBO, Consultas/Infoseg ou LGPD), revisar os Acordos de Cooperação Técnica (ACTs) vigentes e extrair a linha de base histórica do ente no módulo Sinesp-Auditoria.",
      "titulo_literal": "Etapa 1 — Planejamento e Delimitação do Escopo:",
      "source_paragraph_ids": [
        70,
        71
      ]
    },
    {
      "id": 2,
      "titulo": "Auditoria da Ingestão e Cobertura Efetiva",
      "descricao": "Verificar se 100% das delegacias do estado estão transmitindo os dados diariamente. Confrontar o volume recebido com a Declaração Diária de BOs e realizar amostragem de completude dos campos obrigatórios e da taxonomia.",
      "titulo_literal": "Etapa 2 — Auditoria da Ingestão e Cobertura Efetiva:",
      "source_paragraph_ids": [
        73,
        74
      ]
    },
    {
      "id": 3,
      "titulo": "Auditoria de Acesso, Uso e Segurança (Infoseg/LGPD)",
      "descricao": "Gerar amostragem de logs de consultas operacionais. Verificar se os acessos foram realizados por usuários ativos no Sinesp-Segurança, com perfil RBAC adequado, e checar a comprovação documental da finalidade declarada.",
      "titulo_literal": "Etapa 3 — Auditoria de Acesso, Uso e Segurança (Infoseg/LGPD):",
      "source_paragraph_ids": [
        76,
        77
      ]
    },
    {
      "id": 4,
      "titulo": "Consolidação dos Achados e Contraditório",
      "descricao": "Emitir o Relatório Preliminar de Auditoria. Notificar o gestor estadual para apresentar justificativas no prazo regulamentar. Caso detectada nota do IQD < 60 ou omissão de delegacias, instaurar o PAI com socorro técnico itinerante.",
      "titulo_literal": "Etapa 4 — Consolidação dos Achados e Contraditório:",
      "source_paragraph_ids": [
        79,
        80
      ]
    },
    {
      "id": 5,
      "titulo": "Monitoramento e Encaminhamentos Sancionatórios",
      "descricao": "Acompanhar a execução das correções do PAI. Constatado uso indevido ou vazamento, efetuar o bloqueio preventivo imediato de acessos. Caso persista descumprimento injustificado na ingestão de dados, suspender os repasses do FNSP (art. 37, § 2º da Lei 13.675/2018).",
      "titulo_literal": "Etapa 5 — Monitoramento e Encaminhamentos Sancionatórios:",
      "source_paragraph_ids": [
        82,
        83
      ]
    }
  ],
  "instrumentos": [
    {
      "id": 1,
      "titulo": "Sinesp-Auditoria",
      "descricao": "Módulo computacional nativo da plataforma Sinesp especializado na extração, cruzamento e geração de relatórios de auditoria a partir dos logs de todas as soluções integradas.",
      "texto_literal": "• Sinesp-Auditoria: Módulo computacional nativo da plataforma Sinesp especializado na extração, cruzamento e geração de relatórios de auditoria a partir dos logs de todas as soluções integradas.",
      "source_paragraph_id": 60
    },
    {
      "id": 2,
      "titulo": "Matriz de Acesso RBAC (Role-Based Access Control)",
      "descricao": "Normativo aprovado pelo Consinesp que estabelece os perfis funcionais, níveis de sensibilidade da informação e o princípio da “necessidade de conhecer”.",
      "texto_literal": "• Matriz de Acesso RBAC (Role-Based Access Control): Normativo aprovado pelo Consinesp que estabelece os perfis funcionais, níveis de sensibilidade da informação e o princípio da “necessidade de conhecer”.",
      "source_paragraph_id": 61
    },
    {
      "id": 3,
      "titulo": "Trilha de Auditoria Padronizada",
      "descricao": "Estrutura técnica de logs contendo obrigatoriamente CPF do usuário, órgão de origem, data/hora/fuso horário, serviço acessado, procedimento vinculado e a finalidade declarada expressa.",
      "texto_literal": "• Trilha de Auditoria Padronizada: Estrutura técnica de logs contendo obrigatoriamente CPF do usuário, órgão de origem, data/hora/fuso horário, serviço acessado, procedimento vinculado e a finalidade declarada expressa.",
      "source_paragraph_id": 62
    },
    {
      "id": 4,
      "titulo": "Painel Público da Qualidade dos Dados por UF",
      "descricao": "Portal de transparência ativa que divulga a Cobertura Efetiva, Completude de Campos, Tempestividade e Taxa de Erro de Validação por estado.",
      "texto_literal": "• Painel Público da Qualidade dos Dados por UF: Portal de transparência ativa que divulga a Cobertura Efetiva, Completude de Campos, Tempestividade e Taxa de Erro de Validação por estado.",
      "source_paragraph_id": 63
    },
    {
      "id": 5,
      "titulo": "Declaração Diária de Ocorrências",
      "descricao": "Mecanismo pelo qual o gestor estadual reporta diariamente o quantitativo total de BOs lavrados no sistema local, fornecendo o denominador real de auditoria.",
      "texto_literal": "• Declaração Diária de Ocorrências: Mecanismo pelo qual o gestor estadual reporta diariamente o quantitativo total de BOs lavrados no sistema local, fornecendo o denominador real de auditoria.",
      "source_paragraph_id": 64
    },
    {
      "id": 6,
      "titulo": "Plano de Aprimoramento Individualizado (PAI)",
      "descricao": "Instrumento de pactuação para saneamento de falhas em UFs, notificadas por baixo Índice de Qualidade do Dado (IQD) antes de bloqueios no FNSP.",
      "texto_literal": "• Plano de Aprimoramento Individualizado (PAI): Instrumento de pactuação para saneamento de falhas em UFs, notificadas por baixo Índice de Qualidade do Dado (IQD) antes de bloqueios no FNSP.",
      "source_paragraph_id": 65
    },
    {
      "id": 7,
      "titulo": "Relatório de Impacto à Proteção de Dados (RIPD)",
      "descricao": "Documento elaborado com o Encarregado de Dados (DPO/MJSP) para mensurar e mitigar riscos em integrações de alto impacto ou uso de biometria.",
      "texto_literal": "• Relatório de Impacto à Proteção de Dados (RIPD): Documento elaborado com o Encarregado de Dados (DPO/MJSP) para mensurar e mitigar riscos em integrações de alto impacto ou uso de biometria.",
      "source_paragraph_id": 66
    }
  ],
  "opcoes_resultado": [
    "Conforme",
    "Não conforme",
    "Não se aplica",
    "Não aferido"
  ],
  "campos_adicionais": [
    "Evidência / observações"
  ]
};
