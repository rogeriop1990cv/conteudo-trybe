export default class Tv {
  private brand: string;
  private size: number;
  private resolution: number[];
  private connections: string[];
  private _connectedTo: string = '';

  constructor(brand: string, size: number, resolution: number[], connections: string[]) {
    this.brand = brand;
    this.size = size;
    this.resolution = resolution;
    this.connections = connections;
  }
  turnOn(): void {
    console.log(`    Marca: ${this.brand}
    Tamanha do tela em polegadas: ${this.size}
    Resolução da tela: ${this.resolution.join(' x ')}
    Tipos de conexões: ${this.connections}
    `);
  };

  set connectedTo(tipoConnect: string) {
    if (this.connections.includes(tipoConnect)) this._connectedTo = tipoConnect
  }

  get connectedTo(): string {
    return this._connectedTo;
  }
}
const tv: Tv = new Tv('cce', 23, [1080, 1200], ['Av'])
tv.connectedTo
tv.connectedTo = 'oi'
tv.connectedTo
console.log(tv)
