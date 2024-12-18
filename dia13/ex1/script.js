class Computador{
    Tipo
    Processador
    Video
    Armazenamento
    MemoriaRam
    SSD
    constructor(Tipo, Processador, Video, Armazenamento, MemoriaRam, SSD){
        this.Tipo = Tipo
        this.Processador = Processador
        this.Video = Video
        this.Armazenamento = Armazenamento
        this.MemoriaRam = MemoriaRam
        this.SSD = SSD
    }

    exibir(){
        console.log(`Tipo: ${this.Tipo}`)
        console.log(`Processador: ${this.Processador}`)
        console.log(`Video: ${this.Video}`)
        console.log(`Armazenamento: ${this.Armazenamento}`)
        console.log(`Memoria RAM: ${this.MemoriaRam}`)
        console.log(`SSD: ${this.SSD}`)
    }
}

const meuPC = new Computador("Notebook", "Intel I5 14°gen", "Dedicado", 512, 16, true)
meuPC.exibir()