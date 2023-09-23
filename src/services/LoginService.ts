
class LoginService {

  public static userRoles = ["administrator", "customer"];

  private static loggedUser = "administrator";

  // Função para alterar o login atual
  static loginAs = (role: string) => {
    return this.loggedUser = role;
  };

  static getLogin = () :string => this.loggedUser;

  // Other methods...
}
export default LoginService;

