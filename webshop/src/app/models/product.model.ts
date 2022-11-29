
export class Product {
  constructor(
    public id: number,
    public name: string,
    public price: number,
    public image: string,
    public category: string,
    public description: string,
    public active: boolean
  ) {}
}