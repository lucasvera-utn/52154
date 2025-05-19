import vueloListener from "./generated/vueloListener.js";
import vueloParser from "./generated/vueloParser.js";

export class CustomvueloListener extends vueloListener {
    constructor() {
        super();
        this.lexemeTable = [];
    }

    enterEveryRule(ctx) {
        // Capturar tokens y lexemas para la tabla
        if (ctx.children) {
            ctx.children.forEach(child => {
                if (child.symbol) {
                    this.lexemeTable.push({
                        lexeme: child.getText(),
                        token: vueloParser.symbolicNames[child.symbol.type] || child.symbol.text
                    });
                }
            });
        }
    }

    getLexemeTable() {
        return this.lexemeTable;
    }
}