class Imperio {
  private array: Array<any>;
  private dim: Number[];

  public get shape() {
    return this.dim;
  }

  public get(){
      return this.array;
  }

  private static createArray(dim: Number[], defaultValue: any): Array<any> {
    const buildArr = (dim: Number[], index: any = 0) => {
      const arr: any = dim[index] ? new Array(dim[index]).fill(0) : 0;

      for (let i = 0; i < dim[index]; i++) {
        arr[i] = buildArr(dim, index + 1);
      }

      return arr;
    };

    return buildArr(dim);
  }

  constructor(dim: Number[], defaultValue: any) {
    this.array = Imperio.createArray(dim, defaultValue);
    this.dim = dim;
  }
}
