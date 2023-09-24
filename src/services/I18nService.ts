
class I18nService {

  public static tokens_pt_br: Record<string, string> = {
    suggestion: "Sugestão",
    suggestions: "Sugestões",
    criticism: "Crítica",
    criticisms: "Críticas",
    praise: "Elogio",
    praises: "Elogios",
    size: "Tamanho",
    
    none: "Nenhum",
    administrator: "Administrador",
    customer: "Cliente",

    homepage: "Inicio",
    loggeduser: "Usuário Logado",
    serveraddress: "Endereço do Servidor",

    message: "Mensagem",
    messageform: "Formulário de Mensagem",
    messagesent: "A Mensagem foi enviada com sucesso.",

    send: "Enviar",

    menusendmessage: "Enviar Mensagem",
    menulistmessages: "Listar Mensagens",
    menuconsumemessage: "Consumir Mensagens",
    selectOption: "Selecionar Opção",
    loggedout: "Sem Sessão",
  };

  static translate = (token: string, options: any = {}) => {
    let finalToken = token.toLowerCase();
    if (options.plural) finalToken += "s";
    return this.tokens_pt_br?.[finalToken] || finalToken;
  };

}
export default I18nService;

