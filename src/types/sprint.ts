export default class Sprint {
    private nome: string;
    private data: Date;
    private id: number;

    constructor(nome: string, data: Date, id: number) {
        this.nome = nome;
        this.data = data;
        this.id = id;
    }

    get getNome(){
        return this.nome
    }

    get getData(){
        return this.data;
    }

    get getId(){
        return this.id;
    }
}