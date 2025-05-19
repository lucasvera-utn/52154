import { Parser } from "antlr4";
import vueloVisitor from "./generated/vueloVisitor.js";
import vueloParser from "./generated/vueloParser.js";

export class CustomvueloVisitor extends vueloVisitor {
    constructor() {
        super();
        this.flightInfo = {};
    }

    visitProg(ctx) {
        // Recopilar toda la información del vuelo
        this.flightInfo.code = this.visitCodigo_vuelo(ctx.codigo_vuelo());
        this.flightInfo.from = this.visitAeropuerto(ctx.aeropuerto(0));
        this.flightInfo.to = this.visitAeropuerto(ctx.aeropuerto(1));
        this.flightInfo.time = this.visitHora(ctx.hora());
        this.flightInfo.status = this.visitEstado(ctx.estado());
        this.flightInfo.gate = this.visitPuerta(ctx.puerta());
        
        return this.flightInfo;
    }

    visitCodigo_vuelo(ctx) {
        return ctx.LETRA(0).getText() + ctx.LETRA(1).getText() + 
               ctx.DIGITO(0).getText() + ctx.DIGITO(1).getText() + ctx.DIGITO(2).getText();
    }

    visitAeropuerto(ctx) {
        return ctx.LETRA(0).getText() + ctx.LETRA(1).getText() + ctx.LETRA(2).getText();
    }

    visitHora(ctx) {
        if (ctx.HORA()) {
            return ctx.HORA().getText();
        }
        return ctx.getText(); // Para 'NOW'
    }

    visitEstado(ctx) {
        return ctx.getText();
    }

    visitPuerta(ctx) {
        return ctx.LETRA().getText() + ctx.DIGITO(0).getText() + ctx.DIGITO(1).getText();
    }
}