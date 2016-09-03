import * as IF from "interfaces";
export class RecipeCategorySummary implements IF.IRecipeCategorySummary {
    text: string;
    title: string;

    constructor(summary: IF.IRecipeCategorySummary) {
        this.text = summary.text;
        this.title = summary.title;
    }
}