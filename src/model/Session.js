export default class Session{

    constructor(email, password, tarjetaDeCredito, nombre, apellido, esAdmin, cvu) {
        this.email = email;
        this.password = password;
        this.tarjetaDeCredito = tarjetaDeCredito;
        this.nombre = nombre;
        this.apellido = apellido;
        this.esAdmin = esAdmin;
        this.cvu = cvu;
    }

}