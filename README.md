# Infoseg Qualidade — SUSPeritos

Protótipo acadêmico do Caso 1, PBL Eixo 3. Dados operacionais, notas, nomes de unidades e alertas são fictícios. Não há conexão com bases governamentais nem modelo de IA em execução.

## Publicação

https://lfguimaraes-afk.github.io/infoseg-qualidade-susperitos/

GitHub Pages: branch main, pasta raiz. Hospedagem estática com HTML, CSS e módulos JavaScript, sem etapa de build. A evolução de 23/10/2026 acrescenta a aba Analítico detalhado. O Design System gov.br Core 3.7.0, a fonte Rawline e os componentes existentes foram preservados.

## Regras preservadas

IQD-base = 0,35 × CT + 0,30 × CC + 0,20 × TM + 0,15 × CN.

CT: delegacias com envio diário / total de delegacias. CC: campos críticos válidos / campos críticos esperados. TM: boletins recebidos até 24 horas após a lavratura / boletins recebidos. CN: registros conformes / registros avaliados. CE permanece complementar. O bônus PPE/API continua a pactuar e não é aplicado ao ranking. Os fatores financeiros dos entregáveis são propostas acadêmicas, sem efeitos automáticos.

## Análise detalhada

Três UFs demonstradoras: Paraná, Bahia e Pará. Quatro municípios por UF recebem detalhamento sintético. O mapa nacional e as malhas municipais têm referência oficial IBGE; a versão cartográfica está registrada nos arquivos de cada malha. Municípios fora do recorte demonstrativo não recebem nota zero presumida.

O recorte territorial e o institucional são filtros independentes. Uma unidade pode atender mais de um município. As comparações respeitam instituição, perfil e tipo de registro. Não existe pódio único PC × PM × CBM × GM.

Os registros detalhados da Polícia Civil e o grupo residual recompõem os numeradores e denominadores estaduais originais. O IQD aprovado não é redefinido silenciosamente: o detalhe da unidade evidencia componentes e situação de envio; perfis de outras instituições não são somados ao consolidado estadual.

## Apoio à auditoria

A aba demonstra auditoria orientada por risco: o auditor define escopo e critérios; regras calculam indicadores e sinalizam exceções; IA pode apoiar triagem e sínteses em uma implementação operacional; a equipe humana valida os achados. A experiência Alice/CGU é referência metodológica em outro domínio. Não há promessa de economia quantitativa de pessoal.

Dados unitários identificados e vínculos territoriais são necessários ao aprofundamento. Um consolidado estadual não permite reconstruir unidades ausentes. Alertas da demonstração são fictícios e não constituem auditoria real.

## Uso

Servir a pasta por HTTP. O formulário do checklist mantém respostas apenas na sessão e exporta CSV; não há banco compartilhado. O botão de exportação respeita o recorte de cada aba. Nenhum documento acadêmico original ou credencial é incluído nesta publicação.

Referências visuais: https://www.gov.br/ds/home e https://www.gov.br/conecta/catalogo/.
