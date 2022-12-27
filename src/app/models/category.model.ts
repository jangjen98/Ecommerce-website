export class Category {
    public name: string;
     public textFont: string;
     public textSize: string;
     public textWeight: number;

    constructor(name: string, textFont: string, textSize: string, textWeight: number){
        this.name = name;
        this.textFont = textFont;
        this.textSize = textSize;
        this.textWeight = textWeight;
    }
}
